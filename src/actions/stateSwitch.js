import titleShow from './stateSwitchMethod';

const stateSwitch = state => ({
  id: `state_${state}`,
  currentState: state,
  type: `stateSwitch:${state}`,
  text: titleShow(state)
});

export default stateSwitch;
