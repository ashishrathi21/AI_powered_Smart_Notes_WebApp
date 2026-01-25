import React, { useEffect, useState } from 'react'
import api from "../../api/axios";
import {
    PiFilesLight,
    PiCardsLight,
    PiTrashLight,
    PiGearLight,
    PiPlusBold
} from "react-icons/pi";
import { PiXLight } from "react-icons/pi";
import { PiCloudArrowUpLight } from "react-icons/pi";


const BottomBar = ({ onUploadSuccess }) => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const [uploading, setUploading] = useState(false);

    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const toggleModal = () => setIsCreateModalOpen(!isCreateModalOpen);


    const handleUploadPdf = async (file) => {
        if (!file) return alert("Please select a PDF file");

        try {
            setUploading(true);

            const formData = new FormData();
            formData.append("pdf", file);
            formData.append("title", title);

            const res = await api.post("/api/pdfs/upload", formData);

            onUploadSuccess?.(res.data.pdf);

            setTitle("");
            setSelectedFile(null);
            setIsCreateModalOpen(false);

            alert("PDF uploaded successfully ✅");
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Upload failed");
        } finally {
            setUploading(false);
        }
    };



    return (

        <>
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop (Background Blur) */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={toggleModal} // Bahar click karne pe close hoga
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-md rounded-[1rem] p-8 shadow-2xl transition-all transform animate-in fade-in zoom-in duration-300">

                        {/* 1) Close Button (Top Right) */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
                        >
                            <PiXLight size={24} />
                        </button>

                        <div className="mb-8">
                            <h2 className="text-2xl font-normal text-gray-900">Create New Note</h2>
                            <p className="text-gray-500 text-sm mt-1 font-light">Upload your PDF and give it a title.</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Title Input */}
                            <div>
                                <label className="block text-sm font-light text-gray-400 mb-2 ml-1">Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter note title..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="placeholder:font-light w-full px-5 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none  transition-all focus:font-normal focus:text-gray-800"
                                />

                            </div>

                            {/* File Upload Area */}
                            <div>
                                <label className="block text-sm font-light text-gray-400 mb-2 ml-1">Document</label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        accept=".pdf"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (!file) return;

                                            setSelectedFile(file);

                                            const nameWithoutExt = file.name.replace(/\.pdf$/i, "");
                                            setTitle(nameWithoutExt);
                                        }}
                                    />

                                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center group-hover:border-black group-hover:bg-gray-50 transition-all">
                                        <PiCloudArrowUpLight className="text-3xl text-gray-400 group-hover:text-black mb-2" />
                                        <span className="text-sm font-normal text-gray-600">Click to upload PDF</span>
                                        <span className="text-sm font-light text-gray-400 mt-1">Maximum file size: 10MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Upload Button */}
                            <button
                                type="button"
                                onClick={() => handleUploadPdf(selectedFile)}
                                disabled={uploading}
                                className="w-full bg-[#1f1f1f] cursor-pointer text-white font-normal py-4 rounded-lg hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {uploading ? "Uploading..." : "Upload Note"}
                            </button>


                        </form>
                    </div>
                </div>
            )}


            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                {/* Floating Dock Container */}
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-gray-200 px-4 py-3 rounded-[2rem] shadow-2xl shadow-gray-200">

                    {/* All Notes */}
                    <button className=" cursor-pointer flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#0b57d0] transition-all group">
                        <PiFilesLight className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Notes</span>
                    </button>

                    {/* Flashcards */}
                    <button className=" cursor-pointer flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#0b57d0] transition-all group">
                        <PiCardsLight className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Cards</span>
                    </button>

                    {/* Center Quick Action (Create) */}
                    <div className="mx-2">
                        <button onClick={toggleModal} className="bg-[#1f1f1f] cursor-pointer  text-white p-4 rounded-full shadow-lg hover:bg-black hover:scale-110 active:scale-95 transition-all shadow-gray-300">
                            <PiPlusBold className="text-xl" />
                        </button>
                    </div>

                    {/* Trash */}
                    <button className=" cursor-pointer flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#0b57d0] transition-all group">
                        <PiTrashLight className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Trash</span>
                    </button>

                    {/* Settings */}
                    <button className=" cursor-pointer flex flex-col items-center gap-1 px-4 py-2 text-gray-500 hover:text-[#0b57d0] transition-all group">
                        <PiGearLight className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Settings</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default BottomBar