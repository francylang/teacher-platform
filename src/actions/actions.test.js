import * as actions from './actions.js';

describe('actions', () => {
  it('should create an action to sign user in', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_IN',
      boolean: true
    };

    expect(actions.signIn(true)).toEqual(expectedAction);
  });
});
