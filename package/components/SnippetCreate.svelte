<script>
  import store from "../shared/SnippetStore.js";
  import snippetService from "../shared/SnippetService.js";

  let language, title, snippet, note;

  function createSnippet() {
    let newSnippet = {
      language,
      title,
      snippet,
      note
    };

    snippetService.createSnippet(newSnippet).then(docRef => {
      store.update(data => {
        newSnippet.id = docRef.id;
        return [...data, newSnippet];
      });
      initForm();
    });
  }

  function initForm() {
    language = " ";
    title = " ";
    note = " ";
  }

  let input = " ";
  initForm();

  function expand(e) {
    let box = document.getElementById("snippet");
  }

  let current = "expanding";
  let cnote = "noteing";
</script>

<style>
  .form-group {
    display: flex;
    flex-direction: column;
    width: 40vw;
  }
  label {
    width: 100%;
    background: rgba(125, 125, 125, 0.75);

    font-size: 1.8rem;
    padding: 5px;
    -webkit-box-shadow: 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    box-shadow: 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    color: black;
    font-weight: bolder;
  }
  select {
    font-size: 1.8rem;
    padding: 5px;

    -webkit-box-shadow: inset 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      inset -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    box-shadow: inset 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      inset -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    color: black;
    font-weight: bolder;
  }
  textarea {
    font-size: 1.8rem;
    padding: 5px;
    -webkit-box-shadow: inset 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      inset -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    box-shadow: inset 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      inset -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    background-color: rgba(255, 255, 255, 0.88);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23474151' fill-opacity='0.39' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: black;
    font-weight: bolder;
    z-index: 2;
    padding-top: 10px;
    font-size: 2rem;
    line-height: 1.3;
    box-sizing: border-box;
  }
  .main-form {
    display: block;
    width: 100%;
    height: auto;
    resize: vertical-auto;
    padding: 5px;
    border: 2px ridge black;
    -webkit-box-shadow: -13px -8px 9px -2px #000000, 17px 11px 9px 2px #000000;
    box-shadow: -13px -8px 9px -2px #000000, 17px 11px 9px 2px #000000;
  }

  select {
    display: block;
    font-size: 1.8rem;
    font-family: sans-serif;
    font-weight: 700;
    line-height: 1.3;
    padding: 0.4em 1.4em 0.4em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: black;
    /* background-color: rgba(75, 75, 75, 0.85); */
    background-color: rgba(255, 255, 255, 0.88);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23474151' fill-opacity='0.39' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: black;
    background-repeat: repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    -webkit-box-shadow: 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
    box-shadow: 18px 18px 8px -8px rgba(0, 0, 0, 0.88),
      -18px -18px 15px -8px rgba(0, 0, 0, 0.88);
  }

  .select-icon {
    position: absolute;
    left: 47vw;
    top: 25vh;
    color: black;
    pointer-events: pointer;

    transition: background-color 0.3s ease, border-color 0.3s ease;
    z-index: 2;
  }
  .select-icon svg.icon {
    transition: fill 0.3s ease;
    fill: black;
  }

  .select-css::-ms-expand {
    display: flex;
  }

  .select-css option {
    font-weight: normal;
  }

  /* Support for rtl text, explicit support for Arabic and Hebrew */
  *[dir="rtl"] .select-css,
  :root:lang(ar) .select-css,
  :root:lang(iw) .select-css {
    background-position: left 0.7em top 50%, 0 0;
    padding: 0.6em 0.8em 0.5em 1.4em;
  }

  /* Disabled styles */
  .select-css:disabled,
  .select-css[aria-disabled="true"] {
    color: black;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  }
  .select-css:disabled:hover,
  .select-css[aria-disabled="true"] {
    border-color: #aaa;
  }
  @media (max-width: 850px) {
    .form-control {
      width: 80vw;
    }
    .flex-control {
      width: 80vw;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      width: 80vw;
    }

    .main-form {
      display: block;
      width: 100%;
    }
    label {
      width: 100%;
    }
  }
</style>

<!-- ----------------------STYLE STARTS HERE ----------------------------------------->
<!-- ----------------------HTML STARTS HERE ----------------------------------------->

<form class="main-form " on:submit|preventDefault={createSnippet}>
  <div class="form-control">
    <div class="form-group">
      <label for="language">Language or FrameWork</label>
      <select
        class="select-css"
        placeholder="Pick"
        id="language"
        bind:value={language}>
        <option selected="Choose a language" />
        <option selected value="javascript">Javascript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="svelte">Svelte</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="node">Node</option>
      </select>
            <div class="select-icon">
        <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
          <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
        </svg>
      </div>
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <textarea
        on:click={expand}
        type="text-field"
        class="form-control"
        id="title"
        placeholder="title"
        bind:value={title} />
    </div>


    <div class="form-group">
      <label for="snippet">Snippet</label>
      <textarea
        on:dblclick={expand}
        type="text-field"
        class={current === 'form-control' ? 'expanding' : 'form-control'}
        on:dblclick={() => (current === 'form-control' ? (current = 'expanding') : current === 'expanding' ? (current = 'form-control') : 'form-control')}
        id="snippet"
        placeholder="snippet"
        bind:value={snippet} />
    </div>

    <div class="form-group">
      <label for="quantity">Extra Notes</label>
      <textarea
        type="text"
        class={cnote === 'form-control' ? 'noteing' : 'form-control'}
        on:dblclick={() => (cnote === 'form-control' ? (cnote = 'noteing') : cnote === 'noteing' ? (cnote = 'form-control') : 'form-control')}
        id="note"
        placeholder="notes here"
        bind:value={note} />
    </div>
  </div>

  <div class="form-group">
    <button type="submit" class="btn">create</button>
  </div>

</form>
