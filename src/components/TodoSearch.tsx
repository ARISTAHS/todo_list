'use client';
import React, { useState } from 'react';
import styles from "./TodoSearch.module.css";

interface TodoFormProps {
  onAdd: (title: string) => void; //부모 컴포넌트로부터 onAdd라는 함수를 props로 받을 예정
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();               // 새로고침 방지
    if (!title.trim()) return;        // 빈 값 입력 방지
    onAdd(title.trim());              // 부모 컴포넌트에 값 전달
    setTitle('');                     // 인풋 초기화
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className={styles.button}>+ 추가하기</button>
    </form>
  );
}