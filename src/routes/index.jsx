import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import GlobalStyle from '../style/GlobalStyle'
import Home from '../pages'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Reservation from '../pages/Reservation'
import DataProvider from '../context/DataProvider'
const Routes = () => {
    return (
      <DataProvider>
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/car/:id' component={Reservation}/> 
      </Switch>
    </Router>
    </DataProvider>
   
    )
}

export default Routes
