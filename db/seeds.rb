Concert.destroy_all
User.destroy_all
Band.destroy_all
Venue.destroy_all


User.create!(admin: true, email: 'test', password: 'test', promotion_interest: false, username: 'David')

fordCenter = Venue.create!(name: 'Ford Wyoming Center', address: '', city: 'Casper', zip: 307, state: 'WY', description: 'The Ford Wyoming Center (formerly known as the Casper Events Center) is a multi-purpose arena in Casper, Wyoming, in the United States. The arena was built in April 1982. It seats 8,395 for ice hockey and indoor football games, 8,842 for basketball games, and up to 9,700 for concerts', website: '')

casperEvents = Venue.create!(name: 'Casper Events Center', address: '', city: 'Casper', zip: 307, state: 'WY', description: 'The Ford Wyoming Center (formerly known as the Casper Events Center) is a multi-purpose arena in Casper, Wyoming, in the United States. The arena was built in April 1982. It seats 8,395 for ice hockey and indoor football games, 8,842 for basketball games, and up to 9,700 for concerts', website: '')

oilCity = Venue.create!(name: 'Oil City Beer Company', address: '', city: 'Casper', zip: 307, state: 'WY', description: 'Brewery with live music in Casper', website: '')

lincoln = Venue.create!(name: 'The Lincoln', address: '', city: 'Cheyenne', zip: 307, state: 'WY', description: 'Venue in Cheyenne. Hosts private events. There is no reserved seating, except for those guests who require ADA seating. The main floor of our venue is all standing room only. The upper balcony has the original theatre seats for those who want to sit. The lower balcony is tiered concrete stadium style seating that you can either stand at, or sit on. Getting here early is the only way to secure your favorite spot. (But don’t worry, there’s not a bad spot in the house!)', website: '')

outlaw = Venue.create!(name: 'Outlaw Saloon', address: '', city: 'Cheyenne', zip: 307, state: 'WY', description: "Outlaw Saloon has been a Cheyenne, WY staple for over 23 years. We've become a favorite of locals and visitors from around the world. No matter where you hail from, you'll enjoy your time with us. Stop by our bar today to enjoy daily drink deals and live music.", website: '')

cheyenneCivic = Venue.create!(name: 'Cheyenne Civic Center', address: '', city: 'Cheyenne', zip: 307, state: 'WY', description: "We are a team of artists, creatives, tech masters, data analysts, and forward thinkers. Our team specializes in every phase of the event planning process from event planning and marketing to production, execution, and event management. With 20 years behind us, you can expect an event with our name on it to be the highest quality experience. We are events.", website: '')

railspur = Venue.create!(name: 'Railspur', address: '', city: 'Cheyenne', zip: 307, state: 'WY', description: "Part of Cheyenne’s original (and literal) “West Edge,” the Railspur property began its life as an actual railroad spur for the Military Department, used to access what’s now F.E. Warren Air Force Base. A century and some change later, the Railspur embodies both the entrepreneurial spirit that earned Cheyenne its nickname—”Magic City of the Plains”—and the “roll up your sleeves and s make it happen” mentality that’s spurring growth in the West Edge district today.", website: '')

centerTheater = Venue.create!(name: 'Center Theater', address: '', city: 'Jackson', zip: 307, state: 'WY', description: "At Center for the Arts, our mission is rooted in connecting our creative community. Inherent in that is connecting all individuals - regardless of identity, ability, background, or personal experience - to opportunities that allow us to share, experience, and enjoy the arts.", website: '')

centerForArts = Venue.create!(name: 'Center for the Arts', address: '', city: 'Jackson', zip: 307, state: 'WY', description: "At Center for the Arts, our mission is rooted in connecting our creative community. Inherent in that is connecting all individuals - regardless of identity, ability, background, or personal experience - to opportunities that allow us to share, experience, and enjoy the arts.", website: '')

millionDollarBar = Venue.create!(name: 'Million Dollar Cowboy Bar', address: '', city: 'Jackson', zip: 307, state: 'WY', description: "Wyoming's landmark watering hole. The Million Dollar Cowboy Bar is located on the town square in the heart of Jackson. The Million Dollar Cowboy Bar is a unique Western drinking and entertainment venue that was established in 1937. True to its name, the Million Dollar Cowboy Bar is no ordinary bar. Countless celebrities, presidents, royalty, cowhands, as well as people from all walks of life, have enjoyed great fun within the walls of the iconic Million Dollar Cowboy Bar.", website: '')

mangyMoose = Venue.create!(name: 'Mangy Moose', address: '', city: 'Jackson', zip: 307, state: 'WY', description: "The Mangy Moose Saloon stage has hosted legendary artists like Taj Mahal, Arlo Guthrie, and Kris Kristofferson, and modern greats like Hozier, Ben Harper, and Galactic. We have free live music daily during the summer and winter seasons alongside shows with big name headliners. Whatever kind of music you like to get down to: you'll find it at the Moose!", website: '')

gryphon = Venue.create!(name: 'Gryphon Theatre', address: '', city: 'Laramie', zip: 307, state: 'WY', description: "", website: '')

