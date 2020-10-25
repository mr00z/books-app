<script lang="ts">
  import Card from '../../halfmoon/BuildingBlocks/Content/Card.svelte';
  import type TaskModel from '../../models/Task/TaskModel';

  export let taskData: TaskModel;
</script>

<Card>
  <h2 name="title">{taskData?.name}</h2>
  <p>{taskData?.description}</p>
</Card>
