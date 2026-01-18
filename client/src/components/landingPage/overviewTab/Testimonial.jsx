import React from 'react'

const Testimonial = () => {
    return (
        <>
            <div className="bg-white py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <h1 className="text-[35px] md:text-[50px] font-normal text-black tracking-tighter leading-tight mb-4">
                        What people think
                    </h1>
                </div>


                <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="w-[350px] p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] flex-shrink-0">

                                    <p className="text-black text-lg font-medium leading-relaxed mb-6 whitespace-normal">
                                        “I revised 3 chapters in 20 minutes. Flashcards are super helpful.”
                                    </p>
                                    <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">— College Student</div>
                                </div>

                                <div className="w-[350px] p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] flex-shrink-0">
                                    <p className="text-black text-lg font-medium leading-relaxed mb-6 whitespace-normal">
                                        “Clean UI, fast summaries, and my notes feel organized now.”
                                    </p>
                                    <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">— Self Learner</div>
                                </div>

                                <div className="w-[350px] p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] flex-shrink-0">
                                    <p className="text-black text-lg font-medium leading-relaxed mb-6 whitespace-normal">
                                        “Perfect for interview prep. I generate flashcards and practice daily.”
                                    </p>
                                    <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">— Developer</div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                </div>


                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: fit-content;
                        animation: marquee 25s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                 `}</style>
            </div>
        </>
    )
}

export default Testimonial