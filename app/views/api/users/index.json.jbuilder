@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.first_name user.first_name
    json.last_name user.last_name
    json.profile_url user.profile_url
  end
end