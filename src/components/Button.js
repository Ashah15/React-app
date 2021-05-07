import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  buttonName, wide, handleClick,
}) {
  return (
    <div className={wide ? 'zerobtn-style' : 'button-style'}>
      <button type="button" className="name-buttons" onClick={() => handleClick(buttonName)}>{ buttonName }</button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
