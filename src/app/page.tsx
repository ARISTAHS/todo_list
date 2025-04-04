'use client';

import { useState } from 'react';
import TodoForm from '@/components/TodoSearch';
import TodoList from '@/components/TodoList';
import DoneList from '@/components/DoneList';
import { TodoItemType } from '@/types/todo';
import styles from './page.module.css';
import { v4 as uuidv4 } from 'uuid';  //고유 id 생성을 위한 라이브러리 설치

export default function HomePage() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      id: '1',
      title: 'Next.js 과제 시작하기',
      status: 'todo',
    },
    {
      id: '2',
      title: '운동 30분 하기',
      status: 'done',
    },
  ]);

  const handleAdd = (title: string) => {
    const newTodo: TodoItemType = {
      id: uuidv4(),
      title,
      status: 'todo',
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'todo' ? 'done' : 'todo',
            }
          : todo
      )
    );
  };

  return (
    <main className={styles.main}>
      <TodoForm onAdd={handleAdd} />

      <div className={styles.lists}>
        <section className={styles.listSection}>
          <h2>TO DO</h2>
          <TodoList todos={todos} onToggle={handleToggle} />
        </section>

        <section className={styles.listSection}>
          <h2>DONE</h2>
          <DoneList todos={todos} onToggle={handleToggle} />
        </section>
      </div>
    </main>
  );
}