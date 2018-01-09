import { PROD_URL } from '../utils/url.js';

export const postComment = (body, discussionId) => {
  fetch(`${PROD_URL}/${discussionId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })
    .then(response => response.json)
    .catch(error => console.error(error));
};
