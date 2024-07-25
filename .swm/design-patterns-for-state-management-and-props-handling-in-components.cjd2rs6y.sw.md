---
title: Design Patterns for State Management and Props Handling in Components
---
This document will cover the design patterns followed for component state management and props handling in the project. We'll cover:

1. State Management with Redux
2. Props Handling with mapStateToProps and mapDispatchToProps

# State Management with Redux

The project uses Redux for state management. Redux is a predictable state container for JavaScript apps, which helps manage the state of the application in a single, centralized store. This makes it easier to understand and debug the state changes in the application.

<SwmSnippet path="/src/containers/Grid.js" line="87">

---

# State Management with Redux

The `mapStateToProps` function is used to map the state from the Redux store to the props of the component. This function extracts specific pieces of state and passes them as props to the component. In this example, `activeExpectations`, `proxiedRequests`, `recordedRequests`, and `logMessages` are extracted from `state.entities`, and `requestFilter` is extracted from `state`.

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

# Props Handling with mapStateToProps and mapDispatchToProps

Props handling in the project is done using the `mapStateToProps` and `mapDispatchToProps` functions. These functions are used to connect the Redux store to the React components, allowing the components to access the state and dispatch actions.

<SwmSnippet path="/src/containers/Grid.js" line="110">

---

# Props Handling with mapStateToProps and mapDispatchToProps

The `mapDispatchToProps` function is used to dispatch actions to the Redux store. In this example, it is defined as an empty object, which means no actions are being dispatched from this component.

```javascript
const mapDispatchToProps = {};
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
