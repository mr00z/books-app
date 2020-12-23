import { uid } from '../../utils/utils';
import type { TaskType } from './TaskType';

export default class Task {
  id: string;
  name: string;
  description: string;
  taskType: TaskType;
  createdOn: Date;
  updatedOn: Date;
  archived: boolean;

  constructor(name: string, description: string, type: TaskType) {
    this.id = uid();
    this.name = name;
    this.description = description;
    this.taskType = type;
    this.createdOn = new Date();
    this.updatedOn = new Date();
    this.archived = false;
  }
}
