<script>
  import { onMount } from 'svelte';
  import TaskColumn from '../components/Task/TaskColumn.svelte';
  import TaskColumnSeparator from '../components/Task/TaskColumnSeparator.svelte';
  import Col from '../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import { TaskType } from '../models/Task/TaskType';
  import { getAllTasks, saveAllTasks } from '../services/TaskService';
  import { taskStore } from '../store/tasksStore';

  onMount(() => {
    const allTasks = getAllTasks();
    taskStore.init(allTasks);
  });

  window.addEventListener('beforeunload', () => {
    saveAllTasks($taskStore);
  });
</script>

<style lang="scss">
  :global(.full-height) {
    min-height: 100%;
  }
</style>

<Row className="full-height">
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskType.TO_DO} />
  </Col>
  <TaskColumnSeparator />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskType.IN_PROGRESS} />
  </Col>
  <TaskColumnSeparator />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskType.DONE} />
  </Col>
</Row>
