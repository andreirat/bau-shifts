import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  
  render() {
    return (
      <div>
        <h5>Opps! Why you’re here?</h5>
        <p>We are very sorry for inconvenience. It looks like you’re try to access a page that either has been
          deleted or never existed.</p>
        <NavLink to="/" className="btn">Back to Home</NavLink>
      </div>
    );
  }
}

export default NotFound
