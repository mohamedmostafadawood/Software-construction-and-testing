


import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {   BrowserRouter,Route } from "react-router-dom";
import authContext from "./context/authContext";
import { useReducer } from "react";
import { initialState, reducer  } from "./context/authReducer";
import Home from "./Home";
import Page3 from "./Page3";
import require_auth from "./require_auth";


  export default function App() {
    return (

      <authContext.Provider value={useReducer(reducer,initialState)}>
           <BrowserRouter>
            <Navbar/>
             <div>
      
           
              
                       <Route exact path="/home" element={<Home/>}/>
                      <Route exact path="/page1" element={<Page1 />}/>
                      <Route exact path="/page2" element={require_auth(<Page2/>)} />
                      <Route exact path="/error" element={<Page3/>} />

                 
                  
                 
              
                

            </div>
            </BrowserRouter>
        </authContext.Provider>

    );
    }
 

  


