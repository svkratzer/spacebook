@friendships.each do |friendship|
  friend = friendship.friend

  json.set! friend.id do
    json.friendship_id friendship.id
    json.friend_id friend.id
    json.first_name friend.first_name
    json.last_name friend.last_name
    json.profile_url friend.profile_url
  end
end

# json.friend_count @friendships.count