<script lang="ts">
  import 'halfmoon/css/halfmoon-variables.min.css';
  import ContentWrapper from './halfmoon/BuildingBlocks/Containers/ContentWrapper.svelte';
  import PageWrapper from './halfmoon/BuildingBlocks/Containers/PageWrapper.svelte';
  import Navigation from './components/Navigation/Navigation.svelte';
  import Container from './halfmoon/BuildingBlocks/Containers/Container.svelte';
  import Row from './halfmoon/BuildingBlocks/Grid/Row.svelte';
  import Col from './halfmoon/BuildingBlocks/Grid/Col.svelte';
</script>

<PageWrapper withNavbar>
  <Navigation />
  <ContentWrapper>
    <Container>
      <Row>
        <Col />
      </Row>
    </Container>
  </ContentWrapper>
</PageWrapper>
