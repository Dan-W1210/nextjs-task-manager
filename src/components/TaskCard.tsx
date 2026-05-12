import { Task } from "@/types/task";
import StatusBadge from "./StatusBadge";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onDelete }: Props) {
  return (
    // 親要素は1つにまとめます。'relative group' をここに入れるのがポイントです！
    <div className="p-4 rounded-xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition-all relative group flex flex-col gap-3">
      
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
        <h3 className="font-bold text-lg text-gray-800 flex-1 leading-tight">
          {task.title}
        </h3>
        <StatusBadge status={task.status} />
      </div>

      {/* 3. 担当・期限情報 */}
      <div className="text-sm text-gray-600 space-y-1">
        <p className="flex items-center gap-1">
          <span className="opacity-70">担当：</span>
          <span className="font-medium">{task.assignee}</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="opacity-70">期限：</span>
          <span className="font-medium">{task.dueDate}</span>
        </p>
      </div>
    </div>
  );
}