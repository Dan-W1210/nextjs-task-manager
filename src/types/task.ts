//タスクの状態を3つのパターンに限定
export type Status = 'Todo' | 'Doing' | 'Done';

//タスクの持つ情報
export interface Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  status: Status;
}