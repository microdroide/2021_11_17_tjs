import React, { useEffect, useState } from "react";
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
  
  
  useEffect(() => {
    // Execution que si etat du button clicked
    if (! clicked.state) return;

    console.log(clicked);
    setTimeout( () => setclicked({...clicked, state: false}),300);
    // retourne la fonction de WillUmount
    //return () => {
    //  cleanup
    //}
  }, [clicked]);

  console.log(props);
  return <button 
  className={ `${style.Button}${clicked.state?' '+style.clicked:''}` }
  style={{backgroundColor:props.bgColor,color:props.color}} 
  onClick={ (evt)=>{
    
    setclicked({...clicked, state: true});

    setTimeout( () => setclicked({...clicked, state: false}));

    props.onButtonClicked()} }>{props.text}</button>;
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