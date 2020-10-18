<script lang="ts">
  type BreakpointType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';

  export let all: BreakpointType = undefined;
  export let sm: BreakpointType = undefined;
  export let md: BreakpointType = undefined;
  export let lg: BreakpointType = undefined;
  export let xl: BreakpointType = undefined;

  function getClassName() {
    if (!all && !sm && !md && !lg && !xl) return 'col';

    let className: string = '';

    if (all) className += ` col-${all}`;
    if (sm) className += ` col-sm-${sm}`;
    if (md) className += ` col-md-${md}`;
    if (lg) className += ` col-lg-${lg}`;
    if (xl) className += ` col-xl-${xl}`;

    return className.trimStart();
  }
</script>

<div class={getClassName()}>
  <slot />
</div>
