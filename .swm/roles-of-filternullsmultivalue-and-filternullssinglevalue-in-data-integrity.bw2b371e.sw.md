---
title: Roles of filterNullsMultiValue and filterNullsSingleValue in data integrity
---
This document will cover the roles of `filterNullsMultiValue` and `filterNullsSingleValue` in ensuring data integrity. We'll cover:

1. What `filterNullsMultiValue` does
2. What `filterNullsSingleValue` does
3. How these functions are used in the codebase

<SwmSnippet path="/src/components/RequestFilter.js" line="19">

---

# What filterNullsMultiValue does

`filterNullsMultiValue` is a function that processes an array of items, each containing multiple values. It iterates through each item and checks if any of the values are non-null. If at least one value is non-null and the item has a name, the item is included in the returned array. This ensures that only items with meaningful data are retained.

```javascript
let filterNullsMultiValue = function (rawItems) {
    let items = undefined;
    for (let rawItem of rawItems) {
        let valueSet = false;
        for (let value of rawItem.values) {
            if (value) {
                valueSet = true;
            }
        }
        if (rawItem.name && valueSet) {
            if (!items) {
                items = [];
            }
            items.push(rawItem);
        }
    }
    return items;
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="37">

---

# What filterNullsSingleValue does

`filterNullsSingleValue` is a function that processes an array of items, each containing a single value. It iterates through each item and checks if the value is non-null and the item has a name. If both conditions are met, the item is included in the returned array. This ensures that only items with meaningful data are retained.

```javascript
let filterNullsSingleValue = function (rawItems) {
    let items = undefined;
    for (let rawItem of rawItems) {
        if (rawItem.name && rawItem.value) {
            if (!items) {
                items = [];
            }
            items.push(rawItem);
        }
    }
    return items;
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/RequestFilter.js" line="68">

---

# How these functions are used in the codebase

Both `filterNullsMultiValue` and `filterNullsSingleValue` are used within the `loadData` function. `filterNullsSingleValue` is applied to `requestMatcher.cookies` to filter out cookies with null values, while `filterNullsMultiValue` is applied to `requestMatcher.headers` and `requestMatcher.queryStringParameters` to filter out headers and query string parameters with null values. This ensures that only meaningful data is processed further.

```javascript
        };
        requestFilter.cookies = filterNullsSingleValue(requestMatcher.cookies);
        requestFilter.headers = filterNullsMultiValue(requestMatcher.headers);
        requestFilter.queryStringParameters = filterNullsMultiValue(requestMatcher.queryStringParameters);
    }
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
