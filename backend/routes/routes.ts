import { Router } from "express";
import {
	getEndpoints,
	createEndpoint,
	deleteEndpoint,
	updateEndpoint,
} from "../controllers/controller";

const router = Router();

router.get("/", getEndpoints);
router.post("/", createEndpoint);
router.delete("/:id", deleteEndpoint);
router.patch("/:id", updateEndpoint);

export default router;
