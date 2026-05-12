//このコンポーネントは『入力中の文字』をボタンが押されたらpage.tsxにその文字を渡す
"use client"

import { useState, } from "react"

interface Props {
  //親コンポーネントから「タスクを追加する関数を受け取る」
  onAddTask: (title: string) => void;
}

export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState('');
const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  if (!title.trim()) return;

    onAddTask(title); //親に文字を渡す
    setTitle('') // 入力欄を空にする
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-500 rounded-lg shadow-sm border">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} //入力された文字をStateに保持
          placeholder="新しいタスクを入力"
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-bold"
          >
            追加
          </button>
      </div>
    </form>
  )
}