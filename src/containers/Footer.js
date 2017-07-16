import {
  connect
} from 'react-redux';

import tabSwitch from '../actions/tabSwitch';

import Footer from '../components/Footer/Footer';

const mapStateToProps = state => ({
  currentTab: state.tab.currentTab
});

const mapDispatchToProps = {
  onSwitchTab: tabSwitch
};

const SpecificFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default SpecificFooter;
