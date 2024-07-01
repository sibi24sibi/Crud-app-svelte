<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./Components/Navbar.svelte";
  import Video from "./Components/InputData.svelte";
  import InputData from "./Components/InputData.svelte";
  import AddBook from "./Components/AddBook.svelte";
  import BookList from "./Components/BookList.svelte";
</script>

<main>
  <Navbar />

  <h1>Book List</h1>
  <AddBook />
  <BookList />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  input {
    margin: 0.5em;
  }

  button {
    margin: 0.5em;
  }
</style>
