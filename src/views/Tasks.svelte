<script lang="ts">
  import { onMount } from 'svelte';
  import Task from '../components/Task/Task.svelte';
  import { getAllTasks } from '../services/TaskService';
  import TaskModel from '../models/Task/TaskModel';
  import Button from '../halfmoon/BasicElements/Button.svelte';
  import Row from '../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import Col from '../halfmoon/BuildingBlocks/Grid/Col.svelte';

  let tasks: TaskModel[] = [];

  function fetchTasks() {
    tasks = getAllTasks();
  }
  onMount(() => {
    fetchTasks();
  });

  function handleAddTask() {
    const task = new TaskModel();
    tasks = [...tasks, task];
  }
</script>

<div>
  <Row className="mt-5">
    <Col>
      <Button onClick={handleAddTask} block>Add task</Button>
    </Col>
  </Row>
  {#each tasks as task}
    <Task taskData={task} editable={!task.name} onSave={fetchTasks} />
  {/each}
</div>
