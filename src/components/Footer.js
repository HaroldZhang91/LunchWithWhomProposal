require('../styles/Footer.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="footer-content">
          <div className="footer-user"></div>
          <div className="footer-sign-up"></div>
          <div className="footer-circle"></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
