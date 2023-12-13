import CategoryIcon from "@mui/icons-material/Category";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1>NC NEWS</h1>
      </Link>
      <h4>Welcome </h4>
      <ul className="nav-icons">
        <Link to="/">
          <li>
            Articles <ArticleIcon />
          </li>
        </Link>
        <Link to="/topics">
          <li>
            Topics <CategoryIcon />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
