---
title: The roles of JsonList and LogList components within the Grid component
---
This document will cover the roles of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> components within the <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component. We'll cover:

1. The purpose of <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken>
2. How <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> are integrated into <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken>
3. The data flow and rendering process of these components.

# The purpose of <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken>

The <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> components are designed to display lists of JSON objects and log messages, respectively. They are used to present structured data in a scrollable and styled format.

<SwmSnippet path="/src/containers/JsonList.js" line="6">

---

# The purpose of <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken>

The <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component expects a <SwmToken path="src/containers/JsonList.js" pos="8:1:1" line-data="        header: PropTypes.string.isRequired,">`header`</SwmToken> and an array of <SwmToken path="src/containers/JsonList.js" pos="9:1:1" line-data="        items: PropTypes.arrayOf(PropTypes.shape({">`items`</SwmToken> as props. Each item should have a <SwmToken path="src/containers/JsonList.js" pos="10:1:1" line-data="            key: PropTypes.string.isRequired,">`key`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="11:1:1" line-data="            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,">`description`</SwmToken>, and <SwmToken path="src/containers/JsonList.js" pos="12:1:1" line-data="            value: PropTypes.object.isRequired">`value`</SwmToken>.

```javascript
export default class JsonList extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,
            value: PropTypes.object.isRequired
        })).isRequired,
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/LogList.js" line="6">

---

Similarly, the <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> component expects a <SwmToken path="src/containers/LogList.js" pos="8:1:1" line-data="        header: PropTypes.string.isRequired,">`header`</SwmToken> and an array of <SwmToken path="src/containers/LogList.js" pos="9:1:1" line-data="        items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({">`items`</SwmToken> as props. Each item should have a <SwmToken path="src/containers/LogList.js" pos="10:1:1" line-data="            key: PropTypes.string.isRequired,">`key`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="11:1:1" line-data="            value: PropTypes.object.isRequired">`value`</SwmToken>.

```javascript
export default class LogList extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired,
        items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.object.isRequired
        })).isRequired, PropTypes.array.isRequired]).isRequired,
    };
```

---

</SwmSnippet>

# How <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> are integrated into Grid

The <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component integrates both <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> to display proxied requests and log messages, respectively.

<SwmSnippet path="/src/containers/Grid.js" line="38">

---

# How <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/Grid.js" pos="40:2:2" line-data="                    &lt;LogList items={logMessages}">`LogList`</SwmToken> are integrated into Grid

The <SwmToken path="src/containers/Grid.js" pos="40:2:2" line-data="                    &lt;LogList items={logMessages}">`LogList`</SwmToken> component is used within the <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component to display log messages. It is passed the <SwmToken path="src/containers/Grid.js" pos="40:7:7" line-data="                    &lt;LogList items={logMessages}">`logMessages`</SwmToken> array and a header.

```javascript
                    minWidth: "1100px",
                }}>
                    <LogList items={logMessages}
                             header={"Log Messages (most recent at the top)"}/>
                </div>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="76">

---

The <SwmToken path="src/containers/Grid.js" pos="78:2:2" line-data="                        &lt;JsonList items={proxiedRequests}">`JsonList`</SwmToken> component is used within the <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component to display proxied requests. It is passed the <SwmToken path="src/containers/Grid.js" pos="78:7:7" line-data="                        &lt;JsonList items={proxiedRequests}">`proxiedRequests`</SwmToken> array and a header.

```javascript
                        float: "right"
                    }}>
                        <JsonList items={proxiedRequests}
                                  header={"Proxied Requests (most recent at the top)"}/>
                    </div>
```

---

</SwmSnippet>

# The data flow and rendering process

Both <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> follow a similar rendering process. They map over their respective <SwmToken path="src/containers/JsonList.js" pos="9:1:1" line-data="        items: PropTypes.arrayOf(PropTypes.shape({">`items`</SwmToken> arrays and render each item using a specific component (<SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> for <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> and <SwmToken path="src/containers/LogList.js" pos="40:19:19" line-data="                    }}&gt;{items.map((item, index) =&gt; &lt;LogMessage index={index}">`LogMessage`</SwmToken> for <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken>).

<SwmSnippet path="/src/containers/JsonList.js" line="37">

---

# The data flow and rendering process

The <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component maps over the <SwmToken path="src/containers/JsonList.js" pos="37:2:2" line-data="                    {items.map((item, index) =&gt; {">`items`</SwmToken> array and renders each item using the <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> component.

```javascript
                    {items.map((item, index) => {
                        return <JsonItem index={reverseIndex ? items.length - index : index + 1}
                                         key={item.key}
                                         display={"table-cell"}
                                         description={item.description}
                                         jsonItem={item.value}/>;
                    })}
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/LogList.js" line="36">

---

The <SwmToken path="src/containers/LogList.js" pos="6:6:6" line-data="export default class LogList extends Component {">`LogList`</SwmToken> component maps over the <SwmToken path="src/containers/LogList.js" pos="40:5:5" line-data="                    }}&gt;{items.map((item, index) =&gt; &lt;LogMessage index={index}">`items`</SwmToken> array and renders each item using the <SwmToken path="src/containers/LogList.js" pos="40:19:19" line-data="                    }}&gt;{items.map((item, index) =&gt; &lt;LogMessage index={index}">`LogMessage`</SwmToken> component.

```javascript
                    <div style={{
                        borderCollapse: "collapse",
                        display: "table",
                        minWidth: "100%"
                    }}>{items.map((item, index) => <LogMessage index={index}
                                                               key={item.key}
                                                               group={item.group}
                                                               logMessage={item.value}/>)}</div>
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
