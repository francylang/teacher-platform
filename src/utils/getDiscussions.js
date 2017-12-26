export const fetchDiscussions = () => {
  fetch('http://localhost:3000/api/v1/discussions')
    .then((response) => response.json())
    .then((rawDiscussions) => cleanDiscussions(rawDiscussions))
    .catch((error) => console.error({ error }));
}

const cleanDiscussions = rawDiscussions => {
  return rawDiscussions.map(discussion => {
    return {
      title: discussion.title,
      body: discussion.body,
      tagId: discussion.tagId,
    };
  });
}
