interface ErrorBoxProps {
  message: string;
}

export default function ErrorBox({
  message,
}: ErrorBoxProps) {

  return (
    <div
      role="alert"
      className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg"
    >
      {message}
    </div>
  );
}