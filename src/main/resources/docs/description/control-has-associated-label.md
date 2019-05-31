Enforce that a control (an interactive element) has a text label.

There are two supported ways to supply a control with a text label:

Provide text content inside the element.
Use the aria-label attribute on the element, with a text value.
Use the aria-labelledby attribute on the element, and point the IDREF value to an element with an accessible label.
Alternatively, with an img tag, you may use the alt attribute to supply a text description of the image.
The rule is permissive in the sense that it will assume that expressions will eventually provide a label. So an element like this will pass.

```
//Bad:
<button>{maybeSomethingThatContainsALabel}</button>

//Good:
<button type="button">{maybeSomethingThatContainsALabel}</button>
```

[Source](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/ead1767330766b26cba26faab901b75ac56402f4/docs/rules/control-has-associated-label.md)
