'use client';

import { TodoItemType } from '@/types/todo';
import Link from 'next/link';
import styles from './TodoItem.module.css'; 

interface TodoItemProps {
  item: TodoItemType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ item, onToggle, onDelete }: TodoItemProps) {
  const isDone = item.status === 'done';

  return (
    <Link href={`/items/${item.id}`} className={styles.link}>
      <div
        className={isDone ? styles.doneItem : styles.todoItem}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* 체크 아이콘 */}
        <span
          className={styles.checkIcon}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle(item.id);
          }}
        >
          {isDone ? '✔️' : '⚪'}
        </span>

        {/* 제목 */}
        <span className={styles.title}>{item.title}</span>

        {/* 삭제 버튼 (오른쪽 끝) */}
        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.preventDefault(); // 링크 이동 방지
            e.stopPropagation(); // 상위 div 방지
            onDelete(item.id);
          }}
        >
          ✕
        </button>
      </div>
    </Link>
  );
}