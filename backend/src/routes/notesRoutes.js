import express from "express";
import { getallnotes, createnote, updatenote, deletenote, getnoteById }
    from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getallnotes);
router.get("/:id", getnoteById);
router.post("/", createnote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);

export default router;