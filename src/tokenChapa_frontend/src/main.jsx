import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {AuthClient } from "@dfinity/auth-client"

const init = async () => {
  const authClient = await AuthClient.create();

  if(authClient.isAuthenticated()){
    handleAuthenticated(authClient)
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#autorize",
      onSuccess: () => {
        handleAuthenticated(authClient)    
      }
    });
  };

  
};

const handleAuthenticated = async(authClient) => {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal)

  ReactDOM.createRoot(document.getElementById('root')).render(
        
    <React.StrictMode>
      <App loggedInPrincipal={userPrincipal} />
    </React.StrictMode>,
  );
}
init()
