<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Col from '../../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import Task from '../../models/Task/Task';
  import { TaskType } from '../../models/Task/TaskType';
  import { getAllTasks } from '../../services/TaskService';
  import { convertEnumIdentifier } from '../../utils/utils';
  import TaskCard from './TaskCard.svelte';

  export let tasksType: TaskType;

  let tasks: Task[] = [];

  function fetchTasks() {
    tasks = getAllTasks(tasksType);
  }
  onMount(() => {
    fetchTasks();
  });

  function handleAddTask() {
    const task = {} as Task;
    task.taskType = tasksType;
    tasks = [...tasks, task];
  }
</script>

<section>
  <h2 class="text-center">{convertEnumIdentifier(TaskType[tasksType])}</h2>
  <Row className="mt-5 my-auto">
    <Col>
      <Button onClick={handleAddTask} block>Add task</Button>
    </Col>
  </Row>
  {#each tasks as task}
    <TaskCard taskData={task} onSave={fetchTasks} />
  {/each}
</section>
