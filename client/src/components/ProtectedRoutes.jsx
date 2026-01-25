import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.spinner}></div>
        <p style={styles.text}>Loading your workspace...</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  return children;
}

const styles = {
  wrapper: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    background: "#fff",
  },
  spinner: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "3px solid #e5e7eb",
    borderTop: "3px solid #111827",
    animation: "spin 0.8s linear infinite",
  },
  text: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
    fontFamily: "Google Sans, system-ui, Arial",
    fontWeight: "100",
  },
};
