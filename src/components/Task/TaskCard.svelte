<script lang="ts">
  import Icon from "fa-svelte";
  import {
    faEdit,
    faTrashAlt,
    faFolder,
  } from "@fortawesome/free-regular-svg-icons";

  import Button from "../../halfmoon/BasicElements/Button.svelte";
  import Card from "../../halfmoon/BuildingBlocks/Content/Card.svelte";
  import type Task from "../../models/Task/Task";
  import { taskStore } from "../../store/tasksStore";
  import { TaskType } from "../../models/Task/TaskType";
  import { convertEnumIdentifierToWords } from "../../utils/utils";

  export let taskData: Task;

  let isNew = !taskData?.name && !taskData?.description;
  let editable = isNew;

  const { id } = taskData;

  const initialType = taskData.taskType.toString();

  function handleEditButtonClick() {
    editable = true;
  }

  function handleRemoveTask() {
    taskStore.removeTask(taskData);
  }

  function handleArchiveTask() {
    taskStore.editTask({ ...taskData, archived: true });
  }

  function handleCancelButtonClick() {
    editable = false;
    if (isNew) taskStore.undoAddTask(taskData.taskType);
  }

  function handleSaveButtonClick() {
    if (!taskData.name) return;

    if (initialType !== taskData.taskType.toString())
      taskStore.moveTask(taskData, TaskType[initialType]);
    else taskStore.editTask(taskData);

    editable = false;
    isNew = false;
  }
  const formControlClasses = "form-control";

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
        <select
          id={`task_${id}_status`}
          class={`${formControlClasses} w-full`}
          bind:value={taskData.taskType}>
          {#each allTaskTypes as t}
            <option value={t}>{convertEnumIdentifierToWords(t)}</option>
          {/each}
        </select>
      </div>
    {/if}

    <Button
      type="success"
      disabled={!taskData.name}
      onClick={handleSaveButtonClick}>
      Save
    </Button>
    <Button type="danger" onClick={handleCancelButtonClick}>Cancel</Button>
  </Card>
{:else}
  <Card className="task-card d-flex justify-content-between">
    <div class="mr-5">
      <h4 class="card-title" name="title">{taskData.name}</h4>
      <p>{taskData.description}</p>
    </div>

    {#if !taskData.archived}
      <div class="d-flex flex-column justify-content-center">
        <Button title="Edit task" onClick={handleEditButtonClick}>
          <Icon icon={faEdit} />
        </Button>
        <Button className="mt-5" title="Remove task" onClick={handleRemoveTask}>
          <Icon icon={faTrashAlt} />
        </Button>
        <Button
          className="mt-5"
          title="Archive task"
          onClick={handleArchiveTask}>
          <Icon icon={faFolder} />
        </Button>
      </div>
    {/if}
  </Card>
{/if}
