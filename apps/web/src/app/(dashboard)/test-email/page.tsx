import TestEmailForm from "@/components/test-email/TestEmailForm";

export default function TestEmailPage() {

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-2xl font-bold text-gray-800">
          Test Email
        </h1>

        <p className="text-gray-500 mt-2">
          Test your email configuration before launching campaigns.
        </p>

      </div>

      <TestEmailForm />

    </div>
  );
}