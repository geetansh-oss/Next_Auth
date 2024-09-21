"use client";

import { useRouter } from "next/navigation";

export default function LoginButton({ children, mode = "redirect", asChild }) {
  const router = useRouter();
  const onClick = () => {
    router.push("auth/signin");
  }
  return (
    <div>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </div>
  )
}