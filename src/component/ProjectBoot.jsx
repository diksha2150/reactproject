import React from "react";
import AppName from "./AppName";

function ProjectBoot() {
  return (
    <center className="todo-container">
      <AppName />
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter ToDo there" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Add
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Buy Curd</div>
          <div class="col-4">6/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Got to college</div>
          <div class="col-4">4/10/2032</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default ProjectBoot;
