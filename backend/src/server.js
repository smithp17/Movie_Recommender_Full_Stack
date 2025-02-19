import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import recommendRoutes from './routes/recommendRoutes.js';  // Import routes after express
import pool from './db.js';  // (Optional) Keep if needed for direct DB calls

const app = express();  // ✅ Initialize app before using it
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes should be added after app is initialized
app.use('/api', recommendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
