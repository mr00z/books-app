export function getAllTasks() {
  const tasks = localStorage.getItem('tasks');
  return JSON.parse(tasks);
}

export function saveAllTasks(tasks): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
