import express from "express";
import { protect } from "../middlewares/authMiddleware.js"
import { uploadPdf } from "../middlewares/uploadMulter.js"
import { uploadPdfController, getMyPdfs } from "../controllers/PdfController.js"

const router = express.Router();

// upload single pdf file with field name = "pdf"
router.post("/upload", protect, uploadPdf.single("pdf"), uploadPdfController);

// get all pdfs of logged-in user
router.get("/", protect, getMyPdfs);

export default router;
