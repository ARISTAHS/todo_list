// todo의 타입 설정
export type TodoStatus = 'todo' | 'done';

export interface TodoItemType {
  id: string;
  title: string;
  status: 'todo' | 'done';
  memo: string;
  image: string;
}
