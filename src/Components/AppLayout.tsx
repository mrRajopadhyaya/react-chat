// import AppRouter from "./AppRouter";
import { Outlet } from "react-router";
import AppNavBar from "./AppNavBar";
import socket from "../socketConnection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMessageHistory } from "../store/Room/action";

const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("chat", (message) => {
      dispatch(updateMessageHistory(message.message));
    });
  }, []);
  return (
    <div className="app-container h-screen">
      <AppNavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
