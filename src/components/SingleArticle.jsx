import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GetSingleArticle } from "../apis/apis";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments/Comments";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { voteOnArticles } from "../apis/apis";

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
    voteOnArticles(id).then((res) => {});
  }, [count]);

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
        <img src={article[0].article_img_url} alt="" />
        <p>
          {article[0].author} {article[0].topic}
        </p>
        <p>{article[0].body}</p>
        <p>Votes {count}</p>
        <div>
          <ThumbUpIcon
            onClick={() => {
              handleOnClick();
            }}
          />
          <ThumbDownIcon
            onClick={() => {
              handleDecrement();
            }}
          />
        </div>
        <h2 className="comments-title">Comments</h2>
        <Comments />
        <Link to="/">
          <Button variant="contained">back</Button>
        </Link>
      </div>
    </div>
  );
}

export default SingleArticle;
