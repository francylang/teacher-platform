import * as actions from './actions.js';

describe('actions', () => {
  it('should create an action to sign user in', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_IN',
      boolean: true
    };

    expect(actions.signIn(true)).toEqual(expectedAction);
  });

  it('should create an action to sign user out', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_OUT',
      boolean: false
    };

    expect(actions.signOut(false)).toEqual(expectedAction);
  });

  it('should create an action to set the current user', () => {
    const expectedAction = {
      type: 'CURRENT_USER',
      username: 'Francy'
    };

    expect(actions.setCurrentUser('Francy')).toEqual(expectedAction);
  });

  it('should create an action to successfully fetch discussions', () => {
    const discussions = [
      {title: 'Math', body: 'important math things'},
      {title: 'Crucial Learning', body: 'Lots of important things'}
    ];
    const expectedAction = {
      type: 'FETCH_DISCUSSIONS_SUCCESS',
      discussions
    };
    expect(actions.fetchDiscussionsSuccess(discussions)).toEqual(expectedAction);
  });

  it('should create an action to successfully fetch comments', () => {
    const comments = [
      {body: 'teaching is hard'},
      {body: 'but so much fun'}
    ];
    const expectedAction = {
      type: 'FETCH_COMMENTS_SUCCESS',
      comments
    };
    expect(actions.fetchCommentsSuccess(comments)).toEqual(expectedAction);
  });

  it('should create an action to successfully update filtered discussions', () => {
    const updatedDiscussions = [
      {title: 'Math', body: 'is magic'},
      {title: 'Math Learning', body: 'it is amazing'}
    ];
    const expectedAction = {
      type: 'UPDATE_FILTER_DISCUSSIONS',
      updatedDiscussions
    };
    expect(actions.updateDiscussions(updatedDiscussions)).toEqual(expectedAction);
  });
});
