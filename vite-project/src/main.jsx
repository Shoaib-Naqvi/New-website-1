import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
// import LifecycleClassComponent from './Component/StateComponent.jsx'
// import App,{SetApp} from './App.jsx'
// import App from './App.jsx' 
//import Counter from './Counter.jsx'
//import TodoList from './Component/To-Do Lists'
//import LikeButton from './Like-Button'
//import Form,{UserForm} from './Form'
//import CounterApp from './Component/CounterApp'
//import CounterDisplay from './Component/CounterDisplay'
//import CounterButton from './Component/CounterButton'
//import ResetButton from './Component/ResetCounter'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  

import { store } from "./Component/store/store";

import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>    
    <App/> 
  </Provider>
);

