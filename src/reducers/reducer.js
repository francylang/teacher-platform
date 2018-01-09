export const currentUser = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.username;
    default:
      return state;
  }
};

export const signedInStatus = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      return true;
    case 'TOGGLE_SIGN_OUT':
      return false;
    default:
      return state;
  }
};

export const discussions = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DISCUSSIONS_SUCCESS':
      return action.discussions;
    default:
      return state;
  }
};

export const filteredDiscussions = (state = [], action) => {
  switch (action.type) {
    case 'FILTERED_DISCUSSIONS':
      return action.filteredDiscussions;
    default:
      return state;
  }
};

export const renderDiscussions = (state = [], action) => {
  switch (action.type) {
    case 'RENDER_DISCUSSIONS':
      return action.filteredDiscussions;
    default:
      return state;
  }
};

export const comments = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_SUCCESS':
      return action.comments;
    default:
      return state;
  }
};
