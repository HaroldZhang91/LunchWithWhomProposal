import React from 'react';
import Footer from '../containers/Footer';
import Content from '../containers/Content';
import Header from '../containers/Header';
import './App.scss';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
