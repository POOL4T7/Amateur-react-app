import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Models from "./pages/models.js/models";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/models" exact component={Models} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
