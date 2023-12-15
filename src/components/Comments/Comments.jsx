import { useEffect, useState, useContext } from "react";
import { deleteAComment, getAllComments } from "../../apis/apis";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CommentAdder from "./CommentAdder";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../Context/usersContext";
import { v4 as uuid } from "uuid";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const { user } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState(true);

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

      if (res.status !== 204) {
        alert("Comment failed to delete");
      }
    });
    setDeletedComment(false);
    setTimeout(() => {
      setDeletedComment(true);
    }, 1000);
  };
  console.log(deletedComment);
  return (
    <Fade>
      <div>
        <CommentAdder setComments={setComments} />

        {!loadingComments ? (
          comments.reverse().map((comment) => {
            return (
              <div className="single-comment" key={uuid()}>
                <div>
                  {new Date(comment.created_at).toLocaleDateString("en-gb")}
                </div>
                {new Date(comment.created_at).toLocaleTimeString("en-gb")}
                {comment.author === user ? (
                  <div key={uuid()}>
                    <h5 className="single-comment" key={uuid()}>
                      {comment.author}{" "}
                    </h5>

                    <p
                      key={uuid()}
                      className="delete-comment"
                      onClick={() => {
                        handleDelete(comment.comment_id);
                      }}
                    >
                      delete comment <DeleteIcon />
                    </p>
                  </div>
                ) : (
                  <h5 key={uuid()}>{comment.author} </h5>
                )}
                <p key={uuid()}>{comment.body}</p>
              </div>
            );
          })
        ) : (
          <p key={uuid()}>
            Comments Are Loading <HourglassTopIcon />
          </p>
        )}
        {!loadingComments && comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <p key={uuid()} className="single-comment">
                {comment.body}
              </p>
            );
          })
        ) : (
          <p key={uuid()}>No Comments To Show</p>
        )}
      </div>
    </Fade>
  );
}

export default Comments;
