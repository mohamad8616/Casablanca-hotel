import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./database";

const autoConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingUser = await getUser(user?.email);

        if (!existingUser)
          await createUser({ email: user.email, fullname: user.name });
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getUser(session.user.email);
      session.guestId = guest?.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(autoConfig);
