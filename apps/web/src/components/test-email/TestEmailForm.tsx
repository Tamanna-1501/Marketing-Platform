"use client";

import { useState } from "react";

import { sendTestEmail } from "@/lib/api/testEmail";

export default function TestEmailForm() {

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setSuccess("");
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(to)) {
      setError("Email sahi format me daalo.");
      return;
    }

    if (!subject.trim() || subject.length > 150) {
      setError("Subject required hai aur 150 characters se zyada nahi hona chahiye.");
      return;
    }

    if (!message.trim() || message.length > 5000) {
      setError("Message required hai aur 5000 characters se zyada nahi hona chahiye.");
      return;
    }

    try {

      setLoading(true);

      const result = await sendTestEmail({
        to,
        subject,
        message,
      });

      if (result.ok) {

        setSuccess(
          `Test email successfully processed! ID: ${result.messageId}`
        );

        setTo("");
        setSubject("");
        setMessage("");

      } else {

        setError(result.error || "Something went wrong.");

      }

    } catch {

      setError("Mail nahi bheji ja saki, thodi der baad try karo.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="max-w-3xl bg-white rounded-xl border shadow-sm p-6 md:p-8">

      <div className="mb-7">

        <h2 className="text-xl font-bold text-gray-800">
          Send Test Email
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Send a test email to check your email campaign.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}

        <div>

          <label className="block text-sm font-medium mb-2">
            To (Email Address)
          </label>

          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        {/* Subject */}

        <div>

          <div className="flex justify-between mb-2">

            <label className="text-sm font-medium">
              Subject <span className="text-red-500">*</span>
            </label>

            <span className="text-xs text-blue-600">
              [TEST]
            </span>

          </div>

          <input
            type="text"
            value={subject}
            maxLength={150}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <p className="text-xs text-gray-400 mt-2">
            {subject.length}/150 characters
          </p>

        </div>

        {/* Message */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Message
          </label>

          <textarea
            value={message}
            maxLength={5000}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your email message here..."
            rows={7}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            required
          />

          <p className="text-xs text-gray-400 mt-2">
            {message.length}/5000 characters
          </p>

        </div>

        {/* Error */}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Success */}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          {loading ? "Sending..." : "Send Test Email"}
        </button>

      </form>

    </div>
  );
}