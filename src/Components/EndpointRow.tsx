import type { EndpointRowProps } from "../types";
export default function EndpointRow({ endpoint }: EndpointRowProps) {
	return (
		<div className="endpoint-apis-information">
			<div className="endpoint-apis-information-left">
				<p>{endpoint.url}</p>
			</div>

			<div className="endpoint-apis-information-right">
				<p>Response Rate</p>
				<button>Check Now</button>
			</div>
		</div>
	);
}
