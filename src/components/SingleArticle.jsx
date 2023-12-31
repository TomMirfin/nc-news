import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GetSingleArticle } from "../apis/apis";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments/Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import { voteOnArticles } from "../apis/apis";
import Error from "./Error/Error";

function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setisLoading] = useState(true);
  const [prevCounts, setPrevCounts] = useState(0);
  const [apiError, setApiError] = useState(null);

  const handleOnClick = () => {
    setPrevCounts((prevnum) => prevnum + 1);
    voteOnArticles(id, { incVotes: 1 }).catch((err) => {
      setPrevCounts((prevnum) => prevnum - 1);
      console.log(err, "<-- err");
    });
  };

  const handleDecrement = () => {
    setPrevCounts((prevnum) => prevnum + -1);
    voteOnArticles(id, { incVotes: -1 }).catch((err) => {
      setPrevCounts((prevnum) => prevnum + 1);
      console.log(err, "<--err");
    });
  };

  useEffect(() => {
    GetSingleArticle(id)
      .then((res) => {
        setArticle(res.data);
        setPrevCounts(res.data[0].votes);
        setisLoading(false);
      })
      .catch((err) => {
        setisLoading(false);
        setApiError(err);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading your article</p>;
  } else if (apiError) {
    return <Error message="Article Not Found" />;
  }

  return (
    <div className="single-article-container">
      <div className="single-article">
        <h1>{article[0].title}</h1>
        <img
          src={article[0].article_img_url}
          alt={article[0].title}
          className="single-article-img"
        />

        <p className="article-topic">
          <h4> Author: </h4> {article[0].author} <h4>Topic: </h4>
          {article[0].topic}
        </p>
        <p>{article[0].body}</p>

        <p className="votes-text">Votes {prevCounts}</p>
        <div>
          <ThumbUpIcon
            style={{ fontSize: "xx-large", marginRight: "10px" }}
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
          <Button variant="contained" style={{ marginTop: "50px" }}>
            back to all articles
          </Button>
        </Link>
        <h2 className="comments-title">Comments</h2>
        <Comments />
      </div>
    </div>
  );
}

export default SingleArticle;