ruffedUpDuck = Venue.create!(name: 'Ruffed Up Duck Saloon', address: '', city: 'Laramie', zip: 307, state: 'WY', description: "Ruffed Up Duck Saloon hosts concerts for a wide range of genres from artists such as Pretend Friend, David Miner, and Chasen Wayne And The Hony Tonk Machine, having previously welcomed the likes of Alex Teller, Sweet Virginia (Colorado), and Cary Morin.", website: '')

buckhorn = Venue.create!(name: 'Buckhorn Bar', address: '', city: 'Laramie', zip: 307, state: 'WY', description: "", website: '')

beacon = Venue.create!(name: 'Beacon Cup', address: '', city: 'Mills', zip: 307, state: 'WY', description: "", website: '')

robertPeck = Venue.create!(name: 'Robert A Peck Art Center', address: '', city: 'Riverton', zip: 307, state: 'WY', description: "The Robert A. Peck Arts Center offers a full slate of cultural activities year round. Professional touring groups and visiting visual artists enhance the concerts, exhibits and theater productions by CWC visual and performing artists.", website: '')

misc = Venue.create!(name: 'Misc', address: '', city: '', zip: 307, state: 'WY', description: "Random venues with inconsistant concerts", website: '')


Concert.create!(date: "03092023", name: "Jason Isbell and The 400 Unit", price: "free", website: "https://www.jambase.com/show/jason-isbell-and-the-400-unit-center-theater-20230309",venue:centerTheater, image:"https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2015/07/jason-isbell-400-unit-2020-press-1200x675.jpg",bands: "Jason Isbell and The 400 Unit",description:"Jason Isbell and The 400 Unit is Jason Isbell's second full-length album, and first album released with The 400 Unit as accompanying band. The deluxe version of the album contains an additional four tracks. On October 18, 2019, the album was re-released with remixing done by Dave Cobb and remastering done by Pete Lyman.")
 
Concert.create!(date: "02202023",
  name: "Pretend Friend",
  price: "free",
  website: "https://www.jambase.com/show/pretend-friend-ruffed-up-duck-saloon-20230220",
  venue: ruffedUpDuck,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2022/01/pretend-friend_1899x994_jb_cropped-1200x675.jpg",
  bands: "Pretend Friend",
  description:
   "Pretend Friend is tight, right, genre-defying progressive bluegrass out of Wichita, Kansas. Releasing new music and touring since 2017, Pretend Friend sounds like the quick-pickin' offspring of Robert Plant and the Stanley Brothers. Their performances are high-energy, and each set is loaded with improv jams and harmonies.  Pretend Friend is songwriter and guitarist Grant Boesen, Kansas champion mandolinist Evan Ogborn, bassist and sound engineer Brody Wellman, and banjoist Garrett Briggeman")

Concert.create!(date: "03112023",
  name: "The Pickin' Pear",
  price: "free",
  website: "https://www.jambase.com/show/the-pickin-pear-railspur-20230311",
  venue: railspur,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2023/02/the-pickin8217-pear-1200x675.png",
  bands: "The Pickin' Pear",
  description:
   "Tia Martini and Leon Elam create an original modern sound on two traditional instruments. Together the Pickin’ Pear take the banjo and ukulele down the road of folk, rock, and bluegrass.  Sometimes the ukulele will launch you straight into outer space! A blend of top-notch songwriting and improvisational jamming makes each performance exciting and new. The Pickin’ Pear are happy to bring their organic and all-natural blend of folk 'n' roll to stages across the U.S.")

Concert.create!(date: "03212023",
  name: "Pinback",
  price: "25",
  website: "https://www.jambase.com/show/pinback-center-for-the-arts-20230321",
  venue: centerForArts,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/pinback-ticketmaster-ram-1200x675.jpg",
  bands: "Pinback",
  description:
   "Tia Martini and Leon Elam create an original modern sound on two traditional instruments. Together the Pickin’ Pear take the banjo and ukulele down the road of folk, rock, and bluegrass.  Sometimes the ukulele will launch you straight into outer space! A blend of top-notch songwriting and improvisational jamming makes each performance exciting and new. The Pickin’ Pear are happy to bring their organic and all-natural blend of folk 'n' roll to stages across the U.S.")

Concert.create!(date: "03252023",
  name: "Sidewalk Prophets",
  price: "25",
  website: "https://www.jambase.com/show/sidewalk-prophets-cheyenne-hills-church-20230325",
  venue: misc,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/sidewalk-prophets-ticketmaster-ram-1200x675.jpg",
  bands: "Sidewalk Prophets",
  description:
   "Sidewalk Prophets is more than just music, and more than just entertainment we are family.  The band has a strong desire to make everyone feel loved and valued and the goal of this new on-line store is to make sure each person feels special.  We're thankful for your support of this ministry")

