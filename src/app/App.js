import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/session/login";
import NotFound from "../pages/session/notFound";
import Flexbox from "../pages/layouts/flexbox";
import GridLayout from "../pages/layouts/grid";
import Dashboard from "../pages/dashboard";
import Customer from "../pages/customer";
import Items from "../pages/items";
import Posts from "../pages/posts";

function App() {
  return (

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='flex-box' element={<Flexbox/>}/>
        <Route path='grid' element={<GridLayout/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='item' element={<Items/>}/>
        <Route path='posts' element={<Posts/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
