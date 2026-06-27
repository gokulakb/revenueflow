import { useState } from "react";
import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";
import { submitPayment } from "../api";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const candidate = data.get("candidate")?.toString().trim();
    const job = data.get("job")?.toString().trim();
    const amount = Number(data.get("amount"));

    console.log({
      candidate,
      job,
      amount,
    });

    if (!candidate || !job || amount <= 0) {
      setStatus("error");
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await submitPayment({
        candidate,
        job,
        amount,
      });

      if (response.success) {
        setTransactionId(response.payment.transactionId);
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage(response.message);
      }
    } catch (err) {
      setStatus("error");
      setMessage(
        err.response?.data?.message ||
          "Unable to connect to backend."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (status === "success")
    return <Success transactionId={transactionId} />;
  if (status === "error")
    return <Error message={message} onRetry={() => setStatus("idle")} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 space-y-5"
    >
      <h2 className="text-2xl font-bold text-white">
        Checkout
      </h2>

      <input
        name="candidate"
        placeholder="Candidate Name"
        className="w-full rounded p-3 bg-slate-800 text-white"
      />

      <input
        name="job"
        placeholder="Job Title"
        className="w-full rounded p-3 bg-slate-800 text-white"
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        className="w-full rounded p-3 bg-slate-800 text-white"
      />

      <button
        type="submit"
        className="w-full rounded bg-sky-500 py-3 text-white font-bold"
      >
        Pay Now
      </button>
    </form>
  );
}

export default Checkout;