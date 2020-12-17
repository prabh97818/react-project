import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AllTask = (props) => {
  return (
    <div className="container">
      <div
        className="col-md-8 ml-auto mr-auto my-4 p-4"
        style={{ background: "whitesmoke" }}
      >
        <h2 ><span className="text-center ml-5"> All Tasks</span> <span className="float-right mr-5" style={{color:'blue'}}><FontAwesomeIcon icon={faPlus} /></span> </h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Title 1</td>
              <td>Description 1</td>
              <td>2020-12-17</td>
              <td>2020-12-20</td>
              <td><button className="btn btn-danger btn-sm">Delete </button></td>

              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Title 2</td>
              <td>Description 2</td>
              <td>2020-12-17</td>
              <td>2020-12-20</td>
              <td><button  className="btn btn-danger btn-sm">Delete </button></td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Title 3</td>
              <td>Description 3</td>
              <td>2020-12-17</td>
              <td>2020-12-20</td>
              <td><button  className="btn btn-danger btn-sm">Delete </button></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
