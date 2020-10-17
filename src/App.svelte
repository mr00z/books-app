<script lang="ts">
  import 'halfmoon/css/halfmoon-variables.min.css';
  import Navbar from './Navbar.svelte';
  let name: string = 'World';
</script>

<div class="page-wrapper with-navbar">
  <!-- Content wrapper -->
  <Navbar />
  <main class="content-wrapper">Hello {name}</main>
</div>
