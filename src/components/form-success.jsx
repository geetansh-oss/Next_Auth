import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function FormSuccess({ message }) {
  if (!message) {
    return null;
  }
  return (
    <p className="bg-emerald/15 p3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </p>
  );
}