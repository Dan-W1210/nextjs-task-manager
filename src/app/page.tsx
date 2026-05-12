// src/app/page.tsx
import { Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';

// 1. 仮のデータ（Mock Data）を作成
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Next.jsの基本を学ぶ',
    assignee: '自分',
    dueDate: '2026-05-20',
    status: 'Done',
  },
  {
    id: '2',
    title: 'タスク管理アプリの実装',
    assignee: '自分',
    dueDate: '2026-05-25',
    status: 'Doing',
  },
  {
    id: '3',
    title: 'GitHubにデプロイする',
    assignee: 'チームリーダー',
    dueDate: '2026-05-30',
    status: 'Todo',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          タスク管理ダッシュボード
        </h1>

        {/*グリッドレイアウトでカードを並べる */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}