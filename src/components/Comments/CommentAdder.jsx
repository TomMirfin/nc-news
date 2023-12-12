import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { postOnArticle } from "../../apis/apis";

function CommentAdder({ addComment, setComments }) {
  const { id } = useParams();

  const [addNewComment, setAddNewComment] = useState({
    username: "happyamy2016",
    body: "Test",
  });

  // const [receivedData, setReceivedData] = useState({
  //   userName:
  // })

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
  };

  useEffect(() => {
    postOnArticle(id, addNewComment).then((res) => {
      setReceivedData(res.comments);
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
