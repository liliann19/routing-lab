import { Router } from "express";
import * as ctl from '../controllers/campus.controller.js';

const router = Router();

router.get("/", ctl.home);
router.get(["/info", "/about"], ctl.info);
router.get("/id/:id", ctl.campusById);
router.get("/search", ctl.search);

export default router;