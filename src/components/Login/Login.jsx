import { getAllUsers } from "../../apis/apis";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/usersContext";
import Button from "@mui/material/Button";

function Login({ setLogin }) {
  const { setUser } = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.value);

    setLogin(true);
  };
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleClick = () => {
    setLogin(true);
  };

  useEffect(() => {
    getAllUsers().then((res) => {
      setUserList(res.data);
    });
  }, []);

  return (
    <div className="form-background">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="UserName">
          <h4> Select Your User </h4>
          <select
            name="userName"
            onChange={handleChange}
            className="select-container"
          >
            {userList.length > 0 ? (
              userList.map((person) => {
                return <option>{person.username}</option>;
              })
            ) : (
              <option> No users To Display</option>
            )}
          </select>
        </label>
        <Button onClick={handleClick}>Log In</Button>
      </form>
    </div>
  );
}

export default Login;
