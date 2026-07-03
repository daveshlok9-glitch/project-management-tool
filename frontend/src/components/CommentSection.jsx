import { useEffect, useState } from "react";
import api from "../services/api";

function CommentSection({ taskId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (taskId) {
      loadComments();
    }
  }, [taskId]);

  const loadComments = async () => {
    try {
      const res = await api.get(`/comments/${taskId}`);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async () => {
    if (!comment.trim()) return;

    try {
      await api.post("/comments", {
        task: taskId,
        comment,
      });

      setComment("");

      loadComments();
    } catch (err) {
      alert("Unable to add comment");
    }
  };

  return (
    <div
      style={{
        marginTop: "20px",
        borderTop: "1px solid #ddd",
        paddingTop: "15px",
      }}
    >
      <h4>Comments</h4>

      {comments.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#f5f5f5",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "5px",
          }}
        >
          <strong>{item.user?.name}</strong>

          <p>{item.comment}</p>
        </div>
      ))}

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
        }}
      />

      <button
        onClick={addComment}
        style={{
          marginTop: "10px",
          padding: "8px 18px",
          cursor: "pointer",
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default CommentSection;