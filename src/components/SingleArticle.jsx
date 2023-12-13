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

  const [newVote, setNewVote] = useState({ incVotes: 1 });
  const [newDecVote, setNewDecVote] = useState({ incVotes: -1 });

  const handleOnClick = () => {
    setNewVote({ incVotes: 1 });
    voteOnArticles(id, newVote)
      .then((res) => {
        setPrevCounts(res);
      })
      .catch((err) => {
        console.log(err, "<-- err");
      });
  };

  const handleDecrement = () => {
    setNewDecVote({ incVotes: -1 });
    voteOnArticles(id, newDecVote)
      .then((res) => {
        setPrevCounts(res);
      })
      .catch((err) => {
        console.log(err, "<-- err");
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
        <img src={article[0].article_img_url} alt="" />
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
