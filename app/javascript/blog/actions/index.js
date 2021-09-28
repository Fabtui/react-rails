export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

const ROOT_URL = '/api/v1/posts';

export function createPost(body, callback) {
  const request = fetch(`${ROOT_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}

export function fetchPost(id) {
  const promise = fetch(`${ROOT_URL}/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  }
}

export function fetchPosts() {
  // AJAX request
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  }
}
