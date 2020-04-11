<script>
  import SnippetRow from "./SnippetRow.svelte";
  import store from "../shared/SnippetStore.js";
  import snippetService from "../shared/SnippetService.js";
  export let snippets;
  console.log(snippets);

  function updateSnippet(event) {
    const updatedSnippet = event.detail;

    snippetService.updateSnippet(updateSnippet).then(() => {
      store.update(data => {
        const idx = data.findIndex(snippet => snippet.id === updatedSnippet.id);
        data[idx] = updatedSnippet;
        return [...data];
      });
    });
  }

  function deleteSnippet(event) {
    const deletedSnippet = event.detail;

    snippetService.deleteSnippet(deletedSnippet).then(() => {
      store.update(data => {
        data = data.filter(snippet => snippet.id !== deletedSnippet.id);
        return [...data];
      });
    });
  }
</script>


<!-- ----------------------STYLE STARTS HERE ----------------------------------------->
<style>
  .table {
    width: 38vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }

  @media (max-width: 850px) {
    .table {
      display: block;
      width: 100%;
    }
  }
</style>

<!-- ----------------------HTML STARTS HERE ----------------------------------------->
<div class="table">
<table class="table">
  <tbody>
  {#each snippets as snip}
    <SnippetRow snippet={snip} on:snippet-update={updateSnippet} on:snippet-delete={deleteSnippet} />
  {/each}
  </tbody>
</table>
</div>