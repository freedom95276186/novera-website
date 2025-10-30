import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              引领
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}AI与认知科技{" "}
              </span>
              的未来
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              我们致力于将前沿的人工智能技术转化为实际的商业价值，
              助力企业实现智能化转型与创新突破
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
              >
                开始探索
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg"
              >
                了解更多
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "企业客户" },
              { value: "98%", label: "客户满意度" },
              { value: "100+", label: "AI项目" },
              { value: "24/7", label: "技术支持" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              为什么选择 Novera
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们将最先进的AI技术与深厚的行业洞察相结合
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "🧠",
                title: "认知智能",
                description:
                  "基于深度学习和神经网络的认知计算平台，让机器真正理解人类语言和行为模式",
              },
              {
                icon: "⚡",
                title: "高性能计算",
                description:
                  "优化的AI算法和分布式架构，确保大规模数据处理的速度和准确性",
              },
              {
                icon: "🔒",
                title: "安全可靠",
                description:
                  "企业级安全保障和隐私保护机制，确保您的数据和业务安全无虞",
              },
              {
                icon: "🎯",
                title: "精准洞察",
                description:
                  "通过先进的数据分析和预测模型，帮助企业做出更明智的决策",
              },
              {
                icon: "🚀",
                title: "快速部署",
                description:
                  "模块化设计和云原生架构，支持快速集成和弹性扩展",
              },
              {
                icon: "💡",
                title: "持续创新",
                description:
                  "紧跟AI前沿技术发展，不断迭代优化，为客户创造长期价值",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              我们的核心服务
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              提供全方位的AI解决方案，助力企业数字化转型
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "企业AI解决方案",
                description:
                  "为企业量身定制的智能化解决方案，涵盖智能客服、智能推荐、流程自动化等多个领域",
                features: ["自然语言处理", "计算机视觉", "预测分析"],
              },
              {
                title: "认知计算平台",
                description:
                  "构建能够理解、推理和学习的智能系统，提升决策质量和业务效率",
                features: ["知识图谱", "智能推理", "自适应学习"],
              },
              {
                title: "数据智能分析",
                description:
                  "深度挖掘数据价值，将海量数据转化为可执行的商业洞察",
                features: ["大数据分析", "实时监控", "可视化报表"],
              },
              {
                title: "AI研发咨询",
                description:
                  "提供从战略规划到技术实施的全链路AI咨询服务",
                features: ["技术评估", "架构设计", "团队培训"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 md:p-10 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all"
                >
                  了解详情
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            准备开启AI转型之旅？
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            让我们一起探讨如何用AI技术赋能您的业务增长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              预约咨询
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              了解团队
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
