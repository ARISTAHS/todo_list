'use client';

import { TodoItemType } from '@/types/todo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

interface Props {
  todos: TodoItemType[];
  onToggle: (id: string) => void;
}

export default function TodoList({ todos, onToggle }: Props) {
  if (todos.length === 0) {
    return <p className={styles.empty}>할 일이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) =>
        todo.status === 'todo' ? (
          <li key={todo.id}>
            <TodoItem item={todo} onToggle={onToggle} />
          </li>
        ) : null
      )}
    </ul>
  );
}