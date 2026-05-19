export default function ReportsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6">Execution Reports</h1>
      
      <div className="glass-card p-12 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Allure HTML Reports</h2>
        <p className="text-text-muted mb-8 max-w-lg">
          Detailed test execution reports including full stack traces, screenshots on failure, and comprehensive analytics.
        </p>
        <div className="flex space-x-4">
          <a href="/api/reports/allure-report" target="_blank" rel="noopener noreferrer" className="primary-gradient-btn py-3 px-6 text-center">
            View Live Report
          </a>
          <button className="secondary-glass-btn py-3 px-6">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
