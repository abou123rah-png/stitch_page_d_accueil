/* src/app/api/auth/[...nextauth]/route.ts */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials) {
                // Simple mock authentication for now
                if (credentials?.email === "eleve@senegal.sn" && credentials?.password === "physique2026") {
                    return { id: "1", name: "Élève Sénégal", email: "eleve@senegal.sn", role: "STUDENT" };
                }
                return null;
            }
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                (session.user as any).role = token.role;
            }
            return session;
        }
    }
});

export { handler as GET, handler as POST };
