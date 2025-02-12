import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routess } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/DashboardNavbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingHomePage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Application";
import Profile from "./pages/profile/Profile.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import AccountSetting from "./pages/profile/AccountSetting.jsx";
import ChangePassword from "./pages/profile/ChangePassword.jsx";
import BuyPackage from "./pages/buy packages/BuyPackages.jsx";
import PackageHistory from "./pages/buy packages/PackageHistory.jsx";
import TreeView from "./pages/team/TreeView.jsx";
import { useEffect, useState } from "react";
import { setUser } from "./features/user/userSlice";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const doremone = JSON.parse(localStorage.getItem("userData"));
    if (doremone) {
      setUserData(doremone);
      dispatch(setUser(doremone));
    }
  }, [isAuthenticated, dispatch]);

  console.log(isAuthenticated)
  const renderRoutes = () => {
    if (isAuthenticated) {
      return (
        <>
          <Navbar />
          <div className="dashboard-content">
            <div className="main-content">
              <Routes>
                <Route
                  path={Routess.Dashboard.path}
                  element={<Dashboard userData={userData} />}
                />
                <Route path={Routess.Home.path} element={<Home />} />
                <Route path={Routess.Profile.path} element={<Profile />} />
                <Route path={Routess.AccountSetting.path} element={<AccountSetting />} />
                <Route path={Routess.ChangePassword.path} element={<ChangePassword />} />
                <Route path={Routess.BuyPackage.path} element={<BuyPackage />} />
                <Route path={Routess.PackageHistory.path} element={<PackageHistory />} />
                <Route path={Routess.TreeView.path} element={<TreeView />} />
               
              </Routes>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <Routes>
          <Route
            path={Routess.LandingHomePage.path}
            element={<LandingHomePage />}
          />
          <Route path={Routess.Login.path} element={<Login />} />
          <Route path={Routess.Register.path} element={<Register />} />
          <Route path={Routess.ForgotPassword.path} element={<ForgotPassword />} />
        </Routes>
      );
    }
  };

  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {renderRoutes()}
    </Router>
  );
};


export default App;
