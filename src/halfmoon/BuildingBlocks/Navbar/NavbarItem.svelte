<script lang="ts">
  export let active: boolean = false;
  export let href: string;
</script>

<li class="nav-item" class:active>
  <a {href} class="nav-link"><slot /></a>
</li>
