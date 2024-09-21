import { Divide } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="h-full flex item-center justify-center bg-opacity-25">
      {children}
    </div>
  );
}