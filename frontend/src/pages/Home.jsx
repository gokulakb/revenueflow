import Checkout from '../components/Checkout';

function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl text-center">
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-300">RevenueFlow • Intelligent payment experience</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Turn every payment into a clear, confident revenue story.</h1>
        <p className="mt-4 text-lg text-slate-400 sm:text-xl">Launch a polished checkout flow, validate quality sign-off, and monitor conversion insights from one modern dashboard.</p>
      </div>
      <Checkout />
    </main>
  );
}

export default Home;
