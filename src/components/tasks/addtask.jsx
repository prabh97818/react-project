import React, { useCallback, useState } from "react";
import FormInput from "../reusables/formInputs";
import FormButton from "../reusables/formButtons";
import FormTextArea from "../reusables/formTextArea";
import { NewTasks } from "../../services/myrequests";
import { Redirect } from "react-router-dom";
const AddTask = (props) => {
  const [taskData, setTaskData] = useState({});

  const initst = {
    value: false,
  };

  const [isAdded, setIsAdded] = useState(initst);

  const handleNewTask = useCallback(() => {
    NewTasks(taskData).then((resp) => {
      if (resp) {
        alert("Task Created");
        setIsAdded({
          value: true,
        })
      } else {
        alert("Sorry! Task Failed");
      }
    });
  }, [taskData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskData({ ...taskData, [name]: value });
  };

  return (
    <div className="container">
      {isAdded.value ? <Redirect to="/task" /> : null}
      <div
        className="col-md-5 ml-auto mr-auto my-4 p-4"
        style={{ background: "whitesmoke" }}
      >
        <h2 className="text-center">Add Task</h2>
        <FormInput
          label="Title"
          name="task_name"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <FormTextArea
          label="Description"
          onChange={handleChange}
          placeholder="Describe your task"
          name="description"
          rows="3"
        />

        <FormInput
          label="Start Date"
          name="start_date"
          type="date"
          placeholder="Start Date"
          onChange={handleChange}
        />

        <FormInput
          label="Due Date"
          name="due_date"
          type="date"
          placeholder="Due Date"
          onChange={handleChange}
        />
        <FormButton
          type="submit"
          label="Add"
          className="btn btn-primary "
          handleClick={handleNewTask}
        />
      </div>
    </div>
  );
};

export default AddTask;
