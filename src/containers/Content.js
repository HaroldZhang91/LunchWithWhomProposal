import {
  connect
} from 'react-redux';

import Content from '../components/Content/Content';

const mapStateToProps = state => ({
  currentTab: state.tab.currentTab
});

const SpecificContent = connect(mapStateToProps)(Content);

export default SpecificContent;
