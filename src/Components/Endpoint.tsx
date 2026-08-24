import EndpointHeader from "./EndpointHeader";
import EndpointList from "./EndpointList";
import { useState } from "react";
import type { APIEndpoint } from "../types";

export default function Endpoint() {
	const [apiUrl, setApiUrl] = useState("");
	const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
	const handleClick = () => {
		const newEndpoints = {
			url: apiUrl,
		};
		setEndpoints((prevEndpoints) => [...prevEndpoints, newEndpoints]);
		console.log(newEndpoints);
	};
	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		setApiUrl(typedValue);
	};
	return (
		<div className="endpoint-content">
			<EndpointHeader
				apiUrl={apiUrl}
				handleClick={handleClick}
				handleUrlChange={handleUrlChange}
			/>
			<EndpointList endpoints={endpoints} />
		</div>
	);
}
