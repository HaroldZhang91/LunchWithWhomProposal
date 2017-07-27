import {
  connect
} from 'react-redux';

import Post from '../components/Content/Post/Post';

const mapStateToProps = state => ({
  listOfActivity: state.activities
});

const SpecificPoster = connect(mapStateToProps)(Post);

export default SpecificPoster;
