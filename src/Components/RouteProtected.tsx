import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Config/firebase";
import axios from "../Config/axios";
import { getProfile } from "../store/User/action";

export const ProtectedRoute: any = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const idToken = await user?.getIdToken();
      axios.defaults.headers.common.Authorization = idToken ?? "";
      idToken?.length ? setIsAuthenticated(true) : setIsAuthenticated(false);
      await getProfile();
    });
  }, []);

  if (isAuthenticated === null) return <div>loading</div>;

  if (isAuthenticated) return <Component />;

  if (!isAuthenticated) return <Navigate to="/login" />;
};

export default ProtectedRoute;
