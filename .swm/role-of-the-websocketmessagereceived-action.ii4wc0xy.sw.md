---
title: Role of the webSocketMessageReceived action
---
This document will cover the role of the `webSocketMessageReceived` action, including:

1. What the `webSocketMessageReceived` action is
2. How it is used in the codebase
3. Its functionality and purpose

# What the webSocketMessageReceived action is

The `webSocketMessageReceived` action is a Redux action creator defined in `src/actions/index.js`. It is responsible for creating an action with the type `MESSAGE_RECEIVED` and attaching the received message as the `entities` payload.

<SwmSnippet path="/src/actions/index.js" line="31">

---

# What the webSocketMessageReceived action is

The `webSocketMessageReceived` function creates an action with the type `MESSAGE_RECEIVED` and the received message as the payload.

```javascript
export const webSocketMessageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    entities: message
});
```

---

</SwmSnippet>

# How it is used in the codebase

The `webSocketMessageReceived` action is primarily used in the WebSocket middleware to handle incoming messages from the WebSocket connection. When a message is received, this action is dispatched to update the Redux store with the new data.

<SwmSnippet path="/src/middleware/socket.js" line="19">

---

# How it is used in the codebase

The `onmessage` event handler of the WebSocket calls the `webSocketMessageReceived` action with the parsed message data.

```javascript
        socket.onmessage = (event) => {
            next(webSocketMessageReceived(
                JSON.parse(event.data)
            ))
        };
```

---

</SwmSnippet>

# Its functionality and purpose

The main purpose of the `webSocketMessageReceived` action is to update the Redux store with new data received from the WebSocket connection. This allows the application to react to real-time updates and display the latest information to the user.

<SwmSnippet path="/src/reducers/entities.js" line="8">

---

# Its functionality and purpose

The reducer listens for the `MESSAGE_RECEIVED` action type and updates the state with the new entities from the action payload.

```javascript
}, action) => {
    if (action.type === MESSAGE_RECEIVED && action.entities) {
        return {
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
