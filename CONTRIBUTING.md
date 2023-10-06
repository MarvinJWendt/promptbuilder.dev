# Contributing to PromptBuilder.dev

## Running PromptBuilder.dev locally

To run PromptBuilder.dev locally, you'll need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/)
installed.

1. Clone the repository (`git clone https://github.com/MarvinJWendt/promptbuilder.dev`)
2. Change into the directory (`cd promptbuilder.dev`)
3. Install dependencies (`pnpm install`)
4. Start the development server (`pnpm dev`)
5. Open [localhost:5173](http://localhost:5173) in your browser

## Contributing to Prompts

Adding or modifing prompts is easy. All prompts are written in YAML and are located at [`/src/prompts`](https://github.com/MarvinJWendt/promptbuilder.dev/tree/main/src/prompts).

### Base structure

```yaml
name: [EMOJI] Name of the Prompt
description: A short description of the prompt
long: |-
  A longer description of the prompt.
  This will be shown when the user clicks on the prompt.
task: Describe the task for the AI here.

contributors:
  - name: Your Name
    github: Your GitHub username
    twitter: Your Twitter username
    web: Your website

steps:
  - title: Title of the section / step
    elements:
      [elements]
  - title: Another section
    elements:
      [elements]
```

### Elements

#### Text

```yaml
- type: text
  label: Label above the text input
  value: Default value of the text input # optional
  inactive: Value is replaced with this when the text input has no value # either value or inactive must be set
  prompt: "Value: {{value}}"
```

#### Textarea

```yaml
- type: textarea
  label: Label above the textarea
  value: Default value of the textarea # either value or inactive must be set
  inactive: Value is replaced with this when the textarea has no value # either value or inactive must be set
  prompt: "Value: {{value}}"
```

#### Number

```yaml
- type: number
  label: Label above the number input
  value: 4
  min: 1
  max: 10
  prompt: "Value: {{value}}"
```

#### Select

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

#### Toggle

```yaml
- type: toggle
  value: Value
  active: Replaces value when toggled on
  inactive: Replaces value when toggled off
  prompt: 'Value: {{value}}'
```

#### Multiselect

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
