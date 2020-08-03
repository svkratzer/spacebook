export const getComments = (postId) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/comments`,
  });
};

export const getComment = commentId => {
  return $.ajax({
    method: "GET",
    url: `/api/comments/${commentId}`
  });
};

export const postComment = (comment, postId) => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${postId}/comments`,
    data: { comment }
  });
};

export const patchComment = comment => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  });
};