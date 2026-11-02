export type APIEndpoint = {
	id: number;
	url: string;
	name: string;
	status: string;
	latency: number | null;
	created_at: string;
};

export type EndpointRowProps = {
	endpoint: APIEndpoint;
	checkStatus: (endpoint: APIEndpoint) => Promise<void>;
	handleEdit: (id: number, newUrl: string, newName: string) => Promise<void>;
	handleDelete: (id: number) => Promise<void>;
};

export type EndpointListProps = {
	endpoints: APIEndpoint[];
	checkStatus: (endpoint: APIEndpoint) => Promise<void>;
	handleEdit: (id: number, newUrl: string, newName: string) => Promise<void>;
	handleDelete: (id: number) => Promise<void>;
};
