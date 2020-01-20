import React, { Component } from "react";

const numbers = ["Melbourne", "Monash", "RMIT", "Swinburne", "Latrobe"];
const links = ["https://fbe.unimelb.edu.au/finance"];
const listItems = numbers.map(number => <li>{number}</li>);

export default class where extends Component {
  render() {
    return (
      <div className="container">
        <div className="row-md-6">
          <div className="col">
            <h1 className="display-3 text-center my-5">
              Where can you study Finance?
            </h1>
          </div>
        </div>

        <div className="row-md-6">
          <div className="col text-center">
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}
