'use client';

import { TodoItemType } from '@/types/todo';
import TodoItem from './TodoItem';
import styles from './DoneList.module.css';

interface Props {
  todos: TodoItemType[];
  onToggle: (id: string) => void;
}

export default function DoneList({ todos, onToggle }: Props) {
  if (todos.filter((t) => t.status === 'done').length === 0) {
    return <p className={styles.empty}>완료된 일이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) =>
        todo.status === 'done' ? (
          <li key={todo.id}>
            <TodoItem item={todo} onToggle={onToggle} />
          </li>
        ) : null
      )}
    </ul>
  );
}