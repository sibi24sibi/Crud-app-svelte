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

<div class="flex flex-col mx-auto">
  <input
    placeholder="Title"
    class="input input-bordered w-full max-w-xs"
    bind:value={title}
  />
  <input
    placeholder="Author"
    class="input input-bordered w-full max-w-xs"
    bind:value={author}
  />
  <button class="btn btn-primary max-w-xs" {addBook}>Add Book</button>
</div>
