import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignupContainer from './components/auth/signup/SignupContainer';
import LoginContainer from './components/auth/login/LoginContainer';
import PprofileContainer from './components/users/profilePublic/PprofileContainer';
import VprofileContainer from './components/users/profileprivate/VprofileContainer';
import AnunciosContainer from './components/anuncios/AnunciosContainer';
import Inicio from './components/index/Inicio';



const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer}/>
            <Route path="/profile" component={VprofileContainer}/>
            <Route path="/users/:id" component={PprofileContainer} />
            <Route path="/anuncios" component={AnunciosContainer} />
        </Switch>
    )
}

export default Routes