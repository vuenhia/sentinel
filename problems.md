**Problem**
**Console Error**
**Location**
**Solution**
**Why**

**Problem**
Importing typescript import { APIEndpoint } from "./types"

**Location**
_Endpoint.tsx || Line : 4_

**Console Error**
'APIEndpoint' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

**Solution**
import type { APIEndpoint } from "../types";

**Why**
Must specify that import as a type declaration , verbatimModuleSyntax requires anything that is purely a type must be marked as type because it isn't a real value that exists when code runs

**Problem**
Passing endpoint array into endpointlist, then passing single endpoint objet into endpointrow. When trying to access single object property, I wasn't able to because I had to make a new type

export type EndpointRowProps = {
endpoint: APIEndpoint;
};

**Location**
_EndpointList.tsx | line 8_
**Console Error**
Type '{ endpoints: APIEndpoint[]; }' is not assignable to type 'IntrinsicAttributes & EndpointRowProps'.

Property 'endpoints' does not exist on type 'IntrinsicAttributes & EndpointRowProps'. Did you mean 'endpoint'?

Property 'endpoints' does not exist on type 'EndpointRowProps'. Did you mean 'endpoint'?

**Solution**
I needed to map over endpoints array , creating an endpoint prop and object. I also needed to create new type for the single endpoint object

export type EndpointRowProps = {
endpoint: APIEndpoint;
};

{endpoints.map((endpoint) => (
<EndpointRow endpoint={endpoint} />
))}

**Why**
Because mapping gives me access to each object, I can pass the single endpoint over to endpoint row. Because it's a single object and not an array anymore, i can access it's properties. <h2>{endpoint.url}</h2>
