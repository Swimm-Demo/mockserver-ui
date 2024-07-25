---
title: How the state is mapped to the Grid component using mapStateToProps
---
This document will cover how the state is mapped to the Grid component via <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken>. We'll cover:

1. The purpose of <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken>
2. How <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> is implemented in <SwmPath>[src/containers/Grid.js](src/containers/Grid.js)</SwmPath>
3. How the state is structured and passed to the Grid component

# The purpose of <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken>

The function <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> is used in Redux to specify which parts of the state should be passed as props to a connected component. This allows the component to access the necessary state data without directly subscribing to the store.

<SwmSnippet path="/src/containers/Grid.js" line="87">

---

# How <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> is implemented in <SwmPath>[src/containers/Grid.js](src/containers/Grid.js)</SwmPath>

The function <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> extracts specific pieces of state and maps them to the props of the Grid component. It pulls out <SwmToken path="src/containers/Grid.js" pos="89:1:1" line-data="        activeExpectations = [],">`activeExpectations`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="90:1:1" line-data="        proxiedRequests = [],">`proxiedRequests`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="91:1:1" line-data="        recordedRequests = [],">`recordedRequests`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="92:1:1" line-data="        logMessages = [],">`logMessages`</SwmToken> from <SwmToken path="src/containers/Grid.js" pos="93:5:7" line-data="    } = state.entities;">`state.entities`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="96:1:1" line-data="        requestFilter = {}">`requestFilter`</SwmToken> from <SwmToken path="src/containers/Grid.js" pos="87:7:7" line-data="const mapStateToProps = (state) =&gt; {">`state`</SwmToken>.

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

<SwmSnippet path="/src/containers/Grid.js" line="8">

---

# How the state is structured and passed to the Grid component

The Grid component expects its props to include an <SwmToken path="src/containers/Grid.js" pos="10:1:1" line-data="        entities: PropTypes.shape({">`entities`</SwmToken> object with arrays for <SwmToken path="src/containers/Grid.js" pos="11:1:1" line-data="            activeExpectations: PropTypes.array.isRequired,">`activeExpectations`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="12:1:1" line-data="            proxiedRequests: PropTypes.array.isRequired,">`proxiedRequests`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="13:1:1" line-data="            recordedRequests: PropTypes.array.isRequired,">`recordedRequests`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="14:1:1" line-data="            logMessages: PropTypes.array.isRequired,">`logMessages`</SwmToken>, as well as a <SwmToken path="src/containers/Grid.js" pos="16:1:1" line-data="        requestFilter: PropTypes.object.isRequired,">`requestFilter`</SwmToken> object. These props are validated using <SwmToken path="src/containers/Grid.js" pos="9:3:3" line-data="    static propTypes = {">`propTypes`</SwmToken>.

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

In the render method of the Grid component, the props are destructured to extract the necessary data. This data is then used to render various lists within the component.

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

<SwmSnippet path="/src/containers/Grid.js" line="112">

---

The Grid component is connected to the Redux store using the <SwmToken path="src/containers/Grid.js" pos="112:4:4" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`connect`</SwmToken> function from <SwmToken path="src/containers/Grid.js" pos="3:9:11" line-data="import {connect} from &#39;react-redux&#39;;">`react-redux`</SwmToken>, which binds <SwmToken path="src/containers/Grid.js" pos="112:6:6" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapStateToProps`</SwmToken> and <SwmToken path="src/containers/Grid.js" pos="112:9:9" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapDispatchToProps`</SwmToken> to the component.

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
