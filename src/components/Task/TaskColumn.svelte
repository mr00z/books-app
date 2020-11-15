<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Col from '../../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import TaskModel from '../../models/Task/Task';
  import { TaskTypes } from '../../models/Task/TaskTypes';
  import { getAllTasks } from '../../services/TaskService';
  import { convertEnumIdentifier } from '../../utilities';
  import TaskCard from './TaskCard.svelte';

  export let tasksType: TaskTypes;

  let tasks: TaskModel[] = [];

  function fetchTasks() {
    tasks = getAllTasks(tasksType);
  }
  onMount(() => {
    fetchTasks();
  });

  function handleAddTask() {
    const task = new TaskModel();
    task.taskType = tasksType;
    tasks = [...tasks, task];
  }
</script>

<section>
  <h2 class="text-center">{convertEnumIdentifier(TaskTypes[tasksType])}</h2>
  <Row className="mt-5 my-auto">
    <Col>
      <Button onClick={handleAddTask} block>Add task</Button>
    </Col>
  </Row>
  {#each tasks as task}
    <TaskCard taskData={task} editable={!task.name} onSave={fetchTasks} />
  {/each}
</section>
