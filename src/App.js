import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import reactGa from "react-ga"

function App() {
  useEffect(() => {
    reactGa.initialize('G-6KG93CM4C7');
    // to report page view
    reactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
