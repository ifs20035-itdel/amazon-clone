import AuthLayout from "../features/auth/components/AuthLayout"
import LoginFormComponent from "../features/auth/components/LoginForm.components"

const SignInPage = () => {
  return (
    <AuthLayout>
      <LoginFormComponent/>
    </AuthLayout>
  )
}

export default SignInPage