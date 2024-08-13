---
title: Overview
---
The `mockserver-ui` repository provides a dashboard interface to view expectations, requests, and logs in MockServer.

It is built using react-scripts and is intended to be bundled into MockServer. For development, it can be run locally and configured to point to a running MockServer instance.

## Main Components

### Containers

Containers are components that manage and render other components, handling the state and passing down props to ensure proper data flow and display. They are responsible for connecting the application state to the UI, often using libraries like Redux to map state and dispatch actions to props.

- <SwmLink doc-title="Containers Overview">[Containers Overview](/.swm/containers-overview.3u10f8be.sw.md)</SwmLink>
- <SwmLink doc-title="How the Grid container connects to the Redux store and maps state to props">[How the Grid container connects to the Redux store and maps state to props](/.swm/how-the-grid-container-connects-to-the-redux-store-and-maps-state-to-props.5l9a5373.sw.md)</SwmLink>
- <SwmLink doc-title="The role of the App container in setting up the application and determining host, port, and security settings">[The role of the App container in setting up the application and determining host, port, and security settings](/.swm/the-role-of-the-app-container-in-setting-up-the-application-and-determining-host-port-and-security-settings.6bmnuulh.sw.md)</SwmLink>
- <SwmLink doc-title="How the JsonList component renders lists of JSON items and its key props and functions">[How the JsonList component renders lists of JSON items and its key props and functions](/.swm/how-the-jsonlist-component-renders-lists-of-json-items-and-its-key-props-and-functions.u8y7221l.sw.md)</SwmLink>
- <SwmLink doc-title="Styling rules in grid.css for the Grid container and their impact on layout and appearance">[Styling rules in grid.css for the Grid container and their impact on layout and appearance](/.swm/styling-rules-in-gridcss-for-the-grid-container-and-their-impact-on-layout-and-appearance.bya1jzri.sw.md)</SwmLink>
- **App**
  - <SwmLink doc-title="Exploring App Component">[Exploring App Component](/.swm/exploring-app-component.ciw3833e.sw.md)</SwmLink>
  - <SwmLink doc-title="How RequestFilter uses the Host, Port, and Secure Props">[How RequestFilter uses the Host, Port, and Secure Props](/.swm/how-requestfilter-uses-the-host-port-and-secure-props.h67of6jc.sw.md)</SwmLink>
  - <SwmLink doc-title="Functionalities Handled by the Grid Component">[Functionalities Handled by the Grid Component](/.swm/functionalities-handled-by-the-grid-component.2mjv5a64.sw.md)</SwmLink>
  - <SwmLink doc-title="Reasons for Choosing 443 and 80 as Default Ports in Port Method">[Reasons for Choosing 443 and 80 as Default Ports in Port Method](/.swm/reasons-for-choosing-443-and-80-as-default-ports-in-port-method.oq1ngsok.sw.md)</SwmLink>
  - <SwmLink doc-title="Ensuring Accuracy of Static Methods in Dynamic Environments">[Ensuring Accuracy of Static Methods in Dynamic Environments](/.swm/ensuring-accuracy-of-static-methods-in-dynamic-environments.4n82behj.sw.md)</SwmLink>
- **Grid**
  - <SwmLink doc-title="Overview of Grid Component">[Overview of Grid Component](/.swm/overview-of-grid-component.vvn3crzm.sw.md)</SwmLink>
  - <SwmLink doc-title="How the state is mapped to the Grid component using mapStateToProps">[How the state is mapped to the Grid component using mapStateToProps](/.swm/how-the-state-is-mapped-to-the-grid-component-using-mapstatetoprops.1d3nqi8k.sw.md)</SwmLink>
  - <SwmLink doc-title="The roles of JsonList and LogList components within the Grid component">[The roles of JsonList and LogList components within the Grid component](/.swm/the-roles-of-jsonlist-and-loglist-components-within-the-grid-component.9e7r0ihd.sw.md)</SwmLink>
  - <SwmLink doc-title="Styling rules applied to the grid layout for visual consistency">[Styling rules applied to the grid layout for visual consistency](.swm/styling-rules-applied-to-the-grid-layout-for-visual-consistency.sxmy5w4r.sw.md)</SwmLink>
  - <SwmLink doc-title="The role of mapDispatchToProps in the functioning of the Grid component">[The role of mapDispatchToProps in the functioning of the Grid component](/.swm/the-role-of-mapdispatchtoprops-in-the-functioning-of-the-grid-component.k12ckgz4.sw.md)</SwmLink>

### Actions

Actions are functions that send data from the application to the Redux store. They are the primary way to interact with the store and trigger state changes. Actions are dispatched to the store, which then processes them through reducers to update the state. In this project, actions like <SwmToken path="/src/middleware/socket.js" pos="14:3:3" line-data="    let connectSocket = function (action, next) {">`connectSocket`</SwmToken>, `sendMessage`, `webSocketMessageReceived`, and <SwmToken path="/src/middleware/socket.js" pos="7:3:3" line-data="    let disconnectSocket = function () {">`disconnectSocket`</SwmToken> handle WebSocket connections and messaging.

- <SwmLink doc-title="Actions Overview">[Actions Overview](/.swm/actions-overview.3f085ru4.sw.md)</SwmLink>
- <SwmLink doc-title="Handling WebSocket Connections within Actions">[Handling WebSocket Connections within Actions](/.swm/handling-websocket-connections-within-actions.2ykq7hzs.sw.md)</SwmLink>
- <SwmLink doc-title="Configurations and Handlers for Different Environments">[Configurations and Handlers for Different Environments](/.swm/configurations-and-handlers-for-different-environments.lix9mggp.sw.md)</SwmLink>
- <SwmLink doc-title="Dispatching Actions with Redux Thunk for WebSocket Events">[Dispatching Actions with Redux Thunk for WebSocket Events](/.swm/dispatching-actions-with-redux-thunk-for-websocket-events.q8siwns7.sw.md)</SwmLink>

