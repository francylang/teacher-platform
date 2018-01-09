import { PROD_URL } from '../utils/url.js';

export const postNewDiscussion = (title, body, tagTitle) => {
  fetch(`${PROD_URL}/api/v1/discussions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body, tagTitle }),
  })
    .then(response => response.json)
    .catch(error => console.error(error));
};