Concert.create!(date: "04012023",
  name: "Teenage Bottlerocket",
  price: "35",
  website: "https://www.jambase.com/show/teenage-bottlerocket-gryphon-theatre-20230401",
  venue: gryphon,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2021/08/jambase-default-band-image-bw-1200x675.png",
  bands: "Teenage Bottlerocket",
  description:
   "Teenage Bottlerocket is an American punk rock band formed in Laramie, Wyoming in 2000.[1] The band was formed by twin brothers Ray and Brandon Carlisle, following the dissolution of their previous band, Homeless Wonders. The band's music is heavily influenced by guitarist and co-vocalist Kody Templeman's other band, The Lillingtons, and punk rock acts such as Ramones, Screeching Weasel, Green Day, The Bouncing Souls, and Misfits; Their music has been referred to as \"Ramones-core\", \"Weasel-core\" and \"leather jacket punk\".")

Concert.create!(date: "04072023",
  name: "Third Eye Blind",
  price: "50",
  website: "https://www.jambase.com/show/third-eye-blind-cheyenne-civic-center-20230407",
  venue: cheyenneCivic,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2017/04/third-eye-blind-third-eye-blind-6528b9ea-e779-4fe4-bac8-aa3a0960a664_265511_RETINA_LANDSCAPE_16_9-1200x675.jpg",
  bands: "Third Eye Blind",
  description:
   "Third Eye Blind is an American rock band formed in San Francisco, California, in 1993. After years of lineup changes in the early and mid-1990s, the songwriting duo of Stephan Jenkins and Kevin Cadogan signed the band's first major-label recording contract with Elektra Records in 1996. The band released their self-titled debut album in 1997, with the band largely consisting of Jenkins (vocals, rhythm guitar), Cadogan (lead guitar), Arion Salazar (bass guitar), and Brad Hargreaves (drums). Shortly after the release of the band's second album in 1999, Blue, with the same line-up, Cadogan was released from the band under controversial circumstances.")

Concert.create!(date: "04112023",
  name: "Journey",
  price: "60",
  website: "https://www.jambase.com/show/journey-ford-wyoming-center-20230411",
  venue: fordCenter,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/journey-ticketmaster-ram-1200x675.jpg",
  bands: "Journey",
  description:
   "Journey is an American rock band formed in San Francisco in 1973 by former members of Santana, Steve Miller Band, and Frumious Bandersnatch. The band currently consists of guitarist/vocalist Neal Schon (the longest-serving original member), keyboardists/vocalists Jonathan Cain and Jason Derlatka, drummer/vocalist Deen Castronovo, bassist Todd Jensen, and lead vocalist Arnel Pineda.")

Concert.create!(date: "04272023",
  name: "John Butler",
  price: "25",
  website: "https://www.jambase.com/show/john-butler-center-for-the-arts-20230427",
  venue:centerForArts,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2023/01/john-butler-1200x675.png",
  bands: "John Butler",
  description:
   "The John Butler Trio has recorded five studio albums including three that have reached number one on the Australian charts: Sunrise Over Sea, Grand National and April Uprising. His recordings and live performances have met with critical praise and have garnered awards from the Australian Performing Right Association and Australian Recording Industry Association.")

Concert.create!(date: "05042023",
  name: "Aaron Lewis",
  price: nil,
  website: "https://www.jambase.com/show/aaron-lewis-cheyenne-civic-center-20230504",
  venue: cheyenneCivic,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2017/02/aaron-lewis-aaron-lewis-66cf1cd9-b304-4669-9e6d-2f7da28f8f22_296471_TABLET_LANDSCAPE_LARGE_16_9-1200x675.jpg",
  bands: "Aaron Lewis",
  description: nil)

Concert.create!(date: "05062023",
  name: "Aaron Lewis",
  price: nil,
  website: "https://www.jambase.com/show/aaron-lewis-ford-wyoming-center-20230506",
  venue: fordCenter,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2017/02/aaron-lewis-aaron-lewis-66cf1cd9-b304-4669-9e6d-2f7da28f8f22_296471_TABLET_LANDSCAPE_LARGE_16_9-1200x675.jpg",
  bands: "Aaron Lewis",
  description: nil)

  Concert.create!(date: "06152023",
  name: "Michael Charles",
  price: nil,
  website: "https://www.jambase.com/show/michael-charles-buckhorn-bar-20230615",
  venue: buckhorn,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2022/04/michael-charles-1649777501-1200x675.png",
  bands: "Michael Charles",
  description: nil)

Concert.create!(date: "06252023",
  name: "Giovannie & The Hired Guns",
  price: nil,
  website: "https://www.jambase.com/show/giovannie-the-hired-guns-the-lincoln-20230625",
  venue: lincoln,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2023/01/giovannie-038-the-hired-guns-1200x675.png",
  bands: "Giovannie & The Hired Guns",
  description: nil)

Concert.create!(date: "07182023",
  name: "Whiskey Myers",
  price: nil,
  website: "https://www.jambase.com/show/whiskey-myers-ford-wyoming-center-20230718",
  venue: fordCenter,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/whiskey-myers-ticketmaster-ram-1200x675.jpg",
  bands: "Whiskey Myers",
  description: nil)

