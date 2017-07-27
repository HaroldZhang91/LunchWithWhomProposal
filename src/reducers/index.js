import {
  combineReducers
} from 'redux';
import tab from './tab';
import state from './state';
import activities from './activities';

const app = combineReducers({
  tab,
  state,
  activities
});

export default app;
