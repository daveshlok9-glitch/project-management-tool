function GanttChart({ projects }) {
  const validProjects = projects.filter(
    (p) => p.startDate && p.endDate
  );

  if (validProjects.length === 0) {
    return <h3>No project timelines available</h3>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      {validProjects.map((project) => {
        const start = new Date(project.startDate);
        const end = new Date(project.endDate);

        const duration =
          Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;

        return (
          <div
            key={project._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{project.title}</h3>

            <p>
              Start: {start.toDateString()} | End:{" "}
              {end.toDateString()}
            </p>

            <div
              style={{
                height: "20px",
                background: "#eee",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.min(duration * 10, 100)}%`,
                  height: "100%",
                  background: "#2563eb",
                }}
              />
            </div>

            <small>
              Duration: {duration} day(s)
            </small>
          </div>
        );
      })}
    </div>
  );
}

export default GanttChart;