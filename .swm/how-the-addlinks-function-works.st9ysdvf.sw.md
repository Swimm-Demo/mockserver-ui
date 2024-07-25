---
title: How the addLinks function works
---
This document will cover how the `addLinks` function converts URLs into clickable links. We'll cover:

1. The purpose of the `addLinks` function
2. How the `addLinks` function works
3. Usage of `addLinks` in the codebase

# The purpose of the `addLinks` function

The `addLinks` function is designed to identify URLs within a given string and convert them into clickable links. This is particularly useful for displaying log messages or any text content that may contain URLs, enhancing user experience by making the URLs interactive.

<SwmSnippet path="/src/components/LogMessage.js" line="14">

---

# How the `addLinks` function works

The `addLinks` function takes a string `value` as input. It uses a regular expression to match URLs starting with 'http' or 'https'. If a URL is found, it constructs a clickable link using the HTML `<a>` tag and returns the modified string. If no URL is found, it returns the original string.

```javascript
        function addLinks(value) {
            var urlMatch = value.match("(http){1}s?://[^\\s]*");
            if (urlMatch) {
                let matchedUrl = urlMatch[0];
                return (<span>{value.substr(0, value.indexOf(matchedUrl))}<a style={{
                    textDecoration: "underline",
                    color: "rgb(95, 113, 245)"
                }} href={matchedUrl} target="_blank" rel="noopener noreferrer">{matchedUrl}</a>{value.substr(value.indexOf(matchedUrl) + matchedUrl.length)}</span>);
            } else {
                return value;
            }
        }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="50">

---

# Usage of `addLinks` in the codebase

The `addLinks` function is used within the `renderItem` method to process `messagePart.value`, converting any URLs within the log message into clickable links.

```javascript
                            return <div key={messagePart.key}
                                        style={cellStyle}>{addLinks(messagePart.value)}</div>;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="76">

---

Another usage of the `addLinks` function is to process the `reason` string, ensuring any URLs within it are converted into clickable links.

```javascript
                                                     }}>{addLinks(reason)}</span>
                                    }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/LogMessage.js" line="143">

---

The `addLinks` function is also used here to process `messagePart.value`, converting URLs into clickable links for display purposes.

```javascript
                                            }}>{addLinks(messagePart.value)}</div>;
                            }
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBbW9ja3NlcnZlci11aSUzQSUzQVN3aW1tLURlbW8=" repo-name="mockserver-ui" doc-type="follow-up"><sup>Powered by [Swimm](/)</sup></SwmMeta>
