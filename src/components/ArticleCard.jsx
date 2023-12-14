import Button from "@mui/material/Button";
import { GetSingleArticle } from "../apis/apis";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";
export default function ArticleCard({
  article,
  setViewSingleArticle,
  setId,
  created_at,
}) {

  const handleClick = () => {
    setViewSingleArticle(true);
    setId(article.article_id);
  };

  return (
    <Fade>
      <div className="article-card">
        <div>
          <p className="card-title"> Title </p>
          <p className="card-sub-title">{article.title}</p>
        </div>
        <div>
          <p className="card-title">Author: </p>
          <p className="card-sub-title"> {article.author}</p>
        </div>
        <img src={article.article_img_url} alt={article.title} />
        <div>
          <p className="card-title"> Topic</p>
          <p className="card-sub-title">{article.topic}</p>
          <Link to={`/articles/${article.article_id}`}>
            <Button
              variant="contained"
              style={{ marginBottom: "20px" }}
              onClick={() => {
                handleClick(article.article_id);
              }}
            >
              View Article
            </Button>
          </Link>
        </div>
        <p>{new Date(article.created_at).toLocaleDateString("en-gb")}</p>
        {new Date(article.created_at).toLocaleTimeString("en-gb")}
      </div>
    </Fade>
  );
}
