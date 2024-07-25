---
title: Handling WebSocket Connections within Actions
---
This document will cover how we handle <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connections within actions. We'll cover:

1. Connecting to a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>
2. Sending messages over <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>
3. Receiving messages from <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>
4. Disconnecting from <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

<SwmSnippet path="/src/actions/index.js" line="1">

---

# Connecting to a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

The action <SwmToken path="src/actions/index.js" pos="11:4:4" line-data="export const connectSocket = (host, port, secure, contextPath) =&gt; (dispatch) =&gt; {">`connectSocket`</SwmToken> is used to initiate a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection. It dispatches the <SwmToken path="src/actions/index.js" pos="3:2:2" line-data="const connectWebSocket = (host, port, secure, contextPath) =&gt; ({">`connectWebSocket`</SwmToken> action with the necessary parameters such as host, port, secure, and <SwmToken path="src/actions/index.js" pos="3:16:16" line-data="const connectWebSocket = (host, port, secure, contextPath) =&gt; ({">`contextPath`</SwmToken>.

```javascript
export const CONNECT_SOCKET = 'CONNECT_SOCKET';

const connectWebSocket = (host, port, secure, contextPath) => ({
    type: CONNECT_SOCKET,
    host: host,
    port: port,
    secure: secure,
    contextPath: contextPath
});

export const connectSocket = (host, port, secure, contextPath) => (dispatch) => {
    return dispatch(connectWebSocket(host, port, secure, contextPath));
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="35">

---

In the middleware, the <SwmToken path="src/middleware/socket.js" pos="36:3:3" line-data="            case CONNECT_SOCKET:">`CONNECT_SOCKET`</SwmToken> action type is handled by the <SwmToken path="src/middleware/socket.js" pos="37:1:1" line-data="                connectSocket(action, next);">`connectSocket`</SwmToken> function, which establishes the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection.

```javascript
        switch (action.type) {
            case CONNECT_SOCKET:
                connectSocket(action, next);
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="15">

---

# Sending messages over <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

The action <SwmToken path="src/actions/index.js" pos="25:4:4" line-data="export const sendMessage = (message, host, port, secure) =&gt; (dispatch) =&gt; {">`sendMessage`</SwmToken> is used to send messages over the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>. It dispatches the <SwmToken path="src/actions/index.js" pos="17:2:2" line-data="const sendWebSocketMessage = (message, host, port, secure) =&gt; ({">`sendWebSocketMessage`</SwmToken> action with the message and connection details.

```javascript
export const SEND_MESSAGE = 'SEND_MESSAGE';

const sendWebSocketMessage = (message, host, port, secure) => ({
    type: SEND_MESSAGE,
    message: message,
    host: host,
    port: port,
    secure: secure
});

export const sendMessage = (message, host, port, secure) => (dispatch) => {
    return dispatch(sendWebSocketMessage(message, host, port, secure));
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="38">

---

In the middleware, the <SwmToken path="src/actions/index.js" pos="15:4:4" line-data="export const SEND_MESSAGE = &#39;SEND_MESSAGE&#39;;">`SEND_MESSAGE`</SwmToken> action type is handled by the <SwmToken path="src/actions/index.js" pos="25:4:4" line-data="export const sendMessage = (message, host, port, secure) =&gt; (dispatch) =&gt; {">`sendMessage`</SwmToken> function, which sends the message over the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection.

```javascript
                break;
            case DISCONNECT_SOCKET:
                disconnectSocket();
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="29">

---

# Receiving messages from <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

The action <SwmToken path="src/actions/index.js" pos="31:4:4" line-data="export const webSocketMessageReceived = (message) =&gt; ({">`webSocketMessageReceived`</SwmToken> is used to handle incoming messages from the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>. It creates an action with the type <SwmToken path="src/actions/index.js" pos="29:4:4" line-data="export const MESSAGE_RECEIVED = &#39;MESSAGE_RECEIVED&#39;;">`MESSAGE_RECEIVED`</SwmToken> and the received message.

```javascript
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export const webSocketMessageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    entities: message
});
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="41">

---

In the middleware, incoming <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> messages are dispatched as <SwmToken path="src/actions/index.js" pos="31:4:4" line-data="export const webSocketMessageReceived = (message) =&gt; ({">`webSocketMessageReceived`</SwmToken> actions.

```javascript
                break;
            case SEND_MESSAGE:
                if (connected) {
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="36">

---

# Disconnecting from <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

The action <SwmToken path="src/actions/index.js" pos="42:4:4" line-data="export const disconnectSocket = () =&gt; (dispatch) =&gt; {">`disconnectSocket`</SwmToken> is used to close the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection. It dispatches the <SwmToken path="src/actions/index.js" pos="38:2:2" line-data="const disconnectWebSocket = () =&gt; ({">`disconnectWebSocket`</SwmToken> action.

```javascript
export const DISCONNECT_SOCKET = 'DISCONNECT_SOCKET';

const disconnectWebSocket = () => ({
    type: DISCONNECT_SOCKET
});

export const disconnectSocket = () => (dispatch) => {
    return dispatch(disconnectWebSocket());
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="39">

---

In the middleware, the <SwmToken path="src/middleware/socket.js" pos="39:3:3" line-data="            case DISCONNECT_SOCKET:">`DISCONNECT_SOCKET`</SwmToken> action type is handled by the <SwmToken path="src/middleware/socket.js" pos="40:1:1" line-data="                disconnectSocket();">`disconnectSocket`</SwmToken> function, which closes the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection.

```javascript
            case DISCONNECT_SOCKET:
                disconnectSocket();
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
