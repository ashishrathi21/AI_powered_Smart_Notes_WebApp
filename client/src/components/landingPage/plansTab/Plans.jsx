import React from 'react'

const Plans = () => {
    return (
        <>
            <div className="bg-white px-6 py-22">
                <div className="max-w-6xl mx-auto p-10 md:p-16 text-center">
                    <div className="relative z-10 mb-20">
                        <h2 className="text-4xl md:text-6xl font-light text-[#1f1f1f] tracking-tighter mb-4">
                            More limits. Better models. Faster results.
                        </h2>
                    </div>


                    <div className="border-t border-gray-100">
                        {[
                            {
                                planName: "NoteSpark AI",
                                planSubText: "For Individual Users",
                                plan: "Try it Free",
                                planFeatures: ["AI-Powered Note-taking", "5 Notebooks Limit", "Standard Research Models"]
                            },
                            {
                                planName: "NoteSpark AI Plus",
                                planSubText: "For Teams",
                                plan: "Upgrade",
                                planFeatures: ["Collaborative Notebooks", "Priority AI Processing", "Shared Source Library"]
                            },
                            {
                                planName: "NoteSpark AI Pro",
                                planSubText: "For Organizations",
                                plan: "Upgrade",
                                planFeatures: ["Custom Model Tuning", "Advanced Admin Controls", "Enterprise-grade Security"]
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="py-12 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between text-left gap-8 hover:bg-gray-50/50 transition-colors px-4 group"
                            >

                                <div className="md:w-1/4">
                                    <h3 className="text-2xl font-medium text-[#1f1f1f] tracking-tight">{item.planName}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{item.planSubText}</p>
                                </div>


                                <div className="md:w-2/4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                    {item.planFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-600 text-[15px]">
                                            <div className="w-2 h-2 bg-[linear-gradient(to_right,#0ae89e,#3b82f6)] rounded-full flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>


                                <div className="md:w-1/4 flex justify-end">
                                    <button className={`
                                        px-8 py-2.5 rounded-lg cursor-pointer text-sm font-light transition-all
                                        ${item.plan === "Try it Free"
                                            ? "border border-gray-300 text-black hover:bg-black hover:text-white"
                                            : "bg-black text-white"}
                                    `}>
                                        {item.plan}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans