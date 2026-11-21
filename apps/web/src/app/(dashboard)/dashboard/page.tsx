export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to your marketing platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-gray-500">Total Contacts</p>
          <h2 className="text-3xl font-bold mt-3">2,450</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-gray-500">Campaigns</p>
          <h2 className="text-3xl font-bold mt-3">24</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-gray-500">Emails Sent</p>
          <h2 className="text-3xl font-bold mt-3">8,500</h2>
        </div>

      </div>
    </div>
  );
}