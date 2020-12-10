
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import AuthView from './components/auth';
import Home from './components/home';
import PostForm from './components/postForm';


import { API, setAuthToken } from "./api";


const Routes = (props) => {

    // Check if have posts now
    const initialState = localStorage.getItem("auth-token");
    const [isLogged, setIsLogged] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    
    return (

    <BrowserRouter>
        <Switch>
            <Route path="/entrar">
                <AuthView
                loading={loading}
                error={error}
                handleLogin={(user) => {
                if (user && user.password) {
                    setLoading(true);
                    API.post("/users/login", user)
                    .then((response) => {
                        setAuthToken(response.data.token);
                        setIsLogged(response.data);
                        setLoading(false);
                    })
                    .catch((apiError) => {
                        setLoading(false);
                        setError(apiError.response.data.error);
                    });
                }
                }}
            />
            </Route>
            <Route path='/'  exact>
                <Home/>
            </Route>
            <Route path='/criar'>
                <PostForm/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;