import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/session/login";
import NotFound from "../pages/session/notFound";
import Flexbox from "../pages/layouts/flexbox";
import GridLayout, {Grid} from "../pages/layouts/grid";

function App() {
  return (

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='flex-box' element={<Flexbox/>}/>
        <Route path='grid' element={<GridLayout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
