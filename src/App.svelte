<script lang="ts">
  import 'halfmoon/css/halfmoon.css';
  import { onMount } from 'svelte';

  import ContentWrapper from './halfmoon/BuildingBlocks/Containers/ContentWrapper.svelte';
  import PageWrapper from './halfmoon/BuildingBlocks/Containers/PageWrapper.svelte';
  import Navigation from './components/Navigation/Navigation.svelte';
  import Tasks from './views/Tasks.svelte';
  import { setPreferredTheme } from './utils/themeHelper';

  onMount(() => {
    setPreferredTheme();
  });
</script>

<PageWrapper withNavbar>
  <Navigation />
  <ContentWrapper>
    <Tasks />
  </ContentWrapper>
</PageWrapper>
