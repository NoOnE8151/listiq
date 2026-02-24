import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="flex justify-center py-24 px-6 bg-muted/10">
      <div className="w-[70%] flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">
            Privacy <span className="text-element">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2026
          </p>
          <div className="h-[3px] w-20 bg-element rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-lg leading-relaxed">

          <p>
            At <span className="font-semibold text-element">Listiq</span>, we
            respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you use our platform.
          </p>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p>
              We collect personal information such as your name, email address,
              and account credentials when you create an account.
            </p>
            <p>
              We also collect product details you provide for listing
              generation, usage data, and platform interaction data to improve
              our services.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>
              Your information is used to operate, maintain, and improve
              Listiq’s AI-powered listing generation services. This includes
              generating optimized content, managing credits, processing
              payments, and improving system performance.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">3. Third-Party Services</h2>
            <p>
              We may use third-party services including payment processors,
              hosting providers, and AI service providers to deliver our
              platform functionality. These providers operate under their own
              privacy policies.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p>
              We implement reasonable administrative and technical safeguards
              to protect your information. However, no online platform can
              guarantee absolute security.
            </p>
          </div>

          {/* Updated Contact Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">5. Managing Your Information</h2>
            <p>
              If you wish to request access, correction, or deletion of your
              personal information, you may contact us through our{" "}
              <Link href="/contact" className="text-element font-medium underline">
                Contact Page
              </Link>.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;