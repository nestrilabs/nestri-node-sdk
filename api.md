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

- <code><a href="./src/resources/sessions/sessions.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionDeleteResponse</a></code>

Methods:

- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="get /sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">retrieve</a>(id) -> SessionRetrieveResponse</code>
- <code title="get /sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">list</a>() -> SessionListResponse</code>
- <code title="delete /sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">delete</a>(id) -> SessionDeleteResponse</code>

## Active

Types:

- <code><a href="./src/resources/sessions/active/active.ts">ActiveListResponse</a></code>

Methods:

- <code title="get /sessions/active">client.sessions.active.<a href="./src/resources/sessions/active/active.ts">list</a>() -> ActiveListResponse</code>

### Public

Types:

- <code><a href="./src/resources/sessions/active/public.ts">PublicListResponse</a></code>

Methods:

- <code title="get /sessions/active/public">client.sessions.active.public.<a href="./src/resources/sessions/active/public.ts">list</a>() -> PublicListResponse</code>

# Games

Types:

- <code><a href="./src/resources/games/games.ts">GameCreateResponse</a></code>
- <code><a href="./src/resources/games/games.ts">GameRetrieveResponse</a></code>
- <code><a href="./src/resources/games/games.ts">GameUpdateResponse</a></code>
- <code><a href="./src/resources/games/games.ts">GameListResponse</a></code>
- <code><a href="./src/resources/games/games.ts">GameDeleteResponse</a></code>

Methods:

- <code title="post /games/{steamID}">client.games.<a href="./src/resources/games/games.ts">create</a>(steamId) -> GameCreateResponse</code>
- <code title="get /games/{steamID}">client.games.<a href="./src/resources/games/games.ts">retrieve</a>(steamId) -> GameRetrieveResponse</code>
- <code title="put /games">client.games.<a href="./src/resources/games/games.ts">update</a>({ ...params }) -> GameUpdateResponse</code>
- <code title="get /games">client.games.<a href="./src/resources/games/games.ts">list</a>() -> GameListResponse</code>
- <code title="delete /games/{steamID}">client.games.<a href="./src/resources/games/games.ts">delete</a>(steamId) -> GameDeleteResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/games/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="get /games/{steamID}/sessions">client.games.sessions.<a href="./src/resources/games/sessions.ts">list</a>(steamId) -> SessionListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /users/@me">client.users.<a href="./src/resources/users.ts">retrieve</a>() -> UserRetrieveResponse</code>

# Teams

Types:

- <code><a href="./src/resources/teams.ts">TeamCreateResponse</a></code>
- <code><a href="./src/resources/teams.ts">TeamRetrieveResponse</a></code>
- <code><a href="./src/resources/teams.ts">TeamListResponse</a></code>
- <code><a href="./src/resources/teams.ts">TeamDeleteResponse</a></code>
- <code><a href="./src/resources/teams.ts">TeamInviteResponse</a></code>

Methods:

- <code title="post /teams">client.teams.<a href="./src/resources/teams.ts">create</a>({ ...params }) -> TeamCreateResponse</code>
- <code title="get /teams/{slug}">client.teams.<a href="./src/resources/teams.ts">retrieve</a>(slug) -> TeamRetrieveResponse</code>
- <code title="get /teams">client.teams.<a href="./src/resources/teams.ts">list</a>() -> TeamListResponse</code>
- <code title="delete /teams/{slug}">client.teams.<a href="./src/resources/teams.ts">delete</a>(slug) -> TeamDeleteResponse</code>
- <code title="post /teams/{slug}/invite/{email}">client.teams.<a href="./src/resources/teams.ts">invite</a>(slug, email) -> TeamInviteResponse</code>
