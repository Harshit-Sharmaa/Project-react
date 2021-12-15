import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/Login"
import Kyc from "./pages/Kyc"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/kyc" component={Kyc} />
        <Route path="/" component={() => <Redirect to="/login" />} />
      </Switch>

    </BrowserRouter>
  )
}
export default App;
