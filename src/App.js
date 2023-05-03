import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import React, { useEffect }  from "react";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
      <Route exact path='/login' element={
          <React.Fragment>
           <Header />
            <Login />
          
          </React.Fragment>
        }/>
        
        <Route exact path='/' element={
          <React.Fragment>
            <Header />
            <Home />
            
          </React.Fragment>
        }/>
        <Route exact path='/checkout'  element={
          <React.Fragment>
            <Header />
            <Checkout />
          </React.Fragment>
        } />
      </Routes>
    </Router>
  );
}

export default App;
