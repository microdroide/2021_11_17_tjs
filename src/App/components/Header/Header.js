import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <span className={styles.Meme}> Meme </span>
    <span className={styles.Dot}> js </span>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
