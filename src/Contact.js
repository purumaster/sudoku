import React, { Component } from "react";
//Externals
// import Field from './Field';
// import Button from './Button';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-left">
          <form onSubmit={this.getData} className="form-signin">
            <img
              className="mb-4"
              src="../../assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Contact to me</h1>
            <div className="row">
              <div className="col">
                <label for="inputFirstName4">First name</label>
                <input
                  type="firstName"
                  id="inputFirstName"
                  className="form-control"
                  placeholder="First name"
                  required
                  autofocus
                />
              </div>
              <div className="col">
                <label for="inputLastName4">Last name</label>
                <input
                  type="lastName"
                  id="inputLastName"
                  className="form-control"
                  placeholder="Last name"
                  required
                  autofocus
                />
              </div>
            </div>
            <label for="inputEmail4">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputComment4">Comment</label>
            <input
              type="comment"
              id="inputComment"
              className="form-control"
              placeholder="Coment"
              rows="3"
              required
            />

            <button onClick="getData" className="btn btn-primary">
              Contact to me
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
