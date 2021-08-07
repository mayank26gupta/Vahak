import "./App.css";
import FirstStep from "./FirstStep";
import Header from "./Header";
import SecondStep from "./SecondStep";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecondNext from "./SecondNext";
import ThirdStep from "./ThirdStep";
import ForthStep from "./ForthStep";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/forth">
            <Header />
            <ForthStep step={4} />
          </Route>

          <Route path="/third">
            <Header />
            <ThirdStep step={3} />
          </Route>

          <Route path="/second2">
            <Header />
            <SecondNext step={2} />
          </Route>

          <Route path="/second">
            <Header />
            <SecondStep step={2} />
          </Route>

          <Route path="/">
            <Header />
            <FirstStep step={1} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
