import { writable } from "svelte/store";

export const books = writable([
  { id: 1, title: "Harry Potter ", author: "J. K. Rowling" },
  { id: 2, title: "Wings of Fire", author: "Abdul kalam" },
]);
