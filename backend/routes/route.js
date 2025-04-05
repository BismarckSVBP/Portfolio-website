import express from "express";
const router = express.Router();

import { contactUs } from "../controllers/contactUs.js";

router.post("/contact-us", contactUs);


export default router;