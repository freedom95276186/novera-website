import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "产品服务 - Novera",
  description: "探索Novera提供的AI解决方案和专业服务",
};

export default function ServicesPage() {
  const services = [
    {
      id: "ai-solutions",
      title: "企业AI解决方案",
      description: "为企业量身定制的端到端AI解决方案",
      icon: "🤖",
      features: [
        {
          name: "智能客服系统",
          detail: "基于NLP的智能对话系统，7x24小时自动响应客户咨询",
        },
        {
          name: "智能推荐引擎",
          detail: "个性化推荐算法，提升用户体验和转化率",
        },
        {
          name: "流程自动化",
          detail: "RPA结合AI，自动化处理重复性业务流程",
        },
        {
          name: "文档智能处理",
          detail: "OCR+NLP技术，自动提取和分析文档信息",
        },
      ],
      benefits: ["降低运营成本50%+", "提升效率3-5倍", "改善客户体验"],
    },
    {
      id: "cognitive",
      title: "认知计算平台",
      description: "构建能够理解、推理和学习的智能系统",
      icon: "🧠",
      features: [
        {
          name: "知识图谱构建",
          detail: "自动构建和维护企业知识图谱，实现知识的结构化管理",
        },
        {
          name: "智能推理引擎",
          detail: "基于逻辑推理和概率推理的智能决策支持系统",
        },
        {
          name: "自适应学习",
          detail: "持续学习用户行为和业务模式，不断优化系统性能",
        },
        {
          name: "多模态理解",
          detail: "融合文本、图像、语音等多种数据形式的综合理解能力",
        },
      ],
      benefits: ["提升决策准确率", "加速知识沉淀", "实现智能化转型"],
    },
    {
      id: "analytics",
      title: "数据智能分析",
      description: "将海量数据转化为可执行的商业洞察",
      icon: "📊",
      features: [
        {
          name: "预测性分析",
          detail: "基于机器学习的趋势预测和异常检测",
        },
        {
          name: "实时数据监控",
          detail: "实时处理和分析数据流，及时发现业务问题",
        },
        {
          name: "可视化报表",
          detail: "直观的数据可视化和交互式分析工具",
        },
        {
          name: "智能BI系统",
          detail: "自然语言查询的智能商业分析平台",
        },
      ],
      benefits: ["洞察市场趋势", "优化业务决策", "发现增长机会"],
    },
    {
      id: "enterprise",
      title: "AI研发咨询",
      description: "从战略规划到技术实施的全链路专业服务",
      icon: "💼",
      features: [
        {
          name: "AI战略规划",
          detail: "帮助企业制定AI转型路线图和实施计划",
        },
        {
          name: "技术架构设计",
          detail: "设计高性能、可扩展的AI技术架构",
        },
        {
          name: "算法定制开发",
          detail: "针对特定业务场景的AI算法研发",
        },
        {
          name: "团队能力建设",
          detail: "提供AI技术培训和知识转移服务",
        },
      ],
      benefits: ["降低技术风险", "加速项目落地", "建立AI能力"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "需求分析",
      description: "深入了解您的业务场景和痛点",
    },
    {
      step: "02",
      title: "方案设计",
      description: "制定最适合您的AI解决方案",
    },
    {
      step: "03",
      title: "开发实施",
      description: "快速迭代，敏捷交付高质量产品",
    },
    {
      step: "04",
      title: "部署上线",
      description: "确保平稳上线和系统稳定运行",
    },
    {
      step: "05",
      title: "持续优化",
      description: "持续监控和优化系统性能",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            产品与服务
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            提供全方位的AI解决方案，助力企业智能化转型
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">
                          {feature.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {feature.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {service.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 flex items-center justify-center text-8xl">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              我们的服务流程
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              标准化的流程确保项目高质量交付
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            想了解更多？
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            让我们的专家为您量身定制AI解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              预约咨询
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              阅读案例
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

