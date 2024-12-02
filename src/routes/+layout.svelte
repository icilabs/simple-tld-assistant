<script>
    import "../app.css";
    import 'highlight.js/styles/atom-one-dark.css';

    import { onMount } from "svelte";

    let current_year = new Date().getFullYear();
    let copyright;
    if (current_year === 2023) {
        copyright = `${current_year}`;
    } else {
      copyright = `2023-${current_year}`;

    }

</script>
<body class="flex flex-col h-screen">

  <nav class="mb-5 bg-gray-800 w-full text-center p-5 flex justify-between items-center">
    <div class="text-white mx-2">
        <a href="/" class="flex items-center">
            <img src="/favicon.png" alt="Icon" class="w-8 h-8 mr-2">
            TLD Assistant
        </a>
    </div>
    <div>
      <a href="/about" class="inline-block mx-2">About</a>
      <a href="/privacy" class="inline-block mx-2">Privacy</a>
      <a href="/terms" class="inline-block mx-2">Terms</a>
    </div>
  </nav>

  <main class="flex flex-col flex-grow">
          <slot></slot>
  </main>
  <footer class="bg-neutral text-neutral-content p-5 text-center text-sm">
      <p>© {copyright} <a href="https://www.ici.ro">ICI Bucuresti</a></p>
      <p>ICI Innovation Laboratories</p>
  </footer>
</body>
