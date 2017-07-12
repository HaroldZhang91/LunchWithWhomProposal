const footerClick = type => ({
  actions: {
    id: `btnFooter${type}`,
    state: type,
  },
});

export default footerClick;
