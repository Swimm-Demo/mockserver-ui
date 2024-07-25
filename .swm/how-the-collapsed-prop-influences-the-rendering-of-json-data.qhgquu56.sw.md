---
title: How the collapsed prop influences the rendering of JSON data
---
This document will cover how the `collapsed` prop influences the rendering of JSON data. We'll cover:

1. The role of the `collapsed` prop in the `JsonItem` component
2. How the `collapsed` prop is used in the `render` method
3. Examples of the `collapsed` prop in action

<SwmSnippet path="/src/components/JsonItem.js" line="12">

---

# The role of the `collapsed` prop in the `JsonItem` component

The `collapsed` prop is defined in the `JsonItem` component's `render` method. It is used to determine whether the JSON data should be displayed in a collapsed or expanded state. By default, it is set to `0`, meaning the data is expanded.

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

<SwmSnippet path="/src/components/JsonItem.js" line="12">

---

# How the `collapsed` prop is used in the `render` method

In the `render` method, the `collapsed` prop is destructured from `this.props`. This prop is then passed down to child `JsonItem` components within the `addDescription` function, ensuring that the collapsed state is consistently applied throughout the nested JSON structure.

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

<SwmSnippet path="/src/components/JsonItem.js" line="22">

---

The `addDescription` function demonstrates how the `collapsed` prop is passed to child `JsonItem` components. Each child component receives the `collapsed` prop with a value of `0`, indicating that they should be rendered in an expanded state. This ensures that the entire JSON structure is displayed fully unless otherwise specified.

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

<SwmSnippet path="/src/components/LogMessage.js" line="118">

---

# Examples of the `collapsed` prop in action

In the `LogMessage` component, the `collapsed` prop is set to `0` when rendering a `JsonItem`. This means that the JSON data within the log message will be displayed in an expanded state by default.

```javascript
                                return <JsonItem key={messagePart.key}
                                                 index={null}
                                                 collapsed="0"
                                                 display={"table-cell"}
                                                 textStyle={{
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
