import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>

            <h1 className="text-6xl md:text-8xl font-normal text-black tracking-tighter leading-[1.05] mb-8">
                Turn Your Notes Into <br />
                <span
                    className="inline-block bg-gradient-to-r  from-[#0ae89e] via-[#3b82f6] to-[#0ae89e] bg-clip-text text-transparent"
                    style={{
                        backgroundSize: '200% auto',
                        animation: 'smoothFlow 5s linear infinite',
                    }}
                >
                    Summaries & Flashcards
                    <style>{`
              @keyframes smoothFlow {
                from { background-position: 0% center; }
                to { background-position: 200% center; }
              }
            `}</style>
                </span> <br />
                Instantly.
            </h1>

            <p className="text-gray-500 text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-light">
                Write notes, organize them, and let AI generate revision-ready
                summaries and flashcards in seconds.
            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
                <Link to="/auth">
                    <button className="bg-black text-white px-10 py-4 rounded-xl font-light text-lg cursor-pointer active:scale-95 ">
                        Try NoteSpark AI
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Hero