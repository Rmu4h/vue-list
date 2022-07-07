const BASE_URL = 'https://mate.academy/students-api';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const result = await response.json();

  return result;
}

export function getPosts() {
  return get('/posts');
}


export function getPost(postId) {
  return get(`/posts${postId}`);
}
