"use client";

import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-transparent">
        <div>
          <Link href="/">Opulent Hub</Link>
        </div>
        {session ? (
          <div>
          </div> 
        ) : (
          <div>
            <Button varient="outline" onClick={signIn}>Sign in</Button>
          </div>
        )}
      </nav>
    </>
  )
}