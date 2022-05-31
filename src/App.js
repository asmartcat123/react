import React, {useState,useEffect} from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Load from "./index/Load";
import './App.css';
import User from "./index/User";
import Test from "./index/Test";
import Login from "./index/Login";
function App() {

useEffect(()=>{

})
    window.addEventListener("resize", Scale);
function Scale(){

}
  return (
      <BrowserRouter>
          <div >
            <Routes>
                <Route path={"/"} element={<Login/>} ></Route>
                <Route path={"/Load"} element={<Load/>}>
                    <Route path={"User"} element={<User/>}></Route>
                </Route>
                <Route path={"/Test"} element={<Test/>}></Route>

            </Routes>
    </div>
      </BrowserRouter>
  );


}

export default App;
