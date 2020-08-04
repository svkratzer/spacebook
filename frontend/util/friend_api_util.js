export const getFriends = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`
  });
}

export const postFriends = (friendship, userId) => {
  return $.ajax({

  });
}