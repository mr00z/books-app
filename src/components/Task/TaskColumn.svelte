<script lang="ts">
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Col from '../../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import Task from '../../models/Task/Task';
  import { TaskType } from '../../models/Task/TaskType';
  import { taskStore } from '../../store/tasksStore';
  import { convertEnumIdentifierToWords } from '../../utils/utils';
  import TaskCard from './TaskCard.svelte';

  export let tasksType: TaskType;

  let tasks: Task[];

  $: tasks = $taskStore[tasksType];

  function handleAddTask() {
    const task = new Task('', '', tasksType);
    taskStore.addTask(task);
  }
</script>

<section>
  <h2 class="text-center">{convertEnumIdentifierToWords(TaskType[tasksType])}</h2>
  <Row className="mt-5 my-auto">
    <Col>
      <Button onClick={handleAddTask} block>Add task</Button>
    </Col>
  </Row>
  {#each tasks as task}
    <TaskCard taskData={task} />
  {/each}
</section>
