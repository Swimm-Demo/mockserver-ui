---
title: >-
  How the JsonList component renders lists of JSON items and its key props and
  functions
---
This document will cover how the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component renders lists of JSON items and its key props and functions. We'll cover:

1. The purpose and structure of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component
2. Key props of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component
3. Key functions of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component
4. How the <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> component is used within <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken>

<SwmSnippet path="/src/containers/JsonList.js" line="6">

---

# Purpose and Structure of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> Component

The <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component is designed to render a list of JSON items. It takes in a header and an array of items, each containing a key, description, and value. The component is structured to display these items in a scrollable container.

```javascript
export default class JsonList extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,
            value: PropTypes.object.isRequired
        })).isRequired,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/JsonList.js" line="7">

---

# Key Props of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> Component

The <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component has several key props:

- <SwmToken path="src/containers/JsonList.js" pos="8:1:1" line-data="        header: PropTypes.string.isRequired,">`header`</SwmToken>: A string that serves as the header for the list.
- <SwmToken path="src/containers/JsonList.js" pos="9:1:1" line-data="        items: PropTypes.arrayOf(PropTypes.shape({">`items`</SwmToken>: An array of objects, each containing a <SwmToken path="src/containers/JsonList.js" pos="10:1:1" line-data="            key: PropTypes.string.isRequired,">`key`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="11:1:1" line-data="            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,">`description`</SwmToken>, and <SwmToken path="src/containers/JsonList.js" pos="12:1:1" line-data="            value: PropTypes.object.isRequired">`value`</SwmToken>.

```javascript
    static propTypes = {
        header: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,
            value: PropTypes.object.isRequired
        })).isRequired,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/JsonList.js" line="17">

---

The <SwmToken path="src/containers/JsonList.js" pos="16:1:1" line-data="    render() {">`render`</SwmToken> method destructures the props to extract <SwmToken path="src/containers/JsonList.js" pos="18:1:1" line-data="            header = &quot;&quot;,">`header`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="19:1:1" line-data="            items = [],">`items`</SwmToken>, and <SwmToken path="src/containers/JsonList.js" pos="20:1:1" line-data="            reverseIndex = true">`reverseIndex`</SwmToken>. These are used to control the rendering of the list.

```javascript
        const {
            header = "",
            items = [],
            reverseIndex = true
        } = this.props;
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/JsonList.js" line="16">

---

# Key Functions of the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> Component

The <SwmToken path="src/containers/JsonList.js" pos="16:1:1" line-data="    render() {">`render`</SwmToken> method is the key function in the <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken> component. It returns a JSX structure that includes a <SwmToken path="src/containers/JsonList.js" pos="26:2:2" line-data="                &lt;ListHeader text={header}/&gt;">`ListHeader`</SwmToken> component and a scrollable div containing the list of <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> components. Each <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> is rendered with its <SwmToken path="src/containers/JsonList.js" pos="37:10:10" line-data="                    {items.map((item, index) =&gt; {">`index`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="10:1:1" line-data="            key: PropTypes.string.isRequired,">`key`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="11:1:1" line-data="            description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]).isRequired,">`description`</SwmToken>, and <SwmToken path="src/containers/JsonList.js" pos="12:1:1" line-data="            value: PropTypes.object.isRequired">`value`</SwmToken>.

```javascript
    render() {
        const {
            header = "",
            items = [],
            reverseIndex = true
        } = this.props;
        return (
            <div style={{
                padding: "2px 0"
            }}>
                <ListHeader text={header}/>
                <div style={{
                    overflowY: "scroll",
                    maxHeight: "700px",
                    minHeight: "100px",
                    borderRadius: "5px",
                    margin: "2px 0px 3px",
                    padding: "5px",
                    backgroundColor: "rgb(29, 31, 33)",
                    color: "rgb(250, 250, 250)",
                }}>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/JsonList.js" line="37">

---

# How the <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> Component is Used within <SwmToken path="src/containers/JsonList.js" pos="6:6:6" line-data="export default class JsonList extends Component {">`JsonList`</SwmToken>

Within the <SwmToken path="src/containers/JsonList.js" pos="16:1:1" line-data="    render() {">`render`</SwmToken> method, the <SwmToken path="src/containers/JsonList.js" pos="37:2:2" line-data="                    {items.map((item, index) =&gt; {">`items`</SwmToken> array is mapped over to create a list of <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> components. Each <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken> is passed props such as <SwmToken path="src/containers/JsonList.js" pos="37:10:10" line-data="                    {items.map((item, index) =&gt; {">`index`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="39:1:1" line-data="                                         key={item.key}">`key`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="40:1:1" line-data="                                         display={&quot;table-cell&quot;}">`display`</SwmToken>, <SwmToken path="src/containers/JsonList.js" pos="41:1:1" line-data="                                         description={item.description}">`description`</SwmToken>, and <SwmToken path="src/containers/JsonList.js" pos="38:4:4" line-data="                        return &lt;JsonItem index={reverseIndex ? items.length - index : index + 1}">`JsonItem`</SwmToken>.

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

<SwmSnippet path="/src/components/JsonItem.js" line="6">

---

The <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> component itself has its own set of props, including <SwmToken path="src/components/JsonItem.js" pos="8:1:1" line-data="        description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),">`description`</SwmToken> and <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken>, which are used to render individual JSON items.

```javascript
export default class JsonItem extends Component {
    static propTypes = {
        description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),
        jsonItem: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.array.isRequired]).isRequired,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="12">

---

The <SwmToken path="src/components/JsonItem.js" pos="12:1:1" line-data="    render() {">`render`</SwmToken> method of <SwmToken path="src/components/JsonItem.js" pos="15:1:1" line-data="            jsonItem = null,">`jsonItem`</SwmToken> takes in several props, including <SwmToken path="src/components/JsonItem.js" pos="14:1:1" line-data="            collapsed = 0,">`collapsed`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="15:1:1" line-data="            jsonItem = null,">`jsonItem`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="16:1:1" line-data="            description = null,">`description`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="17:1:1" line-data="            display = &quot;inline-block&quot;,">`display`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="18:1:1" line-data="            enableClipboard = true,">`enableClipboard`</SwmToken>, and <SwmToken path="src/components/JsonItem.js" pos="19:1:1" line-data="            textStyle = {}">`textStyle`</SwmToken>. These are used to control the rendering of each JSON item.

```javascript
    render() {
        const {
            collapsed = 0,
            jsonItem = null,
            description = null,
            display = "inline-block",
            enableClipboard = true,
            textStyle = {}
        } = this.props;
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
