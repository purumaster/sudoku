import React, { Component } from 'react';
//Externals
// import Field from './Field';
// import Button from './Button';


class Contact extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'',
      email:'',
      message:''

    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Filed, we do.
    this.updateField = this.updateField.bind(this);
  }

   //Field could be 'name','email' or 'message'
   //Value type whatever the user types into the input field.
   updateField(field,value){
     this.setState({ [field]: value})

   }
   getData= event => {
     fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
   }

    render() {
        return (
          <div className='container'>
            <div className='text-left'>
              <form onSubmit={this.getData} className="form-signin">
                <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Contact to me</h1>
                <div className="row">
                <div className="col">
                <label for="inputFirstName4">First name</label>
                <input type="firstName" id="inputFirstName" className="form-control" placeholder="First name" required autofocus />
                </div>
                <div className="col">
                <label for="inputLastName4">Last name</label>
                <input type="lastName" id="inputLastName" className="form-control" placeholder="Last name" required autofocus />
                </div>
                </div>
                <label for="inputEmail4">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputComment4">Comment</label>
                <input type="comment" id="inputComment" className="form-control" placeholder="Comment" rows="3" required />

                <button type="submit" className="btn btn-primary">Contact to me</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
              </form>
            </div>
          </div>


          // <div className="container">
          //
          // <div className="row" >
          // {/* Name field */}
          // <Field
          //   label="Name"
          //   onChange={(event)=> this.updateField('name',event.target.value)}
          //   value={this.state.name}
          //   />
          // {/* Email field */}
          // <Field
          //   label="Email"
          //   onChange={(event)=> this.updateField('email',event.target.value)}
          //   value={this.state.email}
          // />
          // {/* Message textarea */}
          // <Field
          //   label="Message"
          //   onChange={(event)=> this.updateField('message',event.target.value)}
          //   /*This Should be written like 'textarea' */
          //   textarea={true}
          //   value={this.state.message}
          // />
          // {/* Submit button */}
          // <Button
          // email="makimi.hanawa@gmail.com"
          // formValues={this.state}
          // />
          // </div>
          //
          //
          //
          //
          // </div>

        );
    }
}


export default Contact;
