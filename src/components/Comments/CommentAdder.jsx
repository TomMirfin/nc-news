import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { postOnArticle } from "../../apis/apis";
import { UserContext } from "../Context/usersContext";

function CommentAdder({ setComments }) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [makeAComment, setMakeAComment] = useState("");
  const [addNewComment, setAddNewComment] = useState({
    username: user,
    body: makeAComment,
  });

  const handleChange = (event) => {
    setMakeAComment(event.target.value);
    setAddNewComment((curr) => {
      return {
        ...curr,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postOnArticle(id, addNewComment).then((res) => {
      if (res) {
        setComments((currItems) => [
          {
            article_id: res.data.article_id,
            author: res.data.author,
            body: res.data.body,
            comment_id: res.data.comment_id,
            created_at: res.data.created_at,
            votes: res.data.votes,
          },
          ...currItems,
        ]);
      } else {
        console.log("No data");
      }
    });
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="add-a-comment-form"
      >
        <p>Post a comment as {user}</p>
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
