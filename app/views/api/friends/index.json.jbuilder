@friends.each do |friend|
  json.set! friend.id do 
    json.id friend.id
    json.first_name friend.first_name
    json.last_name friend.last_name
    json.profile_url friend.profile_url
  end
end