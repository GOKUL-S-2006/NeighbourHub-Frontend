import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminDashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get("/issues").then((res) => setIssues(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/issues/${id}/status`, { status });
    const res = await api.get("/issues");
    setIssues(res.data);
  };

  const deleteIssue = async (id) => {
    await api.delete(`/issues/admin/${id}`);
    setIssues(issues.filter((i) => i._id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {issues.map((i) => (
        <div key={i._id}>
          <b>{i.title}</b> | {i.status}
          <button onClick={() => updateStatus(i._id, "in-progress")}>In Progress</button>
          <button onClick={() => updateStatus(i._id, "resolved")}>Resolve</button>
          <button onClick={() => deleteIssue(i._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
