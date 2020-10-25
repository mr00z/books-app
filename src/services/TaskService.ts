import type TaskModel from '../models/Task/TaskModel';

export function getAllTasks(): TaskModel[] {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function addtask(task: TaskModel): void {
  const currentTasks = getAllTasks();

  currentTasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(currentTasks));
}
