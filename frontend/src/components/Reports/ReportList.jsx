import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports, deleteReport } from "../../actions/reportAction";
// import {
//   Button,
//   Typography,
//   Box,
//   Card,
//   CardHeader,
//   CardContent,
//   Avatar,
// } from "@mui/material";
import moment from "moment";
import { DELETE_REPORT_RESET } from "../../constans/reportConstans";
import { ToastContainer, toast } from "react-toastify";
import "./ReportLis.css";

const ReportList = () => {
  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.AllReports);
  const { success: deleteSuccess } = useSelector((state) => state.deletReport);

  useEffect(() => {
    dispatch(getAllReports());
    if (deleteSuccess) {
      dispatch({ type: DELETE_REPORT_RESET });
      toast.success("Report deleted successfully");
    }
  }, [dispatch, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Note?")) {
      dispatch(deleteReport(id));
    }
  };

  return (
    <Fragment>
      {/* <div className="dashboard">
        <div className="productReviewsContaine">
          <div className="report">
            <div className="container">
              {reports &&
                reports.map((report) => (
                  <div className="card" key={report._id}>
                    <div className="face face1">
                      <div className="content">
                      <div className="icon">
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <h3>
                          <h4>
                            {moment(report.createdAt).format("MMMM Do, YYYY")}
                          </h4>
                          <a>{report.name}</a>
                        </h3>
                        <p>{report.subject}</p>
                        <p>{report.email}</p>
                        <p>{report.message}</p>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(report._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      <div class="snote">
        <ul>
          {reports && reports.map((report) => (
            <li key={report._id} >
              <a href="#LINK 1">
                <h4>
                  {moment(report.createdAt).format("MMMM Do, YYYY")}
                </h4>
                <h4>{report.name}</h4><hr />
                <h6>{report.email}</h6>
                <h6>{report.subject}</h6>
                <h6>{report.message}</h6>
                <button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(report._id)}
                >
                  Delete
                </button>
              </a>
            </li>
          ))}

        </ul>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
    </Fragment>
  );
};

export default ReportList;