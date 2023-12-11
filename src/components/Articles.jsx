import { useEffect, useState } from "react";
import { GetAllArticles } from "../apis/apis";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    GetAllArticles().then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  }, []);

  return (
    <section className="article-grid">
      <div className="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </div>
    </section>
  );
}

export default Articles;
