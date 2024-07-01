<script>
  import { books } from "./BookStore.js";
  let editableBook = null;

  function deleteBook(id) {
    books.update((items) => items.filter((item) => item.id !== id));
  }

  function editBook(book) {
    editableBook = { ...book };
  }

  function saveEdit() {
    books.update((items) =>
      items.map((item) => (item.id === editableBook.id ? editableBook : item))
    );
    editableBook = null;
  }
</script>

<div class="overflow-x-auto max-w-3xl mx-auto my-5">
  <h1 class="text-2xl uppercase">Book List</h1>
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each $books as book}
        <tr>
          {#if editableBook && editableBook.id === book.id}
            <td
              ><input
                class="input input-bordered"
                bind:value={editableBook.title}
              /></td
            >

            <td>
              <input
                class="input input-bordered"
                bind:value={editableBook.author}
              /></td
            >
            <td>
              <button class="btn btn-primary" on:click={saveEdit}>Save</button
              ></td
            >
          {:else}
            <td>{book.title} </td> <td> {book.author} </td>
            <td
              ><button
                class="btn btn-error"
                on:click={() => deleteBook(book.id)}>Delete</button
              >
              <button class="btn btn-success" on:click={() => editBook(book)}
                >Edit</button
              ></td
            >
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
