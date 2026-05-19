export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-primary font-bold">
            U
          </div>
        </div>
      </header>

      {/* Widgets Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pass/Fail Widget */}
        <div className="glass-card p-6 flex flex-col items-center justify-center h-64">
          <h3 className="text-lg font-bold mb-4 w-full text-left">Test Results</h3>
          {/* Mock Donut Chart */}
          <div className="relative w-32 h-32 rounded-full border-[16px] border-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center">
             <div className="absolute top-0 right-0 w-16 h-16 border-t-[16px] border-r-[16px] border-red-500/80 rounded-tr-full -mt-4 -mr-4"></div>
             <span className="text-xl font-bold">85%</span>
          </div>
          <div className="flex justify-between w-full mt-6 text-sm">
            <span className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Passed: 120</span>
            <span className="flex items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Failed: 15</span>
          </div>
        </div>

        {/* Recent Bugs Widget */}
        <div className="glass-card p-6 h-64 overflow-hidden flex flex-col">
          <h3 className="text-lg font-bold mb-4">Recent Bugs</h3>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2">
            {[
              { id: "BUG-101", title: "Login timeout on Safari", sev: "High", color: "text-red-400 bg-red-400/10" },
              { id: "BUG-102", title: "Checkout button missing", sev: "Critical", color: "text-red-500 bg-red-500/10" },
              { id: "BUG-103", title: "Profile pic not loading", sev: "Low", color: "text-green-400 bg-green-400/10" },
              { id: "BUG-104", title: "Pricing table overflow", sev: "Medium", color: "text-yellow-400 bg-yellow-400/10" }
            ].map(bug => (
              <div key={bug.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg text-sm">
                <span className="truncate w-3/4">{bug.title}</span>
                <span className={`px-2 py-1 rounded text-xs ${bug.color}`}>{bug.sev}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Timeline */}
        <div className="glass-card p-6 h-64 flex flex-col">
          <h3 className="text-lg font-bold mb-4">Execution Timeline</h3>
          <div className="flex-1 flex flex-col justify-end space-y-4">
             {/* Mock bars */}
             <div className="flex items-end space-x-3 h-32">
                {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/50 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h} tests
                     </div>
                  </div>
                ))}
             </div>
             <div className="flex justify-between text-xs text-text-muted">
               <span>Mon</span>
               <span>Sun</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
