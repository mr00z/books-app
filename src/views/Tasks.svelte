<script>
  import TaskColumn from '../components/Task/TaskColumn.svelte';
  import Col from '../halfmoon/BuildingBlocks/Grid/Col.svelte';
  import Row from '../halfmoon/BuildingBlocks/Grid/Row.svelte';
  import { TaskTypes } from '../models/Task/TaskTypes';
</script>

<Row>
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.TO_DO} />
  </Col>
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.IN_PROGRESS} />
  </Col>
  <Col sm={12} lg={3} className="mx-auto">
    <TaskColumn tasksType={TaskTypes.DONE} />
  </Col>
</Row>
