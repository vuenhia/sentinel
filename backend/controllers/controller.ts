import type { Request, Response } from "express";
import { pool } from "../db";

export const getEndpoints = async (req: Request, res: Response) => {
	try {
		const result = await pool.query(
			"SELECT id, url, name, status, latency, created_at FROM endpoints ORDER BY id",
		);
		res.json(result.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch endpoints" });
	}
};

export const createEndpoint = async (req: Request, res: Response) => {
	const { url, name } = req.body;

	if (!url || !name) {
		res.status(400).json({ error: "url and name are required" });
		return;
	}

	try {
		const result = await pool.query(
			"INSERT INTO endpoints (url, name) VALUES ($1, $2) RETURNING *",
			[url, name],
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to create endpoint" });
	}
};

export const updateEndpoint = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id)) {
		res.status(400).json({ error: "id must be a number" });
		return;
	}

	const { url, name } = req.body;

	if (!url || !name) {
		res.status(400).json({ error: "url and name are required" });
		return;
	}

	try {
		const result = await pool.query(
			"UPDATE endpoints SET url = $1, name = $2 WHERE id = $3 RETURNING *",
			[url, name, id],
		);

		if (result.rowCount === 0) {
			res.status(404).json({ error: "Endpoint not found" });
			return;
		}

		res.json(result.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to update endpoint" });
	}
};

export const deleteEndpoint = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id)) {
		res.status(400).json({ error: "id must be a number" });
		return;
	}

	try {
		const result = await pool.query("DELETE FROM endpoints WHERE id = $1", [
			id,
		]);

		if (result.rowCount === 0) {
			res.status(404).json({ error: "Endpoint not found" });
			return;
		}

		res.status(204).send();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to delete endpoint" });
	}
};

export const checkEndpoint = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id)) {
		res.status(400).json({ error: "id must be a number" });
		return;
	}

	try {
		const found = await pool.query("SELECT url FROM endpoints WHERE id = $1", [
			id,
		]);

		if (found.rowCount === 0) {
			res.status(404).json({ error: "Endpoint not found" });
			return;
		}

		const url = found.rows[0].url;
		const start = Date.now();
		let status = "Down";

		try {
			const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
			if (response.ok) {
				status = "Up";
			}
		} catch {
			status = "Down";
		}

		const latency = status === "Up" ? Date.now() - start : null;

		const updated = await pool.query(
			"UPDATE endpoints SET status = $1, latency = $2 WHERE id = $3 RETURNING *",
			[status, latency, id],
		);

		res.json(updated.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to check endpoint" });
	}
};
