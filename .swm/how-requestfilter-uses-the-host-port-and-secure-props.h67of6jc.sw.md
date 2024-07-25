---
title: 'How RequestFilter uses the Host, Port, and Secure Props'
---
This document will cover how the <SwmToken path="src/components/RequestFilter.js" pos="50:3:3" line-data="    let requestFilter = {">`requestFilter`</SwmToken> component utilizes the <SwmToken path="src/components/RequestFilter.js" pos="49:8:8" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="49:23:23" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="49:32:32" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`secure`</SwmToken> props. We'll cover:

1. Definition of <SwmToken path="src/components/RequestFilter.js" pos="49:8:8" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="49:23:23" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="49:32:32" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`secure`</SwmToken> props
2. Usage of these props in the <SwmToken path="src/components/RequestFilter.js" pos="49:2:2" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`loadData`</SwmToken> function
3. How these props are passed and used in the <SwmToken path="src/components/RequestFilter.js" pos="50:3:3" line-data="    let requestFilter = {">`requestFilter`</SwmToken> component

<SwmSnippet path="/src/components/RequestFilter.js" line="76">

---

# Definition of <SwmToken path="src/components/RequestFilter.js" pos="78:1:1" line-data="        host: PropTypes.string.isRequired,">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="79:1:1" line-data="        port: PropTypes.string.isRequired,">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="80:1:1" line-data="        secure: PropTypes.bool.isRequired">`secure`</SwmToken> props

The <SwmToken path="src/components/RequestFilter.js" pos="76:2:2" line-data="class RequestFilter extends Component {">`RequestFilter`</SwmToken> component defines <SwmToken path="src/components/RequestFilter.js" pos="78:1:1" line-data="        host: PropTypes.string.isRequired,">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="79:1:1" line-data="        port: PropTypes.string.isRequired,">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="80:1:1" line-data="        secure: PropTypes.bool.isRequired">`secure`</SwmToken> as required props using <SwmToken path="src/components/RequestFilter.js" pos="77:3:3" line-data="    static propTypes = {">`propTypes`</SwmToken>. This ensures that these props are always provided when the component is used.

```javascript
class RequestFilter extends Component {
    static propTypes = {
        host: PropTypes.string.isRequired,
        port: PropTypes.string.isRequired,
        secure: PropTypes.bool.isRequired
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="49">

---

The <SwmToken path="src/components/RequestFilter.js" pos="49:2:2" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`loadData`</SwmToken> function initializes the <SwmToken path="src/components/RequestFilter.js" pos="49:8:8" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="49:23:23" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="49:32:32" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`secure`</SwmToken> props with default values. It then constructs a <SwmToken path="src/components/RequestFilter.js" pos="50:3:3" line-data="    let requestFilter = {">`requestFilter`</SwmToken> object based on the <SwmToken path="src/components/RequestFilter.js" pos="49:39:39" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`requestMatcher`</SwmToken> and sends this object along with the <SwmToken path="src/components/RequestFilter.js" pos="49:8:8" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="49:23:23" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="49:32:32" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`secure`</SwmToken> props using the <SwmToken path="src/components/RequestFilter.js" pos="49:47:47" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`sendMessage`</SwmToken> function.

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

<SwmSnippet path="/src/components/RequestFilter.js" line="87">

---

# Usage of these props in the <SwmToken path="src/components/RequestFilter.js" pos="89:1:1" line-data="            loadData(nextProps)">`loadData`</SwmToken> function

The <SwmToken path="src/components/RequestFilter.js" pos="87:1:1" line-data="    componentWillReceiveProps(nextProps) {">`componentWillReceiveProps`</SwmToken> lifecycle method calls the <SwmToken path="src/components/RequestFilter.js" pos="89:1:1" line-data="            loadData(nextProps)">`loadData`</SwmToken> function whenever the <SwmToken path="src/components/RequestFilter.js" pos="88:6:6" line-data="        if (nextProps.requestMatcher !== this.props.requestMatcher || nextProps.expanded !== this.props.expanded) {">`requestMatcher`</SwmToken> or <SwmToken path="src/components/RequestFilter.js" pos="88:20:20" line-data="        if (nextProps.requestMatcher !== this.props.requestMatcher || nextProps.expanded !== this.props.expanded) {">`expanded`</SwmToken> props change. This ensures that the <SwmToken path="src/components/RequestFilter.js" pos="50:3:3" line-data="    let requestFilter = {">`requestFilter`</SwmToken> is updated and sent with the current <SwmToken path="src/components/RequestFilter.js" pos="49:8:8" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`host`</SwmToken>, <SwmToken path="src/components/RequestFilter.js" pos="49:23:23" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`port`</SwmToken>, and <SwmToken path="src/components/RequestFilter.js" pos="49:32:32" line-data="const loadData = ({host = &quot;127.0.0.1&quot;, port = &quot;1080&quot;, secure = true, requestMatcher = {}, sendMessage}) =&gt; {">`secure`</SwmToken> values.

```javascript
    componentWillReceiveProps(nextProps) {
        if (nextProps.requestMatcher !== this.props.requestMatcher || nextProps.expanded !== this.props.expanded) {
            loadData(nextProps)
        }
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/App.js" line="37">

---

# How these props are passed and used in the <SwmToken path="src/containers/App.js" pos="38:2:2" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`RequestFilter`</SwmToken> component

In the <SwmToken path="src/containers/App.js" pos="38:7:7" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`App`</SwmToken> component, the <SwmToken path="src/containers/App.js" pos="38:2:2" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`RequestFilter`</SwmToken> component is instantiated with the <SwmToken path="src/containers/App.js" pos="38:4:4" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`host`</SwmToken>, <SwmToken path="src/containers/App.js" pos="38:14:14" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`port`</SwmToken>, and <SwmToken path="src/containers/App.js" pos="38:24:24" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`secure`</SwmToken> props. These values are retrieved from the <SwmToken path="src/containers/App.js" pos="38:7:7" line-data="            &lt;RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/&gt;">`App`</SwmToken> component's static methods.

```javascript
        return (<div>
            <RequestFilter host={App.host()} port={App.port()} secure={App.secure()}/>
            <Grid/>
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
