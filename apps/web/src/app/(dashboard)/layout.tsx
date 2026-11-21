import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <Sidebar />

      <div className="flex-1 min-w-0">

        <Topbar />

        <main className="p-6 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}