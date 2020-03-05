import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
// import './App.css';

// import Routes
import * as ROUTE from "./components/route";
import Navbar from "./components/nav"
import Header from "./components/header"


// import Pages
import HOME from "./pages/home"
import ADD_ADMIN from "./pages/addAdmin"
import UPDATE_ADMIN from "./pages/updateAdmin"

import ADD_STUDENT from "./pages/addStudent"
import UPDATE_STUDENT from "./pages/updateStudent"


export default function App(){
  return (

   <Router>
     <Header />
     <Navbar />

     <Switch>
        <Route path={ROUTE.HOME} exact component={HOME} />
        <Route path={ROUTE.ADD_STUDENT} exact component={ADD_STUDENT} />
        <Route path={ROUTE.UPDATE_STUDENT} exact component={UPDATE_STUDENT} />
        
        {/* ADMIN ROUTES */}
        <Route path="ROUTE.ADD_ADMIN" exact component={ADD_ADMIN} />
        <Route path="ROUTE.UPDATE_ADMIN" exact component={UPDATE_ADMIN} />
     </Switch>
   </Router>
  )
}
