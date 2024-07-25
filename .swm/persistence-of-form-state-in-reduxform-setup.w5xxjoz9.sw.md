---
title: Persistence of form state in reduxForm setup
---
This document will cover how the `reduxForm` setup ensures the form state is persisted even when the component is unmounted. We'll cover:

1. What is `reduxForm`
2. How `reduxForm` persists form state
3. Example usage of `reduxForm`

# What is `reduxForm`

`reduxForm` is a higher-order component (HOC) provided by the `redux-form` library. It is used to manage form state in a Redux store, allowing for easy form state management and validation. By connecting your form to the Redux store, `reduxForm` ensures that the form state is managed outside of the component, making it possible to persist the state even when the component is unmounted.

# How `reduxForm` persists form state

The key to persisting form state with `reduxForm` lies in its integration with the Redux store. When a form is wrapped with `reduxForm`, the form state is stored in the Redux store under a specific key. This means that the form state is not tied to the component's lifecycle. Even if the component is unmounted, the form state remains in the Redux store and can be restored when the component is remounted.

# How `reduxForm` persists form state

In this example, the form state is managed by `reduxForm`. The `form` key specifies the name under which the form state will be stored in the Redux store. This ensures that the form state is persisted even when the component is unmounted.

# Example usage of `reduxForm`

Here is an example of how to use `reduxForm` to ensure form state persistence:

1. Import `reduxForm` from `redux-form`.
2. Wrap your form component with `reduxForm` and provide a `form` key.
3. Connect the form component to the Redux store.

```javascript
import React from 'react';
import { reduxForm, Field } from 'redux-form';

let MyForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="myField" component="input" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

MyForm = reduxForm({
  form: 'myForm' // a unique identifier for this form
})(MyForm);

export default MyForm;
```

In this example, the form state is stored in the Redux store under the key `myForm`. This ensures that the form state is persisted even if the `MyForm` component is unmounted.

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
