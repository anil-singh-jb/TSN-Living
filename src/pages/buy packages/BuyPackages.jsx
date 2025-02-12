import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Awatar from "../../assets/images/avatar_9.jpg";

const BuyPackages = () => {
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

    return (
        <>
            <div className="main-content-box">
                <h2 className="page-title">Buy Package</h2>
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
                        <p style={{ color: "white" }}>Buy Package</p>
                    </Breadcrumbs>
                </div>

                <div className="main-content-card">
                    <Form onSubmit={(e) => e.preventDefault()}>
                        {/* <h4 className="form-title">Wallet Balance <span style={{ marginLeft: "10px" }}>$0.0</span></h4>
                        <hr /> */}
                        <Row>
                            <Col md={6} >
                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>User Name <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="User Name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} >
                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Package <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="title"
                                        required
                                    >
                                        <option value="">Select Package </option>
                                        <option value="Package 1">Package 1 </option>
                                        <option value="Package 2">Package 2</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "var(--text-color-black)" }}>
                                    <img
                                        src={Awatar}
                                        alt="User Avatar"
                                        style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                                    />
                                    <p style={{ margin: "0px 10px", fontSize: "18px" }}>Jhon Doe <span>(SN442860)</span> </p>
                                </div>
                            </Col>
                        </Row>

                        <Button type="submit" className="system-btn-1">
                            Buy Package
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default BuyPackages;