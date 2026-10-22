import EndpointHeader from "./EndpointHeader";
import EndpointList from "./EndpointList";
import { useState } from "react";
import type { APIEndpoint } from "../types";

export default function Endpoint() {
	const [apiUrl, setApiUrl] = useState("");
	const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
	const [name, setName] = useState("");

	const handleClick = () => {
		const newEndpoints = {
			url: apiUrl,
			name: name,
			status: "Not Checked",
			latency: 0,
		};
		setEndpoints((prevEndpoints) => [...prevEndpoints, newEndpoints]);
		setApiUrl("");
		setName("");
		console.log(newEndpoints);
	};
	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		setApiUrl(typedValue);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		setName(typedValue);
	};
	const checkStatus = async (endpoint: APIEndpoint) => {
		try {
			const response = await fetch(endpoint.url);
			console.log(response.status);
			setEndpoints((prevEndpoint) =>
				prevEndpoint.map((targetedEndpoint) => {
					if (targetedEndpoint.url == endpoint.url) {
						return { ...targetedEndpoint, status: "Checked" };
					} else {
						return targetedEndpoint;
					}
				}),
			);
		} catch (error) {
			console.log("cannot fetch url", error + "number");
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
			<EndpointList endpoints={endpoints} checkStatus={checkStatus} />
		</div>
	);
}
