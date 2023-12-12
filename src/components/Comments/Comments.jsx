import { useEffect, useState } from "react";
import { getAllComments } from "../../apis/apis";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    getAllComments(id).then((res) => {
      setComments(res.data);
      setLoadingComments(false);
    });
  }, []);

  return (
    <Fade>
      <div>
        {!loadingComments ? (
          comments.comments.map((comment) => {
            return <p className="single-comment">{comment.body}</p>;
          })
        ) : (
          <p>Comments are Loading</p>
        )}
      </div>
    </Fade>
  );
}

export default Comments;
