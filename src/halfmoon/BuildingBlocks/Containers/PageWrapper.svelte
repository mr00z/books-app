<script lang="ts">
  export let withNavbar: boolean = false;
</script>

<div class="page-wrapper" class:with-navbar={withNavbar}>
  <slot />
</div>
