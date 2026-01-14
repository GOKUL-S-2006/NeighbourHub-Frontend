import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get("/issues").then((res) => setIssues(res.data));
  }, []);

  const upvote = async (id) => {
    await api.patch(`/issues/${id}/upvote`);
    const res = await api.get("/issues");
    setIssues(res.data);
  };

  return (
    <div>
      <h2>Community Issues</h2>
      {issues.map((i) => (
        <div key={i._id} style={{ border: "1px solid", margin: 10 }}>
          <h3>{i.title}</h3>
          <p>{i.description}</p>
          <p>Status: {i.status}</p>
          <p>Votes: {i.votes}</p>
          <button onClick={() => upvote(i._id)}>Upvote</button>
        </div>
      ))}
    </div>
  );
}
