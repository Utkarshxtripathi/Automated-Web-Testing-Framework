export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 glass-card rounded-none p-6 flex flex-col space-y-4">
        <div className="text-sm text-text-muted uppercase tracking-wider mb-4">Menu</div>
        <a href="/dashboard" className="text-white hover:text-primary transition-colors py-2">Overview</a>
        <a href="/dashboard/tests" className="text-text-muted hover:text-primary transition-colors py-2">Test Cases</a>
        <a href="/dashboard/bugs" className="text-text-muted hover:text-primary transition-colors py-2">Bug Reports</a>
        <a href="/dashboard/reports" className="text-text-muted hover:text-primary transition-colors py-2">Execution Reports</a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
