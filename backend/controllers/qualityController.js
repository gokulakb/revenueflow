const { run, all } = require('../database');

const saveQualitySignoffController = async (req, res) => {
  try {
    const { matchingAccuracy, status, verifiedBy, remarks } = req.body;

    if (!matchingAccuracy || !status || !verifiedBy || !remarks) {
      return res.status(400).json({ message: 'All sign-off fields are required.' });
    }

    const verifiedAt = new Date().toISOString();
    const result = await run(
      'INSERT INTO quality (matchingAccuracy, status, verifiedBy, verifiedAt, remarks) VALUES (?, ?, ?, ?, ?)',
      [Number(matchingAccuracy), status, verifiedBy, verifiedAt, remarks]
    );

    return res.status(201).json({
      id: result.id,
      matchingAccuracy: Number(matchingAccuracy),
      status,
      verifiedBy,
      verifiedAt,
      remarks
    });
  } catch (error) {
    console.error('Quality sign-off error:', error);
    return res.status(500).json({ message: 'Unable to save quality sign-off.' });
  }
};

const getQualitySignoffController = async (_req, res) => {
  try {
    const latest = await all('SELECT * FROM quality ORDER BY id DESC LIMIT 1');
    return res.json(latest[0] || null);
  } catch (error) {
    console.error('Get quality sign-off error:', error);
    return res.status(500).json({ message: 'Unable to fetch quality sign-off.' });
  }
};

module.exports = {
  saveQualitySignoffController,
  getQualitySignoffController
};
