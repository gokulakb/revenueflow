import { useEffect, useState } from "react";
import { getAnalytics } from "../api";
import Loading from "./Loading";

function RevenueDashboard() {
  const [analytics, setAnalytics] = useState(null);

  const loadAnalytics = async () => {
    try {
      const data = await getAnalytics();
      setAnalytics(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  if (!analytics) return <Loading />;

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

        <div className="rounded-xl bg-slate-900 p-5">
          <h3 className="text-slate-400">Total Revenue</h3>
          <p className="mt-3 text-3xl font-bold text-white">
            ${analytics.totalRevenue}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-5">
          <h3 className="text-slate-400">Successful Payments</h3>
          <p className="mt-3 text-3xl font-bold text-green-400">
            {analytics.successfulPayments}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-5">
          <h3 className="text-slate-400">Failed Payments</h3>
          <p className="mt-3 text-3xl font-bold text-red-400">
            {analytics.failedPayments}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-5">
          <h3 className="text-slate-400">Conversion Rate</h3>
          <p className="mt-3 text-3xl font-bold text-sky-400">
            {analytics.conversionRate}%
          </p>
        </div>

      </div>

      <div className="rounded-xl bg-slate-900 p-5">
        <h2 className="mb-5 text-xl font-semibold">
          Latest Payments
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-2 text-left">Candidate</th>
              <th className="py-2 text-left">Job</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {analytics.latestPayments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-slate-800"
              >
                <td className="py-3">{payment.candidate}</td>
                <td>{payment.job}</td>
                <td>${payment.amount}</td>
                <td>{payment.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RevenueDashboard;