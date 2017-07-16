import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Footer.scss';

const Footer = ({
  currentTab,
  onSwitchTab,
  onSwitchState
}) => {
  const footerUserClass = classNames({
    'footer-item': true,
    'footer-user': true,
    active: currentTab === 'USER_INFO'
  });
  const footerPostClass = classNames({
    'footer-item': true,
    'footer-post': true,
    active: currentTab === 'POST'
  });
  const footerCircleClass = classNames({
    'footer-item': true,
    'footer-circle': true,
    active: currentTab === 'CIRCLE'
  });
  return (
    <div className="footer">
      <div className={footerUserClass}>
        <div className="fa fa-user" onClick={() => { onSwitchTab('USER_INFO'); onSwitchState('MY_PROFILE'); }} />
      </div>
      <div className={footerPostClass}>
        <div className="fa fa-calendar-plus-o" onClick={() => { onSwitchTab('POST'); onSwitchState('POST'); }} />
      </div>
      <div className={footerCircleClass}>
        <div className="fa fa-safari" onClick={() => { onSwitchTab('CIRCLE'); onSwitchState('MOMENTS'); }} />
      </div>
    </div>
  );
};

Footer.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onSwitchTab: PropTypes.func.isRequired,
  onSwitchState: PropTypes.func.isRequired
};

export default Footer;
