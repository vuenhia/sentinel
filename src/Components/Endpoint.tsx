import EndpointHeader from "./EndpointHeader";
import EndpointList from "./EndpointList";
import { useEffect, useState } from "react";
import type { APIEndpoint } from "../types";

const API_URL = "http://localhost:3000/endpoints";

export default function Endpoint() {
	const [apiUrl, setApiUrl] = useState("");
	const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
	const [name, setName] = useState("");

	useEffect(() => {
		const getEndpoint = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				const data = await response.json();
				setEndpoints(data);
			} catch (error) {
				console.log("Error", error);
			}
		};
		getEndpoint();
	}, []);

	const handleClick = async () => {
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url: apiUrl, name: name }),
			});

			if (!response.ok) {
				throw new Error("Failed to add");
			}

			const created = await response.json();
			setEndpoints((prev) => [...prev, created]);
			setApiUrl("");
			setName("");
		} catch (error) {
			console.log("Error", error);
		}
	};

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setApiUrl(e.target.value);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEdit = async (id: number, newUrl: string, newName: string) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url: newUrl, name: newName }),
			});

			if (!response.ok) {
				throw new Error("Failed to edit");
			}

			const updated = await response.json();
			setEndpoints((prev) => prev.map((e) => (e.id === id ? updated : e)));
		} catch (error) {
			console.log("Error", error);
		}
	};

	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete");
			}

			setEndpoints((prev) => prev.filter((e) => e.id !== id));
		} catch (error) {
			console.log("Error", error);
		}
	};

	const checkStatus = async (endpoint: APIEndpoint) => {
		try {
			const response = await fetch(`${API_URL}/${endpoint.id}/check`, {
				method: "POST",
			});

			if (!response.ok) {
				throw new Error("Failed to check");
			}

			const updated = await response.json();
			setEndpoints((prev) =>
				prev.map((e) => (e.id === endpoint.id ? updated : e)),
			);
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<div className="endpoint-content">
			<EndpointHeader
				apiUrl={apiUrl}
				handleClick={handleClick}
				handleUrlChange={handleUrlChange}
				handleNameChange={handleNameChange}
				name={name}
			/>
			<EndpointList
				endpoints={endpoints}
				checkStatus={checkStatus}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
		</div>
	);
}
