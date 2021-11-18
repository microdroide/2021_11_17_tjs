import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" 
  viewBox={`0 0 ${props.image.w} ${props.image.h}`}>
    <image href={props.image.url} x="0" y="0"/>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
