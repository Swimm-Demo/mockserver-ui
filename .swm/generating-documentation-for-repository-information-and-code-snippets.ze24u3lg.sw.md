---
title: Getting Information and Code Snippets from Repository
---
# Getting Information and Code Snippets from Repository

## Intro

This document provides an overview of the `Swimm-Demo/mockserver-ui` repository, including information about the programming languages used and a code snippet from the repository. The details were derived from a chat thread discussing the repository.

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

## Document Generation

The documentation was generated using the Swimm tool. Here are the links to the respective draft Pull Requests for the generated documents:

- [Document PR #1](https://github.com/Swimm-Demo/mockserver-ui/pull/1)
- [Document PR #2](https://github.com/Swimm-Demo/mockserver-ui/pull/2)
- [Document PR #3](https://github.com/Swimm-Demo/mockserver-ui/pull/3)

The content of the PRs will be updated by Swimm in due course.

<SwmMeta version="3.0.0"><sup>Powered by [Swimm](http://localhost:5000/)</sup></SwmMeta>
