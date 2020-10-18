<script lang="ts">
  export let className: string = undefined;
</script>

<div class="card {className}">
  <slot class="card-title" name="title" />
  <slot />
</div>
