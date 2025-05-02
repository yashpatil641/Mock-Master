import { githubSignIn } from "@/lib/actions";
 
export default function SignIn() {
  return (
    <form action={githubSignIn}>
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}