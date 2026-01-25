import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(name, email, password);
            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="animate-in fade-in duration-500">
            <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl text-sm font-normal hover:bg-gray-50 transition-all mb-8 active:scale-95">
                <FcGoogle className="text-xl" />
                Continue with Google
            </button>

            <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-gray-100 flex-1" />
                <span className="text-xs text-gray-400 uppercase font-light tracking-widest">or</span>
                <div className="h-[1px] bg-gray-100 flex-1" />
            </div>

            <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    autoComplete="new-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-light w-full px-5 py-3 rounded-xl border border-gray-100 bg-[#f8f9fa] focus:bg-white focus:border-[#0b57d0] outline-none text-sm transition-all"
                />
                <input 
                    type="email" 
                    placeholder="Email address"
                    autoComplete="new-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-light w-full px-5 py-3 rounded-xl border border-gray-100 bg-[#f8f9fa] focus:bg-white focus:border-[#0b57d0] outline-none text-sm transition-all"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-light w-full px-5 py-3 rounded-xl border border-gray-100 bg-[#f8f9fa] focus:bg-white focus:border-[#0b57d0] outline-none text-sm transition-all"
                />
                <button className="font-light cursor-pointer w-full py-3 mt-4 bg-[#1f1f1f] text-white rounded-xl text-sm hover:bg-black transition-all shadow-md active:scale-95">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default Signup