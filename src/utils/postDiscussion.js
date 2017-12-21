export const postNewDiscussion = (title, body) => {
  fetch('http://localhost:3000/api/v1/discussions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  })
    .then(response => response.json)
    .catch(error => console.error(error));
};
