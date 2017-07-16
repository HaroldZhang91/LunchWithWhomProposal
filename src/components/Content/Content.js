import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Content = ({
  currentTab,
  onSwitchTab
}) => (
  <div className="content">
    <div className={contentUserClass} />
    <div className={contentUserClass} />
    <div className={contentUserClass} />
  </div>
);

export default Content;
