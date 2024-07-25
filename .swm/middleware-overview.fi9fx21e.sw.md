---
title: Middleware Overview
---
Middleware is used to handle asynchronous actions and side effects in the application.

It intercepts actions dispatched to the store and can perform tasks such as logging, making API calls, or managing <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connections.

In the <SwmPath>[src/middleware/socket.js](src/middleware/socket.js)</SwmPath> file, middleware manages <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connections by handling actions like <SwmToken path="src/middleware/socket.js" pos="1:3:3" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`CONNECT_SOCKET`</SwmToken>, <SwmToken path="src/middleware/socket.js" pos="1:6:6" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`DISCONNECT_SOCKET`</SwmToken>, and <SwmToken path="src/middleware/socket.js" pos="1:9:9" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`SEND_MESSAGE`</SwmToken>.

When a <SwmToken path="src/middleware/socket.js" pos="1:3:3" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`CONNECT_SOCKET`</SwmToken> action is dispatched, the middleware establishes a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection and sets up event listeners for messages and connection status changes.

For <SwmToken path="src/middleware/socket.js" pos="1:6:6" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`DISCONNECT_SOCKET`</SwmToken> actions, the middleware closes the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection and cleans up resources.

When a <SwmToken path="src/middleware/socket.js" pos="1:9:9" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`SEND_MESSAGE`</SwmToken> action is dispatched, the middleware sends the message through the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> if connected, or reconnects and then sends the message.

The middleware ensures that the application can handle real-time communication efficiently by managing the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> lifecycle.

<SwmSnippet path="/src/middleware/socket.js" line="1">

---

<SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> Middleware In the <SwmPath>[src/middleware/socket.js](src/middleware/socket.js)</SwmPath> file, middleware manages <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connections by handling actions like <SwmToken path="src/middleware/socket.js" pos="1:3:3" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`CONNECT_SOCKET`</SwmToken>, <SwmToken path="src/middleware/socket.js" pos="1:6:6" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`DISCONNECT_SOCKET`</SwmToken>, and <SwmToken path="src/middleware/socket.js" pos="1:9:9" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`SEND_MESSAGE`</SwmToken>. When a <SwmToken path="src/middleware/socket.js" pos="1:3:3" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`CONNECT_SOCKET`</SwmToken> action is dispatched, the middleware establishes a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection and sets up event listeners for messages and connection status changes. For <SwmToken path="src/middleware/socket.js" pos="1:6:6" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`DISCONNECT_SOCKET`</SwmToken> actions, the middleware closes the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection and cleans up resources. When a <SwmToken path="src/middleware/socket.js" pos="1:9:9" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`SEND_MESSAGE`</SwmToken> action is dispatched, the middleware sends the message through the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> if connected, or reconnects and then sends the message. This ensures that the application can handle real-time communication efficiently by managing the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> lifecycle.

```javascript
import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from '../actions'

export default (function () {
    let socket = null;
    let connected = false;

    let disconnectSocket = function () {
        connected = false;
        if (socket != null) {
            socket.close()
        }
        socket = null
    };
    let connectSocket = function (action, next) {
        if (socket != null) {
            socket.close()
        }
        socket = new WebSocket((action.secure ? "wss" : "ws") + "://" + action.host + ":" + action.port + "/_mockserver_ui_websocket");
        socket.onmessage = (event) => {
            next(webSocketMessageReceived(
                JSON.parse(event.data)
```

---

</SwmSnippet>

State Augmentation Middleware This middleware augments the action with the current state from the store before passing it to the next middleware or reducer. This can be useful for logging or debugging purposes, as it provides additional context about the state when the action was dispatched.

# Main functions

There are several main functions in this folder. Some of them are <SwmToken path="src/middleware/socket.js" pos="14:3:3" line-data="    let connectSocket = function (action, next) {">`connectSocket`</SwmToken>, <SwmToken path="src/middleware/socket.js" pos="7:3:3" line-data="    let disconnectSocket = function () {">`disconnectSocket`</SwmToken>, and <SwmToken path="src/middleware/socket.js" pos="1:9:9" line-data="import {CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, webSocketMessageReceived} from &#39;../actions&#39;">`SEND_MESSAGE`</SwmToken>. We will dive a little into <SwmToken path="src/middleware/socket.js" pos="14:3:3" line-data="    let connectSocket = function (action, next) {">`connectSocket`</SwmToken> and <SwmToken path="src/middleware/socket.js" pos="7:3:3" line-data="    let disconnectSocket = function () {">`disconnectSocket`</SwmToken>.

<SwmSnippet path="/src/middleware/socket.js" line="14">

---

## <SwmToken path="src/middleware/socket.js" pos="14:3:3" line-data="    let connectSocket = function (action, next) {">`connectSocket`</SwmToken>

The <SwmToken path="src/middleware/socket.js" pos="14:3:3" line-data="    let connectSocket = function (action, next) {">`connectSocket`</SwmToken> function is responsible for establishing a <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection. It takes an action and a next function as parameters. It first closes any existing socket connection, then creates a new <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection using the provided host and port from the action. It sets up event listeners for message reception, connection closure, and connection opening. When a message is received, it dispatches the <SwmToken path="src/middleware/socket.js" pos="20:3:3" line-data="            next(webSocketMessageReceived(">`webSocketMessageReceived`</SwmToken> action with the parsed message data. When the connection is opened, it sets the connected flag to true and sends any initial message if provided.

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

<SwmSnippet path="/src/middleware/socket.js" line="7">

---

## <SwmToken path="src/middleware/socket.js" pos="7:3:3" line-data="    let disconnectSocket = function () {">`disconnectSocket`</SwmToken>

The <SwmToken path="src/middleware/socket.js" pos="7:3:3" line-data="    let disconnectSocket = function () {">`disconnectSocket`</SwmToken> function is responsible for closing the <SwmToken path="src/middleware/socket.js" pos="18:7:7" line-data="        socket = new WebSocket((action.secure ? &quot;wss&quot; : &quot;ws&quot;) + &quot;://&quot; + action.host + &quot;:&quot; + action.port + &quot;/_mockserver_ui_websocket&quot;);">`WebSocket`</SwmToken> connection and cleaning up resources. It sets the connected flag to false, closes the socket if it exists, and sets the socket variable to null.

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

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
