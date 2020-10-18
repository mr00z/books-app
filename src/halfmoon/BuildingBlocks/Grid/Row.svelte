<script lang="ts">
  export let className: string = undefined;
</script>

<div class="row {className}">
  <slot />
</div>
