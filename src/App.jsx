import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
