---
title: >-
  Purpose of dynamic fields in renderValues, renderKeysToMultiValues, and
  renderKeysToValues
---
This document will cover the purpose and functionality of dynamically adding and removing fields in `renderValues`, `renderKeysToMultiValues`, and `renderKeysToValues`. We'll cover:

1. The purpose of dynamic fields
2. How dynamic fields are implemented in `renderValues`
3. How dynamic fields are implemented in `renderKeysToMultiValues`
4. How dynamic fields are implemented in `renderKeysToValues`

# The purpose of dynamic fields

Dynamically adding and removing fields in `renderValues`, `renderKeysToMultiValues`, and `renderKeysToValues` allows for a flexible and user-friendly interface. This functionality is crucial for handling varying sets of data where the number of fields cannot be predetermined. It enables users to add or remove input fields as needed, providing a more dynamic and interactive experience.

<SwmSnippet path="/src/components/RequestFilter.js" line="93">

---

# How dynamic fields are implemented in renderValues

The `renderValues` function is responsible for rendering a list of values. It uses the `fields` prop to map over the current set of fields and render them. This allows for dynamic addition and removal of fields.

```javascript
    renderValues = ({fields, disabled}) => {
        return (
            <div style={{
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="162">

---

Within `renderValues`, the `fields.map` function is used to iterate over the fields and render each one. This is where the dynamic nature comes into play, as the `fields` array can be modified to add or remove fields.

```javascript
                width: "75%",
            }}>
                {fields.map((field, index) => <div key={index} style={{
                    display: "inline-block",
                    width: "80%",
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="143">

---

# How dynamic fields are implemented in renderKeysToMultiValues

The `renderKeysToMultiValues` function is similar to `renderValues` but is used for rendering key-value pairs where each key can have multiple values. It also uses the `fields` prop to dynamically render the fields.

```javascript
    renderKeysToMultiValues = ({fields, disabled, title}) => {
        return (<div style={{
            width: "100%",
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="417">

---

In the component, `FieldArray` is used with `renderKeysToMultiValues` to handle the dynamic addition and removal of key-value pairs. This allows users to add or remove query parameters dynamically.

```javascript
                                                    title={"Cookies:"}/>
                                        <FieldArray name={`queryStringParameters`}
                                                    component={this.renderKeysToMultiValues}
                                                    disabled={disabled} title={"Query Parameters:"}/>
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="141">

---

# How dynamic fields are implemented in renderKeysToValues

The `renderKeysToValues` function is used for rendering key-value pairs where each key has a single value. It follows a similar pattern to `renderKeysToMultiValues`, using the `fields` prop to dynamically render the fields.

```javascript
            </div>)
    };
    renderKeysToMultiValues = ({fields, disabled, title}) => {
        return (<div style={{
            width: "100%",
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
