import type TaskModel from '../models/Task/Task';
import type { TaskTypes } from '../models/Task/TaskTypes';

export function getAllTasks(tasksType: TaskTypes): TaskModel[] {
  const tasks = localStorage.getItem(`tasks.${tasksType}`);
  return tasks ? JSON.parse(tasks) : [];
}

export function addtask(task: TaskModel): void {
  if (!task) return;
  const currentTasks = getAllTasks(task.taskType);

  currentTasks.push(task);

  localStorage.setItem(`tasks.${task.taskType}`, JSON.stringify(currentTasks));
}
