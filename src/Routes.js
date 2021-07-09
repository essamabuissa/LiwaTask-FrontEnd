import { Route, Switch } from "react-router";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
