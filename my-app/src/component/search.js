import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      value: "",

      
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   


  };

  onChange(e) {
    console.log(e)
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventdefault();

    // include data service function here
   const retrieveddata = {fields: 'test'}

    const data = {
      fields: retrieveddata.fields,
    };

    this.props.callbackFromParent(data)
  }

  render() {
    return (
      <div className="search">
        <div className="container">
          <div className="row align-items-center">
              <div className="col-md-8 m-auto">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"                    
                      placeholder="Type something here"
                      value={this.state.value}
                      onChange={this.onChange}                     
                    />
                    <Link to='/list'>
                    <input
                      type="Submit"
                      className="btn btn-info btn-block mt-4"
                    />      
                    </Link>
                              
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
