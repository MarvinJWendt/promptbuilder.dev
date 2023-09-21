<script>

  import Select from "$lib/components/form/Select.svelte";
  import TextInput from "$lib/components/form/TextInput.svelte";
  import TextArea from "$lib/components/form/TextArea.svelte";
  import Multiselect from "$lib/components/form/Multiselect.svelte";
  import NumberInput from "$lib/components/form/NumberInput.svelte";

  export let pathData;
  $: console.log("Pathdata update:", pathData)
  export let prompt = "";
  $: console.log("Prompt update:", prompt)
  $: pathData && renderPrompt();

  // PromptA is the first 3 lines of the prompt
  let promptA = "";
  $: promptA = prompt.split("\n").slice(0, 3).join("\n");

  // PromptB is the rest of the prompt
  let promptB = "";
  $: promptB = prompt.split("\n").slice(3).join("\n");

  function renderPrompt() {
    prompt = "This prompt was generated using a builder. " +
      "I will now give you requirements that the user has specified. " +
      "Your job is to follow them strictly.\n\n" +
      `Your task is: "${pathData.name}"\n\n`

    for (let step of pathData.steps) {
      for (let element of step.elements) {
        let tmpl = element.prompt

        if (element.type === "multiselect") {
          // Map the values to their selected state
          let values = element.options.map(o => o.selected ? o.active : o.inactive ? o.inactive : "")
          // Remove empty values
          values = values.filter(v => v !== "")
          values = values.map(v => "- " + v)
          tmpl = tmpl.replaceAll("{{value}}", `\n${values.join("\n")}`)
        } else if (element.type === "select") {
          let selectedElement = element.options.find(o => o.selected)
          tmpl = tmpl.replaceAll("{{value}}", selectedElement.active ? selectedElement.active : selectedElement.value)
        } else {
          tmpl = tmpl.replaceAll("{{value}}", element.value)
        }

        prompt += tmpl + "\n"
      }
    }
  }

  function copyToClipboard() {
    const textToCopy = prompt;

    // Using the Clipboard API where available
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.textContent = textToCopy;
      textarea.style.position = 'fixed'; // Prevent scrolling to the bottom of the page
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Could not copy text: ', err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
</script>

<div class="min-h-screen flex mb-12 mx-auto">
    <div class="text-white w-full">
        <h1 class="text-5xl mb-2 font-bold">{pathData.name}</h1>
        <p class="text-xl mb-6 text-gray-400">{pathData.description}</p>

        {#each pathData.steps as step}
            <div class="step mt-8">
                <h2 class="text-2xl mb-4 border-b border-gray-600 pb-2">{step.title}</h2>

                <div class={step.elements.length > 1 ? "grid ss sm:grid-cols-2 md:grid-cols-3 gap-4" : ""}>
                    {#each step.elements as element}
                        {#if element.type === "select"}
                            <Select label="{element.label}" bind:items="{element.options}"/>
                        {:else if element.type === "text"}
                            <TextInput label="{element.label}" bind:text="{element.value}"/>
                        {:else if element.type === "textarea"}
                            <div class="col-span-full">
                                <TextArea label="{element.label}" bind:text="{element.value}"/>
                            </div>
                        {:else if element.type === "multiselect"}
                            <Multiselect bind:items="{element.options}" label="{element.label}"/>
                        {:else if element.type === "number"}
                            <NumberInput label="{element.label}" bind:value="{element.value}" min={element.min}
                                         max={element.max}/>
                        {:else}
                            <p>UNKNOWN</p>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}


        <h1 class="text-3xl mb-2 mt-8">Prompt</h1>
        <div class="border-t border-gray-700 pt-6">
            <div class="relative bg-gray-700 rounded p-4 shadow-lg">
                <button
                        class="float-right btn hover:bg-blue-600 text-white rounded"
                        on:click={copyToClipboard}
                >
                    Copy
                </button>
                <pre class="text-white overflow-x-auto mb-0">{promptA}</pre>
                <pre class="text-white overflow-x-auto mb-0">{promptB}</pre>
            </div>
        </div>


    </div>
</div>

<style>
    pre {
        white-space: pre-wrap;
    }
</style>

