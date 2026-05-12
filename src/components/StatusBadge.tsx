//このコンポーネントはstatusを受け取って、それに応じた背景色とテキストを表示
import { Status } from "@/types/task";

interface Props {
  status: Status
}

export default function StatusBadge({ status }: Props) {
  //スターテスに応じた色を定義
  const statusStyles = {
    Todo: 'bg-gray-100 text-gray-800',
    Doing: 'bg-blue-100 text-blue-800',
    Done: 'bg-green-100 text-green-800',
  };

  return (
    <span className={'px-2.5 py-0.5 rouded-full text-xs font-medium ${statusStyles[status]}'}>
      {status}
    </span>
  );
}