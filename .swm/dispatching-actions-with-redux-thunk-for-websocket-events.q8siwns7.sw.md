---
title: Dispatching Actions with Redux Thunk for WebSocket Events
---
This document will cover how to dispatch actions using Redux Thunk to handle <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> events. We'll cover:

1. Setting up the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection
2. Handling incoming <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> messages
3. Dispatching actions based on <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> events
4. Disconnecting the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

<SwmSnippet path="/src/middleware/socket.js" line="16">

---

# Setting up the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection

The <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection is established using the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> constructor. The URL is dynamically constructed based on whether the connection is secure and the host and port provided in the action.

```javascript
            socket.close()
        }
        socket = new WebSocket((action.secure ? "wss" : "ws") + "://" + action.host + ":" + action.port + "/_mockserver_ui_websocket");
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="19">

---

# Handling incoming <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> messages

The <SwmToken path="src/middleware/socket.js" pos="19:3:3" line-data="        socket.onmessage = (event) =&gt; {">`onmessage`</SwmToken> event handler is set up to listen for incoming messages. When a message is received, it is parsed and dispatched using the <SwmToken path="src/middleware/socket.js" pos="20:3:3" line-data="            next(webSocketMessageReceived(">`webSocketMessageReceived`</SwmToken> action.

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

# Dispatching actions based on <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> events

The <SwmToken path="src/actions/index.js" pos="31:4:4" line-data="export const webSocketMessageReceived = (message) =&gt; ({">`webSocketMessageReceived`</SwmToken> action creator constructs an action with the type <SwmToken path="src/actions/index.js" pos="32:4:4" line-data="    type: MESSAGE_RECEIVED,">`MESSAGE_RECEIVED`</SwmToken> and the parsed message as the payload. This action is then dispatched to update the Redux store.

```javascript
export const webSocketMessageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    entities: message
});
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="42">

---

# Disconnecting the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken>

The <SwmToken path="src/actions/index.js" pos="42:4:4" line-data="export const disconnectSocket = () =&gt; (dispatch) =&gt; {">`disconnectSocket`</SwmToken> function is a thunk that dispatches the <SwmToken path="src/actions/index.js" pos="43:5:5" line-data="    return dispatch(disconnectWebSocket());">`disconnectWebSocket`</SwmToken> action to close the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection.

```javascript
export const disconnectSocket = () => (dispatch) => {
    return dispatch(disconnectWebSocket());
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="38">

---

The <SwmToken path="src/actions/index.js" pos="38:2:2" line-data="const disconnectWebSocket = () =&gt; ({">`disconnectWebSocket`</SwmToken> action creator constructs an action with the type <SwmToken path="src/actions/index.js" pos="39:4:4" line-data="    type: DISCONNECT_SOCKET">`DISCONNECT_SOCKET`</SwmToken>. This action is dispatched by the <SwmToken path="src/actions/index.js" pos="42:4:4" line-data="export const disconnectSocket = () =&gt; (dispatch) =&gt; {">`disconnectSocket`</SwmToken> thunk to handle the disconnection logic.

```javascript
const disconnectWebSocket = () => ({
    type: DISCONNECT_SOCKET
});
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
