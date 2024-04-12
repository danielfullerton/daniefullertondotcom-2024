import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ArticlesMetadata } from "./articles-metadata";
import { Article } from "./components/Article/Article";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";
import { getArticleDate } from "./util/date";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />}>
          {ArticlesMetadata.map(
            ({ fileName, title, day, month, year, path }) => (
              <Route
                path={path}
                element={
                  <Article
                    fileName={fileName}
                    title={title}
                    date={getArticleDate(month, day, year)}
                  />
                }
              />
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
