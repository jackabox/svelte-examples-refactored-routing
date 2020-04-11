import { db } from "./firebase.js";

function createSnippet(snippet) {
  return db.collection("snippets").add(snippet);
}

function readSnippet() {
  return db.collection("snippets").get();
}

function updateSnippet(snippet) {
  return db
    .collection("snippets")
    .doc(snippet.id)
    .update({ ...snippet });
}

function deleteSnippet(snippet) {
  return db
    .collection("snippets")
    .doc(snippet.id)
    .delete();
}

const snippetService = {
  createSnippet,
  readSnippet,
  updateSnippet,
  deleteSnippet
};

export default snippetService;
