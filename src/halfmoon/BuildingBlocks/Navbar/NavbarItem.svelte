<script lang="ts">
  import { mergeClassNames } from '../../../utilities';

  export let active: boolean = false;
  export let href: string;
  export let className: string = undefined;
</script>

<li class={mergeClassNames('nav-item', className)} class:active>
  <a {href} class="nav-link"><slot /></a>
</li>
