<script>
  let count = $state(42);
</script>

<button class="bg-green-500 hover:bg-green-600 rounded px-4 py-1 my-4 text-white" onclick={() => count++}>Count: {count}</button>
