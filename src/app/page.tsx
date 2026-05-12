"use client"; 
import { useState } from 'react'; 
import { Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';

export default function Home() {
  // タスクのリストを「State」として定義。初期値はこれまでのmockTasks
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Next.jsの基本を学ぶ',
      assignee: '自分',
      dueDate: '2026-05-20',
      status: 'Done',
    },
  ]);

  // 新しいタスクを追加する関数
  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(), // 簡易的なID生成
      title: '新しいタスク',
      assignee: '自分',
      dueDate: '2026-06-01',
      status: 'Todo',
    };
    
    // 今あるタスクリストの最後に、新しいタスクを付け足す
    setTasks([...tasks, newTask]);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            タスク管理ダッシュボード
          </h1>
          {/* タスク追加ボタン */}
          <button 
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            タスクを増やす
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}