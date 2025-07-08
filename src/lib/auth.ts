import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabaseAdmin } from "./db";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        // Check if user exists in our database
        const { data: existingUser } = await supabaseAdmin
          .from("users")
          .select("*")
          .eq("email", user.email!)
          .single();

        if (existingUser) {
          // User exists, update token with user data
          token.id = existingUser.id;
          token.university = existingUser.university;
          token.graduation_year = existingUser.graduation_year;
          token.phone = existingUser.phone;
          token.is_verified = existingUser.is_verified;
        } else {
          // Create new user
          const { data: newUser, error } = await supabaseAdmin
            .from("users")
            .insert({
              email: user.email!,
              name: user.name!,
              avatar_url: user.image,
              is_verified: false,
            })
            .select()
            .single();

          if (newUser && !error) {
            token.id = newUser.id;
            token.university = newUser.university;
            token.graduation_year = newUser.graduation_year;
            token.phone = newUser.phone;
            token.is_verified = newUser.is_verified;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.university = token.university as string;
        session.user.graduation_year = token.graduation_year as number;
        session.user.phone = token.phone as string;
        session.user.is_verified = token.is_verified as boolean;
      }
      return session;
    },
    async signIn({ user, account }) {
      // We handle user creation in the JWT callback
      // Just return true here to allow sign in
      return true;
    },
  },
};

// Extended user type for session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      university?: string;
      graduation_year?: number;
      phone?: string;
      is_verified: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    university?: string;
    graduation_year?: number;
    phone?: string;
    is_verified: boolean;
  }
}
