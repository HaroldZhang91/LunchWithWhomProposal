import React from 'react';
import Footer from './Footer/Footer';
import '../styles/font-awesome/css/font-awesome.css';
// import '../styles/global/_color.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
