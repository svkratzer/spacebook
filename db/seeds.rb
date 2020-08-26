# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

NUM_USERS = 20
NUM_POSTS_PER_USER = 10


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
  "https://media.distractify.com/brand-img/uUHiKVnj-/0x0/so_104_still-05-2-1588988675988.jpg"
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

NUM_USERS.times do 
  user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: rand.to_s,
    password: "123456",
    birthday: "1996-12-02",
    profile_url: profile_urls.sample,
    cover_url: cover_urls.sample,
    bio: "This is a randomly seeded user."
  )

  user.save!

  NUM_POSTS_PER_USER.times do 
    Post.create(
      author_id: user.id, 
      wall_id: user.id, 
      body: Faker::Movies::HitchhikersGuideToTheGalaxy.quote
    )
  end
end
