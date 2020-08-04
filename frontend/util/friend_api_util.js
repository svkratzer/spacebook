export const getFriends = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`
  });
}

export const postFriends = (friendship, userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/friends`,
    data: { friendship }
  });
}

export const deleteFriend = (friendshipId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friends/${friendshipId}`
  });
};