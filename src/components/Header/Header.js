import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({
  currentState,
  currentText
}) => {
  return (
    <div className="header">
      <div className="header-title">{currentText}</div>
      <div className="header-addtion-button">..</div>
    </div>
  );
};

Header.propTypes = {
  currentState: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired
};

export default Header;
