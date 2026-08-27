import type { EndpointRowProps } from "../types";
export default function EndpointRow({
	endpoint,
	checkStatus,
}: EndpointRowProps) {
	return (
		<div className="endpoint-apis-information">
			<div className="endpoint-apis-information-left">
				<p>{endpoint.url}</p>
			</div>

			<div className="endpoint-apis-information-right">
				<p>{endpoint.latency}</p>
				<p>{endpoint.status}</p>
				<button onClick={() => checkStatus(endpoint)}>Check Status</button>
			</div>
		</div>
	);
}