### Components

Components are reusable pieces of code that encapsulate the structure, behavior, and styling of a part of the UI.

- <SwmLink doc-title="Components Overview">[Components Overview](/.swm/components-overview.cng4c01i.sw.md)</SwmLink>
- <SwmLink doc-title="Managing Data Dependencies Between Components">[Managing Data Dependencies Between Components](/.swm/managing-data-dependencies-between-components.1kwxtnce.sw.md)</SwmLink>
- <SwmLink doc-title="Design Patterns for State Management and Props Handling in Components">[Design Patterns for State Management and Props Handling in Components](/.swm/design-patterns-for-state-management-and-props-handling-in-components.cjd2rs6y.sw.md)</SwmLink>
- <SwmLink doc-title="CSS Architecture and Maintainability of Component Styles">[CSS Architecture and Maintainability of Component Styles](/.swm/css-architecture-and-maintainability-of-component-styles.3imbq28i.sw.md)</SwmLink>
- <SwmLink doc-title="Testing Strategy for Ensuring Robust Component Behavior">[Testing Strategy for Ensuring Robust Component Behavior](/.swm/testing-strategy-for-ensuring-robust-component-behavior.q9kx8tzj.sw.md)</SwmLink>
- **Log message**
  - <SwmLink doc-title="Getting started with Log Messages in Components">[Getting started with Log Messages in Components](/.swm/getting-started-with-log-messages-in-components.dik9fnjq.sw.md)</SwmLink>
  - <SwmLink doc-title="How the addLinks function works">[How the addLinks function works](/.swm/how-the-addlinks-function-works.st9ysdvf.sw.md)</SwmLink>
  - <SwmLink doc-title="RenderItem function logic">[RenderItem function logic](/.swm/renderitem-function-logic.kw9ptfjj.sw.md)</SwmLink>
  - <SwmLink doc-title="Practical use cases for the group property">[Practical use cases for the group property](.swm/practical-use-cases-for-the-group-property.22r9fqy9.sw.md)</SwmLink>
- **Json item**
  - <SwmLink doc-title="What is JsonItem Component">[What is JsonItem Component](/.swm/what-is-jsonitem-component.j3nsdf8d.sw.md)</SwmLink>
  - <SwmLink doc-title="How the collapsed prop influences the rendering of JSON data">[How the collapsed prop influences the rendering of JSON data](/.swm/how-the-collapsed-prop-influences-the-rendering-of-json-data.qhgquu56.sw.md)</SwmLink>
  - <SwmLink doc-title="Use cases for enabling or disabling clipboard functionality">[Use cases for enabling or disabling clipboard functionality](.swm/use-cases-for-enabling-or-disabling-clipboard-functionality.biin05h0.sw.md)</SwmLink>
  - <SwmLink doc-title="How the addDescription function decides the layout and rendering of description metadata">[How the addDescription function decides the layout and rendering of description metadata](/.swm/how-the-adddescription-function-decides-the-layout-and-rendering-of-description-metadata.k74qw4tp.sw.md)</SwmLink>
- **Request filter**
  - <SwmLink doc-title="Overview of Request Filter Component">[Overview of Request Filter Component](/.swm/overview-of-request-filter-component.oxf97anz.sw.md)</SwmLink>
  - <SwmLink doc-title="How the loadData function works">[How the loadData function works](/.swm/how-the-loaddata-function-works.o1q6ly6i.sw.md)</SwmLink>
  - <SwmLink doc-title="Roles of filterNullsMultiValue and filterNullsSingleValue in data integrity">[Roles of filterNullsMultiValue and filterNullsSingleValue in data integrity](/.swm/roles-of-filternullsmultivalue-and-filternullssinglevalue-in-data-integrity.bw2b371e.sw.md)</SwmLink>
  - <SwmLink doc-title="Persistence of form state in reduxForm setup">[Persistence of form state in reduxForm setup](/.swm/persistence-of-form-state-in-reduxform-setup.w5xxjoz9.sw.md)</SwmLink>
  - <SwmLink doc-title="Purpose of dynamic fields in renderValues, renderKeysToMultiValues, and renderKeysToValues">[Purpose of dynamic fields in renderValues, renderKeysToMultiValues, and renderKeysToValues](/.swm/purpose-of-dynamic-fields-in-rendervalues-renderkeystomultivalues-and-renderkeystovalues.04xq9fcx.sw.md)</SwmLink>
  - <SwmLink doc-title="Handling new props in componentWillReceiveProps">[Handling new props in componentWillReceiveProps](/.swm/handling-new-props-in-componentwillreceiveprops.lcbcjpaf.sw.md)</SwmLink>

### Middleware

Middleware refers to functions that sit between the dispatching of an action and the moment it reaches the reducer in a Redux application. It is used to handle side effects, such as asynchronous operations or logging, by intercepting actions and performing tasks before passing them along to the next middleware or reducer. Middleware can modify actions, dispatch new actions, or even halt the action flow based on certain conditions.

- <SwmLink doc-title="Middleware Overview">[Middleware Overview](/.swm/middleware-overview.fi9fx21e.sw.md)</SwmLink>
- <SwmLink doc-title="How the WebSocket lifecycle is managed">[How the WebSocket lifecycle is managed](/.swm/how-the-websocket-lifecycle-is-managed.uirlamln.sw.md)</SwmLink>
- <SwmLink doc-title="Role of the webSocketMessageReceived action">[Role of the webSocketMessageReceived action](/.swm/role-of-the-websocketmessagereceived-action.ii4wc0xy.sw.md)</SwmLink>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
