import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const res = await api.get("/analytics");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) {
    return (
      <>
        <Navbar />
        <div style={{ padding: 30 }}>
          <h2>Loading Analytics...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h1>Project Analytics</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={card}>
            <h2>{data.totalProjects}</h2>
            <p>Total Projects</p>
          </div>

          <div style={card}>
            <h2>{data.totalTasks}</h2>
            <p>Total Tasks</p>
          </div>

          <div style={card}>
            <h2>{data.completedTasks}</h2>
            <p>Completed Tasks</p>
          </div>

          <div style={card}>
            <h2>{data.todoTasks}</h2>
            <p>To Do</p>
          </div>

          <div style={card}>
            <h2>{data.inProgressTasks}</h2>
            <p>In Progress</p>
          </div>

          <div style={card}>
            <h2>{data.priority.high}</h2>
            <p>High Priority</p>
          </div>
        </div>
      </div>
    </>
  );
}

const card = {
  background: "#fff",
  borderRadius: "10px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

export default Analytics;