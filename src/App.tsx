import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Article } from "./components/Article/Article";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />}>
          <Route
            path="test-article"
            element={
              <Article fileName="test-article.md" title="Test Article" />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