Concert.create!(date: "09162023",
  name: "Goo Goo Dolls",
  price: nil,
  website: "https://www.jambase.com/show/goo-goo-dolls-casper-events-center-20230916",
  venue: casperEvents,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/goo-goo-dolls-ticketmaster-ram-1200x675.jpg",
  bands: "Goo Goo Dolls",
  description: nil)

Concert.create!(date: "03052023",
  name: "Andy Frasco & The U.N.",
  price: "25",
  website: "https://www.jambase.com/show/andy-frasco-the-u-n-mangy-moose-20230305",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532385973917708354",
  bands: "Andy Frasco & The U.N.",
  description:
   "Genre: Funk/Disco/Punk/Blues  Andy Frasco has been married to the music industry since before he could grow facial hair. At just sixteen, Frasco worked for labels like Drive-Thru Records and Capitol, booking nationwide tours for his pop-punk heroes and wheeling and dealing on calls he’d take on the sly during lunch. He’s been on road since he was 19, played over 250 shows per year for more than decade, lived on bad bar food, and slept in vans, and now, after more than a decade on the musical grind, he’s finally finding himself. He’s not a frat boy (he barely went to college) and he’s not Mr. Cocaine anymore (his old nickname in Germany), he’s a musician — and he’s ready to share that with the world. “People stopped thinking of me as just this party boy, one-trick pony who crowd-surfs and throws organized chaos on stage,” he says. “They started listening to my words.”  Frasco grew up a Warped Tour kid in L.A., idolizing flashy frontmen who dove into the waiting arms of their frenzied fans. He wanted to be part of the music industry, by hook or by crook, and started out mapping his future with an eye toward industry bigwigs like David Geffen. When the labels stopped calling, however, the 19-year-old blew his Bar Mitzvah money on a van and started traveling around the country with a handful of half-songs he wrote while teaching himself piano, collecting musicians on the road — like a modern-day Pied Piper — to form his appropriately named band, Andy Frasco & the U.N. The current lineup includes Shawn Eckels (guitar), Andee \"Beats\" Avila (drums, vocals), Floyd Kellogg (bass guitar), and Ernie Chang (Saxophone).")

Concert.create!(date: "02172023",
  name: "Bivwack & NASAYA",
  price: "22",
  website: "https://www.prekindle.com/event/94374-bivwack-and-nasaya-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768849252405",
  bands: "Bivwack & NASAYA",
  description:
   "Bivwack (F.K.A Head to Head) are back again with their visual heavy live electronic show. Joining them in the coveted co-headline spot is Foreign Family Collective's artist: NASAYA. Born & raised on Reunion Island (off the coast of Madagascar), Berklee College of Music graduate, and recently off tour with ODESZA; we are very excited to welcome this French speaking producer to Jackson Hole for the first time. Click here to listen to his new EP 'RÉVES. If you saw Bivwack & ford. last year then you know this is not one to miss.   Plus a special opening set by #ashtag #ashtag. ")

Concert.create!(date: "03022023",
  name: "Metalachi",
  price: "22",
  website: "https://www.prekindle.com/event/86222-metalachi-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532385973917541906",
  bands: "Metalachi",
  description: "\"A perfect merging of Metal & Mariachi\" - Howard Stern")

Concert.create!(date: "03072023",
  name: "Twiddle",
  price: "32 - $132",
  website: "https://www.prekindle.com/event/88146-twiddle-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532385973978691380",
  bands: "Twiddle",
  description:
   "$1 from every ticket sold will be donated to the The White Light Foundation!  Every Last Leaf , the fifth full-length studio album from Vermont quartet Twiddle, is a bold exploration of the cyclical nature of life. Propelled by constant evolution in its 18 years touring, the band —Mihali Savoulidis [vocals, guitar], Ryan Dempsey [keys, organ, synth], Brook Jordan [drums], and Zdenek Gubb [bass], welcomes a musical rebirth, leaning heavily on enigmatically stoic songwriting in lieu of the affably saccharine. Longtime listeners can expect an elevated presentation of Twiddle’s trademark sound, delicately orbiting the worlds of funk, jazz, rock, reggae, and bluegrass.  “Every Last Leaf is a metaphor for life,” Mihali explains. “When a leaf falls to the ground, something will grow from it. Everything is part of this grand circle. In the music, we’re exploring all of life’s sides—from the sad and angry to the proud and happy.”  Known for jaw-dropping live performances, the group has repeatedly sold out some of the most legendary venues in the world, including Red Rocks Amphitheatre and Capitol Theatre. Plus, they’ve ignited festivals such as Bonnaroo and Electric Forest in addition to launching and headlining their own annual extravaganza Tumble Down Festival. Along the way, they have built a powerful catalog highlighted by the 2017 double-disc epic Plump (Chapters 1 & 2). Thus far, they’ve also gathered over 100 million streams and counting. Throughout 2021, Twiddle wrote and recorded Every Last Leaf. For the first time, they teamed up with producer Clint Bierman behind-the-board, recording in Sugar Shack, Mihali’s home studio, and Clint’s own spot.   “It was a blast,” smiles Mihali. “Having a good time was important to all of us. It was more relaxed with a lot less pressure. We’d never worked with a producer before. We tried it out with Clint, vibed with him, and went with it. We expanded the sound and added a lot of layers. There are also three- and four-part vocal harmonies, which we’ve never really done in the past. It was a different process.”  In the end, Twiddle have creatively found their way on Every Last Leaf.  “When you listen to this, I hope you experience the beauty we did,” he leaves off. “If you feel anything at all, mission accomplished. There are a lot of moments on this album that tie up the elements of life. It’s real.”")

