import { useEffect, useState, useContext } from "react";
import { deleteAComment, getAllComments } from "../../apis/apis";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CommentAdder from "./CommentAdder";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../Context/usersContext";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getAllComments(id).then((res) => {
      setLoadingComments(false);
      setComments(res.data.comments);
    });
  }, []);

  const handleDelete = (comment_id) => {
    deleteAComment(comment_id).then((res) => {
      const newComments = comments.filter(
        (com) => com.comment_id !== comment_id
      );
      setComments(newComments);

      if (res.status === 204) {
        alert("Comment Deleted");
      } else {
        alert("Comment failed to delete");
      }
    });
  };

  return (
    <Fade>
      <div>
        <CommentAdder setComments={setComments} />

        {!loadingComments ? (
          comments.map((comment) => {
            return (
              <div className="single-comment">
                {new Date(comment.created_at).toLocaleDateString("en-gb")}
                {new Date(comment.created_at).toLocaleTimeString("en-gb")}
                {comment.author === user ? (
                  <div>
                    <h5 className="single-comment">{comment.author} </h5>
                    <p
                      className="delete-comment"
                      onClick={() => {
                        handleDelete(comment.comment_id);
                      }}
                    >
                      delete comment <DeleteIcon />
                    </p>
                  </div>
                ) : (
                  <h5>{comment.author} </h5>
                )}
                <p>{comment.body}</p>
              </div>
            );
          })
        ) : (
          <p>
            Comments Are Loading <HourglassTopIcon />
          </p>
        )}
        {!loadingComments && comments.length > 0 ? (
          comments.map((comment) => {
            return <p className="single-comment">{comment.body}</p>;
          })
        ) : (
          <p>No Comments To Show</p>
        )}
      </div>
    </Fade>
  );
}

export default Comments;
