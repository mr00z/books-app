<script lang="ts">
  import { mergeClassNames } from '../../utils/utils';

  export let className: string = undefined;
  export let type: ColorType = undefined;
  export let onClick = undefined;
  export let block: boolean = false;
</script>

<button
  class={mergeClassNames('btn', type ? `btn-${type}` : type, className)}
  on:click={onClick}
  class:btn-block={block}>
  <slot />
</button>
