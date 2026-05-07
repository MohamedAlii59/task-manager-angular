export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
  Category: string;
  tags: string;
  isDone: boolean;
}

export interface User {
  id?: string;
  username: string;
  email: string;
  bdate: string;
  password: string;
}

export type error = {
  message: string;
  state: boolean;
};

export type tabName = 'all' | 'done' | 'not-done';
