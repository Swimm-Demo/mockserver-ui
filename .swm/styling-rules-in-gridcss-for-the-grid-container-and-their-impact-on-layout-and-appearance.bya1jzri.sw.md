---
title: >-
  Styling rules in grid.css for the Grid container and their impact on layout
  and appearance
---
This document will cover the styling rules defined in <SwmPath>[src/containers/grid.css](src/containers/grid.css)</SwmPath> for the Grid container, including:

1. The <SwmToken path="src/containers/grid.css" pos="1:0:1" line-data=".row:after {">`.row`</SwmToken> class and its impact on layout
2. The <SwmToken path="src/containers/grid.css" pos="7:0:3" line-data="@font-face {">`@font-face`</SwmToken> rule and its effect on appearance.

<SwmSnippet path="/src/containers/grid.css" line="1">

---

# The <SwmToken path="src/containers/grid.css" pos="1:0:1" line-data=".row:after {">`.row`</SwmToken> Class

The <SwmToken path="src/containers/grid.css" pos="1:0:1" line-data=".row:after {">`.row`</SwmToken> class is defined to clear floats and ensure that the container properly wraps its floated child elements. This is achieved using the <SwmToken path="src/containers/grid.css" pos="1:2:3" line-data=".row:after {">`:after`</SwmToken> pseudo-element, which is set to <SwmToken path="src/containers/grid.css" pos="3:1:4" line-data="    display: table;">`display: table`</SwmToken> and <SwmToken path="src/containers/grid.css" pos="4:1:4" line-data="    clear: both;">`clear: both`</SwmToken>.

```css
.row:after {
    content: "";
    display: table;
    clear: both;
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="33">

---

In the <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> component, the <SwmToken path="src/containers/grid.css" pos="1:0:1" line-data=".row:after {">`.row`</SwmToken> class is applied to several <SwmToken path="src/containers/Grid.js" pos="33:2:2" line-data="                &lt;div className=&quot;row&quot; style={{">`div`</SwmToken> elements. This ensures that each row properly contains its floated child elements, preventing layout issues.

```javascript
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

<SwmSnippet path="/src/containers/grid.css" line="7">

---

# The <SwmToken path="src/containers/grid.css" pos="7:0:3" line-data="@font-face {">`@font-face`</SwmToken> Rule

The <SwmToken path="src/containers/grid.css" pos="7:0:3" line-data="@font-face {">`@font-face`</SwmToken> rule defines a custom font, 'Averia Sans Libre', to be used within the Grid container. This rule specifies the font's source files and the unicode range it supports, ensuring consistent typography across different browsers and devices.

```css
@font-face {
    font-family: 'Averia Sans Libre';
    font-style: normal;
    font-weight: 400;
    src: url('/mockserver/dashboard/AveriaSansLibre-Regular.ttf');
    src: url('/mockserver/dashboard/AveriaSansLibre-Regular.woff2') format('woff2'), url('/mockserver/dashboard/AveriaSansLibre-Regular.ttf')  format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="29">

---

The <SwmToken path="src/containers/Grid.js" pos="6:4:4" line-data="import &#39;./grid.css&#39;;">`grid`</SwmToken> container itself is styled with inline styles, including a <SwmToken path="src/containers/Grid.js" pos="31:1:1" line-data="                width: &quot;98%&quot;">`width`</SwmToken> of <SwmToken path="src/containers/Grid.js" pos="31:5:6" line-data="                width: &quot;98%&quot;">`98%`</SwmToken> and a <SwmToken path="src/containers/Grid.js" pos="30:1:1" line-data="                margin: &quot;1%&quot;,">`margin`</SwmToken> of <SwmToken path="src/containers/Grid.js" pos="30:5:6" line-data="                margin: &quot;1%&quot;,">`1%`</SwmToken>. These styles ensure that the container takes up most of the available width while maintaining some spacing around it.

```javascript
            <div style={{
                margin: "1%",
                width: "98%"
            }}>
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
