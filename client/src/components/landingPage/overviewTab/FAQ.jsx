import React from 'react'

const FAQ = () => {
    return (
        <>
            <div className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-normal text-black tracking-tighter mb-4">
                            Have questions?
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Everything you need to know about NoteSpark AI.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                q: "Is NoteSpark AI actually free to use?",
                                a: "Yes! You can start for free to generate notes and flashcards. Our 'Pro Plan' is only needed if you're a power user who needs unlimited AI processing and advanced exports."
                            },
                            {
                                q: "Can I customize the AI-generated summaries?",
                                a: "Absolutely. Think of NoteSpark as your first draft. You can edit, add, or regenerate any part of the summaries and flashcards to match your study style."
                            },
                            {
                                q: "How does 'Private by Design' work with my data?",
                                a: "Your intellectual property is yours. We use encrypted databases, and unlike other AIs, we never use your personal notes or uploads to train our global models."
                            },
                            {
                                q: "What types of content can I upload?",
                                a: "You can turn YouTube links, PDFs, lecture recordings, and even messy handwritten photos into structured study guides, key points, and flashcards."
                            },
                            {
                                q: "Can I use NoteSpark AI during my lectures?",
                                a: "Yes, it’s fully responsive! Most of our users use it on their tablets or phones to record and summarize live lectures in real-time."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-100 pb-8">
                                <h4 className="text-lg font-medium text-black mb-3 flex gap-3">
                                    <span className="text-gray-300">0{index + 1}</span>
                                    {faq.q}
                                </h4>
                                <p className="text-gray-600 text-start leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default FAQ