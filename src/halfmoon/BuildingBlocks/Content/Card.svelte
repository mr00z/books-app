<script lang="ts">
  import { mergeClassNames } from '../../../utilities';

  export let className: string = undefined;
</script>

<div class={mergeClassNames('card', className)}>
  <slot class="card-title" name="title" />
  <slot />
</div>
