---
title: Handling new props in componentWillReceiveProps
---
This document will cover the usage of `componentWillReceiveProps` in the `RequestFilter` component, including:

1. Why the component checks for new props using `componentWillReceiveProps`
2. How it handles changes when new props are received.

<SwmSnippet path="/src/components/RequestFilter.js" line="87">

---

# Why the component checks for new props using componentWillReceiveProps

The `componentWillReceiveProps` lifecycle method is used to detect changes in the component's props. In this case, it checks if the `requestMatcher` or `expanded` props have changed. If either of these props has changed, it triggers the `loadData` function to update the component's state or perform necessary actions based on the new props.

```javascript
    componentWillReceiveProps(nextProps) {
        if (nextProps.requestMatcher !== this.props.requestMatcher || nextProps.expanded !== this.props.expanded) {
            loadData(nextProps)
        }
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="49">

---

# How it handles changes when new props are received

When `componentWillReceiveProps` detects a change in the `requestMatcher` or `expanded` props, it calls the `loadData` function. The `loadData` function constructs a `requestFilter` object based on the new `requestMatcher` prop and sends this data to the server using the `sendMessage` function. This ensures that the component is always in sync with the latest props and can react accordingly.

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
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
