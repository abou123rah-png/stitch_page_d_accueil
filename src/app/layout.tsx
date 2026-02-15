import type { Metadata } from "next";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Physique Seconde S – Sénégal",
  description: "Plateforme d'apprentissage moderne pour lycéens sénégalais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <TopBar />
          <div className="app-container" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <Sidebar />
            <main className="main-content" style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
