const tab = (state = {
  id: 'btnFooter_USER_INFO',
  currentTab: 'USER_INFO'
}, action) => {
  switch (action.currentTab) {
    case 'USER_INFO':
      return {
        id: action.id,
        currentTab: action.type
      };
    case 'POST':
      return {
        id: action.id,
        currentTab: action.type
      };
    case 'CIRCLE':
      return {
        id: action.id,
        currentTab: action.type
      };
    default:
      return state;
  }
};

export default tab;
