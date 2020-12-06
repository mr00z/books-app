<script lang="ts">
  import Icon from 'fa-svelte';
  import { faEdit } from '@fortawesome/free-regular-svg-icons';

  import Button from '../../halfmoon/BasicElements/Button.svelte';
  import Card from '../../halfmoon/BuildingBlocks/Content/Card.svelte';
  import type Task from '../../models/Task/Task';
  import { taskStore } from '../../store/tasksStore';
  import { saveAllTasks } from '../../services/TaskService';
  import { TaskType } from '../../models/Task/TaskType';
  import { convertEnumIdentifierToWords } from '../../utils/utils';

  export let taskData: Task;

  let isNew = !taskData?.name && !taskData?.description;
  let editable = isNew;

  const { id } = taskData;

  const initialType = taskData.taskType.toString();

  function handleEditButtonClick() {
    editable = true;
  }

  function handleCancelButtonClick() {
    editable = false;
    if (isNew) taskStore.undoAddTask(taskData.taskType);
  }

  function handleSaveButtonClick() {
    if (!taskData.name) return;

    if (initialType !== taskData.taskType.toString()) taskStore.moveTask(taskData, TaskType[initialType]);
    else taskStore.editTask(taskData);

    editable = false;
    isNew = false;

    saveAllTasks($taskStore); // TODO: find other place to call that
  }
  const formControlClasses = 'form-control';

  const allTaskTypes = Object.keys(TaskType);
</script>

<style lang="scss">
  :global(.task-card) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
</style>

{#if editable}
  <Card className="task-card">
    <div class="form-group">
      <label for={`task_${id}_title`}>Title</label>
      <input
        id={`task_${id}_title`}
        type="text"
        placeholder="Title"
        class={`${formControlClasses} w-half`}
        bind:value={taskData.name} />
    </div>

    <div class="form-group my-5">
      <label for={`task_${id}_description`}>Description</label>
      <textarea
        id={`task_${id}_description`}
        class={`${formControlClasses} w-full`}
        placeholder="Description"
        bind:value={taskData.description} />
    </div>

    {#if !isNew}
      <div class="form-group my-5">
        <label for={`task_${id}_status`}>Status</label>
        <select id={`task_${id}_status`} class={`${formControlClasses} w-full`} bind:value={taskData.taskType}>
          {#each allTaskTypes as t}
            <option value={t}>{convertEnumIdentifierToWords(t)}</option>
          {/each}
        </select>
      </div>
    {/if}

    <Button type="success" onClick={handleSaveButtonClick}>Save</Button>
    <Button type="danger" onClick={handleCancelButtonClick}>Cancel</Button>
  </Card>
{:else}
  <Card className="task-card">
    <Button className="float-right" title="Edit task" onClick={handleEditButtonClick}>
      <Icon icon={faEdit} />
    </Button>
    <h4 class="card-title" name="title">{taskData.name}</h4>
    <p>{taskData.description}</p>
  </Card>
{/if}
