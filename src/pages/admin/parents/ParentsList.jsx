import React, { useEffect, useState } from "react";
import "../../../assets/css/ParentsPage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import avatar from "../../../assets/images/avatar_12.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getParentsAsync,
  deleteParentAsync,
} from "../../../features/parents/parentsThunk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import DeleteModal from "../../../components/DeleteModal";
const ParentsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parents = useSelector((state) => state?.parents?.parents);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parentsPerPage] = useState(6);
  const [deleteTestId, setDeleteTestId] = useState();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("fullName");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      await dispatch(getParentsAsync());
      setLoader(false);
    };

    fetchData();
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const indexOfLastParent = currentPage * parentsPerPage;
  const indexOfFirstParent = indexOfLastParent - parentsPerPage;
  const filteredParents = parents
    ?.filter((parent) =>
      parent?.fullName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  const currentParents = filteredParents?.slice(
    indexOfFirstParent,
    indexOfLastParent
  );

  const handleDelete = (id) => {
    setDeleteTestId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteParentAsync(deleteTestId));
    toast.success("Deleted Successfully!");
    setDeleteTestId();
    setIsDeleteModalOpen(false);
  };

  const handleView = (parent) => {
    navigate(`/parent-details`, { state: { parent } });
  };

  const handleEdit = (parent) => {
    navigate(`/update-parents`, { state: { parent } });
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <>
        <div className="main-conent-box mb-5">
          <h2 className="page-title">Customers List</h2>
          <div className="main-serch-box">
            <Breadcrumbs
              className="link-breadcrumb"
              title="Basic"
              divider={true}
              isCard={false}
            >
              <p>
                <Icon
                  className="icon-green"
                  style={{ fontSize: "20px", marginBottom: "7px" }}
                  icon="tabler:home-filled"
                />
                <Link to="/"> Dashboard </Link>
              </p>
              <p>Customers</p>
            </Breadcrumbs>
            <div className="d-flex">
              <input
                className="serch-box-input"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>

          {loader ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <TableContainer className="table-container mt-3">
              <Table>
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell className="table-head-cell">S.No.</TableCell>
                    <TableCell
                      className="table-head-cell"
                      onClick={() => handleSort("fullName")}
                    >
                      Parents Name
                      {sortColumn === "fullName" && (
                        <Icon
                          icon={
                            sortDirection === "asc"
                              ? "material-symbols:arrow-upward"
                              : "material-symbols:arrow-downward"
                          }
                          width="18"
                          height="18"
                          style={{
                            marginLeft: "5px",
                            color: "var(--primary-color)",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </TableCell>

                    <TableCell
                      className="table-head-cell"
                    
                      onClick={() => handleSort("email")}
                    >
                      Email
                      {sortColumn === "email" && (
                        <Icon
                          icon={
                            sortDirection === "asc"
                              ? "material-symbols:arrow-upward"
                              : "material-symbols:arrow-downward"
                          }
                          width="18"
                          height="18"
                          style={{
                            marginLeft: "5px",
                            color: "var(--primary-color)",
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell className="table-head-cell" >
                      Phone No
                    </TableCell>
                    <TableCell className="table-head-cell" >
                      User
                    </TableCell>
                    <TableCell className="table-head-cell" >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentParents?.map((parent, index) => (
                    <TableRow key={parent.id}>
                         <TableCell className="table-body-cell" >
                         <div className="list-detail">{index + 1}</div>
                      </TableCell>
                      <TableCell className="table-body-cell">
                        <div className="table-body-cell">
                          <div>
                            <span>{parent?.fullName} </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="table-body-cell" >
                        {parent?.email}
                      </TableCell>
                      <TableCell className="table-body-cell" >
                        {parent?.phone}
                      </TableCell>
                      <TableCell className="table-body-cell" >
                        {parent?.user_type}
                      </TableCell>
                      <TableCell className="table-body-cell" >
                        <Icon
                          icon="lets-icons:view-fill"
                          width="26"
                          height="26"
                          style={{
                            color: "var(--primary-color)",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleView(parent)}
                        />
                        <Icon
                          icon="fluent:edit-16-filled"
                          width="20"
                          height="20"
                          style={{
                            color: "var(--primary-color)",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleEdit(parent)}
                        />
                        <Icon
                          icon="material-symbols:delete-rounded"
                          width="20"
                          height="20"
                          style={{
                            color: "var(--primary-color)",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(parent._id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <div className="pegination-main-box">
            <Grid
              container
              justifyContent="center"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                // position: "fixed",
                bottom: "0",
                left: "0",
              }}
            >
              <Pagination
                count={Math.ceil(filteredParents.length / parentsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Grid>
          </div>
        </div>
        <DeleteModal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      </>
    </>
  );
};

export default ParentsList;
