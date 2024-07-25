---
title: What is JsonItem Component
---
<SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> is a React component designed to render JSON data in a structured and readable format.

It uses the <SwmToken path="src/components/JsonItem.js" pos="89:9:9" line-data="                return addDescription(description, &lt;ReactJson src={jsonItem}">`ReactJson`</SwmToken> library to display JSON objects, arrays, or strings with various customization options.

The component accepts several props, including <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken>, which is the JSON data to be displayed, and <SwmToken path="src/components/JsonItem.js" pos="8:1:1" line-data="        description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),">`description`</SwmToken>, which provides additional context or metadata about the JSON data.

The <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> prop can be a string, object, or array, and it is required for the component to function.

The <SwmToken path="src/components/JsonItem.js" pos="8:1:1" line-data="        description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),">`description`</SwmToken> prop can also be a string or object and is used to add descriptive information alongside the JSON data.

The <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> component includes a helper function <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken> to handle the rendering of the description alongside the JSON data.

Depending on the type of <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken>, the component either renders the JSON data using <SwmToken path="src/components/JsonItem.js" pos="89:9:9" line-data="                return addDescription(description, &lt;ReactJson src={jsonItem}">`ReactJson`</SwmToken> or displays it as a preformatted text block.

The component also supports various display options such as collapsing JSON nodes, enabling clipboard functionality, and customizing text styles.

<SwmSnippet path="/src/components/JsonItem.js" line="6">

---

# <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> Component

The <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> component is defined as a React class component. It uses <SwmToken path="src/components/JsonItem.js" pos="7:3:3" line-data="    static propTypes = {">`propTypes`</SwmToken> to enforce the types of its props, ensuring that <SwmToken path="src/components/JsonItem.js" pos="6:6:6" line-data="export default class JsonItem extends Component {">`JsonItem`</SwmToken> is always provided and can be a string, object, or array.

```javascript
export default class JsonItem extends Component {
    static propTypes = {
        description: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.string.isRequired]),
        jsonItem: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.array.isRequired]).isRequired,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="13">

---

# Props Destructuring

The component destructures its props to extract values like <SwmToken path="src/components/JsonItem.js" pos="14:1:1" line-data="            collapsed = 0,">`collapsed`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="15:1:1" line-data="            jsonItem = null,">`jsonItem`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="16:1:1" line-data="            description = null,">`description`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="17:1:1" line-data="            display = &quot;inline-block&quot;,">`display`</SwmToken>, <SwmToken path="src/components/JsonItem.js" pos="18:1:1" line-data="            enableClipboard = true,">`enableClipboard`</SwmToken>, and <SwmToken path="src/components/JsonItem.js" pos="19:1:1" line-data="            textStyle = {}">`textStyle`</SwmToken>. These values are used to control the rendering and behavior of the component.

```javascript
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

<SwmSnippet path="/src/components/JsonItem.js" line="87">

---

# Rendering JSON Data

If <SwmToken path="src/components/JsonItem.js" pos="87:6:6" line-data="        if (typeof jsonItem === &quot;object&quot; || Array.isArray(jsonItem)) {">`jsonItem`</SwmToken> is an object or array, the component uses the <SwmToken path="src/components/JsonItem.js" pos="89:9:9" line-data="                return addDescription(description, &lt;ReactJson src={jsonItem}">`ReactJson`</SwmToken> library to render the JSON data. It applies various styles and options to customize the display, such as collapsing nodes and enabling clipboard functionality.

