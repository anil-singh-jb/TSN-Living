import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import avatar from "../../assets/images/user.png";
import firmIcon from "../../assets/images/building.png";
import logo from "../../assets/images/logo.png";
import "../../assets/css/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../../features/user/userThunks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const [activeForm, setForm] = useState("user");
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [sponsors] = useState(["SP123", "SP456", "SP789"]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

    // Filter logic for sponsors
    const filteredResults = sponsors.filter((sponsor) =>
      sponsor.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: null,
    password: "",
    user_type: activeForm,
  });

  const [centerFormData, setCenterFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: null,
    user_type: activeForm,
  });
  // const handleFormUser = () => {
  //   setForm("user");
  // };
  // const handleFormFirm = () => {
  //   setForm("firm");
  // };
  const handleFormUser = () => {
    setForm("user");
    setFormData({
      ...formData,
      user_type: "user",
    });
  };

  const handleFormFirm = () => {
    setForm("center");
    setCenterFormData({
      ...centerFormData,
      user_type: "center",
    });
  };

  const handleInputeChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCenterInputChange = (event) => {
    const { name, value } = event.target;
    setCenterFormData({
      ...centerFormData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (activeForm === "user") {
      if (!formData.email && !formData.fullName && !formData.password && !formData.phone) {
        toast.error("Please fill the data..!");
        return
      }
      setLoader(true);
      const response = await dispatch(
        registerUserAsync({ ...formData, username: formData.email })
      );
      if (response.type !== "user/register/rejected") {
        toast.success("Register Successfully!");
        navigate("/login");
        setLoader(false);
      } else {
        toast.error("Email or phone alreday registred");
        setLoader(false);
      }
    }
    if (isChecked) {
      alert("Thank you for agreeing!");
    } else {
      alert("Please agree to the terms before proceeding.");
    }
    if (activeForm === "center") {
      if (!centerFormData.email && !centerFormData.fullName && !centerFormData.password && !centerFormData.phone) {
        toast.error("Please fill the data..!");
        return
      }
      setLoader(true);
      const response = await dispatch(
        registerUserAsync({ ...centerFormData, username: centerFormData.email })
      );
      console.log("response", response)
      if (response.type !== "user/register/rejected") {
        toast.success("Register Successfully!");
        navigate("/login");
        setLoader(false);
      } else {
        toast.error("Email or phone alreday registred");
        setLoader(false);
      }
    }
  };


  return (
    <>
      <div className="register-main-box">
        <div className="logo-box"><img src={logo} alt="" /></div>
        <Container style={{ backgroundColor: "#f7f7f7" }} className="reg-form-container">
          <div style={{ padding: "25px 25px" }}>
            <div className="reg-form-header">Create Your Account</div>
            <Form>

              <hr />
              <h4>Personal Information </h4>
              <hr />

              <Row>
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      Title
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="title"
                      value={formData.title || ""}
                      onChange={handleInputeChange}
                      required
                    >
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
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">Marital Status</Form.Label>
                    <Form.Control
                      as="select"
                      name="marital_status"
                      value={formData.marital_status || ""}
                      onChange={handleInputeChange}
                      required
                    >
                      <option value="" disabled>
                        Select Marital Status
                      </option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      First Name
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputeChange}
                      placeholder="First Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">Last Name</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="last name"
                      placeholder="Last Name"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="email_id">Email</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputeChange}
                      placeholder="Your Email"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="mobile_number">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      className="form-control"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]*"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleInputeChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="email_id">Password</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputeChange}
                      placeholder="Your Password"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="email_id">Confirm Password</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputeChange}
                      placeholder="Your Password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      Nationality
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="nationality"
                      value={formData.nationality || ""}
                      onChange={handleInputeChange}
                      required
                    >
                      <option value="" disabled>
                        Nationality
                      </option>
                      <option value="Indian">Indian</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="email_id">Date of Birth</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputeChange}
                      placeholder="Your Password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />
              <h4 className="mt-4">Permanent Address </h4>
              <hr />

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      House Number/Name/Street Name/Road
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputeChange}
                      placeholder="House Number/Name/Street Name/Road"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">Locality/Area</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="last name"
                      placeholder="Locality/Area"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      Town/Village
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputeChange}
                      placeholder="Town/Village"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">Landmark</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="last name"
                      placeholder="Landmark"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      Pincode
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputeChange}
                      placeholder="Pincode"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">State</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="last name"
                      placeholder="State"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6}>
                  <Form.Group
                    style={{ marginRight: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="first_name">
                      City
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputeChange}
                      placeholder="City"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    style={{ marginLeft: isMobile ? "0px" : "15px", }}
                    className="mb-2"
                  >
                    <Form.Label htmlFor="last_name">Country</Form.Label>
                    <Form.Control
                      autoFocus
                      required
                      type="text"
                      name="last name"
                      placeholder="Country"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />
              <h4 className="mt-4">Choose your Forever Living Products Sponsor</h4>
              <hr />

              <Form.Group
                style={{ marginRight: isMobile ? "0px" : "15px" }}
                className="mb-2"
              >
                <Form.Label>Enter The Sponsor ID</Form.Label>
                <Form.Control
                  autoFocus
                  required
                  type="text"
                  name="fullName"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search Sponsor ID"
                />
                {results.length > 0 && (
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      marginTop: "5px",
                      maxHeight: "100px",
                      overflowY: "auto",
                    }}
                  >
                    {results.map((result, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSearchValue(result);
                          setResults([]);
                        }}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                )}
              </Form.Group>

              <hr style={{ marginTop: "40px" }} />
              <h4>Communication Disclosure</h4>
              <hr />

              <p>Sharing limited contact information with others who are part of TSN’s business will help facilitate and grow your own business. Accordingly, you agree to the disclosure of the limited contact information you provide to TSN, including information regarding your TSN purchases (but excluding payment card information), to TSN's internal and authorized service providers, including TSN's independent business owners (TSNBOs). <strong> BY SUBMITTING THIS APPLICATION OR MAKING A PURCHASE, YOU ALSO AUTHORIZE TSN AND ITS TSNs TO POTENTIALLY CONTACT YOU BY PHONE, FAX, MAIL, AND/OR E-MAIL CONCERNING TSN-RELATED MATTERS.</strong></p>
              <p><strong>UPDATING PREFERENCES :</strong> Although we recommend you continue to share limited contact information with others who are part of Forever’s business, you can visit your “Communication Preferences” and/or the “Privacy Notice” at any time to limit the use/disclosure of your contact information.</p>

              <hr style={{ marginTop: "40px" }} />
              <h4>Welcome to the TSN Family!</h4>
              <hr />

              <p>Thank you for Joining. As a Preferred Customer, you'll receive a discount every time you shop! To continue, accept the TSN Agreement & Annexure below.</p>

              <Form.Group controlId="agreementCheckbox" className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="I agree to TSN Agreement & Annexure"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>


              <Button
                type="submit"
                className="login-btn"
                onClick={handleSubmit}
              >
                {loader ? "Process.." : "Sign Up"}
                <FontAwesomeIcon
                  className="login-icon"
                  icon={faArrowRight}
                />
              </Button>

              <div className="register-link">
                Already have an account?
                <Link style={{ marginLeft: "10px" }} to="/">
                  Sign in
                </Link>
              </div>

            </Form>
          </div>



        </Container>

        <hr />
        <p style={{ textAlign: "center", fontSize: "14px" }}>®Copyright {new Date().getFullYear()} TSNLiving.com, All rights reserved.</p>
      </div>
    </>
  );
};

export default Register;
