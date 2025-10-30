export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto">
          <div className="w-full h-full rounded-full border-4 border-gray-200 dark:border-gray-800 border-t-blue-600 animate-spin"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          加载中...
        </p>
      </div>
    </div>
  );
}

