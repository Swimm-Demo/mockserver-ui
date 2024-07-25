---
title: How the loadData function works
---
This document will cover how the `loadData` function effectively updates and sends filter criteria to the server. We'll cover:

1. Initializing the request filter
2. Filtering null values
3. Sending the request filter to the server

<SwmSnippet path="/src/components/RequestFilter.js" line="49">

---

# Initializing the request filter

The `loadData` function initializes a `requestFilter` object with default values. This object will later be populated with the actual filter criteria.

```javascript
const loadData = ({host = "127.0.0.1", port = "1080", secure = true, requestMatcher = {}, sendMessage}) => {
    let requestFilter = {
        method: undefined,
        path: undefined,
        keepAlive: undefined,
        secure: undefined,
        headers: undefined,
        queryStringParameters: undefined,
        cookies: undefined,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="59">

---

If the `requestMatcher` is enabled, the `requestFilter` object is updated with the values from `requestMatcher`. This includes method, path, keepAlive, secure, headers, queryStringParameters, and cookies. The `filterNullsSingleValue` and `filterNullsMultiValue` functions are used to filter out null values from cookies, headers, and queryStringParameters.

```javascript
    if (requestMatcher.enabled) {
        requestFilter = {
            method: requestMatcher.method,
            path: requestMatcher.path,
            keepAlive: requestMatcher.keepAlive ? true : undefined,
            secure: requestMatcher.secure ? true : undefined,
            headers: undefined,
            queryStringParameters: undefined,
            cookies: undefined,
        };
        requestFilter.cookies = filterNullsSingleValue(requestMatcher.cookies);
        requestFilter.headers = filterNullsMultiValue(requestMatcher.headers);
        requestFilter.queryStringParameters = filterNullsMultiValue(requestMatcher.queryStringParameters);
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="19">

---

# Filtering null values

The `filterNullsMultiValue` function iterates over `rawItems` and filters out items that have null values. It returns an array of items that have at least one non-null value.

```javascript
let filterNullsMultiValue = function (rawItems) {
    let items = undefined;
    for (let rawItem of rawItems) {
        let valueSet = false;
        for (let value of rawItem.values) {
            if (value) {
                valueSet = true;
            }
        }
        if (rawItem.name && valueSet) {
            if (!items) {
                items = [];
            }
            items.push(rawItem);
        }
    }
    return items;
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="37">

---

The `filterNullsSingleValue` function iterates over `rawItems` and filters out items that have null values for both name and value. It returns an array of items that have non-null values.

```javascript
let filterNullsSingleValue = function (rawItems) {
    let items = undefined;
    for (let rawItem of rawItems) {
        if (rawItem.name && rawItem.value) {
            if (!items) {
                items = [];
            }
            items.push(rawItem);
        }
    }
    return items;
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="73">

---

# Sending the request filter to the server

The `sendMessage` function is called with the `requestFilter`, host, port, and secure parameters. This function dispatches the `sendWebSocketMessage` action to send the request filter to the server.

```javascript
    sendMessage(requestFilter, host, port, secure);
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/actions/index.js" line="25">

---

The `sendMessage` function dispatches the `sendWebSocketMessage` action, which sends the request filter to the server via WebSocket.

```javascript
export const sendMessage = (message, host, port, secure) => (dispatch) => {
    return dispatch(sendWebSocketMessage(message, host, port, secure));
};
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