Concert.create!(date: "03172023",
  name: "The Great Mountain Groove ft. Sicard Hollow, The Sweet Lillies, and Pixie & The Partygrass Boys",
  price: "20",
  website: "https://www.prekindle.com/event/72264-the-great-mountain-groove-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768811697222",
  bands: "The Great Mountain Groove ft. Sicard Hollow, The Sweet Lillies, and Pixie & The Partygrass Boys",
  description:
   "Join us at the Mangy Moose for three incredible Bluegrass bands!  Sicard Hollow:  Nashville’s psychedelic punk-grass rockers, Sicard Hollow, grew up sick of any existing institution telling them who and what to be. Now, as they navigate adulthood, they’re equally tired of the music institutions telling them what their music should sound like— so they dunked it in patchouli and a skate-and-destroy ethos that brings an enduring sound into the modern age.  -  The Sweet Lillies' music is, first and foremost, heartfelt and collaborative.  Those defining traits are given life by the trio of musicians who make up the Lillies, Julie Gussaroff, Becca Bisque, and Dustin Rohleder, who have combined their individual strengths together to deliver powerful narratives of life in song.  With their acoustic string-band lineup of guitar, viola, and upright bass given flight by ethereal, vocal harmonies that float like a dream, the Sweet Lillies' music has an old-time soul with a forward-looking eye.  Over the years they have been joined onstage by a number of legendary performers including, Sam Bush, George Porter Jr., Peter Rowan, Sally Van Meter, Andy Hall from the Infamous Stringdusters, Kyle Hollingsworth and Jason Hahn from the String Cheese Incident, Jennifer Hartswick, and Natalie Cressman from the Trey Anastasio Band, among many others.  Andy Thorn from Leftover Salmon who has sat in on many of those live adventures says, “It’s always a joy to play with the Sweet Lillies. Over the years, I’ve seen them evolve from a folk-and-bluegrass group into a genre-bending powerhouse. Today, at a Lillies show, you’ll hear everything from their beautiful, soulful originals, to creative reinventions of your favorite 90s hip-hop tracks. They’re always ready to have fun - on stage and off - without losing an ounce of their professionalism.”  -  Pixie and The Partygrass Boys are hailed as “the hottest band in the Wasatch” by the Intermountain Acoustic Music Association, Pixie and The Partygrass Boys is composed of lifelong professional musicians drawn together by a common love of bluegrass and skiing in the Wasatch. Featuring soulful, often harmonic vocals and solid strings and rhythm, this tight-knit crew was born out of the belly of a warm cabin after a long day on the slopes- drinking whiskey and singing into the night. With a high energy sound and a love for silly outfits, they travel the land spreading the gospel of whiskey, chickens, and fun for everyone.")

Concert.create!(date: "04072023",
  name: "Daniel Donato's Cosmic Country",
  price: "25",
  website: "https://www.prekindle.com/event/68816-daniel-donato-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532385974068924561",
  bands: "Daniel Donato's Cosmic Country",
  description:
   "When people first meet Daniel Donato, they’re not fully braced for this walking tornado of creative energy. “They think there’s something that tips the scale in ways they don’t understand,” says Donato about his over-the-top, slightly manic vibe. “But what actually tips the scale is the amount of thought and analysis I put into my work and art, all of which is taken from the lessons of my life.”  Donato, a 25-year-old Nashville native, has distilled those life lessons into his debut album, A Young Man’s Country, his proper introduction to the general musical audience. Recorded at Nashville’s Sound Emporium in a mere two days and produced by guitar-ace Robben Ford, the record weaves outlaw country, Grateful Dead-style Americana, and first-rate songwriting into a singular form Donato calls “21st-century cosmic country.”   Around the time he turned 18, one of Donato’s high-school teachers, a serious music lover who had seen his student play at Robert’s, gave him a Grateful Dead box set. It was another eureka moment for the guitarist. His love for the Dead may have been ignited much earlier by virtue of the fact that his mother was a bona fide Deadhead who followed the group on tour when she was pregnant with the future guitarist, but it was that collection that changed the way he looked at music. “It gave me a tie to all of the classic country gold I’d been working down at the honky-tonks each weekend,” he said. “Grateful Dead and Merle Haggard had always lived in my heart, but now, the link was made, and I had a vision on how to keep it alive for this generation that I am coming from.”   Incubated to the sounds of the Dead, educated by some of Nashville’s finest players, and having more than 2,000 shows under his belt and a social media presence, Daniel Donato is indeed a millennial whirligig of creative fire. He’s been dabbling in professional music since the age of 14 and yet he’s just getting started. A Young Man’s Country is the portrait of a restless artist as a young man, one whose story is singular and is still in its exciting, early chapters -- and as this effort shows, the future is indeed cosmic. ")

