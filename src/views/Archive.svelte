<script lang="ts">
  import { onMount } from "svelte";
  import TaskCard from "../components/Task/TaskCard.svelte";
  import type Task from "../models/Task/Task";
  import { taskStore } from "../store/tasksStore";

  let archivedTasks: Task[] = [];

  onMount(() => {
    for (const tasksType in $taskStore) {
      if (Object.prototype.hasOwnProperty.call($taskStore, tasksType)) {
        const tasks: Task[] = $taskStore[tasksType];
        archivedTasks = [
          ...archivedTasks,
          ...tasks.filter((t) => t.archived === true),
        ];
      }
    }
  });
</script>

<section class="mx-15">
  {#each archivedTasks as task (task.id)}
    <TaskCard taskData={task} />
  {/each}
</section>
