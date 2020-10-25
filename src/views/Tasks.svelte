<script lang="ts">
  import { onMount } from 'svelte';
  import Task from '../components/Task/Task.svelte';
  import { getAllTasks } from '../services/TaskService';
  import type TaskModel from '../models/Task/TaskModel';

  let tasks: TaskModel[] = [];

  onMount(() => {
    tasks = getAllTasks();
  });
</script>

{#each tasks as task}
  <Task taskData={task} />
{/each}
