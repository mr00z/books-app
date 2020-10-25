<script lang="ts">
  import { mergeClassNames } from '../../../utilities';

  export let className: string = undefined;
</script>

<div class={mergeClassNames('content', className)}>
  <slot class="content-title" name="title" />
  <slot />
</div>
