import React, { Component } from "react";
import Search from "./search";

export default class Listrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: {
        1: "Mechanical Engineering",
        2: "Astrophysical Engineering",
        3: "Chemical Engineering"
      },
      value: "Finance"
    };
  }

  myCallback = dataFromChild => {
    this.setState({ listDataFromChild: dataFromChild });
    console.log({ dataFromChild });
  };

  render() {
    return (
      <div className="listrow">
        <div className="container">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary btn-block">
                {this.state.value}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
