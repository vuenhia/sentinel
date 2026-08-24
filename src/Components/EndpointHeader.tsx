import type { EndpointHeaderProps } from "../types";

export default function EndpointHeader({
	apiUrl,
	handleClick,
	handleUrlChange,
}: EndpointHeaderProps) {
	return (
		<div className="epHeader">
			<h2>New Endpoint</h2>
			<div className="epHeader-api-input">
				<input
					className="epHeader-url"
					type="text"
					placeholder="New API"
					onChange={handleUrlChange}
					value={apiUrl}
				/>
				<button className="epHeader-save" onClick={handleClick}>
					POST
				</button>
			</div>
		</div>
	);
}
