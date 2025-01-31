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

- <code><a href="./src/resources/sessions/active.ts">ActiveListResponse</a></code>

Methods:

- <code title="get /sessions/active">client.sessions.active.<a href="./src/resources/sessions/active.ts">list</a>() -> ActiveListResponse</code>

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

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskDeleteResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskSessionResponse</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks.ts">create</a>() -> TaskCreateResponse</code>
- <code title="get /tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(id) -> TaskRetrieveResponse</code>
- <code title="put /tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">update</a>(id) -> TaskUpdateResponse</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>() -> TaskListResponse</code>
- <code title="delete /tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">delete</a>(id) -> TaskDeleteResponse</code>
- <code title="get /tasks/{id}/session">client.tasks.<a href="./src/resources/tasks.ts">session</a>(id) -> TaskSessionResponse</code>
