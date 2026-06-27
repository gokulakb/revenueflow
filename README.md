# RevenueFlow

RevenueFlow is a production-ready full stack application that combines a polished payment checkout experience with an analytics dashboard and quality sign-off workflow. It uses React, Vite, Node.js, Express, SQLite, Axios, Chart.js, and Tailwind CSS.

## Project Overview

RevenueFlow demonstrates:
- A modern payment checkout flow with validation and loading/error/success states
- A responsive analytics dashboard with revenue and payment insights
- Quality sign-off management for matching accuracy and review status
- SQLite-backed persistence for reliable local development and deployment readiness

## Features

- Responsive landing page and checkout form
- Backend payment processing with random success/failure simulation
- Automatic SQLite database initialization and seed data
- Revenue trends, payment distribution, and payment history visualization
- Quality sign-off form and latest review display
- Clean, mobile-friendly UI using Tailwind CSS

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Axios, Chart.js
- Backend: Node.js, Express, SQLite

## Folder Structure

```text
revenueflow/
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── database.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── src/
│   ├── App.jsx
│   ├── api.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Installation

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Running Backend

```bash
cd backend
npm start
```

The backend will run at http://localhost:5000.

## Running Frontend

```bash
cd frontend
npm run dev
```

The frontend will run at http://localhost:3000.

## API Endpoints

- POST /api/payment
- GET /api/payment
- GET /api/analytics
- POST /api/quality/signoff
- GET /api/quality

## Deployment on Render

1. Create a new Web Service for the backend and set the root directory to backend.
2. Create a static site for the frontend and set the root directory to frontend.
3. Build command for frontend: npm run build
4. Publish directory for frontend: dist
5. Set the backend start command: npm start

## Future Improvements

- Add authentication and role-based access
- Integrate real payment gateways such as Stripe
- Add persistent user accounts and exportable reports
