export default function BugsPage() {
  const bugs = [
    { id: "BUG-101", module: "login", sev: "High", desc: "Login timeout on Safari", time: "2 hours ago" },
    { id: "BUG-102", module: "payment", sev: "Critical", desc: "Checkout button missing on mobile", time: "5 hours ago" },
    { id: "BUG-103", module: "profile", sev: "Low", desc: "Profile pic not loading for new users", time: "1 day ago" },
    { id: "BUG-104", module: "pricing", sev: "Medium", desc: "Pricing table overflow on tablets", time: "2 days ago" }
  ];

  const getSevColor = (sev: string) => {
    switch(sev) {
      case 'Critical': return 'border-red-500 bg-red-500/10 text-red-500';
      case 'High': return 'border-orange-500 bg-orange-500/10 text-orange-500';
      case 'Medium': return 'border-yellow-500 bg-yellow-500/10 text-yellow-500';
      case 'Low': return 'border-green-500 bg-green-500/10 text-green-500';
      default: return 'border-gray-500 bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6">Bug Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bugs.map((bug) => (
          <div key={bug.id} className={`glass-card p-6 border-l-4 ${getSevColor(bug.sev).split(' ')[0]}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">{bug.id}</h3>
                <span className="text-sm text-text-muted capitalize">Module: {bug.module}</span>
              </div>
              <span className={`px-2 py-1 rounded text-xs border ${getSevColor(bug.sev)}`}>
                {bug.sev} Severity
              </span>
            </div>
            <p className="text-white mb-4">{bug.desc}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-text-muted">{bug.time}</span>
              <button className="text-primary hover:underline">View Screenshot</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
