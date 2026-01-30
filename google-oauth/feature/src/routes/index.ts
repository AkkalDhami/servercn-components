import { Router } from "express";
import OAuthRoutes from "../modules/oauth/google-oauth.routes";

const router = Router();

router.use("/auth/google", OAuthRoutes);

export default router;
