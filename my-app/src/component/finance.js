import React, { Component } from "react";

export default class Finance extends Component {
  constructor() {
    super();

    this.state = {
      field: "Finance"
    };
  }
  render() {
    return (
      <div className="row-md-6">
        <div className="col">
          <h1 className="display-3 text-center my-5">
            Learn about {this.state.field}
          </h1>
        </div>
      </div>
    );
  }
}
