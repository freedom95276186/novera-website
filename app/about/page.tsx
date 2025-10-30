import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - Novera",
  description: "了解Novera的使命、愿景和团队成员",
};

export default function AboutPage() {
  const team = [
    {
      name: "张伟",
      role: "创始人 & CEO",
      bio: "前Google AI研究员，MIT计算机科学博士，专注于深度学习和自然语言处理领域15年",
      image: "👨‍💼",
    },
    {
      name: "李娜",
      role: "首席技术官",
      bio: "曾任微软亚洲研究院高级研究员，在分布式系统和大规模机器学习方面有深厚造诣",
      image: "👩‍💻",
    },
    {
      name: "王强",
      role: "首席科学家",
      bio: "斯坦福大学人工智能实验室博士后，发表过50+篇顶级AI会议论文",
      image: "👨‍🔬",
    },
    {
      name: "陈静",
      role: "产品副总裁",
      bio: "拥有10年企业级SaaS产品经验，曾带领团队服务超过200家企业客户",
      image: "👩‍💼",
    },
  ];

  const values = [
    {
      title: "创新驱动",
      description: "我们始终站在技术前沿，持续探索AI领域的新可能",
      icon: "🚀",
    },
    {
      title: "客户至上",
      description: "深入理解客户需求，为客户创造真正的商业价值",
      icon: "🤝",
    },
    {
      title: "追求卓越",
      description: "对技术和产品质量有着近乎苛刻的要求",
      icon: "⭐",
    },
    {
      title: "开放协作",
      description: "相信开放的心态和跨界的合作能带来更大的创新",
      icon: "🌐",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            关于 Novera
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            我们是一群充满热情的AI探索者，致力于用技术改变世界
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                我们的使命
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                让AI技术惠及每一家企业
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                我们相信，人工智能不应该是大型科技公司的专属。每一家企业，无论规模大小，
                都应该能够利用AI技术提升效率、优化决策、创造价值。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                因此，我们致力于降低AI技术的使用门槛，提供易于集成、高性能且可靠的AI解决方案，
                帮助企业在数字化转型的道路上走得更快、更稳。
              </p>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                我们的愿景
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                成为全球领先的认知智能公司
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                我们的愿景是构建真正能够理解、推理和学习的智能系统，让机器不仅能执行任务，
                更能理解人类的意图和需求。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                通过持续的技术创新和深度的行业实践，我们希望在认知智能领域树立新的标杆，
                为人类社会的智能化进程贡献我们的力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              我们的核心价值观
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              这些价值观指引着我们的每一个决策和行动
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              我们的核心团队
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              来自世界顶尖科技公司和研究机构的AI专家
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              我们的成就
            </h2>
            <p className="text-xl text-blue-100">
              用数据说话，见证我们的成长
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2020", label: "成立年份" },
              { value: "50+", label: "团队成员" },
              { value: "100+", label: "服务客户" },
              { value: "200+", label: "完成项目" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

