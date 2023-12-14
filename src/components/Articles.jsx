import { useEffect, useState } from "react";
import { GetAllArticles } from "../apis/apis";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [viewSingleArticle, setViewSingleArticle] = useState(false);
  const [id, setId] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [sortByChoice, setSortByChoice] = useState("DESC");

  useEffect(() => {
    GetAllArticles(sortBy).then((response) => {
      setArticles(response.data);
    });
  }, [sortBy]);

  const handleChange = (event) => {
    setSortByChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event.target.value);
    setSortBy(sortByChoice);
  };

  return (
    <section className="article-grid">
      <div className="sort-by-form">
        <h1>Sort By Date Posted</h1>

        <form action="submit" onSubmit={handleSubmit}>
          <select
            name="select"
            id=""
            onChange={handleChange}
            className="topic-input"
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>

          <Button
            variant="contained"
            type="submit"
            style={{ alignContent: "center", marginLeft: "20px" }}
          >
            Sort Articles
          </Button>
        </form>
      </div>
      {viewSingleArticle ? (
        <div>
          <SingleArticle id={id} />
        </div>
      ) : (
        <div className="article-list">
          {articles.map((article) => {
            return (
              <ArticleCard
                created_at={article.created_at}
                article={article}
                key={uuid()}
                setViewSingleArticle={setViewSingleArticle}
                setId={setId}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Articles;
