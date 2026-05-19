"use client";
import { useState } from 'react';

export default function TestCasesPage() {
  const [runningTest, setRunningTest] = useState<number | null>(null);

  const testCases = [
    { id: 1, name: "Login Positive Path", module: "login", status: "passed" },
    { id: 2, name: "Login Negative Path", module: "login", status: "passed" },
    { id: 3, name: "Signup Validations", module: "signup", status: "failed" },
    { id: 4, name: "Checkout Flow", module: "payment", status: "pending" },
  ];

  const handleRun = async (id: number, moduleName: string) => {
    setRunningTest(id);
    try {
      const response = await fetch(`http://localhost:8000/api/execution/trigger/${id}/${moduleName}`, {
        method: "POST"
      });
      const data = await response.json();
      console.log("Triggered:", data);
      
      // Basic polling simulation for status
      let attempts = 0;
      const interval = setInterval(async () => {
        attempts++;
        if (attempts > 15) {
          clearInterval(interval);
          setRunningTest(null);
          return;
        }
        const statusRes = await fetch(`http://localhost:8000/api/execution/status/${data.job_id}`);
        const statusData = await statusRes.json();
        if (statusData.status === "SUCCESS" || statusData.status === "FAILURE") {
           clearInterval(interval);
           setRunningTest(null);
           alert(`Test finished with status: ${statusData.status}\nResult: ${JSON.stringify(statusData.result)}`);
        }
      }, 2000);
    } catch (err) {
      console.error(err);
      setRunningTest(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6">Test Cases Management</h1>
      
      <div className="glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5">
            <tr>
              <th className="p-4 text-text-muted">Test ID</th>
              <th className="p-4 text-text-muted">Name</th>
              <th className="p-4 text-text-muted">Module</th>
              <th className="p-4 text-text-muted">Status</th>
              <th className="p-4 text-text-muted text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc) => (
              <tr key={tc.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4">#{tc.id}</td>
                <td className="p-4 font-semibold">{tc.name}</td>
                <td className="p-4 capitalize">{tc.module}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    tc.status === 'passed' ? 'bg-green-500/20 text-green-400' :
                    tc.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tc.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => handleRun(tc.id, tc.module)}
                    disabled={runningTest === tc.id}
                    className="secondary-glass-btn py-1 px-4 text-sm relative"
                  >
                    {runningTest === tc.id ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                        <span>Running...</span>
                      </span>
                    ) : (
                      "Trigger Test"
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
