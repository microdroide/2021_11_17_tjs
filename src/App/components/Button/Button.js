import React from "react";
import './Button.css';

/**
 * Composant "Benjamin button"
 * 
 * @param {*} props props du composant
 * @returns component render
 */
const Button = (props) => {
  console.log(props);
  return <button className="Button" onClick={ (evt)=>{props.onButtonClicked()} }>{props.text}</button>;
};

export default Button;