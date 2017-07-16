const titleShow = (currentState) => {
  switch (currentState) {
    case 'MY_PROFILE':
      return 'Me';
    case 'MOMENTS':
      return 'Moments';
    case 'POST':
      return 'Post';
    case 'LOADING':
      return 'Loading';
    case 'CONNECTING':
      return 'connectting';
    default:
      return 'LLW';
  }
};

export default titleShow;
