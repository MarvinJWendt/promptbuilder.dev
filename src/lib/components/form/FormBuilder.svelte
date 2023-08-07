<script>
  import yaml from "js-yaml";

  let data = {}

  function setDataType() {
    if (data.type === "text") {
      data = {
        type: "text",
        label: "",
        prompt: "{{value}}",
      };
    } else if (data.type === "textarea") {
      data = {
        type: "textarea",
        label: "",
        prompt: "{{value}}",
      };
    } else if (data.type === "number") {
      data = {
        type: "number",
        label: "",
        prompt: "{{value}}",
      };
    } else if (data.type === "select") {
      data = {
        type: "select",
        label: "",
        options: [],
        prompt: "",
      };
    } else if (data.type === "multiselect") {
      data = {
        type: "multiselect",
        label: "",
        options: [],
        prompt: "",
      };
    }
  }
</script>

<div class="flex flex-col gap-2">
    <label class="block text-gray-400 text-sm">Component</label>
    <select bind:value={data.type} on:change={setDataType} class="select">
        <option value="text">Text</option>
        <option value="textarea">TextArea</option>
        <option value="number">Number</option>
        <option value="select">Select</option>
        <option value="multiselect">MultiSelect</option>
    </select>
    <pre>{yaml.dump(data)}</pre>
</div>
