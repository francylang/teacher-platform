export const signIn = boolean => ({
  type: 'TOGGLE_SIGN_IN',
  boolean,
});

export const signOut = boolean => ({
  type: 'TOGGLE_SIGN_OUT',
  boolean,
});

export const setCurrentUser = username => ({
  type: 'CURRENT_USER',
  username,
});
