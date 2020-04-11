<script>
  import Snippet from "./module/SnippetModule.svelte";
  import SnippetTable from "./module/SnippetList.svelte";
</script>

<style>
 
  .h-label {
    height: 13vh;
    width: 100%;
    color: white;
    text-align: center;
    background-color: rgba(55, 55, 55, 0.85);
    text-shadow: 1px 3px 2px #050505;
    padding: 10px;
    box-shadow: inset 2px 2px 25px 2px #020202, -2px -2px 25px -2px #020202;
    z-index: 2;
  }
  .module {
    width: 80vw;
    margin-left: 10vw;
    background: rgba(55, 55, 55, 0.75);
    padding: 2%;
    box-shadow: inset 0px 0px 2px 0px #020202, inset 0px 0px 2px 0px #020202;
    /* background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="25" height="43" viewBox="1 1 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%70fff000" fill-opacity="1" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); */
  }

  .main-contain {
    display: flex;
  }

  @media screen and (max-width: 850px) {
    .main-contain {
      display: flex;
      flex-direction: column;
    }
  }

  select {
    padding: 6px;
    font-size: 24px;
  }
</style>

<body>
<div class="module">
  <div class="h-label">
    <h1 id="page-title">Add A Snippet</h1>
  </div>
  <div class="main-contain">
  <Snippet />
  <SnippetTable />
  </div>
</div>
</body>