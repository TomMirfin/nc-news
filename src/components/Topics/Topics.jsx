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
  const [selectTopic, setSelectTopic] = useState("coding");
  const [filteredArticles, setFilteredArticles] = useState([]);

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
      setFilteredArticles(articles.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const filterArticles = articles.filter(
      (article) => article.topic === selectTopic
    );
    console.log(filterArticles);
    setFilteredArticles(filterArticles);
    setSelectTopic("");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectTopic(event.target.value);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="topics">
          <h4>Select Your Topic</h4>
          <select name="topics" className="topic-input" onChange={handleChange}>
            {!topicLoad &&
              topics.map((topic) => {
                return (
                  <option value={topic.slug}>
                    <p>{topic.slug} </p>
                  </option>
                );
              })}
          </select>
        </label>

        <Button variant="contained" type="submit">
          Go To articles
        </Button>
      </form>
      <div className="article-list">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => {
            return <ArticleCard article={article} key={article.id} />;
          })
        ) : (
          <p>Select a different article</p>
        )}
      </div>
    </div>
  );
}

export default Topics;
