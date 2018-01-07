export const postComment = (body, discussionId) => {
  fetch(`http://localhost:3000/api/v1/discussions/${discussionId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  })
    .then(response => response.json)
    .catch(error => console.error(error))
};
