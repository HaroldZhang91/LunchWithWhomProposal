const footer = (state, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        id: action.id,
        state: action.type
      };
    case 'POST':
      return {
        id: action.id,
        state: action.type
      };
    case 'CIRCLE':
      return {
        id: action.id,
        state: action.type
      };
    default:
      return state;
  }
};

export default footer;
