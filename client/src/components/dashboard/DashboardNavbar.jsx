import React from 'react'
import logo from '../../../public/assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
    PiMagnifyingGlassLight,
    PiPlusBold,
    PiBellLight,
    PiGearLight,
    PiSignOutLight,
    PiUserLight,
    PiCaretDownBold,
    PiSparkleLight,
    PiCardsLight,
    PiFileTextLight
} from "react-icons/pi";

const Navbar = () => {

    const {user, logout} = useAuth();
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <nav className="flex justify-between items-center px-16 py-5 border-b border-gray-100 bg-white sticky top-0 z-50">

            {/* --- Left Side: Logo + Search --- */}
            <div className="flex items-center flex-1">
                <div className="flex items-center gap-2 cursor-pointer group pr-4" onClick={() => window.location.href = '/dashboard'}>
                    <img src={logo} alt="NoteSpark Logo" className="w-8 h-8 object-contain" />
                    <h2 className="text-2xl font-normal tracking-tight text-gray-900 hidden md:block">
                        NoteSpark <span className="text-[#0b57d0]">AI</span>
                    </h2>
                </div>

                <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden lg:block" />

                {/* Search Bar */}
                <div className="hidden lg:flex items-center bg-[#f1f3f4] px-4 py-2 rounded-xl w-full max-w-md mx-6 group focus-within:bg-white focus-within:ring-1 focus-within:ring-[#0b57d0] transition-all">
                    <PiMagnifyingGlassLight className="text-gray-500 text-xl" />
                    <input
                        type="text"
                        placeholder="Search your notes..."
                        className="bg-transparent border-none font-normal outline-none ml-3 text-sm w-full text-gray-700 placeholder:text-gray-500"
                    />
                </div>
            </div>

            {/* --- Right Side: Actions & Profile --- */}
            <div className="flex items-center gap-3 md:gap-5">

                {/* AI Tools Dropdown */}
                <div className="relative group hidden sm:block">
                    <button className="cursor-pointer flex items-center gap-2 text-sm font-normal text-[#444746] hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                        <PiSparkleLight className="text-xl text-[#0b57d0]" />
                        AI Tools
                        <PiCaretDownBold className="text-[10px] mt-0.5 group-hover:rotate-180 transition-transform" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-56 font-normal bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        <button className="cursor-pointer w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0b57d0] flex items-center gap-3 transition-colors">
                            <PiFileTextLight className="text-lg" />
                            <span>Quick Summarize</span>
                        </button>
                        <button className="cursor-pointer w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0b57d0] flex items-center gap-3 transition-colors">
                            <PiCardsLight className="text-lg" />
                            <span>Generate Flashcards</span>
                        </button>
                    </div>
                </div>

                {/* Upgrade Button */}
                <button className="cursor-pointer hidden lg:block text-sm font-medium bg-gradient-to-r from-[#0ae89e] via-[#3b82f6] to-[#0ae89e] bg-clip-text text-transparent hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                    Upgrade
                </button>

                {/* New Note Button */}
                <button className="cursor-pointer hidden md:flex items-center gap-2 bg-[#1f1f1f] text-white px-5 py-2 rounded-lg text-sm font-normal hover:bg-black transition-all shadow-sm active:scale-95">
                    <PiPlusBold className="text-lg" />
                    <span className="hidden md:inline">New Note</span>
                </button>

                {/* Notifications */}
                <button className="cursor-pointer p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
                    <PiBellLight className="text-2xl" />
                    <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </button>

                {/* Profile Avatar & Dropdown */}
                <div className="relative group">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center cursor-pointer hover:shadow-md transition-all">
                        <span className="text-[#0b57d0] font-bold text-xs">{user.name[0]}</span>
                    </div>

                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        <div className="px-4 py-2 border-b border-gray-50 mb-1">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">{user.name}</p>
                        </div>
                        <button className="cursor-pointer w-full text-left px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-50 flex items-center gap-3">
                            <PiUserLight className="text-lg" /> My Account
                        </button>
                        <button className="cursor-pointer w-full text-left px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-50 flex items-center gap-3">
                            <PiGearLight className="text-lg" /> Settings
                        </button>
                        <button onClick={handleLogout} className="cursor-pointer w-full text-left px-4 py-2 text-sm font-normal text-red-500 hover:bg-red-50 flex items-center gap-3 mt-1">
                            <PiSignOutLight className="text-lg" /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar