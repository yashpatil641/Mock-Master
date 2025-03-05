import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        // Hardcoded user values
        const hardcodedEmail = "test@example.com"
        const hardcodedPassword = "Pqrs@3459"

        if (
          credentials.email === hardcodedEmail &&
          credentials.password === hardcodedPassword
          
        ) {
            console.log(credentials.email, credentials.password)
            return { id: "1", name: "Test User", email: hardcodedEmail }
        }

        console.log("Credentials not valid")
        return null
      },
    }),
  ],
})
