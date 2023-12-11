import Button from "@mui/material/Button";
import { GetSingleArticle } from "../apis/apis";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ArticleCard({ article, setViewSingleArticle, setId }) {
  const handleClick = () => {
    setViewSingleArticle(true);
    setId(article.article_id);
  };

  return (
    <div className="article-card">
      <div>
        <p className="card-title"> Title </p>
        <p className="card-sub-title">{article.title}</p>
      </div>
      <div>
        <p className="card-title">Author: </p>
        <p className="card-sub-title"> {article.author}</p>
      </div>
      <img src={article.article_img_url} alt="" />
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
    </div>
  );
}