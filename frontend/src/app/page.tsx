import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Automate Web Testing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#5231D9]">Precision</span>
        </h1>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          A scalable, robust Selenium framework combined with Next.js dashboard for real-time monitoring and reporting.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="primary-gradient-btn text-lg px-8 py-4">Start Testing Now</button>
          <button className="secondary-glass-btn text-lg px-8 py-4">View Documentation</button>
        </div>
      </section>

      {/* 3D Dashboard Mockup */}
      <div className="w-full max-w-5xl h-96 glass-card relative mb-24 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        {/* Mockup UI items */}
        <div className="p-8 grid grid-cols-3 gap-6 h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          <div className="col-span-2 glass-card h-full p-4 flex flex-col justify-between">
            <div className="h-4 w-1/3 bg-white/20 rounded"></div>
            <div className="space-y-2 mt-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="h-8 w-full bg-white/5 rounded flex items-center px-4">
                   <div className="h-2 w-16 bg-primary rounded-full"></div>
                 </div>
               ))}
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
             <div className="glass-card h-1/2 p-4 flex items-center justify-center flex-col">
                <div className="text-4xl font-bold text-green-400">98%</div>
                <div className="text-sm text-text-muted mt-2">Pass Rate</div>
             </div>
             <div className="glass-card h-1/2 p-4 flex items-center justify-center flex-col">
                <div className="text-4xl font-bold text-red-400">2%</div>
                <div className="text-sm text-text-muted mt-2">Fail Rate</div>
             </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
        {[
          { label: "Total Tests Run", value: "1.2M+" },
          { label: "Execution Time", value: "< 2 mins" },
          { label: "Bugs Caught", value: "850+" },
          { label: "Active Nodes", value: "24" }
        ].map((metric, idx) => (
          <div key={idx} className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
            <div className="text-text-muted text-sm uppercase tracking-wider">{metric.label}</div>
          </div>
        ))}
      </section>

      {/* Core Features Grid */}
      <section className="w-full max-w-5xl mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Automation Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Distributed Execution", desc: "Run Selenium grids seamlessly across multiple workers." },
            { title: "Real-time Reporting", desc: "Get live updates of test execution via WebSockets." },
            { title: "Auto Bug Logging", desc: "Failures automatically generate tickets with screenshots." },
            { title: "Headless Scaling", desc: "Optimized for cloud environments without GUI overhead." },
            { title: "Playwright Ready", desc: "Optional integration for faster cross-browser tests." },
            { title: "Visual Analytics", desc: "Rich dashboards detailing test coverage and health." }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-8 hover:bg-white/5 transition-colors duration-300 group">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full max-w-4xl text-center mb-20 glass-card p-12">
        <h2 className="text-3xl font-bold mb-6">Ready to optimize your QA pipeline?</h2>
        <p className="text-text-muted mb-8">Deploy our framework in minutes and start catching bugs before they reach production.</p>
        <button className="primary-gradient-btn text-lg px-12 py-4">Create Free Account</button>
      </section>
    </div>
  );
}
