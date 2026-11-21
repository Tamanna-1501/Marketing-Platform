interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {

  return (
    <div className="text-center py-12 bg-white rounded-xl border">

      <div className="text-4xl mb-4">📭</div>

      <h3 className="font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>

    </div>
  );
}