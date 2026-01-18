import React from 'react'
import { 
    PiPlayBold, 
    PiEyeLight, 
    PiTrashLight, 
    PiMagnifyingGlassLight, 
    PiArrowsDownUpLight,
    PiCardsLight
} from "react-icons/pi";


const FlashcardsPage = () => {
    const decks = [
        {
            title: "DBMS - Normalization",
            source: "DBMS Notes",
            count: 20,
            progress: 70, // in percentage
            mastered: 14,
            updated: "2 days ago",
            tags: ["DBMS", "Exam"]
        },
        {
            title: "OS Unit 3 Flashcards",
            source: "Operating System - Scheduling",
            count: 10,
            progress: 30,
            mastered: 3,
            updated: "Yesterday",
            tags: ["OS", "Unit-3"]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-8 pb-32">
            {/* --- Header Section --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-medium tracking-tight text-black mb-2">Flashcard Decks</h1>
                    <p className="text-gray-500 font-light">Master your notes with AI-generated active recall.</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Search Decks */}
                    <div className="flex items-center bg-[#f1f3f4] px-4 py-2 rounded-xl flex-1 md:w-64 border border-transparent focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                        <PiMagnifyingGlassLight className="text-gray-500" />
                        <input type="text" placeholder="Search decks..." className="bg-transparent border-none outline-none ml-2 text-sm w-full" />
                    </div>
                    {/* Sort */}
                    <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                        <PiArrowsDownUpLight className="text-xl" />
                    </button>
                </div>
            </div>

            {/* --- Decks Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {decks.map((deck, index) => (
                    <div key={index} className="group p-8 border border-gray-100 rounded-[2.5rem] bg-[#fcfcfc] hover:bg-white hover:border-black hover:shadow-2xl hover:shadow-gray-100/50 transition-all duration-500 ease-out">
                        
                        {/* 1) & 2) Title & Source */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-black tracking-tight truncate mb-1">
                                {deck.title}
                            </h3>
                            <p className="text-gray-400 text-xs font-light">
                                From: <span className="text-gray-600 font-medium">{deck.source}</span>
                            </p>
                        </div>

                        {/* 3) & 5) Progress & Count */}
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-2 text-[#0b57d0]">
                                    <PiCardsLight className="text-xl" />
                                    <span className="text-sm font-bold">{deck.count} cards</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    {deck.mastered}/{deck.count} Mastered
                                </span>
                            </div>
                            {/* Premium Progress Bar */}
                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-[#0b57d0] rounded-full transition-all duration-1000" 
                                    style={{ width: `${deck.progress}%` }}
                                />
                            </div>
                        </div>

                        {/* 4) Updated Info */}
                        <div className="text-[11px] text-gray-400 font-light mb-8">
                            Last practiced: <span className="text-gray-600">{deck.updated}</span>
                        </div>

                        {/* 7) Quick Actions */}
                        <div className="flex items-center justify-between gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl text-sm font-medium hover:bg-[#0b57d0] transition-all active:scale-95">
                                <PiPlayBold className="text-xs" />
                                Practice
                            </button>
                            
                            <div className="flex items-center gap-1">
                                <button className="p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-all" title="View Cards">
                                    <PiEyeLight className="text-xl" />
                                </button>
                                <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Delete Deck">
                                    <PiTrashLight className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    )
}

export default FlashcardsPage