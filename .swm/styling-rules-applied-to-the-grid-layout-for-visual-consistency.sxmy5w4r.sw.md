---
title: Styling rules applied to the grid layout for visual consistency
---
This document will cover the specific styling rules applied to the grid layout to ensure visual consistency. We'll cover:

1. Styling rules in <SwmPath>[src/containers/Grid.js](src/containers/Grid.js)</SwmPath>
2. Styling rules in <SwmPath>[src/containers/grid.css](src/containers/grid.css)</SwmPath>

<SwmSnippet path="/src/containers/Grid.js" line="19">

---

# Styling rules in <SwmPath>[src/containers/Grid.js](src/containers/Grid.js)</SwmPath>

The <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component in <SwmPath>[src/containers/Grid.js](src/containers/Grid.js)</SwmPath> applies several inline styles to ensure visual consistency. These include margin, width, border style, border width, padding, and minimum width. For example, the outer <SwmToken path="src/containers/Grid.js" pos="29:2:2" line-data="            &lt;div style={{">`div`</SwmToken> has a margin of '1%' and a width of '98%'. Each row within the grid has a dashed border, a margin of '15px 0', padding of '17px 17px', and a minimum width of <SwmToken path="src/containers/Grid.js" pos="38:5:5" line-data="                    minWidth: &quot;1100px&quot;,">`1100px`</SwmToken>. Additionally, the inner <SwmToken path="src/containers/Grid.js" pos="29:2:2" line-data="            &lt;div style={{">`div`</SwmToken> elements have specific widths, minimum widths, and padding to ensure a consistent layout.

```javascript
    render() {
        const {
            entities: {
                activeExpectations = [],
                proxiedRequests = [],
                recordedRequests = [],
                logMessages = [],
            },
        } = this.props;
        return (
            <div style={{
                margin: "1%",
                width: "98%"
            }}>
                <div className="row" style={{
                    borderStyle: "dashed",
                    borderWidth: "1px",
                    margin: "15px 0",
                    padding: "17px 17px",
                    minWidth: "1100px",
                }}>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/grid.css" line="1">

---

# Styling rules in <SwmPath>[src/containers/grid.css](src/containers/grid.css)</SwmPath>

The <SwmPath>[src/containers/grid.css](src/containers/grid.css)</SwmPath> file contains a CSS rule for the <SwmToken path="src/containers/grid.css" pos="1:0:3" line-data=".row:after {">`.row:after`</SwmToken> class. This rule ensures that the content is cleared and displayed as a table, which helps in maintaining the layout consistency. The rule sets the content to an empty string, display to table, and clear to both.

```css
.row:after {
    content: "";
    display: table;
    clear: both;
}
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
