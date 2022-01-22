// import AppRouter from "./AppRouter";
import AppSideBar from "./AppSideBar";
import { Outlet, useNavigate } from "react-router";
import socket from "../socketConnection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentRoom, updateMessageHistory } from "../store/Room/action";
import { APIGetAllRooms } from "../API/room";

const AppMessageLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("chat", (message) => {
      dispatch(updateMessageHistory(message.message));
    });
    (async () => {
      const [rooms, error] = await APIGetAllRooms();
      const roomId = rooms[0]._id;
      dispatch(updateCurrentRoom(rooms[0]));
      navigate(`/message/${roomId}`);
    })();
  }, []);
  return (
    <div className="flex app-container-height">
      <AppSideBar />
      <div className="main-content w-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppMessageLayout;
