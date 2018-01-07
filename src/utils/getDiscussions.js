export const fetchDiscussions = () => {
  fetch(`${PROD_URL}/api/v1/discussions`)
    .then((response) => response.json())
    .then((rawDiscussions) => cleanDiscussions(rawDiscussions))
    .catch((error) => console.error({ error }));
};

const cleanDiscussions = rawDiscussions => {
  return rawDiscussions.map(discussion => {
    return {
      title: discussion.title,
      body: discussion.body,
      tagId: discussion.tagId,
    };
  });
};
