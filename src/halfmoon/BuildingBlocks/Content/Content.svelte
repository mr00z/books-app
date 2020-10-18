<script lang="ts">
  export let className: string = undefined;
</script>

<div class="content {className}">
  <slot class="content-title" name="title" />
  <slot />
</div>
