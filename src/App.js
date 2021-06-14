
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Destination from "./Components/Destination/Destination";
import { createContext, useContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";


export const UserContext = createContext()

function App() {
  const [loggIN, setLoggIn] = useState({})
  return (
    <UserContext.Provider value={[loggIN, setLoggIn]}>
    <Router>
      <p>name {loggIN.name}</p>
      <p>Email {loggIN.email}</p>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact="*">
        <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
