require('../styles/Footer.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="footer-content">
          <div className="footer-user active">
            <div className="footer-item fa fa-user"></div>
          </div>
          <div className="footer-post">
            <div className="footer-item fa fa-calendar-plus-o"></div>
          </div>
          <div className="footer-circle">
            <div className="footer-item fa fa-safari"></div>
          </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
