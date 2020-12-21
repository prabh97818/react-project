import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DeleteTasks, UserTasks } from "../../services/myrequests";

import { Link } from "react-router-dom";

const AllTask = (props) => {
  const initialState = {
    value:1
  }
  const [allUserTask, setallUserTask] = useState([]);
  const [delvlue, setdelvlue] = useState(initialState);

  useEffect(() => {
    UserTasks().then((resp) => {
      if (resp) {
        setallUserTask(resp);
      } else {
        localStorage.removeItem("token");
      }
    });
  }, [delvlue]);

  const handleDeleteTask = (id) => {
    DeleteTasks(`id=${id}`).then((resp) => {
      if (resp) {
        alert("Task Deleted");
        setdelvlue({value:delvlue.value+1})
      } else {
        alert("Sorry! We couldnot delete task.");
      }
    });
  };

  return (
    <div className="container">
      <div
        className="col-md-8 ml-auto mr-auto my-4 p-4"
        style={{ background: "whitesmoke" }}
      >
        <h2>
          <span className="text-center ml-4"> All Tasks</span>{" "}
          <span className="float-right mr-4" style={{ color: "blue" }}>
            <Link to="add-task" className="nav-link">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </span>{" "}
        </h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          
            {allUserTask.length > 0 ? (
              allUserTask.map((tsks) => (

                <tr key={tsks.id}>
                <td>{tsks.task_name}</td>
                <td>{tsks.description}</td>
                <td>{tsks.start_date}</td>
                <td>{tsks.due_date}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => {handleDeleteTask(tsks.id)}}>Delete </button>
                </td>
              </tr>
                
              ))
            ) : (
              <tr>
                <td colSpan={6}>No Task</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
