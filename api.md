# Machines

Types:

- <code><a href="./src/resources/machines.ts">MachineCreateResponse</a></code>
- <code><a href="./src/resources/machines.ts">MachineRetrieveResponse</a></code>
- <code><a href="./src/resources/machines.ts">MachineListResponse</a></code>
- <code><a href="./src/resources/machines.ts">MachineDeleteResponse</a></code>

Methods:

- <code title="post /machines/{fingerprint}">client.machines.<a href="./src/resources/machines.ts">create</a>(fingerprint) -> MachineCreateResponse</code>
- <code title="get /machines/{fingerprint}">client.machines.<a href="./src/resources/machines.ts">retrieve</a>(fingerprint) -> MachineRetrieveResponse</code>
- <code title="get /machines">client.machines.<a href="./src/resources/machines.ts">list</a>() -> MachineListResponse</code>
- <code title="delete /machines/{fingerprint}">client.machines.<a href="./src/resources/machines.ts">delete</a>(fingerprint) -> MachineDeleteResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionDeleteResponse</a></code>

Methods:

- <code title="post /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">create</a>(id, { ...params }) -> SessionCreateResponse</code>
- <code title="get /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(id) -> SessionRetrieveResponse</code>
- <code title="get /sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>() -> SessionListResponse</code>
- <code title="delete /sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">delete</a>(id) -> SessionDeleteResponse</code>
