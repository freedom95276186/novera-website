import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "洞察 - Novera",
  description: "探索AI领域的最新趋势、技术分析和行业洞察",
};

export default function BlogPage() {
  const categories = [
    "全部",
    "技术深度",
    "行业洞察",
    "产品更新",
    "案例研究",
  ];

  const articles = [
    {
      title: "大语言模型在企业中的实际应用",
      excerpt:
        "深入探讨如何将GPT等大语言模型应用于企业场景，包括客服自动化、内容生成、知识管理等多个方面...",
      category: "技术深度",
      date: "2024年10月15日",
      readTime: "8分钟",
      author: "张伟",
      image: "📝",
    },
    {
      title: "认知智能：AI的下一个前沿",
      excerpt:
        "从感知智能到认知智能，探讨AI如何从简单的模式识别进化到真正的理解和推理能力...",
      category: "行业洞察",
      date: "2024年10月10日",
      readTime: "10分钟",
      author: "王强",
      image: "🧠",
    },
    {
      title: "如何构建高性能的推荐系统",
      excerpt:
        "分享我们在构建大规模推荐系统过程中的技术实践，包括算法选择、系统架构、性能优化等关键要素...",
      category: "技术深度",
      date: "2024年10月5日",
      readTime: "12分钟",
      author: "李娜",
      image: "⚙️",
    },
    {
      title: "某零售企业AI转型案例分析",
      excerpt:
        "详细介绍我们如何帮助一家大型零售企业实现智能化转型，通过AI技术提升运营效率和客户体验...",
      category: "案例研究",
      date: "2024年9月28日",
      readTime: "15分钟",
      author: "陈静",
      image: "🏪",
    },
    {
      title: "Novera平台3.0正式发布",
      excerpt:
        "全新升级的Novera认知计算平台3.0版本正式发布，带来更强大的性能、更丰富的功能和更友好的用户体验...",
      category: "产品更新",
      date: "2024年9月20日",
      readTime: "5分钟",
      author: "产品团队",
      image: "🚀",
    },
    {
      title: "多模态AI：融合视觉与语言的力量",
      excerpt:
        "探讨多模态AI技术的发展趋势和应用前景，以及如何构建能够同时理解图像和文本的智能系统...",
      category: "技术深度",
      date: "2024年9月15日",
      readTime: "9分钟",
      author: "王强",
      image: "🎨",
    },
    {
      title: "2024年AI行业发展趋势预测",
      excerpt:
        "基于当前技术发展和市场动态，分析2024年AI领域的关键趋势和机遇...",
      category: "行业洞察",
      date: "2024年9月10日",
      readTime: "11分钟",
      author: "张伟",
      image: "📊",
    },
    {
      title: "金融行业风控系统AI化实践",
      excerpt:
        "分享我们在金融风控领域的AI应用经验，包括欺诈检测、信用评估、风险预警等方面...",
      category: "案例研究",
      date: "2024年9月5日",
      readTime: "13分钟",
      author: "李娜",
      image: "💰",
    },
    {
      title: "如何评估AI项目的投资回报率",
      excerpt:
        "提供一套完整的AI项目ROI评估框架，帮助企业更科学地衡量AI投资的价值...",
      category: "行业洞察",
      date: "2024年8月30日",
      readTime: "7分钟",
      author: "陈静",
      image: "💡",
    },
  ];

  const featured = articles[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            洞察与思考
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            探索AI领域的最新趋势、技术深度和行业洞察
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              精选文章
            </span>
          </div>
          <Link
            href="#"
            className="group block rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 hover:shadow-2xl transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex items-center justify-center text-9xl">
                {featured.image}
              </div>
              <div className="space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    {featured.category}
                  </span>
                  <span>{featured.date}</span>
                  <span>{featured.readTime}阅读</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {featured.author[0]}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {featured.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      作者
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Link
                key={index}
                href="#"
                className="group block rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        {article.author[0]}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {article.author}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {article.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-all">
              加载更多文章
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            订阅我们的洞察
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            定期获取AI领域的最新资讯和深度文章
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl"
            >
              订阅
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            我们承诺保护您的隐私，不会向第三方分享您的信息
          </p>
        </div>
      </section>
    </div>
  );
}

