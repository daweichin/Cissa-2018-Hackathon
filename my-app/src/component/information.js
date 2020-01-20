import React, { Component } from "react";
import { Link } from "react-router-dom";
import Finance from "./finance";
import "../button.css";

export default class information extends Component {
  render() {
    return (
      <div className="container">
        <Finance />
        <div className="row">

          <div className="col">
            <Link to="/where" className="btn btn-primary">
              <i className="fa fa-map-marker fa-5x" /> <br />
              Where
            </Link>
          </div>

          <div className="col">
            <a href="#" class="btn btn-primary">
              <i class="fa fa-question-circle fa-5x" /> <br />
              Why
            </a>
          </div>

          <div className="col">
            <a href="#" class="btn btn-primary">
              <i class="fa fa-question-circle fa-5x" /> <br />
              What
            </a>
          </div>

          <div className="col">
            <a href="#" class="btn btn-primary">
              <i class="fa fa-question-circle fa-5x" /> <br />
              How
            </a>
          </div>
        </div>
      </div>
    );
  }
}
