import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../../assets/images/logo.png";
import ProfileImg from "../../assets/images/avatar_12.jpg";
import BackgroundImageUrl from "../../assets/images/IDCard.png";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  console.log("priiinnttt", contentRef)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main-content-box">
        <h2 className="page-title">My Profile</h2>
        <div className="main-serch-box">
          <Breadcrumbs
            className="link-breadcrumb"
            title="Basic"
          >
            <p>
              <Icon
                className="icon-green"
                style={{ fontSize: "20px", marginBottom: "7px" }}
                icon="tabler:home-filled"
              />
              <Link to="/"> Dashboard</Link>
            </p>
            /
            <p style={{ color: "white" }}>My Profile</p>
          </Breadcrumbs>
          {/* <Link to="/add-category">
            <button className="new-post-btn">+ New Category</button>
          </Link> */}
        </div>

        <div className="row">
          <div className="col-12 col-lg-4">
            <div ref={contentRef}>
              <div
                className="profile-i-card"
                style={{
                  backgroundImage: `url(${BackgroundImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="logo-img-card">
                  <img src={Logo} alt="profile-img" />
                </div>
                <div className="profile-img">
                  <img src={ProfileImg} alt="profile-img" />
                </div>
                <div className="card-profile-details">
                  <h3 className="profile-name">John Doe </h3>
                  <div className="profile-role">Diamond</div>
                  <div className="cr-pro-details">
                    <p style={{ fontSize: "15px", fontWeight: "600" }}>ID No : <span>SN442860</span></p>
                    <p>Phone : <span>1234567890</span></p>
                    <p>Email : <span>ajitkumar213ddhahish@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="cr-btn-auto">
              <button style={{ width: "341px" }} onClick={reactToPrintFn} className="login-btn">Print ID Card</button>
            </div>
          </div>



          <div className="col-12 col-lg-8">
            <div className="profile-form">
              <div className="card-profile-details2">
                <div className="profile-img-2">
                  <img src={ProfileImg} alt="profile-img" />
                  <Icon
                    className="profile-edit-icon"
                    style={{ fontSize: "35px", color: "#00b74a", cursor: "pointer" }}
                    icon="flowbite:edit-solid"
                  />
                </div>
                <div style={{ marginLeft: "30px" }} >
                  <h3 className="profile-name">John Doe </h3>
                  {/* <div className="profile-role">Diamond</div> */}
                  <div className="cr-pro-details">
                    <p style={{ fontSize: "15px", fontWeight: "600",  marginBottom: isMobile ? "10px" : "0px" }}>
                      ID No : <span>SN442860</span>
                      <span style={{marginLeft: isMobile ? "0px" : "10px"}}>
                        <button className="share-ref-btn">
                        <Icon
                          style={{ fontSize: "16px", color: "black", cursor: "pointer", marginRight:"5px" }}
                          icon="material-symbols:share"
                        /> Share Referral ID
                        </button>
                        
                      </span>
                    </p>
                    <p>Phone : <span>1234567890</span></p>
                    <p>Email : <span>ajitkumar213ddhahish@gmail.com</span></p>
                  </div>
                </div>
              </div>
              <Form onSubmit={(e) => e.preventDefault()}>
                <h4 className="form-title mt-3">Personal Information </h4>
                <hr />
                <Row>
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Title</Form.Label>
                      <Form.Control as="select" name="title" required>
                        <option value="" disabled>
                          Select Title
                        </option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Sir">Ms.</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="fullName"
                        placeholder="Enter Name"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        className="form-control"
                        inputMode="numeric"
                        maxLength={10}
                        pattern="[0-9]*"
                        placeholder="Mobile Number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        placeholder="Your Password"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        placeholder="Your Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Country</Form.Label>
                      <Form.Control as="select" name="nationality" required>
                        <option value="">select Country </option>
                        <option value="Indian">Indian</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      style={{ marginRight: isMobile ? "0px" : "15px" }}
                      className="mb-2"
                    >
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control

                        required
                        type="date"
                        name="dob"
                        placeholder="Your Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit" className="login-btn">
                  Update Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;