import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          页面未找到
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          抱歉，您访问的页面不存在或已被移除
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
          >
            返回首页
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
}

