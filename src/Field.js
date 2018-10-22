//Dependencies
import React, {PropTypes} from 'react';

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
  label: propTypes.string.isRequired,
  onChange: propTypes.funk.isRequired,
  value: propTypes.string.isRequired,
  textarea: propTypes.bool.isRequired,
};

Filed.defaultProps ={
  textarea: fales,
};

export default Field;
