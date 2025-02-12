import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../../assets/images/logo.png";
import ProfileImg from "../../assets/images/avatar_12.jpg";
import BackgroundImageUrl from "../../assets/images/IDCard.png";
import { Row, Col, Form, Button } from "react-bootstrap";

const AccountSetting = () => {
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
                <h2 className="page-title">Account Setting</h2>
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
                        <p style={{ color: "white" }}>Account Setting</p>
                    </Breadcrumbs>
                </div>

                <div className="main-content-card">
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <h4 className="form-title">Bank Details</h4>
                        <hr />
                        <Row>
                            <Col md={6}>
                                <h5>Bank Detail</h5>
                                 
                                 <p>
                                    Bank Nname : {""}
                                 </p>

                                 <p>
                                    Account Number : {""}
                                 </p>

                                 <p>
                                    Confirm Account Number : {""}
                                 </p>                                

                                 <p> 
                                    Bank IFSE Code : {""}
                                 </p>        

                                 <p>
                                    Bank Address : {""}
                                 </p>
                               
                            </Col>
                            <Col md={6}>
                                <h5>Add or Update Bank Detail</h5>
                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Bank Name <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Pleas Enter Bank Name"
                                    />
                                </Form.Group>

                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Account Number <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Pleas Enter Account Number"
                                    />
                                </Form.Group>

                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Confirm Account Number <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Pleas Confirm Account Number"
                                    />
                                </Form.Group>

                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Bank IFSE Code <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Pleas Enter Bank IFSE Code "
                                    />
                                </Form.Group>

                                <Form.Group
                                    style={{ marginRight: isMobile ? "0px" : "15px" }}
                                    className="mb-2"
                                >
                                    <Form.Label>Bank Address <span style={{ color: "var(--primary-color)" }}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Pleas Enter Bank Address"
                                    />
                                </Form.Group>

                                <Button type="submit" className="system-btn-1">
                                    Update and Submit Bank Detail
                                </Button>
                            </Col>
                        </Row>


                    </Form>
                </div>
            </div>
        </>
    );
};

export default AccountSetting;