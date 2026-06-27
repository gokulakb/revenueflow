import RevenueDashboard from '../components/RevenueDashboard';

function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Revenue Analytics</h1>
        <p className="mt-2 text-slate-400">Track growth, review payment outcomes, and capture the latest quality sign-off.</p>
      </div>
      <RevenueDashboard />
    </main>
  );
}

export default Dashboard;
