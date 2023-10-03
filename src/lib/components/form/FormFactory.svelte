<script>

  import Select from "$lib/components/form/Select.svelte";
  import TextInput from "$lib/components/form/TextInput.svelte";
  import TextArea from "$lib/components/form/TextArea.svelte";
  import NumberInput from "$lib/components/form/NumberInput.svelte";
  import MultiselectItem from "$lib/components/form/Multiselect.svelte";
  import {onMount} from "svelte";

  export let pathData;
  $: console.log("Pathdata update:", pathData)
  export let prompt = "";
  $: pathData && renderPrompt()

  // PromptA is the first 3 lines of the prompt
  let promptA = "";
  $: promptA = prompt.split("\n").slice(0, 3).join("\n");

  // PromptB is the rest of the prompt
  let promptB = "";
  $: promptB = prompt.split("\n").slice(3).join("\n");

  function renderPrompt() {
    prompt = "This prompt was generated using https://promptbuilder.dev. " +
      "I will now give you requirements that the user has specified. " +
      "Your job is to follow them strictly.\n\n" +
      `Your task is: "${pathData.task ? pathData.task : pathData.description}"\n\n`

    for (let step of pathData.steps) {
      let stepPrompt = "# " + step.title + "\n"

      for (let element of step.elements) {
        let tmpl = element.prompt

        if (element.type === "multiselect") {
          // Map the values to their selected state
          let values = element.options.map(o => {
            if (o.selected) {
              return o.active ? o.active : o.value
            } else {
              if (o.inactive) {
                return o.inactive
              } else {
                return ""
              }
            }
          })
          // Remove empty values
          values = values.filter(v => v !== "")
          values = values.map(v => "- " + v)
          tmpl = tmpl.replaceAll("{{value}}", `\n${values.join("\n")}`)
        } else if (element.type === "select") {
          let selectedElement = element.options.find(o => o.selected)
          tmpl = tmpl.replaceAll("{{value}}", selectedElement.active ? selectedElement.active : selectedElement.value)
        } else if (element.type === "textarea" || element.type === "text") { // Replace with inactive value if no value is selected
          tmpl = tmpl.replaceAll("{{value}}", element.inactive && !element.value ? element.inactive : element.value)
        } else {
          tmpl = tmpl.replaceAll("{{value}}", element.value)
        }

        stepPrompt += tmpl + "\n"
      }

      prompt += stepPrompt + "\n"
    }
  }

  function parseElements(elements) {
    const elems = [];

    for (let element of elements) {
      if (element.type === "multiselect") {
        for (let option of element.options) {
          option.type = "multiselectitem";
          elems.push(option);
        }
        continue;
      }

      elems.push(element);
    }

    return elems;
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

  // Render prompt 20 times per second.
  // Reactivity is lost somwhere in the process of rendering the elements.
  onMount(() => {
    setInterval(() => {
      renderPrompt()
    }, 50)
  })
</script>

<div class="flex mx-auto">
    <div class="w-full">
        {#each pathData.steps as step}
            <div class="step mt-8">
                <h2 class="text-2xl mb-4 border-b border-gray-600 pb-2">{step.title}</h2>

                <div class="mt-4 flex flex-1 gap-4 flex-wrap">
                    {#each parseElements(step.elements) as element}
                        {#if element.type === 'select'}
                            <Select label="{element.label}" bind:items="{element.options}"/>
                        {:else if element.type === 'text'}
                            <TextInput label="{element.label}" bind:text="{element.value}"/>
                        {:else if element.type === 'textarea'}
                            <TextArea label="{element.label}" bind:text="{element.value}"/>
                        {:else if element.type === 'multiselectitem'}
                            <MultiselectItem bind:item="{element}"/>
                        {:else if element.type === 'number'}
                            <NumberInput label="{element.label}" bind:value="{element.value}" min={element.min}
                                         max={element.max}/>
                        {:else if element.type === 'empty'}
                            <!--  DO NOTHING  -->
                        {:else}
                            <p>UNKNOWN</p>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}

        <h1 class="text-3xl mb-2 mt-8">Prompt</h1>
        <div class="border-t border-gray-700 pt-6">
            <div class="bg-white dark:bg-gray-800 rounded p-4 shadow-lg">
                <button
                        class="float-right btn hover:bg-blue-600 rounded"
                        on:click={copyToClipboard}
                >
                    Copy
                </button>
                <pre class="overflow-x-auto mb-0">{promptA}</pre>
                <pre class="overflow-x-auto mb-0">{promptB}</pre>
            </div>
        </div>


    </div>
</div>

<style>
    pre {
        white-space: pre-wrap;
    }
</style>

