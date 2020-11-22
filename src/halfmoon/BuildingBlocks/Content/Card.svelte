<script lang="ts">
  import { mergeClassNames } from '../../../utils/utils';

  export let className: string = undefined;
</script>

<div class={mergeClassNames('card', className)}>
  <slot name="title" />
  <slot />
</div>
