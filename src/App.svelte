<script lang="ts">
  import "halfmoon/css/halfmoon.css";
  import { onMount } from "svelte";

  import ContentWrapper from "./halfmoon/BuildingBlocks/Containers/ContentWrapper.svelte";
  import PageWrapper from "./halfmoon/BuildingBlocks/Containers/PageWrapper.svelte";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import { setPreferredTheme } from "./utils/themeHelper";
  import Routes from "./Routes.svelte";
  import { getAllTasks, saveAllTasks } from "./services/TaskService";
  import { taskStore } from "./store/tasksStore";

  onMount(() => {
    setPreferredTheme();

    const allTasks = getAllTasks();
    taskStore.init(allTasks);
  });

  window.addEventListener("beforeunload", () => {
    saveAllTasks($taskStore);
  });
</script>

<PageWrapper withNavbar>
  <Navigation />
  <ContentWrapper>
    <Routes />
  </ContentWrapper>
</PageWrapper>
