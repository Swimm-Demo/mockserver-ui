---
title: Practical use cases for the group property
---
This document will cover the practical use cases for the `group` property in `LogMessage`. We'll cover:

1. Definition and Purpose of the `group` Property
2. How the `group` Property is Used in the Codebase
3. Practical Use Cases for the `group` Property

<SwmSnippet path="/src/components/LogMessage.js" line="7">

---

# Definition and Purpose of the `group` Property

The `group` property is defined in the `LogMessage` component's `propTypes`. It is an optional object that can be used to group log messages together.

```javascript
    static propTypes = {
        logMessage: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.array.isRequired]).isRequired,
        group: PropTypes.object
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="27">

---

# How the `group` Property is Used in the Codebase

The `group` property is destructured from `this.props` in the `LogMessage` component. If `group` is provided, it is used to render grouped log messages.

```javascript
        const {
            logMessage = {},
            group = false,
            indent = false,
        } = this.props;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="177">

---

When the `group` property is present, the `LogMessage` component renders a `details` HTML element with a `summary` that contains the grouped log messages. This allows for collapsible log message groups.

```javascript
        if (group) {
            return (<details className={"logGroup"}>
                <summary style={{
                    color: "rgb(222, 147, 95)",
                    // backgroundColor: "rgb(43, 52, 62)"
                }}><LogMessage key={group.key + "_summary"}
                               logMessage={group.value}/></summary>
                <div style={{
                    borderStyle: "dashed",
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/LogList.js" line="40">

---

In the `LogList` component, the `group` property is passed to each `LogMessage` component. This enables the grouping functionality for log messages within the list.

```javascript
                    }}>{items.map((item, index) => <LogMessage index={index}
                                                               key={item.key}
                                                               group={item.group}
                                                               logMessage={item.value}/>)}</div>
```

---

</SwmSnippet>

# Practical Use Cases for the `group` Property

The `group` property in `LogMessage` is particularly useful for organizing and displaying related log messages together. For example, if you have multiple log messages that are part of the same transaction or request, you can group them together to make it easier to understand the sequence of events. This is especially helpful in debugging scenarios where you need to trace the flow of operations.

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
