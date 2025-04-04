'use client';

import { TodoItemType } from '@/types/todo';
import styles from './TodoItem.module.css'; // 모듈 CSS (추후 스타일 적용)

interface TodoItemProps {
  item: TodoItemType;
  onToggle: (id: string) => void;
}

export default function TodoItem({ item, onToggle }: TodoItemProps) {
  const isDone = item.status === 'done';

  return (
    <div
      className={isDone ? styles.doneItem : styles.todoItem}
      onClick={() => onToggle(item.id)}
    >
      <span className={styles.checkIcon}>{isDone ? '✔️' : '⚪'}</span>
      <span className={styles.title}>{item.title}</span>
    </div>
  );
}