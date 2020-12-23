<script lang="ts">
  import currentRoute from "../../../store/routerStore";

  import { mergeClassNames } from "../../../utils/utils";

  export let active: boolean = false;
  export let href: string = undefined;
  export let className: string = undefined;

  let isActive = active;

  $: {
    isActive = $currentRoute === href;
  }
</script>

<li class={mergeClassNames('nav-item', className)} class:active={isActive}>
  <a {href} class="nav-link">
    <slot />
  </a>
</li>
