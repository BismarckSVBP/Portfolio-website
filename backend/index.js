import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/route.js";

dotenv.config();

const app = express();

// Ensure CLIENT_URL exists
if (!process.env.CLIENT_URL) {
	console.error("⚠️ CLIENT_URL is not set in the environment variables.");
	process.exit(1);
}

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
		optionsSuccessStatus: 200,
	})
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", authRoutes); // Optional: Use "/api" to avoid conflicts

// Connect to database once

// ✅ Export a function for Vercel
// export default app;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
;
});