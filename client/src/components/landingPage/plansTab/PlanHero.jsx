import React from 'react'

const Hero = () => {
    return (
        <>
            <h1 className="text-6xl md:text-8xl font-normal text-black tracking-tighter leading-[1.05] mb-8">
                NoteSpark AI
                <span
                    className="pl-7 inline-block bg-gradient-to-r from-[#0ae89e] via-[#3b82f6] to-[#0ae89e] bg-clip-text text-transparent"
                    style={{
                        backgroundSize: '200% auto',
                        animation: 'smoothFlow 5s linear infinite',
                    }}
                >
                    Plans
                    <style>{`
                        @keyframes smoothFlow {
                            from { background-position: 0% center; }
                            to { background-position: 200% center; }
                        }
                    `}</style>
                </span>

            </h1>

            <p className="text-gray-500 text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                Unlock more summaries, flashcards, and powerful features built for serious learners.
            </p>
        </>
    )
}

export default Hero