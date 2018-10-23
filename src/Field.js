//Dependencies
import React from 'react';
import PropTypes from 'prop-types';


//Stateless Component /Functional Component
const Field = (props)=>(
  <div>
    <label>{props.label}</label>
    <input
      onChange ={props.onChange}
      type = {props.textarea ? 'textarea' : 'text'}
      value ={props.value}
    />
  </div>
);

//PropTypes is a ways ensuer we are expecting
//certain props that will enable component // TO
//function properly.
Field.proptypes ={
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
};

Field.defaultProps ={
  textarea: false,
};

export default Field;
