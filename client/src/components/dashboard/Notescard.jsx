import React from 'react'
import { PiPushPinLight } from "react-icons/pi";
import { PiClockLight } from "react-icons/pi";
import { PiPencilSimpleLight } from "react-icons/pi";
import { PiTrashLight } from "react-icons/pi";
const Notescard = () => {
  const notes = [
        {
            title: "Operating System - Scheduling",
            preview: "CPU scheduling decides which process runs next in the ready queue. Algorithms include FCFS, SJF, and Round Robin...",
            updated: "2h ago",
            tags: ["OS", "Exam", "Unit-3"],
            isPinned: true
        },
        {
            title: "Advanced React Patterns",
            preview: "Higher-Order Components (HOC) and Render Props are useful for reusing component logic across your application...",
            updated: "Yesterday",
            tags: ["React", "Frontend"],
            isPinned: false
        },
        {
            title: "Machine Learning - Neural Networks",
            preview: "Backpropagation is the heart of neural network training. It uses gradient descent to minimize the loss function...",
            updated: "16 Jan 2026",
            tags: ["AI", "Research"],
            isPinned: false
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
                <div 
                    key={index} 
                    className="group relative p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] hover:bg-white hover:border-black hover:shadow-2xl hover:shadow-gray-100/50 transition-all duration-500 ease-out cursor-pointer"
                >
                    {/* Top Actions: Pin (Always visible if pinned, else on hover) */}
                    <div className={`absolute top-6 right-8 transition-opacity duration-300 ${note.isPinned ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <PiPushPinLight className={`text-xl ${note.isPinned ? 'text-blue-600 fill-blue-600' : 'text-gray-400'}`} />
                    </div>

                    {/* 1) Title */}
                    <h3 className="text-xl font-medium text-black tracking-tight mb-3 pr-8 truncate">
                        {note.title}
                    </h3>

                    {/* 2) Short Preview */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                        {note.preview}
                    </p>

                    {/* 3) Tags Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {note.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-medium uppercase tracking-widest px-3 py-1 bg-gray-100 text-gray-500 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Row: Time & Quick Actions */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 group-hover:border-gray-100">
                        {/* 4) Last Updated */}
                        <div className="flex items-center gap-1.5 font-normal text-gray-400 text-xs">
                            <PiClockLight />
                            <span>Updated {note.updated}</span>
                        </div>

                        {/* 5) Quick Actions (Icons) */}
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors" title="Edit Note">
                                <PiPencilSimpleLight className="text-lg" />
                            </button>
                            <button className="p-2 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 transition-colors" title="Delete">
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