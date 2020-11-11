<script lang="ts">
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Card from '../../halfmoon/BuildingBlocks/Content/Card.svelte';
  import Input from '../../halfmoon/FormElements/Input.svelte';
  import Textarea from '../../halfmoon/FormElements/Textarea.svelte';
  import type TaskModel from '../../models/Task/TaskModel';

  export let taskData: TaskModel;
  export let editable: boolean = false;
</script>

{#if editable}
  <Card>
    <Input type="text" placeholder="Title" className="w-half" size="large" value={taskData?.name} />
    <Textarea className="my-5 w-full" placeholder="Description" size="large" value={taskData?.description} />
    <Button type="success">Save</Button>
  </Card>
{:else}
  <Card>
    <h2 name="title">{taskData?.name}</h2>
    <p>{taskData?.description}</p>
  </Card>
{/if}
