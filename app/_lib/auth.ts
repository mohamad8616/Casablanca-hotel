import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const autoConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET, 
        })
    ]
}
export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth(autoConfig)