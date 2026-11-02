import { Router } from "express";
import {
	getEndpoints,
	createEndpoint,
	updateEndpoint,
	deleteEndpoint,
	checkEndpoint,
} from "../controllers/controller";

const router = Router();

router.get("/", getEndpoints);
router.post("/", createEndpoint);
router.patch("/:id", updateEndpoint);
router.delete("/:id", deleteEndpoint);
router.post("/:id/check", checkEndpoint);

export default router;
