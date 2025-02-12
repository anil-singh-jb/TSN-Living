import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Tree from 'react-d3-tree';

const mlmData = {
    name: "John Doe",
    attributes: {
        title: "CEO",
        sales: 1000
    },
    children: [
        {
            name: "Jane Smith",
            attributes: {
                title: "Manager",
                sales: 500
            },
            children: [
                {
                    name: "Bob Johnson",
                    attributes: {
                        title: "Associate",
                        sales: 200
                    }
                },
                {
                    name: "Alice Williams",
                    attributes: {
                        title: "Associate",
                        sales: 300
                    }
                }
            ]
        },
        {
            name: "Mike Brown",
            attributes: {
                title: "Manager",
                sales: 400
            },
            children: [
                {
                    name: "Emily Davis",
                    attributes: {
                        title: "Associate",
                        sales: 150
                    }
                }
            ]
        }
    ]
};

const MyDirectView = () => {
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
                <h2 className="page-title">Tree View</h2>
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
                        <p style={{ color: "white" }}>Tree View</p>
                    </Breadcrumbs>
                </div>

                <div className="main-content-card" style={{backgroundColor:"white"}}>
                    <div id="treeWrapper" style={{ width: '100%', height: '100vh' }}>
                        <Tree
                            data={mlmData}
                            orientation="vertical"
                            pathFunc="straight"
                            collapsible={true}
                            zoomable={true}
                            translate={{ x: isMobile ? 170 : 600, y: 50 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyDirectView ;