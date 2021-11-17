import React, { useState } from "react";
import style from "./Button.module.css"
import PropTypes from 'prop-types'




/**
 * Composant "Benjamin button"
 * 
 * @param {*} props props du composant
 * @returns component render
 */
const Button = (props) => {
  const [clicked, setclicked] = useState({state: false,autreValue: 'Demat la bretagne'});
  console.log(props);
  return <button 
  className={ `${style.Button}${clicked.state?' '+style.clicked:''}` }
  style={{backgroundColor:props.bgColor,color:props.color}} 
  onClick={ (evt)=>{props.onButtonClicked()} }>{props.text}</button>;
};

Button.propTypes={
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
}

Button.defaultProps= {
  bgColor: 'yellowgreen',
  color: 'white',
}
export default Button;