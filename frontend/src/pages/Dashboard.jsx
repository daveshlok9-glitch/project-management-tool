import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1>Dashboard</h1>

        <button
          onClick={() => navigate("/projects")}
          style={{
            padding: "10px 18px",
            marginBottom: "25px",
            cursor: "pointer",
          }}
        >
          + Create Project
        </button>

        {loading ? (
          <h3>Loading...</h3>
        ) : projects.length === 0 ? (
          <h3>No Projects Found</h3>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p>
                <strong>Start:</strong>{" "}
                {project.startDate
                  ? new Date(project.startDate).toLocaleDateString()
                  : "N/A"}
              </p>

              <p>
                <strong>End:</strong>{" "}
                {project.endDate
                  ? new Date(project.endDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Dashboard;