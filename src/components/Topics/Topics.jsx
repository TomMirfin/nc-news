import { useEffect, useState } from "react";
import { getAllTopics, GetAllArticles } from "../../apis/apis";
import ArticleCard from "../ArticleCard";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Topics() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [topicLoad, setTopicLoad] = useState(true);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics.data);
      setTopicLoad(false);
    });
  }, []);

  useEffect(() => {
    GetAllArticles().then((articles) => {
      setArticles(articles.data);
      setIsLoading(false);
    });
  }, []);
  const handleButtonClick = () => {};

  const handleSubmit = () => {};

  console.log(topics);
  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="topics">
          <select name="topics" id="">
            <label htmlFor=""></label>
            {!topicLoad &&
              topics.map((topic) => {
                return <option value="">{topic.slug}</option>;
              })}
          </select>
        </label>
      </form>
      <div className="article-list">
        {!loading &&
          articles.map((article) => {
            return <ArticleCard article={article} key={article.id} />;
          })}
      </div>
      <Link to={`/search/${topics}`}>
        <Button variant="contained" onClick={handleButtonClick}>
          Post A Comment
        </Button>
      </Link>
    </div>
  );
}

export default Topics;
