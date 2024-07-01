
<script>
    import { writable } from 'svelte/store';

</script>
<body>


    export const books = writable([
      { id: 1, title: '1984', author: 'George Orwell' },
      { id: 2, title: 'Brave New World', author: 'Aldous Huxley' }
    ]);

    </body>
