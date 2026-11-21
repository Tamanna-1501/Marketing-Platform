"use client";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
}

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {

  return (
    <div
      role="status"
      className={`flex items-center justify-between p-4 rounded-lg ${
        type === "success"
          ? "bg-green-50 text-green-700"
          : "bg-red-50 text-red-700"
      }`}
    >
      <span>{message}</span>

      <button onClick={onClose} aria-label="Close notification">
        ✕
      </button>
    </div>
  );
}