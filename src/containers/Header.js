import {
  connect
} from 'react-redux';

import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  currentState: state.state.currentState,
  currentText: state.state.text
});

const SpecificHeader = connect(mapStateToProps)(Header);

export default SpecificHeader;
