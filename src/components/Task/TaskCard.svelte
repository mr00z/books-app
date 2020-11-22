<script lang="ts">
  import Icon from 'fa-svelte';
  import { faEdit } from '@fortawesome/free-regular-svg-icons';

  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Card from '../../halfmoon/BuildingBlocks/Content/Card.svelte';
  import Task from '../../models/Task/Task';
  import { addtask, editTask } from '../../services/TaskService';

  export let taskData: Task;
  export let onSave: () => void = undefined;

  let editable = !taskData?.id;

  let { id, name, description, taskType } = taskData;

  $: id = taskData.id;

  function handleEditButtonClick() {
    editable = true;
  }

  function handleCancelButtonClick() {
    editable = false;
    onSave();
  }

  function handleSaveButtonClick() {
    if (!name) return;

    if (!id) addtask(new Task(name, description, taskType));
    else editTask(taskData);

    editable = false;

    if (onSave) onSave();
  }
  const formControlClasses = 'form-control form-control-lg';
</script>

<style lang="scss">
  :global(.task-card) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
</style>

{#if editable}
  <Card className="task-card">
    <input type="text" placeholder="Title" class={`${formControlClasses} w-half`} bind:value={name} />
    <textarea class={`${formControlClasses} my-5 w-full`} placeholder="Description" bind:value={description} />
    <Button type="success" onClick={handleSaveButtonClick}>Save</Button>
    <Button type="danger" onClick={handleCancelButtonClick}>Cancel</Button>
  </Card>
{:else}
  <Card className="task-card">
    <Button className="float-right" onClick={handleEditButtonClick}>
      <Icon icon={faEdit} />
    </Button>
    <h4 class="card-title" name="title">{name}</h4>
    <p>{description}</p>
  </Card>
{/if}
