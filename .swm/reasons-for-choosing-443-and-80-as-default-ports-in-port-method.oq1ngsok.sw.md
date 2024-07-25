---
title: Reasons for Choosing 443 and 80 as Default Ports in Port Method
---
This document will cover the reasons behind choosing the default ports of 443 and 80 for the port method. We'll cover:

1. The significance of port 443
2. The significance of port 80
3. How these ports are used in the codebase

# The significance of port 443

Port 443 is the default port for HTTPS traffic. It is used for secure communication over a computer network, and it ensures that data sent between the client and server is encrypted. This is crucial for protecting sensitive information from being intercepted by malicious actors.

# The significance of port 80

Port 80 is the default port for HTTP traffic. It is used for unencrypted communication over the web. While it does not provide the same level of security as port 443, it is widely used for general web traffic and is essential for accessing web pages that do not require encryption.

<SwmSnippet path="/src/actions/index.js" line="4">

---

# How these ports are used in the codebase

In the codebase, the <SwmToken path="src/actions/index.js" pos="6:1:1" line-data="    port: port,">`port`</SwmToken> property is defined in <SwmPath>[src/actions/index.js](src/actions/index.js)</SwmPath>. This property is used to specify the port number for connecting to a socket. By default, ports 443 and 80 are chosen to ensure compatibility with standard web traffic protocols, both secure (HTTPS) and unsecure (HTTP).

```javascript
    type: CONNECT_SOCKET,
    host: host,
    port: port,
    secure: secure,
    contextPath: contextPath
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
