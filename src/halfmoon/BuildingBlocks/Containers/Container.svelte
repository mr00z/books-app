<script lang="ts">
  export let fluid: boolean = false;
  export let breakpoint: 'sm' | 'md' | 'lg' | 'xl' = undefined;
  export let className: string = undefined;
</script>

<div
  class:container={!fluid && !breakpoint}
  class:container-fluid={fluid}
  class:container-sm={breakpoint === 'sm'}
  class:container-md={breakpoint === 'md'}
  class:container-lg={breakpoint === 'lg'}
  class:container-xl={breakpoint === 'xl'}
  class={className}>
  <slot />
</div>
