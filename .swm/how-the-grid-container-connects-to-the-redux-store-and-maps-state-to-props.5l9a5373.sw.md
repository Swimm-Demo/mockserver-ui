---
title: How the Grid container connects to the Redux store and maps state to props
---
This document will cover how the Grid container connects to the Redux store and maps state to props. We'll cover:

1. Connecting to the Redux store
2. Mapping state to props

<SwmSnippet path="/src/containers/Grid.js" line="112">

---

# Connecting to the Redux store

The <SwmToken path="src/containers/Grid.js" pos="112:4:4" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`connect`</SwmToken> function from <SwmToken path="src/containers/Grid.js" pos="3:9:11" line-data="import {connect} from &#39;react-redux&#39;;">`react-redux`</SwmToken> is used to connect the Grid container to the Redux store. This function takes <SwmToken path="src/containers/Grid.js" pos="112:6:6" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapStateToProps`</SwmToken> and <SwmToken path="src/containers/Grid.js" pos="112:9:9" line-data="export default connect(mapStateToProps, mapDispatchToProps)(Grid)">`mapDispatchToProps`</SwmToken> as arguments and returns a higher-order component that passes the Redux state and dispatch functions as props to the Grid component.

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
```

---

</SwmSnippet>

<SwmSnippet path="/src/containers/Grid.js" line="87">

---

# Mapping state to props

The <SwmToken path="src/containers/Grid.js" pos="87:2:2" line-data="const mapStateToProps = (state) =&gt; {">`mapStateToProps`</SwmToken> function maps the Redux state to the props of the Grid component. It extracts <SwmToken path="src/containers/Grid.js" pos="89:1:1" line-data="        activeExpectations = [],">`activeExpectations`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="90:1:1" line-data="        proxiedRequests = [],">`proxiedRequests`</SwmToken>, <SwmToken path="src/containers/Grid.js" pos="91:1:1" line-data="        recordedRequests = [],">`recordedRequests`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="92:1:1" line-data="        logMessages = [],">`logMessages`</SwmToken> from <SwmToken path="src/containers/Grid.js" pos="93:5:7" line-data="    } = state.entities;">`state.entities`</SwmToken>, and <SwmToken path="src/containers/Grid.js" pos="96:1:1" line-data="        requestFilter = {}">`requestFilter`</SwmToken> from <SwmToken path="src/containers/Grid.js" pos="87:7:7" line-data="const mapStateToProps = (state) =&gt; {">`state`</SwmToken>. These values are then returned as an object, which will be passed as props to the Grid component.

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

<SwmSnippet path="/src/containers/Grid.js" line="110">

---

<SwmToken path="src/containers/Grid.js" pos="110:2:2" line-data="const mapDispatchToProps = {};">`mapDispatchToProps`</SwmToken> is defined as an empty object, indicating that no action creators are being mapped to the props of the Grid component.

```javascript
const mapDispatchToProps = {};
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
