import defaultActivities from '../exampleData/defaultActivities';

const activities = (state = defaultActivities, action) => {
  if (!action.type.includes('stateSwitch:')) {
    return state;
  }
  return state;
};

export default activities;
