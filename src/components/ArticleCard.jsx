import Button from "@mui/material/Button";
export default function ArticleCard({ article }) {
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
        <Button variant="contained" style={{ marginBottom: "20px" }}>
          View Article
        </Button>
      </div>
    </div>
  );
}
