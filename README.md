# RevenueFlow – Monetization Integration & Revenue Dashboard

RevenueFlow is a full-stack web application that simulates a modern payment checkout experience while providing real-time revenue analytics. It enables users to process payments, monitor transaction performance, and review quality sign-off metrics through an intuitive dashboard.

---

## 🚀 Live Demo

### Backend

https://revenueflow.onrender.com

### Frontend

Add your deployed frontend URL here.

---

## 📂 GitHub Repository

https://github.com/gokulakb/revenueflow

---

## ✨ Features

* Secure payment checkout flow
* Payment success and failure simulation
* Automatic transaction ID generation
* Revenue analytics dashboard
* Total revenue tracking
* Successful and failed payment statistics
* Conversion rate calculation
* Latest payment history
* Quality sign-off management
* Responsive modern UI
* SQLite database integration

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router
* Tailwind CSS

### Backend

* Node.js
* Express.js
* SQLite
* CORS

---

## 📁 Project Structure

```
revenueflow/
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/gokulakb/revenueflow.git
cd revenueflow
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5001
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### Payments

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| GET    | `/api/payment` | Fetch all payments   |
| POST   | `/api/payment` | Create a new payment |

### Analytics

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/analytics` | Revenue analytics |

### Quality Sign-Off

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| GET    | `/api/quality`         | Fetch quality sign-off |
| POST   | `/api/quality/signoff` | Save quality sign-off  |

---

## 📊 Dashboard Metrics

* Total Revenue
* Successful Payments
* Failed Payments
* Conversion Rate
* Revenue Trend
* Latest Payments
* Matching Accuracy
* Quality Sign-Off

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Checkout Page
* Payment Success
* Revenue Dashboard
* Quality Sign-Off

---

## 🎯 Project Workflow

```
Home
   │
   ▼
Checkout Payment
   │
   ▼
Payment Processing
   │
   ▼
Success / Failure
   │
   ▼
Revenue Dashboard
   │
   ▼
Quality Sign-Off
```

---

## 📈 Future Improvements

* Payment Gateway Integration
* User Authentication
* JWT Security
* Role-Based Access Control
* Email Notifications
* Export Analytics Reports
* Interactive Charts
* PostgreSQL Database
* Docker Support

---


This project is developed for educational and learning purposes.
