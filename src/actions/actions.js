import { PROD_URL } from '../url.js';

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

export const fetchDiscussionsSuccess = discussions => ({
  type: 'FETCH_DISCUSSIONS_SUCCESS',
  discussions,
});

export const fetchCommentsSuccess = comments => ({
  type: 'FETCH_COMMENTS_SUCCESS',
  comments,
});

export const updateDiscussions = updatedDiscussions => ({
  type: 'UPDATE_FILTER_DISCUSSIONS',
  updatedDiscussions,
});

const cleanDiscussions = (rawDiscussions) => {
  return rawDiscussions.map(discussion => {
    return {
      id: discussion.id,
      title: discussion.title,
      body: discussion.body,
      tagId: discussion.tagId,
      tagTitle: discussion.tagTitle,
    };
  });
};

export const fetchDiscussions = () => {
  return dispatch => {
    fetch(`${PROD_URL}/api/v1/discussions`)
      .then(response => response.json())
      .then(rawDiscussions => cleanDiscussions(rawDiscussions))
      .then(cleanedDiscussions => {
        dispatch(fetchDiscussionsSuccess(cleanedDiscussions));
      })
      .catch(() => console.error('error'));
  };
};

const cleanComments = (rawComments) => {
  return rawComments.map(comment => {
    return {
      id: comment.id,
      comment: comment.body,
      discussionId: comment.discussionId,
    };
  });
};

export const fetchComments = () => {
  return dispatch => {
    fetch(`${PROD_URL}/api/v1/comments`)
      .then((response) => response.json())
      .then((comments) => cleanComments(comments))
      .then(cleanedComments => dispatch(fetchCommentsSuccess(cleanedComments)))
      .catch(() => console.error('error'));
  };
};
