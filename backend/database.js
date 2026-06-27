const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbDirectory = path.join(__dirname, 'database');
const dbPath = path.join(dbDirectory, 'revenue.db');

if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error('Failed to connect to SQLite database:', error.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

const run = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.run(sql, params, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });

const get = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) {
        reject(error);
      } else {
        resolve(row);
      }
    });
  });

const all = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });

const initializeDatabase = async () => {
  await run(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      candidate TEXT NOT NULL,
      job TEXT NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL,
      transactionId TEXT NOT NULL UNIQUE,
      createdAt TEXT NOT NULL
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS quality (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matchingAccuracy REAL NOT NULL,
      status TEXT NOT NULL,
      verifiedBy TEXT NOT NULL,
      verifiedAt TEXT NOT NULL,
      remarks TEXT NOT NULL
    )
  `);

  await seedSampleData();
};

const seedSampleData = async () => {
  const paymentCount = await get('SELECT COUNT(*) AS count FROM payments');
  if (paymentCount.count === 0) {
    const samplePayments = [
      { candidate: 'Ava Brooks', job: 'Senior Product Designer', amount: 3200, status: 'success', transactionId: 'txn_seed_001' },
      { candidate: 'Liam Patel', job: 'Frontend Engineer', amount: 1800, status: 'success', transactionId: 'txn_seed_002' },
      { candidate: 'Noah Reed', job: 'Data Analyst', amount: 950, status: 'failed', transactionId: 'txn_seed_003' }
    ];

    for (const payment of samplePayments) {
      await run(
        'INSERT INTO payments (candidate, job, amount, status, transactionId, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
        [payment.candidate, payment.job, payment.amount, payment.status, payment.transactionId, new Date().toISOString()]
      );
    }
  }

  const qualityCount = await get('SELECT COUNT(*) AS count FROM quality');
  if (qualityCount.count === 0) {
    await run(
      'INSERT INTO quality (matchingAccuracy, status, verifiedBy, verifiedAt, remarks) VALUES (?, ?, ?, ?, ?)',
      [97.4, 'Approved', 'Mina Chen', new Date().toISOString(), 'Candidate profile and role expectations align well.']
    );
  }
};

const closeDatabase = () => {
  db.close((error) => {
    if (error) {
      console.error('Error closing database:', error.message);
    }
  });
};

module.exports = {
  initializeDatabase,
  run,
  get,
  all,
  closeDatabase
};
