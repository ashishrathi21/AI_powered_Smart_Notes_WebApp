import React, { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import BottomBar from "../components/dashboard/BottomBar";
import Notescard from "../components/dashboard/Notescard";

const Dashboard = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loadingPdfs, setLoadingPdfs] = useState(true);

  const fetchPdfs = async () => {
    try {
      setLoadingPdfs(true);
      const res = await api.get("/api/pdfs");
      setPdfs(res.data.pdfs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPdfs(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-500 selection:text-white">
      <DashboardNavbar />

      <main className="mx-auto p-8 pb-32">
        <Notescard pdfs={pdfs} loading={loadingPdfs} />
      </main>

      <BottomBar onUploadSuccess={(newPdf) => setPdfs((prev) => [newPdf, ...prev])} />
    </div>
  );
};

export default Dashboard;
