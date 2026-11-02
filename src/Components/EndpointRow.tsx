import { useState } from "react";
import type { APIEndpoint, EndpointRowProps } from "../types";
const FAST_MS = 300;
const SLOW_MS = 1000;
export default function EndpointRow({
	endpoint,
	checkStatus,
	handleEdit,
	handleDelete,
}: EndpointRowProps) {
	const [isEditing, setIsEditing] = useState(false);
	const [editUrl, setEditUrl] = useState(endpoint.url);
	const [editName, setEditName] = useState(endpoint.name);

	const getLatencyClass = (endpoint: APIEndpoint) => {
		if (endpoint.status === "Down") return "latency-red";
		if (endpoint.latency === null) return "latency-none";
		if (endpoint.latency < FAST_MS) return "latency-green";
		if (endpoint.latency < SLOW_MS) return "latency-yellow";
		return "latency-red";
	};
	const handleSave = async () => {
		await handleEdit(endpoint.id, editUrl, editName);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setEditUrl(endpoint.url);
		setEditName(endpoint.name);
		setIsEditing(false);
	};

	return (
		<div className="endpoint-apis-information">
			<div className="endpoint-apis-information-left">
				{isEditing ? (
					<input value={editUrl} onChange={(e) => setEditUrl(e.target.value)} />
				) : (
					<p>{endpoint.url}</p>
				)}
			</div>

			<div className="endpoint-apis-information-right">
				{isEditing ? (
					<input
						value={editName}
						onChange={(e) => setEditName(e.target.value)}
					/>
				) : (
					<p>{endpoint.name}</p>
				)}
				<p className={getLatencyClass(endpoint)}>
					{endpoint.latency === null ? "—" : `${endpoint.latency} ms`}
				</p>
				<p>{endpoint.status}</p>
				<div className="endpoint-buttons">
					{isEditing ? (
						<>
							<button onClick={handleSave}>Save</button>
							<button onClick={handleCancel}>Cancel</button>
						</>
					) : (
						<>
							<button onClick={() => checkStatus(endpoint)}>
								Check Status
							</button>
							<button onClick={() => handleDelete(endpoint.id)}>Delete</button>
							<button onClick={() => setIsEditing(true)}>Edit</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
