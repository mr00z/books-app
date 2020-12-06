<script lang="ts">
  import { mergeClassNames } from '../../../utils/utils';

  export let className: string = undefined;
  export let equalSpacing: boolean = false;
  export let equalSpacingBreakpoint: Breakpoint = undefined;

  function getEqualSpacingClass() {
    let eqSpacingClass = '';

    if (equalSpacing) eqSpacingClass = 'row-equal-spacing';

    if (equalSpacingBreakpoint) eqSpacingClass = `${eqSpacingClass}-${equalSpacingBreakpoint}`;

    return eqSpacingClass;
  }
</script>

<div class={mergeClassNames('row', className, getEqualSpacingClass())}>
  <slot />
</div>
