json.id @post.id
json.body @post.body 
json.author_id @post.author_id
json.wall_id @post.wall_id
json.time @post.created_at.to_formatted_s(:long_ordinal)