import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      // Persist GitHub user id for quota tracking
      // profile.id is numeric on GitHub
      if (profile && (profile as any).id) {
        token.ghid = String((profile as any).id);
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).ghid = (token as any).ghid;
      return session;
    },
  },
};
