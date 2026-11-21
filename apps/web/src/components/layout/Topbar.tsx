"use client";

import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();

  const pageName =
    pathname.split("/").filter(Boolean).pop() || "Dashboard";

  const title = pageName
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-xs text-gray-400">
          Welcome to your marketing workspace
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="text-gray-500 text-xl">
          ♧
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              Anjali
            </p>

            <p className="text-xs text-gray-400">
              Admin
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}