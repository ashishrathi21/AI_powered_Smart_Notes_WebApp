import React from 'react'
import DashboardNavbar from '../components/dashboard/DashboardNavbar'
import BottomBar from '../components/dashboard/BottomBar'
import Notescard from '../components/dashboard/Notescard'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-white selection:bg-gray-500 selection:text-white">
            <DashboardNavbar />
            <main className=" mx-auto p-8 pb-32"> {/* pb-32 is important taaki content bottom bar ke peeche na chhup jaye */}
               <Notescard />
            </main>
            <BottomBar />
        </div>
    )
}

export default Dashboard