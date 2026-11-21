export default function Loading() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      <span className="ml-3 text-gray-500">
        Loading...
      </span>
    </div>
  );
}