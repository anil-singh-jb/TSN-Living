import React, { useState, useEffect } from "react";
import dashimg from "../assets/images/dash1.png";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import {
  getApplicationForCenter,
  getApplicationForAdmin,
} from "../api/application";
import { getParentsAsync } from "../features/parents/parentsThunk";
import Loader from "./Loader";

const AdminDashboard = ({ userData }) => {
  const totalData = useSelector((state) => state);
  const [applicationData, setApplicationData] = useState([]);
  const [loader, setLoader] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const fetchApplication = async () => {
    if (user.user_type === "center") {
      const response = await getApplicationForCenter(user._id);
      setApplicationData(response?.data);
    } else if (user.user_type === "admin") {
      const response = await getApplicationForAdmin(user._id);
      setApplicationData(response?.data);
    } else {
      console.log("You are not eligible");
      return;
    }
  };
  useEffect(() => {
    fetchApplication();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      await dispatch(getParentsAsync());
      setLoader(false);
    };

    fetchData();
  }, [dispatch]);

  // console.log("applicationData",applicationData);
  return (
    <>
      {loader ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="main-conent-box mb-5">
          <div className="welcom-box">
            <div className="row">
              <div className="col col-lg-6 col-md-12 col-sm-12">
                <div className="welcm-msg">
                  <div className="row">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                      <div className="welcm-left-box">
                        <h3 className="mb-3" style={{ color: "var(--primary-color)" }}>
                          Welcome back {userData?.fullName} 👋
                        </h3>
                        <p style={{ color: "var(--text-color-black)", fontSize: "14px" }}>
                          REGISTRATION DATE : {new Date(userData?.createdAt).toLocaleDateString('en-GB')}
                        </p>
                        <p style={{ color: "var(--text-color-black)", fontSize: "14px" }}>
                          ACTIVATION DATE : {new Date(userData?.updatedAt).toLocaleDateString('en-GB')}
                        </p>
                        <p style={{ color: "var(--text-color-black)", fontSize: "14px" }}>
                          MY PACKAGE : No Active Package
                        </p>
                        {/* <button className="custom-btn-green">Go Now</button> */}
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                      <div className="d-flex justify-content-center h-100 align-items-center">
                        <img width={"75%"} src={dashimg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                <div className="welcm-msg-right">

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="dash-img-back d-flex justify-content-center">
                      <Icon
                        icon="fa:rupee"
                        width="50" height="50"
                        style={{ color: "var(--text-color-white)" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <h2 style={{ marginLeft: "10px" }}>Total Balance</h2>
                      <h3 style={{ marginLeft: "10px" }}>₹0.00</h3>
                    </div>
                  </div>
                  <p style={{ margin: "3px 0px", color: "var(--text-color-black)", fontSize: "12px", padding: "0px" }}>
                    Note- If any person transfers money without paying the loan amount using the loan ID, his account will be frozen.
                  </p>
                  <div style={{ marginTop: "5px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="custom-btn-fund" style={{ width: "48%" }}>+ Add Fund</button>
                      <button className="custom-btn-fund" style={{ width: "48%", backgroundColor: "red", color: "white" }}>- Withdraw Fund</button>
                    </div>
                    <button className="custom-btn-fund" style={{ width: "100%", backgroundColor: "#9f9476", marginTop: "10px" }}>- Withdraw Fund</button>
                  </div>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {totalData?.parents?.parents?.length}</h2>
                    <p>Total Business</p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="flowbite:chart-mixed-dollar-solid"
                      width="50"
                      height="50"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {applicationData?.length}</h2>
                    <p >Total Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="fa6-solid:sack-dollar"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2 >₹ {totalData?.testimonial?.testimonials?.length}</h2>
                    <p >Direct Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="fa6-solid:hand-holding-dollar"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2 >₹ {totalData?.testimonial?.testimonials?.length}</h2>
                    <p >Level Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="bi:chat-left-quote-fill"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {totalData?.parents?.parents?.length}</h2>
                    <p>Total Business</p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="flowbite:chart-mixed-dollar-solid"
                      width="50"
                      height="50"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {applicationData?.length}</h2>
                    <p>Total Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="fa6-solid:sack-dollar"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {totalData?.testimonial?.testimonials?.length}</h2>
                    <p>Direct Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="fa6-solid:hand-holding-dollar"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <div className="theme-card">
                  <div>
                    <h2>₹ {totalData?.testimonial?.testimonials?.length}</h2>
                    <p>Level Income </p>
                  </div>
                  <div className="dash-img-back-mini d-flex justify-content-center mb-3 mt-2">
                    <Icon
                      icon="bi:chat-left-quote-fill"
                      width="40"
                      height="40"
                      style={{ color: "var(--text-color-white)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
