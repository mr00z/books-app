<script lang="ts">
  import 'halfmoon/css/halfmoon-variables.min.css';
  import ContentWrapper from './halfmoon/BuildingBlocks/Containers/ContentWrapper.svelte';
  import PageWrapper from './halfmoon/BuildingBlocks/Containers/PageWrapper.svelte';
  import Navigation from './components/Navigation/Navigation.svelte';
  import Container from './halfmoon/BuildingBlocks/Containers/Container.svelte';
  import Tasks from './views/Tasks.svelte';
</script>

<PageWrapper withNavbar>
  <Navigation />
  <ContentWrapper>
    <Container>
      <Tasks />
    </Container>
  </ContentWrapper>
</PageWrapper>
