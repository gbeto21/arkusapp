import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactList from "./pages/ContactList";
import ContactDetail from "./pages/ConctactDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/details" component={ContactDetail} />
          <Route path="/" exact component={ContactList} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
