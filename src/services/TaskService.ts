import type TaskModel from '../models/Task/TaskModel';

export function getAllTasks(): TaskModel[] {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

export function addtask(task: TaskModel): void {
  const currentTasks = getAllTasks();

  currentTasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(currentTasks));
}
