import {
  combineReducers
} from 'redux';
import tab from './tab';
import state from './state';

const app = combineReducers({
  tab,
  state
});

export default app;
