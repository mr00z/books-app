<script lang="ts">
  import { mergeClassNames } from '../../utilities';

  export let className: string = undefined;
  export let type: ColorType = undefined;
  export let onClick = undefined;
</script>

<button class={mergeClassNames('btn', type ?? `btn-${type}`, className)} on:click={onClick}>
  <slot />
</button>
