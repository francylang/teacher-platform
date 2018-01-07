export const postNewDiscussion = (title, body, tagTitle) => {
  fetch('http://localhost:3000/api/v1/discussions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body, tagTitle }),
  })
    .then(response => response.json)
    .catch(error => console.error(error));
};
