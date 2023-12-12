import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1>NC NEWS</h1>
      </Link>
      <h4>Welcome </h4>
      <ul className="nav-icons">
        <li>
          <AccountCircleIcon />
        </li>
        <li>Users</li>
      </ul>
    </nav>
  );
}

export default Nav;
