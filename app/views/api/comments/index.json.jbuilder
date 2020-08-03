@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body 
    json.author_id comment.author_id
    json.post_id comment.post_id
    json.parent_comment_id comment.parent_comment_id
  end
end