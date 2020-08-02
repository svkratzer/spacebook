json.id @post.id
json.body @post.body 
json.author_id @post.author_id
json.wall_id @post.wall_id
json.time @post.created_at.to_formatted_s(:long_ordinal)

# reacts images
json.laugh_img asset_path("laugh.png")
json.like_img asset_path("like.png")
json.love_img asset_path("love.png")
json.sad_img asset_path("sad.png")
json.wow_img asset_path("wow.png")


# REACTS LOGIC

laughs = 0
likes = 0
loves = 0
sads = 0
wows = 0

@post.reacts.each do |react| 
  if reaction.emoji_type == 'love'
    loves += 1
  elsif react.emoji_type == 'like'
    likes += 1
  elsif react.emoji_type == 'wow'
    wows += 1
  elsif react.emoji_type == 'laugh'
    laughs += 1
  elsif react.emoji_type == 'sad'
    sads += 1
  end
end

# react counts
json.laughs laughs
json.likes likes
json.loves loves
json.sads sads
json.wows wows
json.total_reacts (laughs + likes + loves + sads + wows)