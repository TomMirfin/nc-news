import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Nav from "./components/Nav";
import Comments from "./components/Comments/Comments";
import { UserProvider } from "./components/Context/usersContext";
import { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Topics from "./components/Topics/Topics";

function App() {
  const [login, setLogin] = useState(false);
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setNewUser(storedUser);
  }, [login]);
  return (
    <>
      {!newUser ? (
        <UserProvider>
          <Login setLogin={setLogin} />
        </UserProvider>
      ) : (
        <UserProvider>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/articles/:id" element={<SingleArticle />} />
              <Route path="/articles/:id/comments" element={<Comments />} />
              <Route path="/api/:topic" element={<Topics />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div>
        </UserProvider>
      )}
    </>
  );
}

export default App;
