import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import './Content.scss';

const Content = ({
  currentTab
}) => (
  <div className="content">
    { currentTab === 'USER_INFO' ? <div>UserInfo</div> : null }
    { currentTab === 'POST' ? <div>Post</div> : null }
    { currentTab === 'CIRCLE' ? <div>Cicle</div> : null }
  </div>
);

Content.propTypes = {
  currentTab: PropTypes.string.isRequired
};

export default Content;