Concert.create!(date: "02192023",
  name: "KHOL Presents: The Grouch & Eligh",
  price: "22",
  website: "https://www.prekindle.com/event/84448-grouch-and-eligh-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768818529653",
  bands: "KHOL Presents: The Grouch & Eligh",
  description:
   "Independent hip hop royalty and Co-founders of Living Legends, The Grouch & Eligh are known for captivating their listeners with their down to earth and truthfully poignant raps, electrifying live performances, and stellar production. The Grouch & Eligh have released over twenty projects within their respective solo careers, as well as a duo. The Grouch & Eligh have toured extensively over the course of their career gracing stages across the continental US, Europe, Japan, and Australia.")

Concert.create!(date: "03242023",
  name: "Duane Betts & Palmetto Motel",
  price: "25",
  website: "https://www.prekindle.com/event/14155-duane-betts-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768931116768",
  bands: "Duane Betts & Palmetto Motel",
  description:
   "Duane Betts is an American guitarist and singer-songwriter.  The Sarasota, Florida native cut his teeth as a teen sitting-in regularly with Rock and Roll Hall of Fame inductees, The Allman Brothers Band, before relocating to Southern California and leading rock outfits Backbone69 and Whitestarr.  Betts next spent nearly a decade playing guitar alongside his father, Dickey Betts, in his group, Great Southern.  As well, he was a touring guitarist for folk-rockers Dawes, and a member of the brief supergroup, Jamtown, featuring G. Love, Donovan Frankenreiter, and Cisco Adler.     In 2018, Betts released his debut, Sketches of American Music, and toured as a guest of the Devon Allman Project.  At year’s end Betts announced the formation of The Allman Betts Band, officially uniting with Allman, and with Berry D. Oakley, son of the late Allman Brothers Band founding bassist Berry Oakley.  The group issued two albums- 2019’s Down to the River and 2020’s Bless Your Heart- before announcing its hiatus in 2022.  Currently Betts is prepping a second solo album, furthering his impassioned six-string stories reflecting a life and a history steeped in blues, rock, and country music tradition.")

Concert.create!(date: "03292023",
  name: "MarchFourth",
  price: "25",
  website: "https://www.prekindle.com/event/82989-marchfourth-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768805586257",
  bands: "MarchFourth",
  description:
   "MarchFourth is a joy-inducing force of entertainment, celebrating their 20th Anniversary this year. The colorful explosion of brassy funk, rock, and jazz is all about the groove. This larger-than-life group of 15 musicians, dancers and acrobats brings a spirit of celebration wherever they go. MarchFourth is, in a word, FUN!   With exceptional musical quality and a visual kaleidoscope of performers, MarchFourth is a spectacle of high-energy compositions, colorful costumes, and irresistible charisma! M4 has been seen on stages from ESPN’s Espy Awards to festivals like Wakarusa, Bumbershoot, and High Sierra Music Fest, to world-class venues like The Kennedy Center, Hollywood Bowl, The Fillmore, and even a cultural exchange tour to China, sponsored by the US State Department.")

Concert.create!(date: "02232023",
  name: "Riley Green",
  price: "free",
  website: "https://www.jambase.com/show/riley-green-million-dollar-cowboy-bar-20230223",
  venue: millionDollarBar,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/riley-green-ticketmaster-ram-1200x675.jpg",
  bands: "Riley Green",
  description:
   "Rolling Stone hailed his musical perspective as “Drinks-in-the-air Nineties country at an Alabama vs. Auburn tailgate,” and that is just the type of energy fans have come to expect from Riley Green. Raised on the sounds of traditional Country, Bluegrass, and Southern Gospel music, the Jacksonville, AL native learned the spirit of songwriting and performing at a young age while spending time with his grandfather, Bufford Green, who ran the Golden Saw Music Hall. That stage laid a foundation for the songs Riley would craft in the years to come and values learned from another generation, including the PLATINUM certified “I Wish Grandpas Never Died,” which he shares co-writing credits posthumously alongside his two grandfathers and People praised “might take him to a whole new stratosphere. MusicRow praised his “great country vocal, honest presentation and true-to-life lyrics,” which are evident on his debut album DIFFERENT ‘ROUND HERE (BMLG Records) featuring the PLATINUM-certified hit No. 1 “There Was This Girl.” His BEHIND THE BAR collection with fan-favorite “If It Wasn’t For Trucks” and WE OUT HERE: LIVE followed as the 2020 ACM Awards New Male Artist of the Year has “brought country back to its roots: the blue collar sounds for the working man, by the working man” (Whiskey Riff). Named a CMT “Listen Up Artist,” Riley was also voted as one of the CRS 2020 New Faces and earned MusicRow’s Breakout Artist of the Year. In addition to his own headline dates, Riley is heading to Canada with Luke Combs this Fall. He has previously hit the road with Jason Aldean, Brad Paisley, Jon Pardi and Dierks Bentley")

