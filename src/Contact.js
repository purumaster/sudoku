import React, { Component } from 'react';
//Externals
import Field from './Field';
import Button from './Button';


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

    render() {
        return (
          <div>
            {/* Name field */}
            <Field
              label="Name"
              onChange={(event)=> this.updateField('name',event.target.value)}
              value={this.state.name}
              />
            {/* Email field */}
            <Field
              label="Email"
              onChange={(event)=> this.updateField('email',event.target.value)}
              value={this.state.email}
            />
            {/* Message textarea */}
            <Field
              label="Message"
              onChange={(event)=> this.updateField('message',event.target.value)}
              /*This Should be written like 'textarea' */
              textarea={true}
              value={this.state.message}
            />
            {/* Submit button */}
            <Button
            email="makimi.hanawa@gmail.com"
            formValues={this.state}
            />
          </div>

        );
    }
}


export default Contact;
