import React, { useState } from 'react'
import logo from '../../public/assets/logo.png'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false); // Toggle state

    return (
        <div className="min-h-screen bg-white selection:bg-black selection:text-white flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-[400px] text-center">
                
                {/* Logo & Header */}
                <div className="flex flex-col items-center mb-10">
                    <img src={logo} alt="NoteSpark Logo" className="w-10 h-10 mb-2 object-contain" />
                    <h2 className="text-3xl font-normal tracking-tighter text-[#1f1f1f]">
                        NoteSpark <span className="text-[#0b57d0]">AI</span>
                    </h2>
                    <p className="text-[#444746] mt-2 font-light">
                        {isLogin ? "Welcome back" : "Sign up to get started"}
                    </p>
                </div>

                {/* Conditional Rendering */}
                {isLogin ? <Login /> : <Signup />}

                {/* Toggle Link */}
                <p className="mt-8 text-sm font-light text-[#444746]">
                    {isLogin ? "Don't have an account?" : "Already have an account?"} 
                    <span 
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#0b57d0] ml-1 cursor-pointer font-light hover:underline"
                    >
                        {isLogin ? "Sign up" : "Log in"}
                    </span>
                </p>

                <p className="mt-12 text-[11px] font-light text-gray-400 max-w-[300px] mx-auto leading-relaxed">
                    By continuing, you agree to NoteSpark AI's <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
                </p>
            </div>
        </div>
    )
}

export default Auth