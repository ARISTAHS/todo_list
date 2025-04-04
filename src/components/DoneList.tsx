'use client';

import Image from 'next/image';
import { TodoItemType } from '@/types/todo';
import TodoItem from './TodoItem';
import styles from './DoneList.module.css';
import emptyDoneImg from '/public/images/Type=Done, Size=Large.png';


interface Props {
  todos: TodoItemType[];
  onToggle: (id: string) => void;
}

export default function DoneList({ todos, onToggle }: Props) {
  const doneTodos = todos.filter((t) => t.status === 'done');

  if (doneTodos.length === 0) {
    return (
      <div className={styles.empty}>
        <Image src={emptyDoneImg} alt="완료된 일 없음" width={120} height={120} />
        <p>아직 다 한 일이 없어요.<br />해야 할 일을 체크해보세요!</p>
      </div>
    );
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