Concert.destroy_all
User.destroy_all
Band.destroy_all
Venue.destroy_all


User.create!(admin: true, email: 'test', password: 'test', promotion_interest: false, username: 'David')

# Venue.create!(name: 'Lander Bar', address: '123 main st', city: 'Lander', zip: 82520, state: 'WY', description: 'small local bar', website: 'www.landerbar.com')
# Venue.create!(name: 'Frontier Days', address: '1 road st', city: 'cheyenne', zip: 80500, state: 'WY', description: 'Biggest show in Wyoming. Three day festival.', website: 'www.frontierdays.com')
# Venue.create!(name: 'Lander Presents', address: '5 city Park st', city: 'Lander', zip: 82520, state: 'WY', description: 'Summer concerts in city park', website: 'www.landerpresents.com')
# Venue.create!(name: 'Ford Wyoming Center', address: '9 casper st.', city: 'Casper', zip: 82520, state: 'WY', description: 'Areana music venue in Casper, WY', website: 'www.fordwyomingcenter.com')
# Venue.create!(name: 'Jackson Hole Rendevous', address: '34 jackson hole.', city: 'Jackson', zip: 82520, state: 'WY', description: 'Free music venue in Jackson, WY', website: 'www.fordwyomingcenter.com')


# Concert.create!(name: "Jackson Hole Rendevous", date: '03/31/2023', price: "free", website: "www.jacksonholerendevous.com", venue_id: 5, image:'https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:238/jb7production-uploads/2022/09/jackson-hole-2023_edited-1200x675.jpg')
# Concert.create!(name: "Lander Presents", date: '04/31/2023', price: "free", website: "landerpresents.com", venue_id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1SwzzXqEdT7os0qEUsjjyeH5j0JNouR3c-YQVXJNMQ&s')
# Concert.create!(name: "Frontier Days", date: '08/31/2023', price: "free", website: "www.frontierdays.com", venue_id: 2, image: 'https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:238/jb7production-uploads/2019/10/journey-ticketmaster-ram-1200x675.jpg')
# Concert.create!(name: "Jalan Crossland", date: '04/3/2023', price: "free", website: "www.jalancrossland.com", venue_id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1SwzzXqEdT7os0qEUsjjyeH5j0JNouR3c-YQVXJNMQ&s')
# Concert.create!(name: "Whiskey Mayer", date: '05/3/2023', price: "$30", website: "www.fordcenter.com", venue_id: 4, image: 'https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:238/jb7production-uploads/2019/10/whiskey-myers-ticketmaster-ram-1200x675.jpg')
# Concert.create!(name: "Snoop Dog", date: '7/3/23', price: "$80", website: "www.fordcenter.com", venue_id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1SwzzXqEdT7os0qEUsjjyeH5j0JNouR3c-YQVXJNMQ&s')
# Concert.create!(name: "Garth Broooks Tour", date: '9/9/23', price: "$5", website: "www.garthtours.com", venue_id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1SwzzXqEdT7os0qEUsjjyeH5j0JNouR3c-YQVXJNMQ&s')
# Concert.create!(name: "Lander Presents", date: '04/31/2023', price: "free", website: "landerpresents.com", venue_id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1SwzzXqEdT7os0qEUsjjyeH5j0JNouR3c-YQVXJNMQ&s')

