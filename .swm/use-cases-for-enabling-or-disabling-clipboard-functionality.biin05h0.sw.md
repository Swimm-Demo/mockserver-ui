---
title: Use cases for enabling or disabling clipboard functionality
---
This document will cover the use cases for enabling or disabling the clipboard functionality, which includes:

1. What is clipboard functionality
2. How clipboard functionality is used in the codebase
3. Use cases for enabling clipboard functionality
4. Use cases for disabling clipboard functionality

# What is clipboard functionality

Clipboard functionality allows users to copy content to their clipboard. In the context of this project, it is controlled by the `enableClipboard` property.

<SwmSnippet path="/src/components/JsonItem.js" line="16">

---

# How clipboard functionality is used in the codebase

The `enableClipboard` property is defined in the `JsonItem` component. By default, it is set to `true`, allowing clipboard functionality.

```javascript
            description = null,
            display = "inline-block",
            enableClipboard = true,
            textStyle = {}
        } = this.props;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/JsonItem.js" line="37">

---

In this instance, the `enableClipboard` property is explicitly set to `false`, disabling clipboard functionality for this specific `JsonItem`.

```javascript
                                  padding: "5px",
                              }}
                              enableClipboard={false}
                              jsonItem={description.first}/>
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="129">

---

Here, the `enableClipboard` property is set to `true` in the `LogMessage` component, enabling clipboard functionality.

```javascript
                                                     letterSpacing: "0.08em",
                                                 }}
                                                 enableClipboard={true}
                                                 jsonItem={typeof messagePart.value === "number" ? "" + messagePart.value : messagePart.value}/>;
```

---

</SwmSnippet>

# Use cases for enabling clipboard functionality

Enabling clipboard functionality is useful when users need to easily copy content for further use. For example, in the `LogMessage` component, enabling clipboard functionality allows users to copy log messages for debugging or reporting purposes.

# Use cases for disabling clipboard functionality

Disabling clipboard functionality can be useful in scenarios where copying content is not necessary or could lead to security concerns. For example, in the `JsonItem` component, disabling clipboard functionality might be appropriate if the content is sensitive or should not be easily copied.

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
