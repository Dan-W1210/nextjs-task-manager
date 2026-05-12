//このコンポーネントはstatusを受け取って、それに応じた背景色とテキストを表示
// src/components/StatusBadge.tsx
import { Status } from '@/types/task';

interface Props {
  status: Status;
}

export default function StatusBadge({ status }: Props) {
  // クラス名全体を定義するように変更
  const getStatusStyles = (status: Status) => {
    switch (status) {
      case 'Todo':
        return 'bg-gray-100 text-gray-800';
      case 'Doing':
        return 'bg-blue-100 text-blue-800';
      case 'Done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}