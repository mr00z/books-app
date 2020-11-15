<script lang="ts">
  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Card from '../../halfmoon/BuildingBlocks/Content/Card.svelte';
  import type TaskModel from '../../models/Task/Task';
  import { addtask } from '../../services/TaskService';

  export let taskData: TaskModel;
  export let editable: boolean = false;
  export let onSave: () => void = undefined;

  let { name, description, taskType } = taskData;

  function saveTask() {
    if (description && name) {
      addtask({ name, description, taskType } as TaskModel);
      editable = false;

      if (onSave) onSave();
    }
  }
  const formControlClasses = 'form-control form-control-lg';
</script>

{#if editable}
  <Card>
    <input type="text" placeholder="Title" class={`${formControlClasses} w-half`} bind:value={name} />
    <textarea class={`${formControlClasses} my-5 w-full`} placeholder="Description" bind:value={description} />
    <Button type="success" onClick={saveTask}>Save</Button>
  </Card>
{:else}
  <Card>
    <h2 name="title">{name}</h2>
    <p>{description}</p>
  </Card>
{/if}
