const tab = (state = {
  currentTab: 'CIRCLE'
}, action) => {
  if (!action.type.includes('tabSwitch:')) {
    return state;
  }
  const startIndex = action.type.indexOf(':');
  const newTab = action.type.substr(startIndex + 1);
  return {
    currentTab: newTab
  };
};

export default tab;
