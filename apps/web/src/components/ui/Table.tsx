import React from "react";

interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function Table({
  headers,
  rows,
}: TableProps) {

  return (
    <div className="overflow-x-auto border rounded-xl bg-white">

      <table className="w-full text-sm text-left">

        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-5 py-4 font-semibold text-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-5 py-4 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}