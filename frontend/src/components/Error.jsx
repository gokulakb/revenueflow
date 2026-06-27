function Error({ message, onRetry }) {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-8 text-center shadow-2xl shadow-rose-900/20">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/20 text-3xl">!</div>
      <h3 className="text-2xl font-semibold text-rose-300">Payment Failed</h3>
      <p className="mt-2 text-slate-300">{message}</p>
      <button
        onClick={onRetry}
        className="mt-6 rounded-full bg-rose-500 px-5 py-2.5 font-semibold text-white transition hover:bg-rose-400"
      >
        Retry Payment
      </button>
    </div>
  );
}

export default Error;
