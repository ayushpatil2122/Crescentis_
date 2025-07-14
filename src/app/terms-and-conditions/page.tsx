"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
            Terms & Conditions
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-[#E98F81] to-transparent my-6" />
          <div className="flex flex-col sm:flex-row justify-between text-white/70 text-sm">
            <p>Effective Date: May 3, 2025</p>
            <p>Last Updated: May 3, 2025</p>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-lg leading-relaxed text-white/80">
            These Terms and Conditions ("Terms"), along with our Privacy Policy and any other referenced documents, constitute a binding legal agreement between Crescentis Marketing Co. ("we", "us", "our") and you ("you", "your")—the user of our website and/or client of our services.
          </p>
          <p className="text-lg leading-relaxed text-white/80 mt-4">
            By accessing our website or availing any of our services, you agree that you have read, understood, and accepted these Terms. If you do not agree with these Terms, please do not use our services.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {[
            {
              title: "1. Scope of Services",
              content: (
                <>
                  <p className="mb-4">We offer digital marketing, design, branding, and consulting services, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Social media strategy & execution</li>
                    <li>Branding and creative direction</li>
                    <li>Content creation (design, copy, video)</li>
                    <li>Website and UI/UX development</li>
                    <li>Paid media & performance marketing</li>
                    <li>Reputation & growth consulting</li>
                  </ul>
                  <p>Details, scope, and timelines for each service engagement will be defined in individual proposals, project plans, or contracts.</p>
                </>
              )
            },
            {
              title: "2. User Responsibilities",
              content: (
                <>
                  <p className="mb-4">By using our services or website, you agree to:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Provide accurate and complete information</li>
                    <li>Make timely approvals, feedback, and payments</li>
                    <li>Avoid any unlawful or unethical use of our services</li>
                    <li>Use deliverables only for their intended purpose</li>
                  </ul>
                  <p>You are responsible for maintaining the confidentiality of any account credentials.</p>
                </>
              )
            },
            {
              title: "3. Payments & Refunds",
              content: (
                <>
                  <p className="mb-4">All payments must be made according to the agreed project terms. Unless explicitly stated, all payments are non-refundable.</p>
                  <p>Refunds will only be considered in case of service non-delivery and must be claimed within the specified timeframes.</p>
                </>
              )
            },
            {
              title: "4. Intellectual Property",
              content: (
                <>
                  <p className="mb-4">All strategies, creatives, code, documents, and content produced by Crescentis remain our intellectual property unless otherwise stated in writing.</p>
                  <p>Clients are granted limited usage rights as per the project agreement. Unauthorized reproduction or reuse is prohibited.</p>
                </>
              )
            },
            {
              title: "5. Third-Party Tools",
              content: (
                <>
                  <p className="mb-4">Our services may involve integration with third-party platforms (e.g., Meta, Google, Canva). We are not responsible for interruptions or policy changes made by those third parties.</p>
                  <p>Users agree to comply with any applicable third-party terms.</p>
                </>
              )
            },
            {
              title: "6. Confidentiality",
              content: "Both parties agree to protect any confidential information shared throughout the engagement. This obligation remains after project completion."
            },
            {
              title: "7. Force Majeure",
              content: "We are not liable for failure or delay due to circumstances beyond our control, including natural disasters, strikes, technical breakdowns, or government restrictions."
            },
            {
              title: "8. Limitation of Liability",
              content: "To the fullest extent permitted by law, Crescentis shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of our services."
            },
            {
              title: "9. Termination",
              content: (
                <>
                  <p className="mb-4">We reserve the right to suspend or terminate services if you breach these Terms, misuse our services, or fail to make payments.</p>
                  <p>In such cases, you may be liable for outstanding dues, and we may retain any deposits.</p>
                </>
              )
            },
            {
              title: "10. Modifications to Terms",
              content: "We may update these Terms without prior notice. Continued use after changes constitutes acceptance of those changes."
            },
            {
              title: "11. Governing Law & Jurisdiction",
              content: "These Terms are governed by the laws of India. Any disputes will fall under the exclusive jurisdiction of the courts of Pune, Maharashtra."
            },
            {
              title: "12. Contact Information",
              content: (
                <>
                  <p className="mb-4">If you have questions about these Terms:</p>
                  <p className="text-amber-200">
                    Crescentis Marketing Co.<br />
                    Subsidiary of Midnight Solutions Pvt. Ltd.<br />
                    📍 [Address]<br />
                    📞 +91 [Phone Number]<br />
                    🌐 [Website]
                  </p>
                </>
              )
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="border-b border-white/10 pb-8"
            >
              <h2 className="text-xl sm:text-2xl font-medium mb-4 text-amber-100">{section.title}</h2>
              <div className="text-white/80 leading-relaxed space-y-3">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center text-white/60 text-sm"
        >
          <p>By using our website or services, you agree to these Terms & Conditions.</p>
          <p className="mt-2">© {new Date().getFullYear()} Crescentis Marketing Co. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}