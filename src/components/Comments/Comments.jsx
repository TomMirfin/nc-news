import { useEffect, useState } from "react";
import { getAllComments } from "../../apis/apis";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CommentAdder from "./CommentAdder";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  //   const addComment = (comment) => {
  //     setComments((currItems) => {
  //       return [...currItems.comments, { ...comment, id: Date.now() }];
  //     });
  //   };

  useEffect(() => {
    getAllComments(id).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <Fade>
      <div>
        <CommentAdder
          setComments={setComments}
          setLoadingComments={setLoadingComments}
        />
        {!loadingComments ? (
          comments.comments.map((comment) => {
            return (
              <div className="single-comment">
                <h5>{comment.author} </h5>
                <p>{comment.body}</p>
              </div>
            );
          })
        ) : (
          <p>
            Comments Are Loading <HourglassTopIcon />
          </p>
        )}
        {!loadingComments && comments.comments.length > 0 ? (
          comments.comments.map((comment) => {
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
