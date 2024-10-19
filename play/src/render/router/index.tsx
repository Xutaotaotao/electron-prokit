import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Root from "../layout";
import ErrorPage from "../pages/error-page";
import Ipc from "../pages/ipc";
import Home from "../pages/home";
import Http from "../pages/http";
import Ffi from "../pages/ffi";
import Schedule from "../pages/schedule";
import Db from "../pages/db";
import Update from "../pages/update";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="ipc" element={<Ipc />} />
        <Route path="http" element={<Http />} />
        <Route path="ffi" element={<Ffi />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="db" element={<Db />} />
        <Route path="update" element={<Update />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
