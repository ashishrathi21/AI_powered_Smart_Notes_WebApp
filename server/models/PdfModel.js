import mongoose from "mongoose";

const PdfSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    fileUrl : {
        type : String,
        required : true
    },
    extractedText : {
        type : String,
        default : ""
    },
   status : {
    type : String,
    enum : ["pending", "processing", "completed", "failed"],
    default : "processing"
   }
    
}, {timestamps : true})

const Pdf = mongoose.model("Pdf", PdfSchema);
export default Pdf;
