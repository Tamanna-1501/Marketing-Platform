"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "▦" },
  { name: "Contacts", href: "/contacts", icon: "♙" },
  { name: "Campaigns", href: "/campaigns", icon: "✉" },
  { name: "Automation", href: "/automation", icon: "⚙" },
  { name: "Forms", href: "/forms", icon: "▤" },
  { name: "Analytics", href: "/analytics", icon: "▥" },
  { name: "Settings", href: "/settings", icon: "⚙" },
  { name: "Test Email", href: "/test-email", icon: "➤" },
  { name: "Team", href: "/team", icon: "♙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      <div className="h-20 flex items-center px-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          MarketFlow
        </h1>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400 font-semibold mb-4">
          MAIN MENU
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-5 border-t">
        <p className="text-sm font-semibold text-gray-700">
          Marketing Platform
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Version 1.0.0
        </p>
      </div>

    </aside>
  );
}