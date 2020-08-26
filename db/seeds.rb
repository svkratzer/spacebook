# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

NUM_USERS = 21
NUM_POSTS_PER_USER = 10
NUM_FRIENDS_PER_USER = 20


User.destroy_all
Friend.destroy_all
Post.destroy_all
Comment.destroy_all

profile_urls = [
  "https://miro.medium.com/max/585/1*a-HXhG_PoTygNXqwp9KHMA.jpeg",
  "https://i.kym-cdn.com/photos/images/newsfeed/001/445/963/523.jpg",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/25/15/danny-devito.jpg",
  "https://media.makeameme.org/created/sad-because-i.jpg",
  "https://cdn.vox-cdn.com/thumbor/FUiZhxG5CqieDugP3dvkh_QpQ3c=/0x0:2000x1000/1400x933/filters:focal(654x138:974x458):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/59408999/Thanos_MCU.0.jpg",
  "https://pyxis.nymag.com/v1/imgs/0da/82e/439de12424201b9435632c44de7a9e847c-12-david-bowie.rsquare.w700.jpg",
  "https://pyxis.nymag.com/v1/imgs/487/637/8bc2a0835946a6d650a69e963e36544543-08-kanye-west.rsquare.w1200.jpg",
  "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
  "https://www.thespruce.com/thmb/MugBBmymvyMPbcO7UGTjDH_NreA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1146102607-b3491a355af94171aa8ac7b0aeec0616.jpg",
  "https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg",
  "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0Mjk3OTY4NDY2MzM5MTgy/rupaul-enters-the-late-show-with-stephen-colbert-taping-at-the-ed-sullivan-theater-on-june-23-2016-in-new-york-city-photo-by-ray-tamarragc-images-square.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/da/RuPaul_at_Dragcon_by_dvsross_%28cropped%29.jpg",
  "https://i.kym-cdn.com/entries/icons/original/000/016/289/Screen_Shot_2019-04-16_at_3.42.28_PM.png",
  "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/8b10a9280bd46b8874af9b5cadec91d5.jpg?itok=3V9YqePf",
  "https://vignette.wikia.nocookie.net/watchmen/images/b/b5/Rorschach_%28comic%29.jpg/revision/latest?cb=20191105041342",
  "https://i.pinimg.com/originals/46/6a/44/466a44b5bea895f14646589705ab62cd.jpg",
  "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/72LCRDBLGZFNFN2ESVARBVYLTY.jpg&w=1440",
  "https://media.distractify.com/brand-img/uUHiKVnj-/0x0/so_104_still-05-2-1588988675988.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
  "https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/2/7/1/0/ron-500x500.jpg",
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  "https://pmcdeadline2.files.wordpress.com/2016/03/ali-g.jpg?w=759"
]

cover_urls = [
  "https://i.pinimg.com/originals/91/98/eb/9198ebf13c4b2dd52d2306dd4a9bc3b4.jpg",
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg",
  "https://lh3.googleusercontent.com/proxy/z5fhlha1a8vTfHWrY6ENSX5XQKhXtzEoW3KJD1zt_Kxws_h8mvpZhpp_L6z3z_goBZeVUv6In7ZK_MqPLuZijW_orQGoVYvKVbdH0DiQa9MVScH5z3Qm6yOzF7RV-i0XkyqT",
  "https://torange.biz/photofx/136/8/light-blur-frame-fragment-hearts-cover-facebook-136814.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO4BQFpkxEtLZKF4tXSUAYTe_sRy2yxXoi_Q&usqp=CAU",
  "https://i.pinimg.com/originals/61/2d/f7/612df70b3e9204d0f88428a5335f051b.png",
  "https://bookcoverzone.com/img/hero-slider/xnature_banner.jpg.pagespeed.ic.3CnyaWMjJG.jpg",
  "https://lh3.googleusercontent.com/proxy/pH0N6nTs0iTHVrZOi2m4XW256LNEyF6-yH8rheulfG4PVYmewb5cOQZLEJYGHMUprzL1fbkBOFRwnrKHrXGZg91kv-R6NqI-FlLFb8xnQ3X1bMbp0f7qiQCohf4yS4TCbvJj-fSeKO7SSCZjHw",
  "https://rooteto.files.wordpress.com/2012/04/1-nature-facebook-covers.jpg"
]

new_user_ids = []

# Create new users and add their IDs to the new_user_ids array
NUM_USERS.times do 
  user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: rand.to_s,
    password: "123456",
    birthday: "1996-12-02",
    profile_url: profile_urls.sample,
    cover_url: cover_urls.sample,
    bio: "This is a randomly generated user."
  )
  user.save!
  new_user_ids << user.id
end

# Create a few randomly generated posts to mix things up a bit...
NUM_RANDOM_POSTS = NUM_USERS * 5
NUM_RANDOM_POSTS.times do 
  Post.create(
      author_id: new_user_ids.sample, 
      wall_id: new_user_ids.sample, 
      body: Faker::TvShows::RickAndMorty.quote
    )
end

# Iterate over the new users and make them add posts to random, other users walls
new_user_ids.each do |id|
  # Create a post with a Hitchhikers reference
  NUM_POSTS_PER_USER.times do 
    Post.create(
      author_id: id, 
      wall_id: new_user_ids.sample, 
      body: Faker::Movies::HitchhikersGuideToTheGalaxy.quote
    )
  # Create a post with a Princess Bride reference
    Post.create(
      author_id: id, 
      wall_id: new_user_ids.sample, 
      body: Faker::Movies::PrincessBride.quote
    )
  end
end

# Create friends for users
new_user_ids.each_with_index do |id, index|
  count = 1
  NUM_FRIENDS_PER_USER.times do 
    Friend.create(
      friend_a_id: id,
      friend_b_id: new_user_ids[(index + count) % NUM_USERS]
    )
    count += 1
  end
end