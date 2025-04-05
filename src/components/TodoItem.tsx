'use client';

import { TodoItemType } from '@/types/todo';
import Link from 'next/link';
import styles from './TodoItem.module.css'; 

interface TodoItemProps {
  item: TodoItemType;
  onToggle: (id: string) => void;
}

export default function TodoItem({ item, onToggle }: TodoItemProps) {
  const isDone = item.status === 'done';

  return (
    <Link href={`/items/${item.id}`} className={styles.link}>
      <div
        className={isDone ? styles.doneItem : styles.todoItem}
        onClick={(e) => {
          e.stopPropagation(); // 링크 클릭 시 체크 이벤트 막기
        }}
      >
        <span className={styles.checkIcon} onClick={(e) => {
          e.preventDefault();  // 링크 이동 방지
          e.stopPropagation(); // 상위 div onClick 방지
          onToggle(item.id);   // 체크박스 기능 유지
        }}>
          {isDone ? '✔️' : '⚪'}
        </span>
        <span className={styles.title}>{item.title}</span>
      </div>
    </Link>
  );
}