'use client';

import Image from 'next/image';
import { TodoItemType } from '@/types/todo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import emptyImg from '/public/images/Type=Todo, Size=Large.png';

interface Props {
  todos: TodoItemType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.filter((t) => t.status === 'todo').length === 0) {
    return (
      <div className={styles.empty}>
        <Image src={emptyImg} alt="할 일 없음" width={120} height={120} />
        <p>할 일이 없어요.<br />TODO를 새롭게 추가해주세요!</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) =>
        todo.status === 'todo' ? (
          <li key={todo.id}>
            <TodoItem item={todo} onToggle={onToggle} onDelete={onDelete} />
          </li>
        ) : null
      )}
    </ul>
  );
}