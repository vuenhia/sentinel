export type APIEndpoint = {
	url: string;
};
export type EndpointHeaderProps = {
	apiUrl: string;
	handleClick: () => void;
	handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type EndpointListProps = {
	endpoints: APIEndpoint[];
};
export type EndpointRowProps = {
	endpoint: APIEndpoint;
};
