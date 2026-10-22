import type { Request, Response } from "express";
import { pool } from "../db";

export const getEndpoints = async (req: Request, res: Response) => {
	try {
		const result = await pool.query("SELECT * FROM endpoints ORDER BY id");
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

export const deleteEndpoint = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const result = await pool.query(
			"DELETE FROM endpoints WHERE id = $1 RETURNING *",
			[id],
		);

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

export const updateEndpoint = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id)) {
		res.status(400).json({ error: "id must be a number" });
		return;
	}

	const { url } = req.body;

	if (!url) {
		res.status(400).json({ error: "url is required" });
		return;
	}

	try {
		const result = await pool.query(
			"UPDATE endpoints SET url = $1 WHERE id = $2 RETURNING *",
			[url, id],
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
