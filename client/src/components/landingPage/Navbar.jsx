import React from 'react'
import { FaDiscord, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../../public/assets/logo.png'

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

                {/* Logo Section */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="NoteSpark Logo" className="w-10 h-10 object-contain" />
                    <h2 className="text-2xl font-normal tracking-tight text-gray-900">
                        NoteSpark <span className="text-blue-600">AI</span>
                    </h2>
                </div>

                {/* Navigation & Socials */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-6 text-md font-normal text-black">
                        <li
                            onClick={() => setActiveTab('overview')}
                            className={`cursor-pointer ${activeTab === 'overview' ? 'underline underline-offset-4 decoration-1' : ''}`}>Overview</li>
                        <li
                            onClick={() => setActiveTab('plans')}
                            className={`cursor-pointer ${activeTab === 'plans' ? 'underline underline-offset-4 decoration-1' : ''}`}>Plans</li>
                        <li
                            className="h-4 w-[1px] bg-gray-500"></li>
                        <li
                            className="hover:text-gray-900 cursor-pointer transition-transform hover:scale-110">
                            <FaDiscord className="text-xl" />
                        </li>
                        <li
                            className="hover:text-gray-900 cursor-pointer transition-transform hover:scale-110">
                            <FaRedditAlien className="text-xl" />
                        </li>
                        <li
                            className="hover:text-gray-900 cursor-pointer transition-transform hover:scale-110">
                            <FaXTwitter className="text-lg" />
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <button className="px-7 py-1.5 rounded-md border border-gray-500 cursor-pointer text-sm font-semibold transition-all  active:scale-95">
                        Get App
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar