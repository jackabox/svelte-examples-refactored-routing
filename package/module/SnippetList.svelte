<script>
  // import { onMount } from "svelte";
  import SnippetTable from "./../components/SnippetTable.svelte";
  import SnippetCreate from "./../components/SnippetCreate.svelte";
  import store from "./../shared/SnippetStore.js";

  let snippets = [];

  store.subscribe(data => {
    snippets = data;
  });
</script>

<style>
  @media (max-width: 850px) {
    #List {
      width: 80vw;
    }
  }
</style>
<div id="List">
<SnippetTable {snippets} />
</div>