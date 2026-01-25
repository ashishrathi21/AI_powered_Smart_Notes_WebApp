import React from 'react'
import { useEffect, useState } from 'react';
import api from "../../api/axios";
import { PiPushPinLight } from "react-icons/pi";
import { PiClockLight } from "react-icons/pi";
import { PiPencilSimpleLight } from "react-icons/pi";
import { PiTrashLight } from "react-icons/pi";
const Notescard = ({ pdfs, loading }) => {


    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await api.get('/api/pdfs');
                setPdfs(response.data.pdfs);
            } catch (error) {
                console.error('Error fetching PDFs:', error);
            }
        };
        fetchPdfs();
    }, []);

    const timeAgo = (dateString) => {
        const diff = Date.now() - new Date(dateString).getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return `${seconds}s ago`;
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    };



    if (pdfs.length === 0) {
        return (
            /* min-h-[60vh] ensures it takes enough space to look centered on the page */
            <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
                <div className="bg-gray-50 p-6 rounded-full mb-6">
                    <PiPencilSimpleLight className="text-2xl text-gray-300" />
                </div>
                <h2 className="text-2xl font-normal text-gray-800 tracking-tight">
                    Start your learning journey!
                </h2>
                <p className="text-gray-400 max-w-sm mx-auto mt-3 text-base font-extralight">
                    Your library is empty. Upload your first PDF to generate notes,
                    flashcards, and more.
                </p>

                <div className="mt-15 flex flex-col items-center gap-3 animate-bounce">
                    {/* Gradient Text */}
                    <span className="text-md font-normal tracking-tight bg-gradient-to-r from-[#0ae89e] via-[#3b82f6] to-[#0ae89e] bg-clip-text text-transparent">
                        Tap the plus button below to begin
                    </span>

                    {/* SVG with Gradient Stroke */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0ae89e" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#0ae89e" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M12 5v14M19 12l-7 7-7-7"
                            stroke="url(#arrow-gradient)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((pdf, index) => (
                <div
                    key={index}
                    className="group relative p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] hover:bg-white hover:border-black hover:shadow-2xl hover:shadow-gray-100/50 transition-all duration-500 ease-out cursor-pointer"
                >

                    {/* 1) Title */}
                    <h3 className="text-xl font-normal text-black tracking-tight mb-3 pr-8 truncate">
                        {pdf.title}
                    </h3>

                    {/* 2) Short Preview */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                        {pdf.description}
                    </p>

                    {/* 3) Tags Chips */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                        {pdf.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-medium uppercase tracking-widest px-3 py-1 bg-gray-100 text-gray-500 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div> */}

                    {/* Bottom Row: Time & Quick Actions */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 group-hover:border-gray-100">
                        {/* 4) Last Updated */}
                        <div className="flex items-center gap-1.5 font-normal text-gray-400 text-xs">
                            <PiClockLight />
                            <span>Updated : {timeAgo(pdf.updatedAt)}</span>
                        </div>

                        {/* 5) Quick Actions (Icons) */}
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-2 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete">
                                <PiTrashLight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Notescard