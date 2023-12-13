import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Nav from "./components/Nav";
import Comments from "./components/Comments/Comments";
import { UserProvider } from "./components/Context/usersContext";
import { useState } from "react";
import Login from "./components/Login/Login";
useState;

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Nav />
      {!login ? (
        <UserProvider>
          <Login setLogin={setLogin} />
        </UserProvider>
      ) : (
        <UserProvider>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/articles/:id/comments" element={<Comments />} />
          </Routes>
        </UserProvider>
      )}
    </>
  );
}

export default App;
