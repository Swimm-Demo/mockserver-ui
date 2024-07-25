---
title: How the WebSocket lifecycle is managed
---
This document will cover how the WebSocket lifecycle is managed in the project. We'll cover:

1. Initializing the WebSocket connection
2. Handling WebSocket messages
3. Managing WebSocket disconnections

<SwmSnippet path="/src/middleware/socket.js" line="14">

---

# Initializing the WebSocket connection

The function `connectSocket` is responsible for initializing the WebSocket connection. It creates a new WebSocket instance and sets up event handlers for `onmessage`, `onclose`, and `onopen` events.

```javascript
    let connectSocket = function (action, next) {
        if (socket != null) {
            socket.close()
        }
        socket = new WebSocket((action.secure ? "wss" : "ws") + "://" + action.host + ":" + action.port + "/_mockserver_ui_websocket");
        socket.onmessage = (event) => {
            next(webSocketMessageReceived(
                JSON.parse(event.data)
            ))
        };
        socket.onclose = () => {
            disconnectSocket();
        };
        socket.onopen = () => {
            connected = true;
            if (socket && action.message && socket.readyState === 1) {
                socket.send(JSON.stringify(action.message))
            }
        }
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="3">

---

The function `connectWebSocket` is used to dispatch the `CONNECT_SOCKET` action, which triggers the `connectSocket` function to establish the WebSocket connection.

```javascript
const connectWebSocket = (host, port, secure, contextPath) => ({
    type: CONNECT_SOCKET,
    host: host,
    port: port,
    secure: secure,
    contextPath: contextPath
});
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="19">

---

# Handling WebSocket messages

The `onmessage` event handler in the `connectSocket` function processes incoming WebSocket messages. It calls the `webSocketMessageReceived` action with the parsed message data.

```javascript
        socket.onmessage = (event) => {
            next(webSocketMessageReceived(
                JSON.parse(event.data)
            ))
        };
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="31">

---

The `webSocketMessageReceived` action creates an action object with the type `MESSAGE_RECEIVED` and the received message data, which is then handled by the reducers.

```javascript
export const webSocketMessageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    entities: message
});
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="7">

---

# Managing WebSocket disconnections

The function `disconnectSocket` is responsible for closing the WebSocket connection and resetting the `socket` and `connected` variables.

```javascript
    let disconnectSocket = function () {
        connected = false;
        if (socket != null) {
            socket.close()
        }
        socket = null
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="24">

---

The `onclose` event handler in the `connectSocket` function calls `disconnectSocket` to handle WebSocket disconnections.

```javascript
        socket.onclose = () => {
            disconnectSocket();
        };
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="38">

---

The `disconnectWebSocket` action creates an action object with the type `DISCONNECT_SOCKET`, which is dispatched to trigger the `disconnectSocket` function.

```javascript
const disconnectWebSocket = () => ({
    type: DISCONNECT_SOCKET
});
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="42">

---

The `disconnectSocket` function in `src/actions/index.js` dispatches the `disconnectWebSocket` action to manage the WebSocket disconnection process.

```javascript
export const disconnectSocket = () => (dispatch) => {
    return dispatch(disconnectWebSocket());
};
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
