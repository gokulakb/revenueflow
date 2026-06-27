import { useNavigate } from "react-router-dom";

function Success({ transactionId }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center shadow-2xl shadow-emerald-900/20">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-3xl">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-emerald-300">
        Payment Approved
      </h3>

      <p className="mt-2 text-slate-300">
        Your payment was confirmed successfully.
      </p>

      <p className="mt-4 rounded-xl bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
        Transaction ID:
        <span className="font-semibold text-white">
          {" "}
          {transactionId}
        </span>
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-400"
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Success;