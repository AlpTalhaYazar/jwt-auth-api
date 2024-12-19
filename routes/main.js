import express from "express";
import { login, dashboard } from "../controllers/main.js";
import { authentificationMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/dashboard").get(authentificationMiddleware, dashboard);
router.route("/login").post(login);

export { router as mainRouter };