import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import GanttChart from "../components/GanttChart";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createProject = async (e) => {
    e.preventDefault();

    try {
      await api.post("/projects", form);

      setForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });

      loadProjects();
    } catch (err) {
      alert("Unable to create project");
    }
  };

  const deleteProject = async (id) => {
    try {
      await api.delete(`/projects/${id}`);
      loadProjects();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: 30, maxWidth: 1000, margin: "auto" }}>
        <h1>Projects</h1>

        {/* Create Project Form */}
        <form onSubmit={createProject}>
          <input
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />

          <button style={{ padding: 10, cursor: "pointer" }}>
            Create Project
          </button>
        </form>

        <hr style={{ margin: "30px 0" }} />

        {/* Project List */}
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              marginBottom: 15,
              borderRadius: 8,
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <button onClick={() => deleteProject(project._id)}>
              Delete
            </button>
          </div>
        ))}

        {/* Gantt Chart */}
        <h2 style={{ marginTop: 40 }}>Project Timeline</h2>
        <GanttChart projects={projects} />
      </div>
    </>
  );
}

export default Projects;