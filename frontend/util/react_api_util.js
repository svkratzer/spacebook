export const postReact = react => {
  return $.ajax({
    method: "POST",
    url: "/api/reactions",
    data: { react }
  });
};

export const patchReact = react => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reactions/${react.id}`,
    data: { react }
  });
};

export const deleteReact = reactId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reactions/${reactId}`
  });
};