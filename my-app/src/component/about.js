import React, { Component } from "react";

export default class about extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-offset-3 mx-auto">
            <h1 className="display-2">Our Mission</h1>

            <p>
              We aim to bring perspective to high school students in what they
              can potentially study
            </p>

            <img
              src="https://image.shutterstock.com/image-vector/building-high-school-american-european-260nw-1017174409.jpg"
              alt="school"
            />
          </div>
        </div>
      </div>
    );
  }
}
