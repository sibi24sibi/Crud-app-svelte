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

<ul>
  <h1 class="text-2xl uppercase">Book List</h1>
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

  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each $books as book (index)}
        <tr>
          {#if editableBook && editableBook.id === book.id}
            <td><input bind:value={editableBook.title} /></td>
            <td><input bind:value={editableBook.author} /></td>
            <td>
              <button on:click={saveEdit}>Save</button>
            </td>
          {:else}
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <button on:click={() => deleteBook(book.id)}>Delete</button>
              <button on:click={() => editBook(book)}>Edit</button>
            </td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
  {#each $books as book}
    <li>
      {#if editableBook && editableBook.id === book.id}
        <input bind:value={editableBook.title} />
        <input bind:value={editableBook.author} />
        <button on:click={saveEdit}>Save</button>
      {:else}
        {book.title} by {book.author}
        <button on:click={() => deleteBook(book.id)}>Delete</button>
        <button on:click={() => editBook(book)}>Edit</button>
      {/if}
    </li>
  {/each}
</ul>
