import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import ProtectedRoute from "./Components/RouteProtected";
import Login from "./Routes/Login";
import Message from "./Routes/Message";
import AuthRoute from "./Components/RouteAuth";
import AppMessageLayout from "./Components/AppMessageLayout";
import Friends from "./Routes/Friends";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="" element={<ProtectedRoute component={AppLayout} />}>
          {/* <Route index={true} element={<ProtectedRoute component={Home} />} /> */}
          <Route path="/friends" element={<Friends />} />
          <Route
            path="/message"
            element={<ProtectedRoute component={AppMessageLayout} />}
          >
            <Route path=":conversationId" element={<Message />} />
          </Route>
        </Route>
        <Route path="/login" element={<AuthRoute component={Login} />} />
      </Routes>
    </div>
  );
}

export default App;
