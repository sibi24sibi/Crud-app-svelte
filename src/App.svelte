<script>
  import Navbar from "./Components/Navbar.svelte";

  import AddBook from "./Components/AddBook.svelte";
  import BookList from "./Components/BookList.svelte";
</script>

<main>
  <Navbar />
  <div class="flex">
    <AddBook />
    <BookList />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
