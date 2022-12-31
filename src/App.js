import logo from "./logo.svg";
import "./App.css";
//import Keycloak from "keycloak-js";
import { useEffect } from "react";
/*
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak();
const keycloakInit = async () => {
  try {
    const authenticated = await keycloak.init({ onLoad: "check-sso" });
    console.log(authenticated ? "authenticated" : "not authenticated");
  } catch (err) {
    console.log("error keycloak init", err);
  }
};
keycloakInit();
*/

import { AuthProvider, useAuth } from "react-oidc-context";
const oidcConfig = {
  authority: "http://localhost:8085/realms/test-realm",
  client_id: "frontend",
  redirect_uri: "http://localhost:3002",
};

function MainComp() {
  const auth = useAuth();
  console.log("auth", auth);
  console.log("auth", auth);
  return (
    <div>
      <button onClick={() => auth.signinPopup()}>
        <p>SignIn</p>
      </button>
      <button onClick={() => auth.removeUser()}>
        <p>SignOut</p>
      </button>
      {auth.isAuthenticated ? (
        <textarea>{auth.user.access_token}</textarea>
      ) : (
        <></>
      )}
    </div>
  );
}
function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <MainComp />
    </AuthProvider>
  );
}
export default App;
