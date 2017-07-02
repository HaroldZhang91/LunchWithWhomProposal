import React from 'react';
import './Footer.scss';


class AppComponent extends React.Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-item footer-user">
          <div className="fa fa-user" />
        </div>
        <div className="footer-item footer-post">
          <div className="fa fa-calendar-plus-o" />
        </div>
        <div className="footer-item footer-circle">
          <div className="fa fa-safari" />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
