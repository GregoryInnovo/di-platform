import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import NotFound from "../containers/NotFound/NotFound";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
