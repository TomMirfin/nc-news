import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GetSingleArticle } from "../apis/apis";
import { Link } from "react-router-dom";

function SingleArticle({ id, setViewSingleArticle }) {
  const [article, setArticle] = useState([]);
  const [loading, setisLoading] = useState(true);

  useEffect(() => {
    GetSingleArticle(id).then((res) => {
      console.log(res.data);
      setArticle(res.data);
      setisLoading(false);
    });
  }, []);

  console.log(article);
  if (loading) {
    return <p>Loading your article</p>;
  }

  return (
    <div className="single-article">
      <h1>{article[0].title}</h1>
      <img src={article[0].article_img_url} alt="" />
      <p>
        {article[0].author} {article[0].topic}
      </p>
      <p>{article[0].body}</p>
      <p>Votes {article[0].votes}</p>
      <Link to="/">
        <Button variant="contained">back</Button>
      </Link>
    </div>
  );
}

export default SingleArticle;
