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
      [task.taskType]: [task, ...tasks[task.taskType]],
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
      currentTasks.shift();

      return {
        ...tasks,
        [taskType]: currentTasks,
      };
    });
  };

  const moveTask = (task: Task, previousType: TaskType) => {
    update((tasks) => {
      const currentType = task.taskType;
      let previousTasks = tasks[previousType];

      previousTasks = previousTasks.filter((t) => t.id !== task.id);

      return {
        ...tasks,
        [previousType]: previousTasks,
        [currentType]: [...tasks[currentType], task],
      };
    });
  };

  const removeTask = (task: Task) => {
    update((tasks) => {
      const { taskType } = task;
      let previousTasks = tasks[taskType];

      previousTasks = previousTasks.filter((t) => t.id !== task.id);

      return {
        ...tasks,
        [taskType]: previousTasks,
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
    moveTask,
    removeTask,
  };
}

export const taskStore = createTasks();
