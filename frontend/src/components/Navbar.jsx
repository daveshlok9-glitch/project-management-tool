import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Project Management Tool</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>

        <Link
          to="/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          Projects
        </Link>

        <Link
          to="/tasks"
          style={{ color: "white", textDecoration: "none" }}
        >
          Tasks
        </Link>

        <Link
          to="/analytics"
          style={{ color: "white", textDecoration: "none" }}
        >
          Analytics
        </Link>

        <button
          onClick={handleLogout}
          style={{
            padding: "8px 15px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;