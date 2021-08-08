import "./App.css";
import FirstStep from "./Pages/FirstStep";
import Header from "./Components/Header";
import SecondStep from "./Pages/SecondStep";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecondNext from "./Pages/SecondNext";
import ThirdStep from "./Pages/ThirdStep";
import ForthStep from "./Pages/ForthStep";

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