```javascript
        if (typeof jsonItem === "object" || Array.isArray(jsonItem)) {
            if (description) {
                return addDescription(description, <ReactJson src={jsonItem}
                                                              key={"json"}
                                                              style={{
                                                                  whiteSpace: "nowrap",
                                                                  paddingTop: "6px",
                                                                  top: "-2px",
                                                                  display: display,
                                                              }}
                                                              name={null}
                                                              theme={"tomorrow"}
                                                              iconStyle={"triangle"}
                                                              indentWidth={4}
                                                              collapsed={collapsed != null ? collapsed : 0}
                                                              shouldCollapse={() => {
                                                                  return false
                                                              }}
                                                              enableClipboard={enableClipboard}
                                                              displayObjectSize={false}
                                                              displayDataTypes={false}
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="135">

---

# Rendering String Data

If <SwmToken path="src/components/JsonItem.js" pos="135:10:10" line-data="        } else if (typeof jsonItem === &quot;string&quot;) {">`jsonItem`</SwmToken> is a string, the component renders it as a preformatted text block, applying any provided text styles.

```javascript
        } else if (typeof jsonItem === "string") {
            return (<pre style={textStyle}>{jsonItem}</pre>);
        } else {
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="22">

---

# Adding Description

The <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken> function is a helper function that handles the rendering of the description alongside the JSON data. It checks if the description is a JSON object and renders it accordingly.

```javascript
        function addDescription(description, jsonDiv) {
            if (description.json) {
                return <div key={"description"}
                            style={{
                                display: "table-row",
                                maxWidth: "200px",
                                overflow: "hidden"
                            }}>
                    <JsonItem key={"description_first"}
                              index={null}
                              collapsed="0"
                              display={"inline-block"}
                              textStyle={{
                                  fontFamily: "monospace, Roboto, sans-serif",
                                  display: "table-cell",
                                  padding: "5px",
                              }}
                              enableClipboard={false}
                              jsonItem={description.first}/>
                    <JsonItem key={"description_object"}
                              index={null}
```

---

</SwmSnippet>

# Main functions

There are several main functions in this component. Some of them are render and <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken>. We will dive a little into render and <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken>.

<SwmSnippet path="/src/components/JsonItem.js" line="12">

---

## render

The <SwmToken path="src/components/JsonItem.js" pos="12:1:1" line-data="    render() {">`render`</SwmToken> function is the core of the <SwmToken path="src/components/JsonItem.js" pos="15:1:1" line-data="            jsonItem = null,">`jsonItem`</SwmToken> component. It determines how the JSON data and its description are displayed. It checks the type of <SwmToken path="src/components/JsonItem.js" pos="15:1:1" line-data="            jsonItem = null,">`jsonItem`</SwmToken> and renders it accordingly using <SwmToken path="src/components/JsonItem.js" pos="89:9:9" line-data="                return addDescription(description, &lt;ReactJson src={jsonItem}">`ReactJson`</SwmToken> or as a preformatted text block.

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

        function addDescription(description, jsonDiv) {
            if (description.json) {
                return <div key={"description"}
                            style={{
                                display: "table-row",
                                maxWidth: "200px",
                                overflow: "hidden"
                            }}>
                    <JsonItem key={"description_first"}
                              index={null}
                              collapsed="0"
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="22">

---

## <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken>

The <SwmToken path="src/components/JsonItem.js" pos="22:3:3" line-data="        function addDescription(description, jsonDiv) {">`addDescription`</SwmToken> function is a helper function within the <SwmToken path="src/components/JsonItem.js" pos="30:2:2" line-data="                    &lt;JsonItem key={&quot;description_first&quot;}">`JsonItem`</SwmToken> component. It handles the rendering of the description alongside the JSON data. If the description contains JSON, it recursively renders <SwmToken path="src/components/JsonItem.js" pos="30:2:2" line-data="                    &lt;JsonItem key={&quot;description_first&quot;}">`JsonItem`</SwmToken> components for each part of the description.

```javascript
        function addDescription(description, jsonDiv) {
            if (description.json) {
                return <div key={"description"}
                            style={{
                                display: "table-row",
                                maxWidth: "200px",
                                overflow: "hidden"
                            }}>
                    <JsonItem key={"description_first"}
                              index={null}
                              collapsed="0"
                              display={"inline-block"}
                              textStyle={{
                                  fontFamily: "monospace, Roboto, sans-serif",
                                  display: "table-cell",
                                  padding: "5px",
                              }}
                              enableClipboard={false}
                              jsonItem={description.first}/>
                    <JsonItem key={"description_object"}
                              index={null}
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
