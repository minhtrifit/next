import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
