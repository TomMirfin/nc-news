import { getAllUsers } from "../../apis/apis";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/usersContext";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

function Login({ setLogin }) {
  const { setUser } = useContext(UserContext);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(selectedUser);
    console.log(selectedUser);

    setLogin(true);
    localStorage.setItem("user", JSON.stringify(selectedUser));
  };
  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    setUser(event.target.value);
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
            value={selectedUser}
          >
            {userList.length > 0 ? (
              userList.map((person) => {
                return <option key={uuid()}>{person.username}</option>;
              })
            ) : (
              <option> No users To Display</option>
            )}
          </select>
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
}

export default Login;
