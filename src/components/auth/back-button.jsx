"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function BackButton({ label, href }) {
  return (
    <Button
      size="sm"
      className="font-narmal w-full"
      variant="link"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
}