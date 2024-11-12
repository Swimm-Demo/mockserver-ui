---
title: Overview and Code Snippets of Swimm-Demo/mockserver-ui Repository
---
# Overview and Code Snippets of Swimm-Demo/mockserver-ui Repository

## Intro

This document provides an overview of the `Swimm-Demo/mockserver-ui` repository, including its primary programming languages and a sample code snippet from the project.

## Repository Overview

The repository `Swimm-Demo/mockserver-ui` is a dashboard for viewing the expectations, requests, and logs in MockServer. The primary language used is JavaScript (95.2%), along with some CSS (3.9%) and other languages (0.9%).

## Code Snippet

Here is a snippet from <SwmPath repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" path="src/index.js">`(mockserver-ui) src/index.js`</SwmPath>:

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

## Summary

This document provided an overview of the `Swimm-Demo/mockserver-ui` repository and included a sample code snippet from the <SwmPath repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" path="src/index.js">`(mockserver-ui) src/index.js`</SwmPath> file. For more detailed information, you can refer to the repository's README file and explore the codebase further.

<SwmMeta version="3.0.0"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
