import React from 'react'
import { PiExam } from "react-icons/pi";
import { PiBriefcaseLight, PiNotebookLight, PiLightbulbLight, PiFileTextLight, PiBrainLight } from "react-icons/pi";

const PeopleUses = () => {
    return (
        <>
            <div className="bg-white px-6  max-w-7xl mx-auto">
               
                <div className="mb-16 text-center">
                    <h1 className="text-[35px] md:text-[50px] font-normal text-black tracking-tighter leading-tight mb-4">
                        Ways people use NoteSpark AI
                    </h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {[
                        {
                            title: "Exam Revision",
                            desc: "Convert heavy textbooks and long lectures into bite-sized, revision-ready summaries instantly.",
                            icon: <PiExam />,
                            colSpan: "md:col-span-4",
                        },
                        {
                            title: "Interview Prep",
                            desc: "Master core concepts with AI-generated flashcards tailored for your dream role.",
                            icon: <PiBriefcaseLight />,
                            colSpan: "md:col-span-2",
                        },
                        {
                            title: "Class Notes",
                            desc: "Organize chaos. Subject-wise tagging and automated chapter breakdowns keep you ahead.",
                            icon: <PiNotebookLight />,
                            colSpan: "md:col-span-2",
                        },
                        {
                            title: "Self Learning",
                            desc: "Break down complex topics into simple terms. Perfect for learning new skills fast.",
                            icon: <PiLightbulbLight />,
                            colSpan: "md:col-span-4",
                        },
                        {
                            title: "Project Docs",
                            desc: "Keep your research and documentation clean, structured, and easily searchable.",
                            icon: <PiFileTextLight />,
                            colSpan: "md:col-span-3",
                        },
                        {
                            title: "Daily Knowledge",
                            desc: "Capture thoughts and convert them into long-term memory with active recall.",
                            icon: <PiBrainLight />,
                            colSpan: "md:col-span-3",
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`${item.colSpan} group p-8 border border-gray-100 rounded-[2rem] bg-[#fcfcfc] hover:border-black hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 ease-out`}
                        >
                            <div className="flex flex-col h-full">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-2xl text-black shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-black tracking-tight">
                                        {item.title}
                                    </h2>
                                </div>

                                <div className="flex-grow">
                                    <p className="text-gray-500 text-base leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PeopleUses