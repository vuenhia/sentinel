export type APIEndpoint = {
	url: string;
	status: string;
	latency: number;
	name: string;
};
export type EndpointHeaderProps = {
	apiUrl: string;
	handleClick: () => void;
	handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
};
export type EndpointListProps = {
	endpoints: APIEndpoint[];
	checkStatus: (endpoint: APIEndpoint) => void;
};
export type EndpointRowProps = {
	endpoint: APIEndpoint;
	checkStatus: (endpoint: APIEndpoint) => void;
};
