import CommentSection from "./CommentSection";

function KanbanBoard({ tasks, updateStatus }) {
  const columns = [
    {
      title: "To Do",
      status: "To Do",
    },
    {
      title: "In Progress",
      status: "In Progress",
    },
    {
      title: "Done",
      status: "Done",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
        alignItems: "flex-start",
      }}
    >
      {columns.map((column) => (
        <div
          key={column.status}
          style={{
            flex: 1,
            background: "#f4f4f4",
            padding: "15px",
            borderRadius: "10px",
            minHeight: "600px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {column.title}
          </h2>

          {tasks
            .filter((task) => task.status === column.status)
            .map((task) => (
              <div
                key={task._id}
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <p>
                  <strong>Project:</strong>{" "}
                  {task.project?.title || "N/A"}
                </p>

                <p>
                  <strong>Priority:</strong>{" "}
                  {task.priority}
                </p>

                <select
                  value={task.status}
                  onChange={(e) =>
                    updateStatus(task._id, e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "15px",
                  }}
                >
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>

                <CommentSection taskId={task._id} />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;