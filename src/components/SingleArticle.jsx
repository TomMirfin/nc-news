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
  const [prevCounts, setPrevCounts] = useState(0);

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
    GetSingleArticle(id).then((res) => {
      setArticle(res.data);
      setPrevCounts(res.data[0].votes);
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
        <p>Votes {prevCounts}</p>
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
