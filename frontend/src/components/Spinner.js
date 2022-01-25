import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const outerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  zIndex: 1,
};

const spinnerStyle = {};

const Spinner = () => (
  <div style={outerStyle}>
    <Loader style={spinnerStyle} animation='border' variant='primary' />
  </div>
);

export default Spinner;
