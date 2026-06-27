function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-8 text-center shadow-xl">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-sky-500" />
      <p className="text-sm font-medium text-slate-300">Processing your payment securely...</p>
    </div>
  );
}

export default Loading;
