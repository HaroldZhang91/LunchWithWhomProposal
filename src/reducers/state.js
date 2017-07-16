import titleShow from '../actions/stateSwitchMethod';

const tab = (state = {
  currentState: 'MY_PROFILE',
  text: 'Me'
}, action) => {
  if (!action.type.includes('stateSwitch:')) {
    return state;
  }
  const startIndex = action.type.indexOf(':');
  const newState = action.type.substr(startIndex + 1);
  return {
    currentState: newState,
    text: titleShow(newState)
  };
};

export default tab;
