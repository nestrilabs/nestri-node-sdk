# Machines

# Sessions

Types:

- <code><a href="./src/resources/sessions/sessions.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionDeleteResponse</a></code>

Methods:

- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="get /sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">retrieve</a>(id) -> SessionRetrieveResponse</code>
- <code title="delete /sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">delete</a>(id) -> SessionDeleteResponse</code>

## Active

Types:

- <code><a href="./src/resources/sessions/active/active.ts">ActiveListResponse</a></code>

Methods:

- <code title="get /sessions/active">client.sessions.active.<a href="./src/resources/sessions/active/active.ts">list</a>() -> ActiveListResponse</code>

### Public

# Games

## Sessions

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /users/@me">client.users.<a href="./src/resources/users.ts">retrieve</a>() -> UserRetrieveResponse</code>

# Teams

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>() -> SubscriptionListResponse</code>
- <code title="delete /subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>
