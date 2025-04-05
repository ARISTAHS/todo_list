'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const router = useRouter();

  // 더미 초기 상태 (추후 API 대체)
  const [todo, setTodo] = useState({
    id: itemId,
    title: '',
    status: 'todo',
    memo: '',
    image: '',
  });

  useEffect(() => {
    // 임시 로딩 처리: 실제에선 API나 전역 상태로 불러오게 될 부분
    setTodo({
      id: itemId,
      title: '비타민 챙겨 먹기',
      status: 'todo',
      memo: '오메가3, 프로폴리스, 아연 챙겨먹기',
      image: '',
    });
  }, [itemId]);

  const handleUpdate = () => {
    alert('수정 완료!');
    router.push('/');
  };

  const handleDelete = () => {
    const ok = confirm('정말 삭제할까요?');
    if (!ok) return;
    alert('삭제 완료!');
    router.push('/');
  };

  return (
    <section className={styles.container}>
      {/* 체크 + 제목 */}
      <div className={styles.titleBox}>
        <input
          type="checkbox"
          checked={todo.status === 'done'}
          onChange={() =>
            setTodo((prev) => ({
              ...prev,
              status: prev.status === 'todo' ? 'done' : 'todo',
            }))
          }
        />
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>

      {/* 이미지 + 메모 */}
      <div className={styles.contentBox}>
        <div className={styles.imageBox}>
          {todo.image ? (
            <img src={todo.image} alt="업로드 이미지" />
          ) : (
            <label className={styles.uploadBox}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.name.match(/[^a-zA-Z0-9_.-]/)) {
                    alert('파일명은 영문만 허용됩니다.');
                    return;
                  }
                  if (file.size > 5 * 1024 * 1024) {
                    alert('5MB 이하의 이미지만 업로드 가능합니다.');
                    return;
                  }
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setTodo({ ...todo, image: reader.result as string });
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <span>+</span>
            </label>
          )}
        </div>

        <div className={styles.memoBox}>
          <label>Memo</label>
          <textarea
            value={todo.memo}
            onChange={(e) => setTodo({ ...todo, memo: e.target.value })}
          />
        </div>
      </div>

      {/* 버튼 */}
      <div className={styles.buttonGroup}>
        <button onClick={handleUpdate} className={styles.successBtn}>✓ 수정 완료</button>
        <button onClick={handleDelete} className={styles.deleteBtn}>✕ 삭제하기</button>
      </div>
    </section>
  );
}