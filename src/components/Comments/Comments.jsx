import { useEffect, useState } from "react";
import { GetAllComments } from "../../apis/apis";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useState;
  useEffect(() => {
    GetAllComments(id).then((res) => {
      console.log(res);
      setComments(res.data);
    });
  }, []);
  console.log(comments.comments);
  return (
    <Fade>
      <div>
        {comments.comments.length > 0 ? (
          comments.comments.map((comment) => {
            return <p className="single-comment">{comment.body}</p>;
          })
        ) : (
          <p>No comments to show </p>
        )}
      </div>
    </Fade>
  );
}

export default Comments;
