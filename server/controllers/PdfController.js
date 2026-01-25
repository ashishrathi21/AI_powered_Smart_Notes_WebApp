import Pdf from "../models/PdfModel.js";

// POST /api/pdfs/upload
export const uploadPdfController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "PDF file is required" });
    }

    const pdf = await Pdf.create({
      userId: req.user._id,
      title: req.body.title || req.file.originalname,
      fileUrl: `/uploads/${req.file.filename}`,
      status: "completed",
    });

    return res.status(201).json({
      success: true,
      message: "PDF uploaded successfully",
      pdf,
    });
  } catch (error) {
    console.log("uploadPdfController error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET /api/pdfs
export const getMyPdfs = async (req, res) => {
  try {
    const pdfs = await Pdf.find({ userId: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      pdfs,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
