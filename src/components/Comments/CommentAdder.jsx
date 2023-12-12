import { useState } from "react";
import Button from "@mui/material/Button";
function CommentAdder({ addComment }) {
  const [addNewComment, setAddNewComment] = useState({
    userName: "",
    comment: "",
  });

  const handleChange = (event) => {
    setAddNewComment((curr) => {
      return {
        ...curr,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(addComment);
  };
  return (
    <div>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="add-a-comment-form"
      >
        <label htmlFor="userName" className="username-label">
          UserName
          <input
            type="text"
            name="userName"
            className="comment-user-name-input"
            onChange={handleChange}
            value={addNewComment.userName}
            required
            id="userName"
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            value={addNewComment.comment}
            onChange={handleChange}
            className="add-comment-box"
            name="comment"
            id="comment"
            cols="80"
            rows="10"
            required
          ></textarea>
          <Button variant="contained" onClick={handleSubmit}>
            Post A Comment
          </Button>
        </label>
      </form>
    </div>
  );
}

export default CommentAdder;
