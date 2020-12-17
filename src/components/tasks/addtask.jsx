import React from "react";
import FormInput from "../reusables/formInputs";
import FormButton from "../reusables/formButtons";
import FormTextArea from "../reusables/formTextArea";

const AddTask = (rops) => {
  return (
    <div className="container">
      <div
        className="col-md-5 ml-auto mr-auto my-4 p-4"
        style={{ background: "whitesmoke" }}
      >
        <h2 className="text-center">Add Task</h2>
        <form>
          <FormInput
            label="Title"
            name="task_name"
            type="text"
            placeholder="Title"
          />
          <FormTextArea label="Description" name="description" rows="3" />

          <FormInput
            label="Start Date"
            name="due_date"
            type="date"
            placeholder="Start Date"
          />

          <FormInput
            label="Due Date"
            name="due_date"
            type="date"
            placeholder="Due Date"
          />

          <FormInput
            name="submit"
            className="btn btn-primary"
            type="submit"
            placeholder="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
