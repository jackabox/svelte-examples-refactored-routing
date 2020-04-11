<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Button from "./style/styles.svelte";
  const dispatch = createEventDispatcher();

  export let snippet;
  const fadeOptions = {
    duration: 300
  };

  let isInEditMode = false;

  let itemEdit = {
    language: "",
    title: "",
    snippet: "",
    note: ""
  };

  function toggleEdit(exp) {
    isInEditMode = !isInEditMode;
    if (isInEditMode) {
      itemEdit = { ...exp };
    }
  }

  function handleInput(event, fieldName) {
    itemEdit[fieldName] = event.target.value;
  }

  function save() {
    dispatch("snippet-update", itemEdit);
    isInEditMode = false;
  }

  function deleteSnippet(snippet) {
    dispatch("snippet-delete", snippet);
  }

  let toggle = "display";
</script>

<style>
  .default {
    display: none;
  }

  .action {
    font-size: 14px;
    margin-right: 3px;
    cursor: pointer;
  }

  .display {
    width: 38vw;
    height: auto;
    display: block;
    flex-wrap: wrap;
    margin: 0px 10px 10px 10px;
    background: cornflowerblue;
    overflow: hidden;
    border: 2px ridge black;
    padding: 5px;
    resize: vertical-auto;
  }
  .form-control {
    max-width: 37vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 0px 10px 10px 10px;
    background: rgba(220, 220, 220, 1);
    overflow: hidden;
    border: 2px ridge black;
    resize: vertical-auto;
  }

  .row {
    background: rgba(25, 25, 25, 0.85);
    width: 40vw;
    border: 4px ridge black !important;
    padding-top: 15px;
    resize: vertical-auto;
  }

  .trflex {
    max-width: 80vw;
  }

  @media (max-width: 850px) {
    .form-control {
      min-width: 80vw;
    }

    .display {
      width: 80vw;
    }
    .row {
      background: rgba(25, 25, 25, 0.85);
      width: 80vw;
      border: 4px ridge black !important;
      padding-top: 15px;
      resize: vertical-auto;
    }

    .trflex {
      max-width: 100%;
    }
  }
</style>

<!-- ----------------------STYLE STARTS HERE ----------------------------------------->
<!-- ----------------------HTML STARTS HERE ----------------------------------------->

<div class="trflex">
  {#if !isInEditMode}
    <tr
      class="row"
      on:dblclick={() => (toggle === 'display' ? (toggle = 'default') : toggle === 'default' ? (toggle = 'display') : 'display')}>
      <td class="form-control display">
        {snippet.language}
        <br />
        {snippet.title}
      </td>
      <td class={toggle === 'default' ? 'display' : 'default'}>
        {snippet.language}
      </td>

      <td class={toggle === 'default' ? 'display' : 'default'}>
        {snippet.snippet}
      </td>
      <td class={toggle === 'default' ? 'display' : 'default'}>
        {snippet.note}
      </td>
      <div>
        <td class="buttons" style="width:auto">
          <button
            class="action"
            on:click={() => toggleEdit(snippet)}
            value="edit">
            edit
          </button>
          <button class="action" on:click={() => deleteSnippet(snippet)}>
            delete
          </button>
        </td>
      </div>
    </tr>
  {:else}
    <tr class="trflex">

      <div class="display">
        <td class="form-control">
          <input
            type="text"
            value={snippet.language}
            on:input={evt => handleInput(evt, 'language')} />
        </td>
        <td class="form-control">
          <input
            type="text"
            value={snippet.title}
            on:input={evt => handleInput(evt, 'title')} />
        </td>
        <td class="form-control">
          <textarea
            type="text"
            value={snippet.snippet}
            on:change={evt => handleInput(evt, 'snippet')} />
        </td>
        <td class="form-control">
          <textarea
            type="text"
            value={snippet.note}
            on:change={evt => handleInput(evt, 'note')} />

        </td>
      </div>

    </tr>
    <div>
      <td class="buttons" style="width:auto">

        <button class="action" on:click={() => toggleEdit(snippet)}>
          save
        </button>
        <button class="action" on:click={() => toggleEdit(snippet)}>
          cancel
        </button>
      </td>
      in edit mode
    </div>
  {/if}
</div>
