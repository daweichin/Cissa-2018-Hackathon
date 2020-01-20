import React, { Component } from "react";
import Listrow from "./listrow";
import Listrow1 from "./listrow1";
import Listrow2 from "./listrow2";
import Search from "./search";
import { Link } from "react-router-dom";

export default class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: "test1",
      value2: "test2",
      value3: "test3"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1 className="display-4 text-center">
              Are you interested in any of the following?
            </h1>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <Link to="/information">
              <Listrow />
            </Link>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <Listrow1 />
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <Listrow2 />
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h1 className="display-4 text-center">Or Search Again</h1>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
