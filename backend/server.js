const express = require("express");
const cors = require("cors");
const path = require("path");

const { initializeDatabase } = require("./database");

const paymentRoutes = require("./routes/paymentRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const qualityRoutes = require("./routes/qualityRoutes");

const app = express();

// Start from port 5001
const PORT = process.env.PORT || 5001;

// =========================
// Middleware
// =========================

// Allow frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// API Routes
// =========================

app.use("/api/payment", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/quality", qualityRoutes);

// =========================
// Health Check
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RevenueFlow Backend Running",
    endpoints: {
      payment: "/api/payment",
      analytics: "/api/analytics",
      quality: "/api/quality",
    },
  });
});

// =========================
// Production Frontend
// =========================

const frontendPath = path.join(__dirname, "../frontend/dist");

if (require("fs").existsSync(frontendPath)) {
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// =========================
// Start Server
// =========================

async function startServer() {
  try {
    await initializeDatabase();

    app.listen(PORT, () => {
      console.log("====================================");
      console.log(`RevenueFlow Backend Running`);
      console.log(`URL: http://localhost:${PORT}`);
      console.log("====================================");
    });
  } catch (err) {
    console.error("Server Error:", err);
  }
}

startServer();