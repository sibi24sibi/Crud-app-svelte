<script>
  import { books } from "./BookStore.js";
  let title = "";
  let author = "";

  function addBook() {
    books.update((items) => [
      ...items,
      { id: items.length ? items[items.length - 1].id + 1 : 1, title, author },
    ]);
    title = "";
    author = "";
  }
</script>

<div class="flex flex-col">
  <input placeholder="Title" bind:value={title} />
  <input placeholder="Author" bind:value={author} />
  <button on:click={addBook}>Add Book</button>
</div>
