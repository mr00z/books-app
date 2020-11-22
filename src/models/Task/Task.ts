import { uid } from '../../utils/utils';
import type { TaskType } from './TaskType';

export default class Task {
  id: string;
  name: string;
  description: string;
  taskType: TaskType;

  constructor(name: string, description: string, type: TaskType) {
    this.id = uid();
    this.name = name;
    this.description = description;
    this.taskType = type;
  }
}
