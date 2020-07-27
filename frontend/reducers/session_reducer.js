const _nullSession = {
  currentUserId: null
};

const sessionReducer = (state = _nullSession, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default sessionReducer;