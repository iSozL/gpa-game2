import React, {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import Miracle from 'incu-webview';
import './index.scss';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './index/index'
import Papers from './papers/index'
import Characters from './characters/index'
import Letter from './letter/index'
// window.React = React
const Routers = () => {
  useEffect(()=>{
    Miracle.onAppReady(() => {
      let token = JSON.stringify(Miracle.getData()) !== '{}' ? Miracle.getData().user.token : ""
      localStorage.setItem("token", token)
    })
  })
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact></Route>
        <Route path="/papers" component={Papers} ></Route>
        <Route path="/characters" component={Characters}></Route>
        <Route path="/letter" component={Letter}></Route>
      </Switch>
    </Router>
  )
} 
ReactDOM.render(<Routers />, document.getElementById('root'));
