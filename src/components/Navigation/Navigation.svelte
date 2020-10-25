<script lang="ts">
  import halfmoon from 'halfmoon/js/halfmoon-module';
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Navbar from '../../halfmoon/BuildingBlocks/Navbar/Navbar.svelte';
  import NavbarItem from '../../halfmoon/BuildingBlocks/Navbar/NavbarItem.svelte';
</script>

<Navbar>
  <NavbarItem active>Tasks</NavbarItem>
  <NavbarItem>Archive</NavbarItem>
  <NavbarItem className="ml-auto">
    <Button onClick={() => halfmoon.toggleDarkMode()}>Dark mode</Button>
  </NavbarItem>
</Navbar>
