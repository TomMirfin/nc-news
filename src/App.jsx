import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Nav from "./components/Nav";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
        <Route path="/articles/:id/comments" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
