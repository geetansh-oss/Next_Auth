import CardWrapper from "@/components/auth/card-wrapper";
export default function LoginForm() {
  return (
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonLabel="Sign Up"
    backButtonHref="auth/signup"
    showSocial>
    <div>
      <div>
        Login Form
      </div>
    </div>
    </CardWrapper>
  )
}