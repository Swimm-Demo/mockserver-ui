---
title: Creating Documentation for Repository Information and Code Snippets
---
# Creating Documentation for Repository Information and Code Snippets

## Intro

This document details the process and code snippets involved in setting up a React application with Redux and Material-UI. The information is based on the contents of the file <SwmPath repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" path="src/index.js">`(mockserver-ui) src/index.js`</SwmPath> from the `mockserver-ui` repository.

## Code Snippet

The following code snippet is from <SwmPath repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" path="src/index.js">`(mockserver-ui) src/index.js`</SwmPath> and demonstrates the setup of a React application with Redux and Material-UI:

<SwmSnippet path="src/index.js" line="1" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui">

---

&nbsp;

```javascript
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import {MuiThemeProvider} from "material-ui";

const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);
```

---

</SwmSnippet>

You can view the full file [here](https://github.com/Swimm-Demo/mockserver-ui/blob/d2adad6fd1c17819767f9c7fc4ebf314b8477fa3/src/index.js).

## Document Generation

The documentation was generated using the Swimm tool. Here are the links to the respective draft Pull Requests for the generated documents:

- [Document PR #1](https://github.com/Swimm-Demo/mockserver-ui/pull/1)
- [Document PR #2](https://github.com/Swimm-Demo/mockserver-ui/pull/2)
- [Document PR #3](https://github.com/Swimm-Demo/mockserver-ui/pull/3)
- [Document PR #4](https://github.com/Swimm-Demo/mockserver-ui/pull/4)
- [Document PR #5](https://github.com/Swimm-Demo/mockserver-ui/pull/5)
- [Document PR #6](https://github.com/Swimm-Demo/mockserver-ui/pull/6)
- [Document PR #7](https://github.com/Swimm-Demo/mockserver-ui/pull/7)
- [Document PR #8](https://github.com/Swimm-Demo/mockserver-ui/pull/8)
- [Document PR #9](https://github.com/Swimm-Demo/mockserver-ui/pull/9)

The content of the PRs will be updated by Swimm in due course.

## Summary

This document captures the setup process of a React application using Redux and Material-UI, as demonstrated in the <SwmPath repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" path="src/index.js">`(mockserver-ui) src/index.js`</SwmPath> file. It also includes links to the draft Pull Requests for further reference.

<SwmMeta version="3.0.0"><sup>Powered by [Swimm](http://localhost:5000/)</sup></SwmMeta>
