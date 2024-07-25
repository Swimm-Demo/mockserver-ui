---
title: Functionalities Handled by the Grid Component
---
This document will cover the functionalities managed by the Grid component, which includes:

1. Managing and displaying different types of data
2. Structuring the layout and styling
3. Connecting to the Redux store.

<SwmSnippet path="/src/containers/Grid.js" line="8">

---

# Managing and displaying different types of data

The Grid component is responsible for managing and displaying various types of data. It uses <SwmToken path="src/containers/Grid.js" pos="9:3:3" line-data="    static propTypes = {">`propTypes`</SwmToken> to define the expected data structure, which includes <SwmToken path="src/containers/Grid.js" pos="11:1:1" line-data="            activeExpectations: PropTypes.array.isRequired,">`activeExpectations`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="12:1:1" line-data="            proxiedRequests: PropTypes.array.isRequired,">`proxiedRequests`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="13:1:1" line-data="            recordedRequests: PropTypes.array.isRequired,">`recordedRequests`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="14:1:1" line-data="            logMessages: PropTypes.array.isRequired,">`logMessages`</SwmToken>.

```javascript
class Grid extends Component {
    static propTypes = {
        entities: PropTypes.shape({
            activeExpectations: PropTypes.array.isRequired,
            proxiedRequests: PropTypes.array.isRequired,
            recordedRequests: PropTypes.array.isRequired,
            logMessages: PropTypes.array.isRequired,
        }).isRequired,
        requestFilter: PropTypes.object.isRequired,
    };
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="19">

---

In the <SwmToken path="src/containers/Grid.js" pos="19:1:1" line-data="    render() {">`render`</SwmToken> method, the Grid component extracts these data types from the <SwmToken path="src/containers/Grid.js" pos="21:1:1" line-data="            entities: {">`entities`</SwmToken> prop and prepares them for rendering.

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
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="29">

---

The Grid component uses the <SwmToken path="src/containers/Grid.js" pos="40:2:2" line-data="                    &lt;LogList items={logMessages}">`LogList`</SwmToken> component to display <SwmToken path="src/containers/Grid.js" pos="40:7:7" line-data="                    &lt;LogList items={logMessages}">`logMessages`</SwmToken> with a header indicating that the most recent messages are at the top.

```javascript
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
                    <LogList items={logMessages}
                             header={"Log Messages (most recent at the top)"}/>
                </div>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="43">

---

Similarly, it uses the <SwmToken path="src/containers/Grid.js" pos="50:2:2" line-data="                    &lt;JsonList items={activeExpectations}">`JsonList`</SwmToken> component to display <SwmToken path="src/containers/Grid.js" pos="50:7:7" line-data="                    &lt;JsonList items={activeExpectations}">`activeExpectations`</SwmToken> with a header indicating the order in which they are applied.

```javascript
                <div className="row" style={{
                    borderStyle: "dashed",
                    borderWidth: "1px",
                    margin: "15px 0",
                    padding: "17px 17px",
                    minWidth: "1100px",
                }}>
                    <JsonList items={activeExpectations}
                              header={"Active Expectations (in the order they are applied)"}
                              reverseIndex={false}/>
                </div>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="54">

---

The Grid component also displays <SwmToken path="src/containers/Grid.js" pos="70:7:7" line-data="                        &lt;JsonList items={recordedRequests}">`recordedRequests`</SwmToken> and <SwmToken path="src/containers/Grid.js" pos="12:1:1" line-data="            proxiedRequests: PropTypes.array.isRequired,">`proxiedRequests`</SwmToken> using the <SwmToken path="src/containers/Grid.js" pos="70:2:2" line-data="                        &lt;JsonList items={recordedRequests}">`JsonList`</SwmToken> component, each with appropriate headers.

```javascript
                <div className="row" style={{
                    borderStyle: "dashed",
                    borderWidth: "1px",
                    margin: "15px 0",
                    padding: "17px 17px",
                    minWidth: "1100px",
                }}>
                    <div style={{
                        width: "49%",
                        minWidth: "500px",
                        float: "left",
                        padding: "0",
                        paddingRight: "1%",
                        borderRightStyle: "dashed",
                        borderRightWidth: "1px",
                    }}>
                        <JsonList items={recordedRequests}
                                  header={"Received Requests (most recent at the top)"}/>
                    </div>
                    <div style={{
                        width: "49%",
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="29">

---

# Structuring the layout and styling

The Grid component uses inline styles to manage the layout and styling of its elements. For example, it sets the margin and width of the main container.

```javascript
            <div style={{
                margin: "1%",
                width: "98%"
            }}>
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="33">

---

Each row within the Grid component is styled with dashed borders, margins, padding, and a minimum width to ensure a consistent layout.

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

<SwmSnippet path="/src/containers/grid.css" line="1">

---

Additional styling is provided in the <SwmPath>[src/containers/grid.css](src/containers/grid.css)</SwmPath> file, such as the <SwmToken path="src/containers/grid.css" pos="1:0:3" line-data=".row:after {">`.row:after`</SwmToken> class which ensures that rows clear their floated children.

```css
.row:after {
    content: "";
    display: table;
    clear: both;
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="87">

---

# Connecting to the Redux store

The Grid component is connected to the Redux store using the <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> function. This function maps the state properties <SwmToken path="src/containers/Grid.js" pos="89:1:1" line-data="        activeExpectations = [],">`activeExpectations`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="90:1:1" line-data="        proxiedRequests = [],">`proxiedRequests`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="91:1:1" line-data="        recordedRequests = [],">`recordedRequests`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="92:1:1" line-data="        logMessages = [],">`logMessages`</SwmToken> to the component's props.

```javascript
const mapStateToProps = (state) => {
    const {
        activeExpectations = [],
        proxiedRequests = [],
        recordedRequests = [],
        logMessages = [],
    } = state.entities;

    const {
        requestFilter = {}
    } = state;

    return {
        entities: {
            activeExpectations,
            proxiedRequests,
            recordedRequests,
            logMessages,
        },
        requestFilter
    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="112">

---

The <SwmToken path="src/containers/Grid.js" pos="112:4:4" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`connect`</SwmToken> function from <SwmToken path="src/containers/Grid.js" pos="3:9:11" line-data="import {connect} from &#39;react-redux&#39;;">`react-redux`</SwmToken> is used to connect the Grid component to the Redux store, passing in <SwmToken path="src/containers/Grid.js" pos="112:6:6" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapStateToProps`</SwmToken> and an empty <SwmToken path="src/containers/Grid.js" pos="112:9:9" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapDispatchToProps`</SwmToken>.

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
