const { run, get, all } = require('../database');

const createPayment = async ({ candidate, job, amount, status, transactionId }) => {
  const createdAt = new Date().toISOString();
  const result = await run(
    'INSERT INTO payments (candidate, job, amount, status, transactionId, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
    [candidate, job, amount, status, transactionId, createdAt]
  );

  return {
    id: result.id,
    candidate,
    job,
    amount,
    status,
    transactionId,
    createdAt
  };
};

const getPayments = async () => {
  return all('SELECT * FROM payments ORDER BY createdAt DESC');
};

const getPaymentStats = async () => {
  const totals = await all('SELECT status, COUNT(*) AS count, SUM(amount) AS revenue FROM payments GROUP BY status');
  return totals;
};

const getDailyRevenue = async () => {
  const rows = await all(`
    SELECT date(createdAt) AS date, SUM(amount) AS revenue
    FROM payments
    WHERE status = 'success'
    GROUP BY date(createdAt)
    ORDER BY date(createdAt) ASC
  `);

  return rows.map((row) => ({
    date: row.date,
    revenue: Number(row.revenue || 0)
  }));
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentStats,
  getDailyRevenue
};
