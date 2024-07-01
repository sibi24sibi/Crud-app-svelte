<script>
  import Navbar from "./Components/Navbar.svelte";

  import AddBook from "./Components/AddBook.svelte";
  import BookList from "./Components/BookList.svelte";
</script>

<main>
  <Navbar />

  <AddBook />
  <BookList />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
