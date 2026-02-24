"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      reset();
    }
  };

  return (
    <main className="flex justify-center py-24 px-6 bg-muted/10 relative">
      <div className="w-[60%] flex flex-col gap-16">

        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">
            Contact <span className="text-element">Us</span>
          </h1>
          <div className="h-[3px] w-20 bg-element rounded-full"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 bg-white p-10 rounded-2xl shadow-sm"
        >
          {/* Name */}
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="border border-gray-200 px-5 py-3 rounded-lg"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="border border-gray-200 px-5 py-3 rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Regarding pricing or features..."
              {...register("subject", {
                required: "Subject is required",
              })}
              className="border border-gray-200 px-5 py-3 rounded-lg"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Message</label>
            <textarea
              rows="6"
              placeholder="Write your message here..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="border border-gray-200 px-5 py-3 rounded-lg"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-element text-white py-3 rounded-full font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-10 w-[400px] flex flex-col gap-6 text-center shadow-lg">
            <h3 className="text-2xl font-semibold">
              Message Sent Successfully
            </h3>
            <p className="text-muted-foreground">
              We’ve received your message. Our team will respond shortly.
              Please check your email for confirmation.
            </p>
            <Link
              href="/"
              className="bg-element text-white py-3 rounded-full font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactPage;