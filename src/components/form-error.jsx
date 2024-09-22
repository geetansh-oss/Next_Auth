import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function FormError({ message }) {
  if (!message) {
    return null;
  }
  return (
    <p className="bg-destructive/15 p3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </p>
  );
}