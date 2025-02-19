import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import recommendRoutes from './routes/recommendRoutes.js';
import authRoutes from './routes/authRoutes.js'; // ✅ Import authentication routes
import pool from './db.js'; // (Optional) Keep for direct DB calls

const app = express(); // ✅ Initialize app before using it
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow frontend access
app.use(express.json()); // Parse incoming JSON requests

// ✅ Routes
app.use('/api', recommendRoutes);      // Recommendation routes
app.use('/api/auth', authRoutes);      // Authentication routes

// ✅ Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
