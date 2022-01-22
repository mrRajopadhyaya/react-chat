import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Config/firebase";

export const AuthRoute: any = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const idToken = await user?.getIdToken();
      idToken?.length ? setIsAuthenticated(true) : setIsAuthenticated(false);
      // await getProfile();
    });
  }, []);

  if (isAuthenticated === null) return "loading";
  if (!isAuthenticated) return <Component />;
  if (isAuthenticated) return <Navigate to="/" />;
};
export default AuthRoute;
