import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GetSingleArticle } from "../apis/apis";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments/Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setisLoading] = useState(true);

  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  useEffect(() => {
    GetSingleArticle(id).then((res) => {
      setArticle(res.data);
      setisLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="loading">Loading your article</p>;
  }

  return (
    <div className="single-article-container">
      <div className="single-article">
        <h1>{article[0].title}</h1>
        <img src={article[0].article_img_url} alt={article[0].title} />
        <p>
          {article[0].author} {article[0].topic}
        </p>
        <p>{article[0].body}</p>
        <p>Votes {count}</p>
        <div className="vote-buttons">
          <ThumbUpIcon
            style={{ fontSize: "xx-large", marginRight: "20px" }}
            onClick={() => {
              handleOnClick();
            }}
          />
          <ThumbDownIcon
            style={{ fontSize: "xx-large" }}
            onClick={() => {
              handleDecrement();
            }}
          />
        </div>
        <Link to="/">
          <Button variant="contained">back to all articles</Button>
        </Link>
        <h2 className="comments-title">Comments</h2>
        <Comments />
      </div>
    </div>
  );
}

export default SingleArticle;