Concert.create!(date: "02252023",
  name: "Tanner Usrey",
  price: "30",
  website: "https://www.jambase.com/show/tanner-usrey-outlaw-saloon-20230225",
  venue: outlaw,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2023/01/tanner-usrey-1200x675.png",
  bands: "Tanner Usrey",
  description:
   "Hailing from Prosper, TX, Tanner Usrey is an Emerging singer/songwriter with a vocal styling all his own. Since beginning his career, Tanner has developed into a soulful, Americana-rock artist that heart-wrenching lyrics and soul-touching vocals provide the cherry on top of his unforgettable melodies and hard-hitting sound.  Drawing inspiration from the rigors of touring life, Tanner’s most recent single, “Pick Up Your Phone” is a ruminative ballad about disconnection and balancing the give-and-take that comes with all relationships. His previous single \"Take Me Home\", is an invocation of committed love as Usrey deftly blends Americana and heartland rock influences with his distinctive, soul-tinged vocals.  As Tanner continues to grow, that momentum landed his single \"The Light\" on the Season 4 finale of Paramount Networks’ hit TV show, Yellowstone.")

Concert.create!(date: "03042023",
  name: "Black Jacket Symphony",
  price: "25-$30",
  website: "https://www.jambase.com/show/black-jacket-symphony-cheyenne-civic-center-20230304",
  venue: cheyenneCivic,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2023/01/black-jacket-symphony-1200x675.png",
  bands: "Black Jacket Symphony",
  description:
   "Remember putting on an album and listening from start to finish?  Relive that moment with a live concert experience unlike any other as The Black Jacket Symphony recreates a select classic album live in its entirety—note for note, sound for sound—plus a full set of greatest hits from the evening’s artist.  Over the past thirteen years, the Black Jacket Symphony has performed over 40 classic rock albums, bringing an incredible night of entertainment to over a million music lovers across the US.  The group of hand-picked musicians changes based upon the album being performed—and no sonic detail is overlooked, with the musicians doing whatever it takes to reproduce the album.  It’s a full night of rock and roll magic—plus a visual experience unlike any other.  Fans across the country flock to their shows—and once you see one, you won’t miss another!")

Concert.create!(date: "03242023",
  name: "Sidewalk Prophets",
  price: "25",
  website: "https://www.jambase.com/show/sidewalk-prophets-robert-a-peck-art-center-20230324",
  venue: robertPeck,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/sidewalk-prophets-ticketmaster-ram-1200x675.jpg",
  bands: "Sidewalk Prophets",
  description:
   "Sidewalk Prophets is more than just music, and more than just entertainment we are family.  The band has a strong desire to make everyone feel loved and valued and the goal of this new on-line store is to make sure each person feels special.  We're thankful for your support of this ministry")

Concert.create!(date: "03262023",
  name: "Sidewalk Prophets",
  price: "25",
  website: "https://www.jambase.com/show/sidewalk-prophets-tree-of-life-church-20230326",
  venue: misc,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2019/10/sidewalk-prophets-ticketmaster-ram-1200x675.jpg",
  bands: "Sidewalk Prophets",
  description:
   "Sidewalk Prophets is more than just music, and more than just entertainment we are family.  The band has a strong desire to make everyone feel loved and valued and the goal of this new on-line store is to make sure each person feels special.  We're thankful for your support of this ministry")

Concert.create!(date: "03302023",
  name: "Teenage Bottlerocket",
  price: "35",
  website: "https://www.jambase.com/show/teenage-bottlerocket-oil-city-beer-company-20230330",
  venue: oilCity,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2021/08/jambase-default-band-image-bw-1200x675.png",
  bands: "Teenage Bottlerocket",
  description:
   "Teenage Bottlerocket is an American punk rock band formed in Laramie, Wyoming in 2000.[1] The band was formed by twin brothers Ray and Brandon Carlisle, following the dissolution of their previous band, Homeless Wonders. The band's music is heavily influenced by guitarist and co-vocalist Kody Templeman's other band, The Lillingtons, and punk rock acts such as Ramones, Screeching Weasel, Green Day, The Bouncing Souls, and Misfits; Their music has been referred to as \"Ramones-core\", \"Weasel-core\" and \"leather jacket punk\".")

Concert.create!(date: "03172023",
  name: "The Sweet Lillies, Sicard Hollow and Pixie & The Partygrass Boys",
  price: "20",
  website: "https://www.jambase.com/show/the-sweet-lillies-mangy-moose-20230317",
  venue: mangyMoose,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2021/07/sweet-lillies-press-2021-1200x675.jpg",
  bands: "The Sweet Lillies, Sicard Hollow and Pixie & The Partygrass Boys",
  description:
   "HAILED AS \"THE HOTTEST BAND IN THE WASATCH\" BY THE INTERMOUNTAIN ACOUSTIC MUSIC ASSOCIATION, PARTYGRASS ISN'T EXACTLY BLUEGRASS, OR NEWGRASS, OR POP, OR PUNK, OR ROCK AND ROLL. THEY FALL SOMEWHERE IN BETWEEN IT ALL, AND THAT’S EXACTLY HOW THEY LIKE IT. DRAWING INFLUENCE FROM THE BLUEGRASS ROOTS OF APPALACHIA AND TRANSPORTING IT STRAIGHT TO THE WESTERN EDGE OF THE ROCKIES, PIXIE AND THE PARTYGRASS BOYS CREATE A UNIQUELY AMERICAN SOUND. INSPIRED BY LANDSCAPES FROM COAST TO COAST, THE GROUP COMBINES CLASSICAL TRAINING WITH JAZZ, BROADWAY, POP-PUNK, AND AN UNABASHED LOVE FOR HAVING A DAMN GOOD TIME.")

