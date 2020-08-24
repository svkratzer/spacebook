// ---- getUser(userId)
// ---- updateUser(user)

export const getUsers = (name) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: { name }
  });
}

export const getUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
}

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  });
}