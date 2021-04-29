import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/components/Header";
import ProductListing from "./containers/components/ProductListing";
import ProductDetail from "./containers/components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!!!!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
