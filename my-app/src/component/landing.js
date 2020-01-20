import React, { Component } from "react";
import { Link } from "react-router-dom";

import Search from "./search";

export default class landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row-md my-5">
              <div className="col-md-12 text-center">
                <h1 className="display-1 center-text">Slingshot</h1>
              </div>
            </div>

            <div className="row-md my-5">
              <div className="col-md-12 text-center">
                <h1 className="display-4 text-center">
                  Lost about what to do at Uni?
                </h1>
                <Search />
              </div>
            </div>

            <div className="row-md my-5">
              <div className="col-md-12 text-center">
                <h1 className="display-4 mb-4">Want to Contribute instead?</h1>
                <Link to="/contribute" className="btn btn-lg btn-light ">
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
