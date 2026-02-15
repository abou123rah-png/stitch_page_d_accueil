import Sidebar from "@/components/Sidebar";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="app-container flex min-h-screen">
            <Sidebar />
            <main className="main-content flex-1 p-8 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
