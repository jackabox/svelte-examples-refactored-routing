import { writable } from "svelte/store";
import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";
import snippetService from "./SnippetService.js";

let snippetsFirestore = [];
let store = writable([]);
// parseFloat(doc.data().subtotal)
snippetService
  .readSnippet()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      snippetsFirestore = [
        ...snippetsFirestore,
        {
          id: doc.id,
          // date: doc.data().date,
          language: doc.data().language,
          title: doc.data().title,
          snippet: doc.data().snippet,
          note: doc.data().note
        }
      ];
    });
    console.log("snippetsFirestore", snippetsFirestore);
    store.set(snippetsFirestore);
  })
  .catch((err) => console.log(err.message));

export const totalTweenStore = tweened(0, {
  duration: 500,
  delay: 800,
  easing: cubicOut
});

export default store;
