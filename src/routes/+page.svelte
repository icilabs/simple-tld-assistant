<script lang="ts">
    import markdownit from 'markdown-it';
    import hljs from 'highlight.js';
    import { fly, slide } from 'svelte/transition';
    import { enhance, applyAction } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data: import('./$types').PageData;
    
    
    let formElement: HTMLFormElement;
    let processing = false;
    let prompt: string;

    const suggestedPrompts = [
    'Please generate 4 short, memorable, and available .ro domain names for my Romanian online shop that primarily sells vegan and organic (bio) food and promotes healthy diets. The domain names should be relevant to my business, easy to remember, and suitable for international audience.',
    'When does rotld.ro expire and could it be registered again? What is the current status of the domain name rotld.ro?',
    'What nameserver does the domain name google.ro use? Can you tell me the IP address of the nameservers for google.ro or show me how to find it?',
    'I would like to know the owner of the domain name google.ro. Can you provide me with the contact details of the registrant of google.ro?',
    ];

    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
            }
            return ''; // use external default escaping
        }
    }); 

  export let roles_mapping: {
      [key: string]: string[]
  }
roles_mapping = {
  assistant: ["chat-start", "primary-content"],
  user: ["chat-end", "accent-content"]
}
let promptInputElement: HTMLTextAreaElement;

function autoResizeTextarea() {
  promptInputElement.style.height = 'auto';
  promptInputElement.style.height = promptInputElement.scrollHeight + 'px';
}

  function submitForm() {
    formElement.requestSubmit();
    autoResizeTextarea();
  }

  async function resetConversation() {
    if (processing) return;
    processing = true;

    try {
      data.messages = undefined;

      prompt = '';
      promptInputElement.value = '';
      autoResizeTextarea();

      
      // Send a request to page server clear_chat
      await fetch('?/clear_chat', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: '',
      });

      // Scroll to top or desired position
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error resetting conversation:', error);
      // Handle errors (e.g., show a notification to the user)
    } finally {
      processing = false;
    }
  }

  function insertPrompt(promptText: string) {
    promptInputElement.value = promptText;
    autoResizeTextarea();
    promptInputElement.focus();
  }
</script>

<div class="container mx-auto max-w-full lg:max-w-screen-lg flex flex-col flex-grow">
  <!-- Suggested Prompts Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
    {#each suggestedPrompts as prompt}
      <button
        class="btn btn-outline w-full h-40 text-left text-sm items-start pt-5"
        on:click={() => insertPrompt(prompt)}
      >
        {prompt}
      </button>
    {/each}
  </div>

  <!-- Messages Container -->
  <div class="flex-1 overflow-y-auto p-4">
      {#if data.messages}
          {#each data.messages as message}
              <div in:fly={{ y: 60 }} class="chat {roles_mapping[message.role][0]} mb-5">
                  <div class="chat-bubble chat-bubble-{roles_mapping[message.role][1]} p-3 overflow-x-auto break-words">
                      {#if message.role === 'assistant'}
                          {@html md.render(message.content)}
                      {:else}
                          {message.content}
                      {/if}
                  </div>
              </div>
          {/each}
      {/if}
      {#if prompt && prompt !== ''}
          <div class="chat chat-end">
              <div class="chat-bubble chat-bubble-primary-content p-3 break-words">{prompt}</div>
          </div>
          <div class="chat chat-start">
              <div class="chat-bubble chat-bubble-accent-content p-3 pl-10 pr-10">
                <span class="loading loading-dots loading-md"></span>
              </div>
          </div>
      {/if}
  </div>

  <!-- Form -->
  <form
  class="form-control rounded-xl mb-4 mx-auto max-w-full lg:max-w-screen-lg w-full"
  method="post"
  action="?/chat"
  use:enhance={({ formElement, formData, action, cancel, submitter }) => {
    processing = true;
    if (formData.get('prompt') === '') {
      processing = false;
      return cancel();
    }

    prompt = String(formData.get('prompt'));
    formElement.reset();
    return async ({ update }) => {
      await update();
      processing = false;
      promptInputElement.focus();
      prompt = '';
      window.scrollTo(0, document.body.scrollHeight);
    };
  }}
  bind:this={formElement}
>
  <!-- Reset Button -->
  {#if data.messages && processing === false}
  <div class="mb-4">
    <button
      type="button"
      on:click={resetConversation}
      disabled={processing}
      class="btn bg-orange-400 text-black hover:bg-orange-500 w-auto"
    >
      Reset conversation
    </button>
  </div>
  {/if}
    <div class="relative w-fullr">   
      <textarea
        bind:this={promptInputElement}
        on:input={autoResizeTextarea}
        disabled={processing}
        name="prompt"
        placeholder="Type here"
        class="textarea textarea-bordered p-4 w-full rounded-lg resize-none"
        rows="1"
      ></textarea>

      <!-- Submit Button -->
      <button
        type="button"
        on:click={submitForm}
        disabled={processing}
        class="absolute bottom-4 right-2 flex items-center p-2 bg-blue-700 text-white hover:bg-blue-500 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </form>
</div>
