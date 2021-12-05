import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import SingleProduct from './Pages/Home/SingleProduct/SignleProduct';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import RotateLoader from "react-spinners/RotateLoader";
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        loading ?

          < div className="preloader">
            <RotateLoader
              color={"#E58F00"}
              loading={loading}
              size={15} />
          </div>
          :
          <div className="App">
            <AuthProvider>
              <Router>
                <Switch>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard></Dashboard>
                  </Route>
                  <PrivateRoute path="/productDetail/:id">
                    <SingleProduct></SingleProduct>
                  </PrivateRoute>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Route path="/register">
                    <Register></Register>
                  </Route>
                  <Route path="/allProducts">
                    <AllProducts></AllProducts>
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </Router>
            </AuthProvider>
          </div>
      }
    </div >
  );
}

export default App;
