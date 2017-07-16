import {
  connect
} from 'react-redux';

import tabSwitch from '../actions/tabSwitch';
import stateSwitch from '../actions/stateSwitch';


import Footer from '../components/Footer/Footer';


const mapStateToProps = state => ({
  currentTab: state.tab.currentTab
});

const mapDispatchToProps = {
  onSwitchTab: tabSwitch,
  onSwitchState: stateSwitch
};

const SpecificFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default SpecificFooter;
