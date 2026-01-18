import React, { useState } from 'react';
import Navbar from '../components/landingPage/Navbar';
import Hero from '../components/landingPage/overviewTab/Hero';
import PeopleUses from '../components/landingPage/overviewTab/PeopleUses';
import Testimonial from '../components/landingPage/overviewTab/Testimonial';
import Privacy from '../components/landingPage/overviewTab/Privacy';
import FAQ from '../components/landingPage/overviewTab/FAQ';
import PlanHero from '../components/landingPage/plansTab/PlanHero';
import Plans from '../components/landingPage/plansTab/Plans';


const LandingPage = () => {

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-white selection:bg-gray-500 selection:text-white">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {
                activeTab === 'overview' ? (
                    <div className="min-h-screen bg-white selection:bg-gray-500 selection:text-white">
                        <div className="max-w-7xl mx-auto px-6 py-18 text-center">
                            <Hero />
                            <PeopleUses />
                            <Testimonial />
                            <Privacy />
                            <FAQ />
                        </div>
                    </div>
                ) : (
                    <div className="min-h-screen bg-white selection:bg-gray-500 selection:text-white">
                        <div className="max-w-7xl mx-auto px-6 pt-45 text-center">
                            <PlanHero />
                            <Plans />
                        </div>
                    </div>
                )
            }

            <footer className="bg-white border-t border-gray-100 py-12 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-black font-light tracking-tight text-lg">NoteSpark AI</h3>
                        <p className="text-gray-400 text-sm mt-1 font-extralight">
                            © {new Date().getFullYear()} NoteSpark. Built for the next generation of learners.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <p className="text-gray-400 text-sm font-extralight mt-1">
                            By <span className="text-gray-500 font-light cursor-pointer">Ashish Rathi</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;