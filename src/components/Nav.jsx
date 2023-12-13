import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
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
          <li className="nav-links">
            Articles <ArticleIcon />
          </li>
        </Link>
        <Link to="/search/:topic">
          <li className="nav-links">
            Search <SearchIcon />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
