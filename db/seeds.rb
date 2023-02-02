User.destroy_all
Band.destroy_all
Venue.destroy_all

User.create!(admin: true, email: 'tewkesbury@gmail.com', password: 'testing', promotion_interest: false)

Band.create!(name: 'Eagles', category: 'classic rock')
Band.create!(name: 'Lynyrd Skynyrd', category: 'rock')
Band.create!(name: 'Revivalist', category: 'funk rock')
Band.create!(name: 'George Straight', category: 'country')
Band.create!(name: 'Beethoven', category: 'classical')

Venue.create!(name: 'Lander Bar', address: '123 main st', city: 'Lander', zip: 82520, state: 'WY', description: 'small local bar', website: 'www.landerbar.com')
Venue.create!(name: 'Frontier Days', address: '1 road st', city: 'cheyenne', zip: 80500, state: 'WY', description: 'Biggest show in Wyoming. Three day festival.', website: 'www.frontierdays.com')
Venue.create!(name: 'Lander Presents', address: '5 city Park st', city: 'Lander', zip: 82520, state: 'WY', description: 'Summer concerts in city park', website: 'www.landerpresents.com')
Venue.create!(name: 'Ford Wyoming Center', address: '9 casper st.', city: 'Casper', zip: 82520, state: 'WY', description: 'Areana music venue in Casper, WY', website: 'www.fordwyomingcenter.com')

