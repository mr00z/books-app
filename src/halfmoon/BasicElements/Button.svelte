<script lang="ts">
  import { mergeClassNames } from '../../utils/utils';

  export let className: string = undefined;
  export let type: ColorType = undefined;
  export let onClick = undefined;
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let title: string = undefined;
</script>

<button
  class={mergeClassNames('btn', type ? `btn-${type}` : type, className)}
  {title}
  {disabled}
  on:click={onClick}
  class:btn-block={block}>
  <slot />
</button>
