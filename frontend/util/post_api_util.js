export const getPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts",
  });
};

export const getPost = postId => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`
  })
};

export const postPost = (post) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: post,
  });
};

export const patchPost = post => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = postId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`
  });
};