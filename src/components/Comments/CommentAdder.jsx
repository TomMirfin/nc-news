import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { postOnArticle } from "../../apis/apis";

function CommentAdder({ addComment }) {
  const { id } = useParams();

  const [addNewComment, setAddNewComment] = useState({
    username: "Hello",
    body: "Test",
  });
  console.log(addNewComment);
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
    addComment(addNewComment);
    setCommentToSend(addNewComment);
  };

  useEffect(() => {
    postOnArticle(id, addNewComment).then((res) => {
      console.log(res.data, "<--- res data");
      setComments(res.data);
    });
  }, []);

  return (
    <div>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="add-a-comment-form"
      >
        <label htmlFor="userName" className="username-label">
          Username
          <input
            type="text"
            name="userName"
            className="comment-user-name-input"
            onChange={handleChange}
            value={addNewComment.username}
            required
            id="userName"
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            value={addNewComment.body}
            onChange={handleChange}
            className="add-comment-box"
            name="body"
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
