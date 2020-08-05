export const getFriends = (indexType, userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`,
    data: { index_type: indexType } 
  });
}

export const postFriend = (friend, userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/friends`,
    data: { friend }
  });
}

export const deleteFriend = (friendshipId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friends/${friendshipId}`
  });
};