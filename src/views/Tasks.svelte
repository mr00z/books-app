<script>
  import TaskColumn from '../components/Task/TaskColumn.svelte';
  import Col from '../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import { TaskTypes } from '../models/Task/TaskTypes';

  import './Tasks.scss';
</script>

<style lang="scss">
  .task-column {
    &-separator{
    border-left: 2px solid #444;
    margin: 1em;
    }
  }
  :global(.full-height) {
    min-height: 100%;
  }
</style>

<Row className="full-height">
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.TO_DO} />
  </Col>
  <div class="task-column-separator" />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.IN_PROGRESS} />
  </Col>
  <div class="task-column-separator" />
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.DONE} />
  </Col>
</Row>
