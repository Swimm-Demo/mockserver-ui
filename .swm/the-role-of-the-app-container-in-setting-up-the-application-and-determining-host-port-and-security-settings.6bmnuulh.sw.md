---
title: >-
  The role of the App container in setting up the application and determining
  host, port, and security settings
---
This document will cover the role of the App container in setting up the application, including:

1. Determining the host
2. Determining the port
3. Determining the security settings.

<SwmSnippet path="/src/containers/App.js" line="7">

---

# Determining the host

The <SwmToken path="src/containers/App.js" pos="7:3:3" line-data="    static host() {">`host`</SwmToken> method in the <SwmToken path="src/containers/App.js" pos="38:7:7" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`App`</SwmToken> container determines the host by checking the URL parameters first. If the <SwmToken path="src/containers/App.js" pos="7:3:3" line-data="    static host() {">`host`</SwmToken> parameter is present in the URL, it uses that value. Otherwise, it falls back to the <SwmToken path="src/containers/App.js" pos="10:8:12" line-data="        } else if (window.location.hostname) {">`window.location.hostname`</SwmToken>.

```javascript
    static host() {
        if (window.location.search && parse(window.location.search).host) {
            return parse(window.location.search).host;
        } else if (window.location.hostname) {
            return window.location.hostname;
        }
        return window.location.hostname;
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/App.js" line="37">

---

The <SwmToken path="src/containers/App.js" pos="38:4:4" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`host`</SwmToken> method is used within the <SwmToken path="src/containers/App.js" pos="36:1:1" line-data="    render() {">`render`</SwmToken> method to pass the host value to the <SwmToken path="src/containers/App.js" pos="38:2:2" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`RequestFilter`</SwmToken> component.

```javascript
        return (<div>
            <RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/>
            <Grid/>
```

---

</SwmSnippet>

The <SwmToken path="src/containers/App.js" pos="7:3:3" line-data="    static host() {">`host`</SwmToken> method is also referenced in the README file, showing how to set the host via URL parameters.

<SwmSnippet path="/src/containers/App.js" line="16">

---

# Determining the port

The <SwmToken path="src/containers/App.js" pos="16:3:3" line-data="    static port() {">`port`</SwmToken> method in the <SwmToken path="src/containers/App.js" pos="38:7:7" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`App`</SwmToken> container determines the port by checking the URL parameters first. If the <SwmToken path="src/containers/App.js" pos="16:3:3" line-data="    static port() {">`port`</SwmToken> parameter is present in the URL, it uses that value. Otherwise, it falls back to the <SwmToken path="src/containers/App.js" pos="19:8:12" line-data="        } else if (window.location.port) {">`window.location.port`</SwmToken>. If neither is available, it defaults to port 443 for HTTPS and port 80 for HTTP.

```javascript
    static port() {
        if (window.location.search && parse(window.location.search).port) {
            return parse(window.location.search).port;
        } else if (window.location.port) {
            return window.location.port;
        } else if (window.location.protocol === "https:") {
            return 443;
        } else {
            return 80;
        }
    }
```

---

</SwmSnippet>

The <SwmToken path="src/containers/App.js" pos="16:3:3" line-data="    static port() {">`port`</SwmToken> method is also referenced in the README file, showing how to set the port via URL parameters.

<SwmSnippet path="/src/actions/index.js" line="11">

---

# Determining the security settings

The <SwmToken path="src/actions/index.js" pos="11:4:4" line-data="export const connectSocket = (host, port, secure, contextPath) =&gt; (dispatch) =&gt; {">`connectSocket`</SwmToken> function in <SwmPath>[src/actions/index.js](src/actions/index.js)</SwmPath> uses the <SwmToken path="src/actions/index.js" pos="11:15:15" line-data="export const connectSocket = (host, port, secure, contextPath) =&gt; (dispatch) =&gt; {">`secure`</SwmToken> parameter to determine if the connection should be secure. This function dispatches the <SwmToken path="src/actions/index.js" pos="12:5:5" line-data="    return dispatch(connectWebSocket(host, port, secure, contextPath));">`connectWebSocket`</SwmToken> action with the <SwmToken path="src/actions/index.js" pos="11:15:15" line-data="export const connectSocket = (host, port, secure, contextPath) =&gt; (dispatch) =&gt; {">`secure`</SwmToken> parameter.

```javascript
export const connectSocket = (host, port, secure, contextPath) => (dispatch) => {
    return dispatch(connectWebSocket(host, port, secure, contextPath));
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="3">

---

The <SwmToken path="src/actions/index.js" pos="3:2:2" line-data="const connectWebSocket = (host, port, secure, contextPath) =&gt; ({">`connectWebSocket`</SwmToken> function creates an action with the <SwmToken path="src/actions/index.js" pos="3:13:13" line-data="const connectWebSocket = (host, port, secure, contextPath) =&gt; ({">`secure`</SwmToken> parameter, which is used to establish a WebSocket connection.

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

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
