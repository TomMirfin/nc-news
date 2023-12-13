import { useEffect, useState } from "react";
import { GetAllArticles } from "../apis/apis";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import Button from "@mui/material/Button";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [viewSingleArticle, setViewSingleArticle] = useState(false);
  const [id, setId] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [sortByChoice, setSortByChoice] = useState("");

  useEffect(() => {
    GetAllArticles().then((response) => {
      setArticles(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setSortByChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event.target.value);
    setSortBy(sortByChoice);
    GetAllArticles(sortBy).then((response) => {
      console.log(response);
      setArticles(response.data);
    });
  };

  return (
    <section className="article-grid">
      <div className="sort-by-form">
        <h1>Sort By</h1>

        <form action="submit" onSubmit={handleSubmit}>
          <select
            name="select"
            id=""
            onChange={handleChange}
            className="select-sort_by"
          >
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>

          <Button
            variant="contained"
            type="submit"
            style={{ alignContent: "center" }}
          >
            Go To articles
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
                article={article}
                key={article.id}
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
