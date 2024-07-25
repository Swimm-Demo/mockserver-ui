---
title: RenderItem function logic
---
This document will cover the logic behind the `renderItem` function in the `LogMessage` component. We'll cover:

1. Purpose of the `renderItem` function
2. How `renderItem` processes log messages
3. How `renderItem` handles different message parts

<SwmSnippet path="/src/components/LogMessage.js" line="33">

---

# Purpose of the `renderItem` function

The `renderItem` function is responsible for rendering individual log messages within the `LogMessage` component. It takes a `logMessage` object as input and returns a JSX element that represents the log message.

```javascript
        function renderItem(logMessage) {
            let cellStyle = {
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="34">

---

# How `renderItem` processes log messages

The function starts by defining a `cellStyle` object for consistent styling. It then returns a `div` element styled with padding and font size, containing another `div` for the log message description.

```javascript
            let cellStyle = {
                display: "table-cell",
                fontFamily: "monospace, Roboto, sans-serif"
            };
            return <div style={Object.assign({
                paddingLeft: "5px",
                paddingRight: "5px",
                fontSize: indent ? "0.9em" : "1.0em"
            }, logMessage.style)}>
                <div style={Object.assign({
                    whiteSpace: "pre",
                    position: "relative",
                }, cellStyle)}>{logMessage.description}</div>
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="47">

---

If the `logMessage` contains `messageParts`, the function maps over these parts. For each part, if it has a `value` and no `argument`, it returns a `div` with the value processed by the `addLinks` function.

```javascript
                {logMessage.messageParts ? logMessage.messageParts.map((messagePart) => {
                    if (messagePart.value) {
                        if (!messagePart.argument) {
                            return <div key={messagePart.key}
                                        style={cellStyle}>{addLinks(messagePart.value)}</div>;
                        } else {
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="53">

---

If the `messagePart` has an `argument` and is either `multiline` or `because`, it processes each line of the value. It sets the color based on whether the line contains 'matched' or 'didn't match', and returns a `span` for each line.

```javascript
                            if (messagePart.multiline || messagePart.because) {
                                let line = messagePart.value.map(
                                    (reason, index) => {
                                        let color = "rgb(255, 255, 255)";
                                        if (messagePart.because) {
                                            if (reason.indexOf("matched") !== -1) {
                                                color = "rgb(107, 199, 118)";
                                            } else if (reason.indexOf("didn't match") !== -1) {
                                                color = "rgb(216, 88, 118)";
                                            } else {
                                                color = "rgb(255, 255, 255)";
                                            }
                                        }
                                        return <span key={messagePart.key + "_" + index}
                                                     style={{
                                                         marginTop: "-10px",
                                                         color: color,
                                                         display: "block",
                                                         fontSize: "0.95em",
                                                         lineHeight: "1.5em",
                                                         whiteSpace: "pre",
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="77">

---

The function then wraps these lines in a `details` element with a `summary`, allowing the user to expand and collapse the detailed view of the message part.

```javascript
                                    }
                                );
                                return <div key={messagePart.key}
                                            style={Object.assign({paddingLeft: "5px",}, cellStyle)}>
                                    <details className={"because"}>
                                        <summary style={{
                                            color: "rgb(222, 147, 95)",
                                            fontSize: "19px",
                                            lineHeight: "25px",
                                            paddingLeft: "5px",
                                            paddingTop: "0px",
                                            marginTop: "-1px",
                                        }}><span>
                                            <svg className={"summaryClosed"} viewBox="0 0 15 15" fill="currentColor" style={{
                                                verticalAlign: "top",
                                                color: "rgb(178, 148, 187)",
                                                height: "1em",
                                                width: "1em",
                                                paddingLeft: "2px",
                                                paddingTop: "5px"
                                            }}>
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="117">

---

If the `messagePart` contains JSON, it returns a `JsonItem` component to render the JSON data.

```javascript
                            } else if (messagePart.json) {
                                return <JsonItem key={messagePart.key}
                                                 index={null}
                                                 collapsed="0"
                                                 display={"table-cell"}
                                                 textStyle={{
                                                     fontFamily: "monospace, Roboto, sans-serif",
                                                     color: "rgb(255, 255, 255)",
                                                     display: "table-cell",
                                                     paddingLeft: "5px",
                                                     paddingRight: "5px",
                                                     whiteSpace: "pre",
                                                     letterSpacing: "0.08em",
                                                 }}
                                                 enableClipboard={true}
                                                 jsonItem={typeof messagePart.value === "number" ? "" + messagePart.value : messagePart.value}/>;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="133">

---

For other types of `messagePart`, it returns a `div` with the value processed by the `addLinks` function.

```javascript
                            } else {
                                return <div key={messagePart.key}
                                            style={{
                                                fontFamily: "Roboto, sans-serif",
                                                color: "rgb(255, 255, 255)",
                                                display: "table-cell",
                                                paddingLeft: "5px",
                                                paddingRight: "5px",
                                                whiteSpace: "pre",
                                                letterSpacing: "0.08em",
                                            }}>{addLinks(messagePart.value)}</div>;
                            }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="147">

---

If there are no `messageParts`, it returns an empty `span`.

```javascript
                        return <span/>;
                    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="149">

---

If the `logMessage` is a group, it returns a `details` element with a `summary` and a list of nested `LogMessage` components.

```javascript
                }) : <div style={Object.assign({
                    fontSize: "19px",
                    lineHeight: "25px"
                }, cellStyle)}>
                    <svg className={"logGroupSummaryClosed"} viewBox="0 0 15 15" fill="currentColor" style={{
                        verticalAlign: "top",
                        color: "rgb(178, 148, 187)",
                        height: "1em",
                        width: "1em",
                        paddingLeft: "2px",
                        paddingTop: "5px",
                    }}>
                        <path d="M0 14l6-6-6-6z"/>
                    </svg>
                    <svg className={"logGroupSummaryOpen"} viewBox="0 0 15 15" fill="currentColor" style={{
                        verticalAlign: "top",
                        color: "rgb(129, 162, 190)",
                        height: "1em",
                        width: "1em",
                        paddingLeft: "2px",
                        paddingTop: "5px",
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
