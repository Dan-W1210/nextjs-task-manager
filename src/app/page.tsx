"use client"; 
import { useState } from 'react'; 
import { Task } from '@/types/task';
import TaskCard from '@/components/TaskCard';
import TaskForm from '@/components/TaskForm';

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

  const deleteTask = (id: string) => {
    //filterを使って「指定されたID 以外」のタスクだけを残した新しい配列を作る
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  };

const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { 
          ...task, 
          status: task.status === 'Todo' ? 'Done' : 'Todo' 
        };
      }
      return task;
    }));
  };


  // 新しいタスクを追加する関数に引数でtitleを受け取るように変更
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(), // 簡易的なID生成
      title: title, //入力された文字を使う
      assignee: '自分',
      dueDate: new Date().toISOString().split('T')[0],//今日を期限にする
      status: 'Todo',
    };
    
    // 新しいタスクを一番上へ表示
    setTasks([newTask, ...tasks]);
  };

  return (
    <main className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          タスク管理ダッシュボード
        </h1>
        {/*入力フォームを表示。addTask関数を渡す*/}
        <TaskForm onAddTask={addTask} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tasks.map((task) => (
            // TaskCardに削除関数を渡す
            <TaskCard key = { task.id } task = { task } onDelete = { deleteTask } onToggle = { toggleTaskStatus } />
          ))}
        </div>
      </div>
    </main>
  );
}
