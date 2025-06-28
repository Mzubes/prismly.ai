import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1>Welcome to Prismly.ai</h1>
        <p>This is your multi-model AI dashboard MVP.</p>
      </div>
    </div>
  );
}

export default Dashboard;
