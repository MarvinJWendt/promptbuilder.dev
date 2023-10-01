<script>
    const faq = [
      {
        q: "What is a prompt builder?",
        a: `A prompt builder is a tool that lets you create prompts for chatbots, like ChatGPT.`
      },
      {
        q: "What are the benefits of promptbuilder.dev?",
        a: `Coming up with prompts, which give a good result, can be hard. Often you have to try many different prompts before you find one that works. A prompt builder can help you with this process, by letting you quickly try out many different settings. Also, the prompts at promptbuilder.dev are carefully curated, so you can be confident that they will give good results.`
      },
      {
        q: 'Which AI models are supported?',
        a: `Promptbuilder.dev is not limited to any specific AI models. The prompts are crafted and tested for <a class="link" target="_blank" href="https://chat.openai.com/">ChatGPT</a> (GPT-3 and GPT-4), but can be used with any AI model, altough the results may vary.`
      },
      {
        q: "Do I need to attribute generated content to promptbuilder.dev?",
        a: `No :)`
      },
      {
        q: 'Can I use the prompts commercially?',
        a: `Yes! Feel free to use the prompts wherever you like. <br/> If you want to support promptbuilder.dev, you can link to it, mention it in your blog posts or videos, or dontate at <a class="link" href="https://marvin.ws/donate">marvin.ws/donate</a>.`
      }
    ]
</script>

<section class="join join-vertical w-full">
    <h2>FAQ</h2>
    {#each faq as {q, a}}
        <div class="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion" />
            <div class="collapse-title text-xl font-medium">
                {q}
            </div>
            <div class="collapse-content">
                <p>{@html a}</p>
            </div>
        </div>
    {/each}
</section>
