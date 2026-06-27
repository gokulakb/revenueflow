const { getPayments } = require("../models/paymentModel");

const getAnalyticsController = async (req, res) => {
  try {
    const payments = await getPayments();

    const successfulPayments = payments.filter(
      (payment) => payment.status === "success"
    );

    const failedPayments = payments.filter(
      (payment) => payment.status === "failed"
    );

    const totalRevenue = successfulPayments.reduce(
      (sum, payment) => sum + Number(payment.amount),
      0
    );

    const conversionRate =
      payments.length === 0
        ? 0
        : Number(
            (
              (successfulPayments.length / payments.length) *
              100
            ).toFixed(1)
          );

    res.json({
      totalRevenue,
      successfulPayments: successfulPayments.length,
      failedPayments: failedPayments.length,
      conversionRate,
      matchingAccuracy: 97.4,

      revenueTrend: successfulPayments.map((payment) => ({
        date: payment.createdAt.split("T")[0],
        revenue: Number(payment.amount),
      })),

      latestPayments: payments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to fetch analytics.",
    });
  }
};

module.exports = {
  getAnalyticsController,
};