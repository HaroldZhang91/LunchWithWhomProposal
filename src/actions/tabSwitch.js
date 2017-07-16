const tabSwitch = state => ({
  id: `btnFooter:${state}`,
  currentTab: state,
  type: `tabSwitch:${state}`
});

export default tabSwitch;
