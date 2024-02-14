import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button type={props.type} className={` flexCenter gap-3 rounded-full border ${props.variant} ${props.full && 'w-full'}`}> 
    <img src={props.icon} alt="icon" width={24} height={24}/> 
    <label className='bold-16 whitespace-nowrap cursor-pointer'  >{props.name}</label>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['btn_dark_green']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null, undefined])]),
  name: PropTypes.string
};
