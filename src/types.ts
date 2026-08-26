export type APIEndpoint = {
	url: string;
	status: string;
	latency: number;
};
export type EndpointHeaderProps = {
	apiUrl: string;
	handleClick: () => void;
	handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type EndpointListProps = {
	endpoints: APIEndpoint[];
	checkStatus: (endpoint: APIEndpoint) => void;
};
export type EndpointRowProps = {
	endpoint: APIEndpoint;
	checkStatus: (endpoint: APIEndpoint) => void;
};
