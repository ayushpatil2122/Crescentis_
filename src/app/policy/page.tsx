"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
            Privacy Policy
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-[#E98F81] to-transparent my-6" />
          <div className="flex flex-col sm:flex-row justify-between text-white/70 text-sm">
            <p>Effective Date: May 1, 2025</p>
            <p>Last Updated: May 1, 2025</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-lg leading-relaxed">
            At Crescentis Marketing Co., your privacy is a top priority. This Privacy Policy outlines how we collect, use, protect, and disclose your information when you visit our website or engage with our services.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              title: "1. What Information Do We Collect?",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, referral source.</li>
                  <li><strong>Usage Data:</strong> Interactions with our website and services.</li>
                  <li><strong>Cookies:</strong> To personalize experience and analyze performance.</li>
                  <li><strong>Communication Data:</strong> Information from forms, surveys, or correspondence.</li>
                </ul>
              )
            },
            {
              title: "2. How Do We Use Your Information?",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personalize your website experience</li>
                  <li>Improve our services and functionality</li>
                  <li>Provide customer support</li>
                  <li>Send updates and marketing communications</li>
                  <li>Analyze user behavior</li>
                  <li>Comply with legal obligations</li>
                </ul>
              )
            },
            {
              title: "3. Data Protection & Security",
              content: "We implement technical and organizational security measures including data encryption, firewalls, secure server environments, and access control procedures to protect your information."
            },
            {
              title: "4. Cookies & Tracking",
              content: "We use cookies to understand user behavior and remember preferences. You can manage cookies via your browser settings."
            },
            {
              title: "5. Data Sharing",
              content: "We do not sell your information. Data may be shared with trusted service providers under confidentiality agreements or when legally required."
            },
            {
              title: "6. Your Rights",
              content: (
                <>
                  <p className="mb-3">You may:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access, correct, or delete your data</li>
                    <li>Object to or restrict processing</li>
                    <li>Withdraw consent</li>
                    <li>Lodge a complaint with authorities</li>
                  </ul>
                  <p className="mt-4">Contact us at: <span className="text-amber-200">privacy@crescentismarketing.com</span></p>
                </>
              )
            },
            {
              title: "7. Policy Updates",
              content: "We may update this policy occasionally. Changes will be reflected here with the updated effective date."
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center text-white/60 text-sm"
        >
          <p>By using our website, you consent to our privacy policy.</p>
          <p className="mt-2">© {new Date().getFullYear()} Crescentis Marketing Co. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}