Concert.create!(date: "04072023",
  name: "The California Honeydrops",
  price: "30",
  website: "https://www.jambase.com/show/the-california-honeydrops-center-for-the-arts-20230407",
  venue: mangyMoose,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2015/06/cahoneydrops-1200x675.jpg",
  bands: "The California Honeydrops",
  description:
   "In 2022, the California Honeydrops celebrate their fourteenth year together with the forthcoming release of their latest studio album, Soft Spot. “This record is all about love and good lovin’ and other things that matter,” says frontman, vocalist, and multi-instrumentalist Lech Wierzynski of the new LP, which exhibits the Honeydrops’ unique musical style that draws from roots, Bay Area R&B, Southern soul, Delta blues, and New Orleans second line. “We continued the Honeydrops’ album tradition of bringing special musical guests to bless the studio with their magic,” adds drummer Ben Malament. “Sousaphones, strings, space echoes—it’s all here.” Soft Spot comes on the heels of Covers from the Cave, a cover album born out of pandemic livestream videos; live albums Remember When: Vol. 3 and Honeydrops Live 2019; and their first-ever double-album, Call It Home: Vol 1 & 2, in 2018, which No Depression called “a fun-filled, funky goodie basket for all occasions.”")

Concert.create!(date: "04152023",
  name: "Tyler Halverson",
  price: "35",
  website: "https://www.jambase.com/show/tyler-halverson-beacon-clup-20230415",
  venue: beacon,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2021/08/jambase-default-band-image-bw-1200x675.png",
  bands: "Tyler Halverson",
  description:
   "From a small town in South Dakota, Tyler Halverson’s unique style of country music takes inspiration from classic country and western music, while also looking ahead to the genre’s future. At the age of 20, Tyler moved to Nashville, to attend Belmont University where he studied music business and refined his songwriting craft. However, Tyler’s favorite thing about Nashville is leaving Nashville. Tyler finds joy in taking his songs on the road and playing for fellow hippies, cowboys, and everyone in between.")

Concert.create!(date: "02132023",
  name: "Willie Waldman Project feat. Stephen Perkins (Jane's Addiction) and live painter Norton Wisdom",
  price: "25",
  website: "https://www.prekindle.com/event/28319-willie-waldman-teton-village",
  venue: mangyMoose,
  image: "https://d1yf68t7nbxlyn.cloudfront.net/image/id/532452768763182800",
  bands: "Willie Waldman Project feat. Stephen Perkins (Jane's Addiction) and live painter Norton Wisdom",
  description:
   "Jazz Fusion band the Willie Waldman Project with live painter Norton Wisdom!  A childhood fascination with the trumpet led Willie Waldman to his high school band and eventually to a scholarship at Memphis State University. While in Memphis, he began playing in Beale St. clubs and eventually hooked up with Herman Green, Calvin Newborn, and Jimmie Ellis at Club Hardy. The band eventually morphed into Freeworld, which was a fusion band that met with some commercial success and toured with Stevie Ray Vaughn, the Robert Cray Band, Albert King, and Joe Cocker.  In 1994, Waldman decided to relocate to California. A friend, David Aron, was working as an engineer at Death Row Studios and helped Waldman get his first rap gig, playing on a track from a Snoop Doggy Dog album. That job led to several others, and as a result, Waldman's trumpet can be heard on albums by Warren G., Sublime, Tupac Shakur, Jodeci, Salt & Pepa, and the Eastsidaz. In 1997, Waldman met Perry Farrell and performed on two of his albums. Those projects helped him to come in contact with Stephen Perkins and Bob Wasserman, both of whom used Waldman as a studio musician on their recordings. Waldman has also played with Janes Addiction, moe., Umphreys McGee and Rat Dog.")

Concert.create!(date: "02172023",
  name: "lespecial",
  price: "25",
  website: "https://www.jambase.com/show/lespecial-the-lincoln-20230217",
  venue: lincoln,
  image:
   "https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2015/07/lespecial-press-2020-crop-1200x675.jpg",
  bands: "lespecial",
  description:
   "lespecial carve their own sonic path in modern music, creating their signature blend of “heavy future groove.” The power trio’s fresh synthesis of varied and divergent influences doesn’t underestimate the listener, reflecting a post-modern cultural climate in which fans have space on their aural palette for J Dilla, Radiohead, King Crimson and Tool.   Veering from hip-hop to metal, prog to house, pensive indie-rock to apocalyptic dub, leaving room for head banging and hip swaying alike, while still presenting a unified sound and vision")