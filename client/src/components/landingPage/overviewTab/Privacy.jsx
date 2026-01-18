import React from 'react'

const Privacy = () => {
    return (
        <>
            <div className="bg-white px-6">
                <div className="max-w-4xl mx-auto p-10 md:p-16 text-center relative overflow-hidden">

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-normal text-black tracking-tighter mb-4">
                            Built with privacy in mind.
                        </h2>
                        <p className="text-gray-500 text-xl font-medium mb-12 max-w-2xl mx-auto">
                            We never train NoteSpark AI on your organization’s data. Your work remains protected and yours alone.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                            {[
                                { title: "Private", desc: "Your notes stay private and encrypted." },
                                { title: "On-Demand", desc: "AI runs only when you request it." },
                                { title: "Control", desc: "You decide what gets saved or deleted." }
                            ].map((point, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-sm uppercase tracking-wider">{point.title}</h4>
                                        <p className="text-gray-500 text-sm leading-snug">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Privacy