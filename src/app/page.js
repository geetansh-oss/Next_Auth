import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center space-y-2 ">
        <div className="space-y-3 text-center">
          <h1 className="text-5xl font-semibold decoration-purple-400">
            Next Auth
          </h1>
          <p className="text-2xl font-medium ">
            hello auth!
          </p>
        </div>
        <div>
          <LoginButton>
            <Button size="lg" variant="secondary">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </main>
    </>
  );
}
