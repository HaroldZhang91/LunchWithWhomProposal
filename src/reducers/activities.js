const activities = (state = [], action) => {
  if (!action.type.includes('stateSwitch:')) {
    return state;
  }
  return state;
};

export default activities;
