import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "./Context/usersContext";

function Nav() {
  const { user } = useContext(UserContext);
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="nav-title">TM NEWS</h1>
      </Link>
      <h4>Welcome {user} </h4>
      <ul className="nav-icons">
        <Link to="/">
          <li className="nav-links">
            Articles <ArticleIcon />
          </li>
        </Link>
        <Link to="/api/topics">
          <li className="nav-links">
            Search <SearchIcon />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
