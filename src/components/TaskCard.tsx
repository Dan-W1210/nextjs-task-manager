import { Task } from "@/types/task";
import StatusBadge from "./StatusBadge";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TaskCard({ task, onDelete, onToggle }: Props) {

  const isDone = task.status === 'Done';

  return (
    // 親要素は1つにまとめます。'relative group' をここに入れるのがポイントです！
    <div 
      className={`p-4 rounded-xl shadow-md border transition-all relative group flex flex-col gap-3 
        ${isDone ? 'bg-gray-50 border-gray-200 opacity-75' : 'bg-white border-gray-100'}`}
    >
      {/* 1. 削除ボタン：位置を右上に固定 */}
      <button
        onClick={() => onDelete(task.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gray-100 hover:bg-red-50 rounded-full z-10"
        title="タスクを削除"
      >
        🗑️
      </button>

      {/* 2. タイトルとバッジ */}
      <div className="flex justify-between items-start gap-2 pr-6"> {/* ボタンと被らないよう右に余白 */}
        <h3 className={`font-bold text-lg flex-1 ${isDone ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        <div onClick={() => onToggle(task.id)} className="cursor-pointer transform hover:scale-110 transition-transform">
          <StatusBadge status={task.status} />
        </div>
      </div>

      {/* 3. 担当・期限情報 */}
      <div className={`text-sm space-y-1 ${isDone ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>担当：{task.assignee}</p>
        <p>期限：{task.dueDate}</p>
      </div>
    </div>
  );
}