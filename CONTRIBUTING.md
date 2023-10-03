# Contributing to PromptBuilder.dev

## Adding Prompts

### Text

```yaml
- type: text
  label: Label above the text input
  value: Default value of the text input # optional
  inactive: Value is replaced with this when the text input has no value # either value or inactive must be set
  prompt: "Value: {{value}}"
```

### Textarea

```yaml
- type: textarea
  label: Label above the textarea
  value: Default value of the textarea # either value or inactive must be set
  inactive: Value is replaced with this when the textarea has no value # either value or inactive must be set
  prompt: "Value: {{value}}"
```

### Number

```yaml
- type: number
  label: Label above the number input
  value: 4
  min: 1
  max: 10
  prompt: "Value: {{value}}"
```

### Select

```yaml
- type: select
  label: Label above the select dropdown
  options:
    - value: Value of option 1
      active: Replaces value when selected
    - value: Value of option 2
      active: Replaces value when selected
      selected: true # selected by default
    - value: Value of option 3
      active: Replaces value when selected
  prompt: "Value: {{value}}"
```

### Multiselect

```yaml
- type: multiselect
  options:
    - value: Option 1
      active: Replaces value when selected
      inactive: Replaces value when not selected
      selected: true # selected by default
    - value: Option 2
      active: Replaces value when selected
      inactive: Replaces value when not selected
      selected: false # not selected by default
    - value: Option 3
      active: Replaces value when selected
      inactive: Replaces value when not selected
      selected: true
    - value: Option 4
      active: Replaces value when selected
      inactive: Replaces value when not selected
      selected: false
  prompt: "Value: {{value}}"
```
