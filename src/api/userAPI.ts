const BASE_URL = 'https://assignment-todolist-api.vercel.app/api';
const TENANT_ID = 'paran1234'; // 개인 식별자

// 전체 할 일 조회
export async function getTodos() {
  const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`);
  return res.json();
}

// 할 일 추가
export async function addTodo(data: {
  title: string;
  status: 'todo' | 'done';
  memo: string;
  image: string;
}) {
  const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

// 할 일 수정
export async function updateTodo(id: string, updated: { status: 'todo' | 'done' }) {
  await fetch(`${BASE_URL}/${TENANT_ID}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });
}

// 할 일 삭제
export async function deleteTodo(id: string) {
  await fetch(`${BASE_URL}/${TENANT_ID}/items/${id}`, {
    method: 'DELETE',
  });
}