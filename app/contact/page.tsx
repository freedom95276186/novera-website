"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log("表单提交:", formData);
    alert("感谢您的咨询！我们会尽快与您联系。");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "邮箱",
      content: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: "📱",
      title: "电话",
      content: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`,
    },
    {
      icon: "📍",
      title: "地址",
      content: `${siteConfig.offices[0].city}${siteConfig.offices[0].address}`,
      link: "#",
    },
    {
      icon: "🕐",
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      link: "#",
    },
  ];

  const offices = siteConfig.offices;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            联系我们
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            让我们一起探讨如何用AI技术赋能您的业务
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 dark:text-white font-medium">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                发送消息
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="您的公司名称"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="+86 138 0000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    感兴趣的服务 *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">请选择</option>
                    <option value="ai-solutions">企业AI解决方案</option>
                    <option value="cognitive">认知计算平台</option>
                    <option value="analytics">数据智能分析</option>
                    <option value="consulting">AI研发咨询</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    留言 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="请描述您的需求或问题..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                >
                  提交咨询
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  我们的办公室
                </h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {office.city}办公室
                      </h3>
                      <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <p className="flex items-start gap-2">
                          <span className="text-lg mt-0.5">📍</span>
                          <span>{office.address}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-lg">📱</span>
                          <a
                            href={`tel:${office.phone}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  24/7 技术支持
                </h3>
                <p className="text-blue-100 mb-6">
                  我们的技术团队随时准备为您提供帮助和支持
                </p>
                <a
                  href="mailto:support@novera.ai"
                  className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all"
                >
                  联系技术支持
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              快速找到您可能关心的问题答案
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "你们的服务覆盖哪些行业？",
                a: "我们的AI解决方案已成功应用于金融、零售、制造、医疗、教育等多个行业。我们拥有丰富的跨行业经验，能够快速理解不同行业的特点和需求。",
              },
              {
                q: "项目周期一般需要多长时间？",
                a: "具体周期取决于项目的复杂度和规模。一般而言，POC验证需要2-4周，完整项目实施需要2-6个月。我们采用敏捷开发模式，确保快速迭代和交付。",
              },
              {
                q: "如何保证数据安全和隐私？",
                a: "我们严格遵守数据保护相关法律法规，采用企业级安全措施，包括数据加密、访问控制、安全审计等。所有客户数据都经过严格的安全处理，绝不会被用于其他目的。",
              },
              {
                q: "是否提供技术培训和支持？",
                a: "是的，我们提供完整的技术培训和持续支持服务。包括系统使用培训、技术文档、24/7技术支持热线等，确保您的团队能够熟练使用我们的产品。",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 dark:text-white">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

