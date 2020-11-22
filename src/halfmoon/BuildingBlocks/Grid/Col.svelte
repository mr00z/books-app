<script lang="ts">
  import { mergeClassNames } from '../../../utils/utils';

  export let all: ColWidth = undefined;
  export let sm: ColWidth = undefined;
  export let md: ColWidth = undefined;
  export let lg: ColWidth = undefined;
  export let xl: ColWidth = undefined;
  export let offset: { breakpoint?: Breakpoint; value: ColOffsetValue } = undefined;
  export let className: string = undefined;

  function getClassName() {
    if (!all && !sm && !md && !lg && !xl) return 'col';

    let className: string = '';

    if (all) className += ` col-${all}`;
    if (sm) className += ` col-sm-${sm}`;
    if (md) className += ` col-md-${md}`;
    if (lg) className += ` col-lg-${lg}`;
    if (xl) className += ` col-xl-${xl}`;

    if (offset) {
      const { breakpoint, value } = offset;
      if (breakpoint) className += `offset-${breakpoint}-${value}`;
      else className += `offset-${value}`;
    }

    return className.trimStart();
  }
</script>

<div class={mergeClassNames(getClassName(), className)}>
  <slot />
</div>
