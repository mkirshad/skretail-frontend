import React, { } from 'react';
import { Route } from 'react-router-dom';
import LoginForm  from './components/LoginForm';
//import DashboardHome from "./components/dashbcomponents/DashboardHome";
//import Reading from "./components/RemotingComponents/pages/Reading";

const LoginRouter = () => (
   <div>
       <Route exact path='/'  component={ LoginForm } />
       <Route exact path='/pos'  component={LoginForm  } />
   </div>
);

export default LoginRouter;