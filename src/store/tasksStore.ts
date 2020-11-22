import { writable } from 'svelte/store';
import type Task from '../models/Task/Task';
import { TaskType } from '../models/Task/TaskType';

const initialState = {
  [TaskType.TO_DO]: [],
  [TaskType.IN_PROGRESS]: [],
  [TaskType.DONE]: [],
};

function createTasks() {
  const { subscribe, set, update } = writable(initialState);

  const init = (initialValue) => {
    if (initialValue) set(initialValue);
  };

  const addTask = (task: Task) => {
    update((tasks) => ({
      ...tasks,
      [task.taskType]: [...tasks[task.taskType], task],
    }));
  };

  const editTask = (task: Task) => {
    update((tasks) => {
      const currentTasks = tasks[task.taskType];
      const taskIndex = currentTasks.findIndex((t) => t.id === task.id);

      currentTasks[taskIndex] = task;

      return {
        ...tasks,
        [task.taskType]: currentTasks,
      };
    });
  };

  const undoAddTask = (taskType: TaskType) => {
    update((tasks) => {
      const currentTasks = tasks[taskType];
      currentTasks.pop();

      return {
        ...tasks,
        [taskType]: currentTasks,
      };
    });
  };

  return {
    subscribe,
    init,
    addTask,
    editTask,
    set,
    undoAddTask,
  };
}

export const taskStore = createTasks();
