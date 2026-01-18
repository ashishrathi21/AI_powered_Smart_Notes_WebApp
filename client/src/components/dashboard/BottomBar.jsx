import React from 'react'
import { 
    PiFilesLight, 
    PiCardsLight, 
    PiTrashLight, 
    PiGearLight, 
    PiPlusBold 
} from "react-icons/pi";

const BottomBar = () => {
    return (
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
                    <button className="bg-[#1f1f1f] cursor-pointer  text-white p-4 rounded-full shadow-lg hover:bg-black hover:scale-110 active:scale-95 transition-all shadow-gray-300">
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
    )
}

export default BottomBar