---
title: Configurations and Handlers for Different Environments
---
This document will cover how to configure or handle different environments in the project. We'll cover:

1. Environment-specific store configuration
2. Usage of the configured store in the application

<SwmSnippet path="/src/store/configureStore.js" line="1">

---

# Environment-specific store configuration

The file <SwmPath>[src/store/configureStore.js](src/store/configureStore.js)</SwmPath> determines which store configuration to use based on the environment. If the environment is production, it uses <SwmPath>[src/store/configureStore.prod.js](src/store/configureStore.prod.js)</SwmPath>, otherwise, it uses <SwmPath>[src/store/configureStore.dev.js](src/store/configureStore.dev.js)</SwmPath>.

```javascript
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/store/configureStore.dev.js" line="8">

---

In the development environment, the <SwmToken path="src/store/configureStore.dev.js" pos="8:2:2" line-data="const configureStore = preloadedState =&gt; {">`configureStore`</SwmToken> function includes middleware such as <SwmToken path="src/store/configureStore.dev.js" pos="12:3:3" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`thunk`</SwmToken>, <SwmToken path="src/store/configureStore.dev.js" pos="12:6:6" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`exposeState`</SwmToken>, <SwmToken path="src/store/configureStore.dev.js" pos="12:9:9" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`socket`</SwmToken>, and <SwmToken path="src/store/configureStore.dev.js" pos="12:12:12" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`createLogger`</SwmToken> to aid in debugging and development.

```javascript
const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, exposeState, socket, createLogger())
    )
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/store/configureStore.prod.js" line="7">

---

In the production environment, the <SwmToken path="src/store/configureStore.prod.js" pos="7:2:2" line-data="const configureStore = preloadedState =&gt; {">`configureStore`</SwmToken> function includes middleware such as <SwmToken path="src/store/configureStore.prod.js" pos="11:3:3" line-data="        applyMiddleware(thunk, socket, exposeState)">`thunk`</SwmToken>, <SwmToken path="src/store/configureStore.prod.js" pos="11:6:6" line-data="        applyMiddleware(thunk, socket, exposeState)">`socket`</SwmToken>, and <SwmToken path="src/store/configureStore.prod.js" pos="11:9:9" line-data="        applyMiddleware(thunk, socket, exposeState)">`exposeState`</SwmToken>, but excludes <SwmToken path="src/store/configureStore.dev.js" pos="12:12:12" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`createLogger`</SwmToken> to optimize performance.

```javascript
const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, socket, exposeState)
    )
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/index.js" line="6">

---

# Usage of the configured store in the application

The configured store is imported and used in <SwmPath>[src/index.js](src/index.js)</SwmPath>. The <SwmToken path="src/index.js" pos="8:2:2" line-data="const store = configureStore();">`store`</SwmToken> constant is created by calling <SwmToken path="src/index.js" pos="8:6:8" line-data="const store = configureStore();">`configureStore()`</SwmToken>, and it is then passed to the <SwmToken path="src/index.js" pos="11:2:2" line-data="    &lt;Provider store={store}&gt;">`Provider`</SwmToken> component from <SwmToken path="src/index.js" pos="3:9:11" line-data="import {Provider} from &#39;react-redux&#39;">`react-redux`</SwmToken> to make the Redux store available to the rest of the app.

```javascript
import {MuiThemeProvider} from "material-ui";

const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider>
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/exposeState.js" line="1">

---

The <SwmToken path="src/middleware/exposeState.js" pos="1:4:4" line-data="export default store =&gt; next =&gt; action =&gt; {">`store`</SwmToken> is used in the <SwmToken path="src/store/configureStore.dev.js" pos="12:6:6" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`exposeState`</SwmToken> middleware to attach the current state to each action.

```javascript
export default store => next => action => {
    next({ ...action, getState: store.getState });
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/middleware/socket.js" line="34">

---

The <SwmToken path="src/middleware/socket.js" pos="34:3:3" line-data="    return store =&gt; next =&gt; action =&gt; {">`store`</SwmToken> is also used in the <SwmToken path="src/store/configureStore.dev.js" pos="12:9:9" line-data="        applyMiddleware(thunk, exposeState, socket, createLogger())">`socket`</SwmToken> middleware to handle actions related to socket communication.

```javascript
    return store => next => action => {
        switch (action.type) {
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](/)</sup></SwmMeta>
