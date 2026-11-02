import EndpointRow from "./EndpointRow";
import type { EndpointListProps } from "../types";
export default function EndpointList({
	endpoints,
	checkStatus,
	handleEdit,
	handleDelete,
}: EndpointListProps) {
	return (
		<div className="endpoint-main">
			<h2>Tracked Endpoints</h2>

			{endpoints.map((endpoint) => (
				<EndpointRow
					key={endpoint.url}
					endpoint={endpoint}
					checkStatus={checkStatus}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}
