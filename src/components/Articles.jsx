import { useEffect, useState } from "react";
import { GetAllArticles } from "../apis/apis";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";

function Articles() {
  const [articles, setArticles] = useState([]);

  const [id, setId] = useState(0);

  useEffect(() => {
    GetAllArticles().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <section className="article-grid">
      <div className="single-aticle-container">
        <SingleArticle id={id} />
      </div>

      <div className="article-list">
        {articles.map((article) => {
          return (
            <ArticleCard article={article} key={article.id} setId={setId} />
          );
        })}
      </div>
    </section>
  );
}

export default Articles;
