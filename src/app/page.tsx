'use client';

import { useState, useEffect } from 'react';
import TodoSearch from '@/components/TodoSearch';
import TodoList from '@/components/TodoList';
import DoneList from '@/components/DoneList';
import { TodoItemType } from '@/types/todo';
import styles from './page.module.css';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '@/api/userAPI';

export default function HomePage() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  // 할 일 추가
  const handleAdd = async (title: string) => {
    const newTodo: {
      title: string;
      status: 'todo' | 'done';  // 이렇게 고정
      memo: string;
      image: string;
    } = {
      title: title,
      status: 'todo',
      memo: '',
      image: '',
    };

    try {
      await addTodo(newTodo);
      await fetchTodos(); // 추가 후 최신 데이터 반영
    } catch (err) {
      console.error('[추가 실패]', err);
    }
  };

  const handleToggle = async (id: string) => {
    const current = todos.find((todo) => todo.id === id);
    if (!current) return;

    const updatedStatus = current.status === 'todo' ? 'done' : 'todo';

    await updateTodo(id, { status: updatedStatus });
    await fetchTodos();
  };

  const handleDelete = async (id: string) => {
    const ok = confirm('정말 삭제하시겠습니까?');
    if (!ok) return;
  
    await deleteTodo(id); 
    const updated = await getTodos();
    setTodos(updated);
  };

  return (
    <main className={styles.main}>
      <TodoSearch onAdd={handleAdd} />

      <div className={styles.lists}>
        <section className={styles.listSection}>
          <h2>TO DO</h2>
          <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
        </section>

        <section className={styles.listSection}>
          <h2>DONE</h2>
          <DoneList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
        </section>
      </div>
    </main>
  );
}