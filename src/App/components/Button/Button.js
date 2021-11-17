import React from "react";
import './Button.css';
import PropTypes from 'prop-types'


/**
 * Composant "Benjamin button"
 * 
 * @param {*} props props du composant
 * @returns component render
 */
const Button = (props) => {
  console.log(props);
  return <button 
  className="Button"
  style={{backgroundColor:props.bgColor,color:props.color}} 
  onClick={ (evt)=>{props.onButtonClicked()} }>{props.text}</button>;
};

Button.propTypes={
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}

export default Button;