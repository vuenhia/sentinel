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
				{/* Status || 
				Goal: Click through EACH api , and when clicked , the clicked api needs to show that status has been checked
				Problem: Status only shows up in console and not on dom. ALso when clicking two different apis, it increments the same 
				reponse
				Plan/Thinking: Map goes through each item in the array, so when item is clicked, I can track which one is being clicked
				and whichever one is being clicked will have the status changed. Need ternary for if clicked, change to (Checked) */}
				<p>{endpoint.status}</p>
				<button onClick={() => checkStatus(endpoint)}>Check Status</button>
			</div>
		</div>
	);
}
