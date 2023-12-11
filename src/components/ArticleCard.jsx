export default function ArticleCard({ article }) {
  console.log(article);
  return (
    <div className="article-card">
      <div>
        <p> Title </p>
        <p>{article.title}</p>
      </div>
      <div>
        <p>Author: </p>
        <p> {article.author}</p>
      </div>
      <img src={article.article_img_url} alt="" />
      <div>
        <p>Topic</p>
        <p>{article.topic}</p>
      </div>
    </div>
  );
}
