import type Task from '../models/Task/Task';
import type { TaskType } from '../models/Task/TaskType';

export function getAllTasks(tasksType: TaskType): Task[] {
  const tasks = localStorage.getItem(`tasks.${tasksType}`);
  return tasks ? JSON.parse(tasks) : [];
}

export function addtask(task: Task): void {
  if (!task) return;
  const currentTasks = getAllTasks(task.taskType);

  currentTasks.push(task);

  localStorage.setItem(`tasks.${task.taskType}`, JSON.stringify(currentTasks));
}

export function editTask(task: Task): void {
  if (!task) return;

  const currentTasks = getAllTasks(task.taskType);

  const taskIndex = currentTasks.findIndex((t) => t.id === task.id);

  currentTasks[taskIndex] = task;

  localStorage.setItem(`tasks.${task.taskType}`, JSON.stringify(currentTasks));
}
