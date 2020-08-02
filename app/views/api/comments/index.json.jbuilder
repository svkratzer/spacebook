@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body 
    json.author_id comment.author_id
    json.post_id comment.post_id
    json.parent_comment_id comment.parent_comment_id

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

    comment.reacts.each do |react| 
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
  end
end