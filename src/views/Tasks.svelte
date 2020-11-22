<script>
  import TaskColumn from '../components/Task/TaskColumn.svelte';
  import TaskColumnSeparator from '../components/Task/TaskColumnSeparator.svelte';
  import Col from '../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import { TaskTypes } from '../models/Task/TaskTypes';
</script>

<style lang="scss">
  :global(.full-height) {
    min-height: 100%;
  }
</style>

<Row className="full-height">
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.TO_DO} />
  </Col>
  <TaskColumnSeparator />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.IN_PROGRESS} />
  </Col>
  <TaskColumnSeparator />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.DONE} />
  </Col>
</Row>
