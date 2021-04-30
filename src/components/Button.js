import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

const Button = (props) => {

  const clickHandler = () => props.clickHandler(props.name)


  return (
    <button className={'button'} style={{ backgroundColor: (props.color === 'orange' ? '' : 'lightGray'), width: (props.width === true ? '50%' : '') }} onClick={() => clickHandler()}>
      {props.name}
    </button >
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.bool.isRequired,
  color: PropTypes.string
}

export default Button;
