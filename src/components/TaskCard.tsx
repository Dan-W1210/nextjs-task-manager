import { Task } from "@/types/task";
import StatusBadge from "./StatusBadge";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{task.title}</h3>
        <StatusBadge status={task.status} />
      </div>
      <div className="text-sm text-gray-600">
        <p>担当：{task.assignee}</p>
        <p className="mt-1">期限：{task.dueDate}</p>
      </div>
    </div>
  );
}