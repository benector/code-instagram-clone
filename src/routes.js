import React, { useState , useContext} from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthView from "./components/auth";
import Home from "./components/home";
import PostForm from "./components/postForm";

import { API, setAuthToken } from "./api";

const AppContext = React.createContext({});


const Routes = () => {
    const initialState =  localStorage.getItem("auth-token");
    const [isLogged, setIsLogged] = useState(initialState);
    const [tokenIsValid, setTokenIsValid] = useState(initialState);

    const store = {
      isLogged: {get : isLogged, set : setIsLogged},
      tokenIsValid : {get: tokenIsValid, set: setTokenIsValid}
    }


  return (
    <AppContext.Provider value = {store}>
      <AppAuthRoutes/>
    </AppContext.Provider>
    
    );

}

const PrivateRoutes = () => {
    return (
      <Switch>
        <Route path="/criar">
          <PostForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
};

const PublicRoutes = () => {
    const context = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    return (
      <Switch>
        <Route path="/">
          <AuthView
            loading={loading}
            error={error}
            handleLogin={(user) => {
              
              console.log(user);
              if (user && user.password) {
                setLoading(true);
                API.post("/users/login", user)
                  .then((response) => {
                    setAuthToken(response.data.token);
                    context.tokenIsValid.set(response.data.token);
                    context.isLogged.set(response.data.token)
                    setLoading(false);
                  })
                  .catch((apiError) => {
                    context.tokenIsValid.set(false);
                    context.isLogged.set(false);
                    setLoading(false);
                    setError(apiError.response.data.error);
                  });
              }
            }}
          />
        </Route>
      </Switch>
    );
};


const AppAuthRoutes = () => {
    // Check if have posts now
    const context = useContext(AppContext);

    console.log('islogged',context.isLogged);
    console.log('tokenIsValid',context.tokenIsValid);


    return (
      <BrowserRouter>
        {context.isLogged.get && context.tokenIsValid.get ? (
          <PrivateRoutes/>
        ) : (
          <PublicRoutes />
        )}
      </BrowserRouter>
    );
};


export default Routes;