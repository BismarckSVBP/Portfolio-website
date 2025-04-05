import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/route.js";

dotenv.config();

const app = express();

// ⚠️ Check CLIENT_URL
if (!process.env.CLIENT_URL) {
  console.error("⚠️ CLIENT_URL is not set in the environment variables.");
  process.exit(1);
}

// ✅ Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

// ✅ Routes
app.use("/api", authRoutes);

// ✅ Export app for Vercel
export default app;

// ✅ Optional local server (comment out when deploying to Vercel)
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
