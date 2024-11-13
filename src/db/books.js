const books = {
  fiction: [
    {
      id: 1,
      title: "পদ্মা নদীর মাঝি",
      username: "Rafi",
      userpicture: "https://randomuser.me/api/portraits/men/2.jpg",
      author: "মানিক বন্দ্যোপাধ্যায়",
      page: "224",
      publisher: "Rokomari",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1423324946i/23519023.jpg",
      description:
        "As he interacts with various characters and confronts his life's difficulties, the novel delves into themes of human resilience, survival, and the impact of nature on human lives. It also portrays the oppressive social structures that keep people trapped in cycles of poverty. Manik Bandopadhyay's storytelling captures the raw beauty and hardships of riverine life, with a compassionate focus on the marginalized. the life and struggles of fishermen living by the Padma river.",
    },
    {
      id: 2,
      title: "দেবদাস",
      username: "Hasib",
      userpicture: "https://randomuser.me/api/portraits/men/3.jpg",
      author: "শরৎচন্দ্র চট্টোপাধ্যায়",
      page: "184",
      publisher: "Ananda Publishers",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522306734i/7623112.jpg",
      description:
        "Heartbroken, Devdas spirals into self-destructive behavior, turning to alcohol and developing a close relationship with Chandramukhi, a kind-hearted courtesan who falls in love with him. Despite her support, Devdas remains unable to move on from his love for Paro. His unresolved longing and excessive drinking ultimately lead to his tragic demise, marking *Devdas* as a tale of unfulfilled love, heartbreak, and the devastating effects of societal norms. explores themes of unfulfilled love, societal pressure, and self-destruction.",
    },
    {
      id: 3,
      title: "চাঁদের পাহাড়",
      username: "Tanvir",
      userpicture: "https://randomuser.me/api/portraits/men/4.jpg",
      author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      page: "275",
      publisher: "Rupa Publications",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1425818682i/7936528.jpg",
      description:
        "An adventure story of a young man’s journey to Africa and his encounter with the wilderness.",
    },
    {
      id: 4,
      title: "গোরা",
      username: "Mithun",
      userpicture: "https://randomuser.me/api/portraits/men/5.jpg",
      author: "রবীন্দ্রনাথ ঠাকুর",
      page: "336",
      publisher: "Visva-Bharati",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1346775032i/15989094.jpg",
      description:
        "A thought-provoking novel that examines identity, nationalism, and the social fabric of India during the British era.",
    },
    {
      id: 5,
      title: "অরণ্যের দিনরাত্রি",
      username: "Nabila",
      userpicture: "https://randomuser.me/api/portraits/women/1.jpg",
      author: "সুনীল গঙ্গোপাধ্যায়",
      page: "200",
      publisher: "Dey’s Publishing",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519281990i/17203961.jpg",
      description:
        "A story about friends exploring the unknowns of life during a journey into the forest.",
    },
    {
      id: 6,
      title: "আরণ্যক",
      username: "Rashid",
      userpicture: "https://randomuser.me/api/portraits/men/6.jpg",
      author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      page: "240",
      publisher: "Rokomari",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676811673i/3084276.jpg",
      description:
        "A novel that captures the beauty of the wilderness and the simple lives of people living close to nature.",
    },
    {
      id: 7,
      title: "কাবুলিওয়ালা",
      username: "Shahana",
      userpicture: "https://randomuser.me/api/portraits/women/2.jpg",
      author: "রবীন্দ্রনাথ ঠাকুর",
      page: "96",
      publisher: "Ananda Publishers",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348569460l/10330335.jpg",
      description:
        "A touching tale of the bond between a little girl and a Pathan trader, exploring themes of love and loss.",
    },
    {
      id: 8,
      title: "পথের পাঁচালী",
      username: "Arif",
      userpicture: "https://randomuser.me/api/portraits/men/7.jpg",
      author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      page: "352",
      publisher: "Dey’s Publishing",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1289978820i/8998592.jpg",
      description:
        "A beautifully crafted story that follows the struggles and dreams of a poor family in rural Bengal.",
    },
    {
      id: 9,
      title: "মেঘে ঢাকা তারা",
      username: "Sadia",
      userpicture: "https://randomuser.me/api/portraits/women/3.jpg",
      author: "শক্তি চট্টোপাধ্যায়",
      page: "160",
      publisher: "Rupa Publications",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518220568i/32721720.jpg",
      description:
        "A poignant story about the struggles of the middle-class and the complexities of human relationships.",
    },
    {
      id: 10,
      title: "রক্তকরবী",
      username: "Mehedi",
      userpicture: "https://randomuser.me/api/portraits/men/8.jpg",
      author: "রবীন্দ্রনাথ ঠাকুর",
      page: "128",
      publisher: "Visva-Bharati",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407928798i/22911245.jpg",
      description:
        "A play that allegorically represents human freedom, power, and the desire for liberation.",
    },

    {
      id: 11,
      title: "The Great Gatsby",
      username: "Prottoy",
      userpicture: "https://randomuser.me/api/portraits/men/1.jpg",
      author: "F. Scott Fitzgerald",
      page: "180",
      cover:
        "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
      description:
        "A novel that explores themes of decadence, idealism, and excess, The Great Gatsby is a critique of the American Dream.",
    },
    {
      id: 12,
      title: "1984",
      username: "Aria",
      userpicture: "https://randomuser.me/api/portraits/women/2.jpg",
      author: "George Orwell",
      page: "328",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
      description:
        "Orwell's dystopian vision of a totalitarian future is a powerful examination of the dangers of state control and surveillance.",
    },
    {
      id: 13,
      title: "To Kill a Mockingbird",
      username: "JohnDoe",
      userpicture: "https://randomuser.me/api/portraits/men/3.jpg",
      author: "Harper Lee",
      page: "281",
      cover: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
      description:
        "A story of racial injustice and childhood innocence set in the American South during the 1930s.",
    },
    {
      id: 14,
      title: "Brave New World",
      username: "Mia",
      userpicture: "https://randomuser.me/api/portraits/women/4.jpg",
      author: "Aldous Huxley",
      page: "268",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
      description:
        "A dystopian novel that explores a future society where individuality and freedom are suppressed in favor of conformity.",
    },
    {
      id: 15,
      title: "The Catcher in the Rye",
      username: "Alex",
      userpicture: "https://randomuser.me/api/portraits/men/5.jpg",
      author: "J.D. Salinger",
      page: "277",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
      description:
        "The story of Holden Caulfield, a teenager struggling with adolescence and identity in 1950s New York.",
    },
  ],
  nonFiction: [
    {
      id: 16,
      title: "Sapiens",
      username: "Sarah",
      userpicture: "https://randomuser.me/api/portraits/women/6.jpg",
      author: "Yuval Noah Harari",
      page: "443",
      cover: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
      description:
        "A narrative history of the human species, from the origins of Homo sapiens to the modern world.",
    },
    {
      id: 17,
      title: "Educated",
      username: "David",
      userpicture: "https://randomuser.me/api/portraits/men/7.jpg",
      author: "Tara Westover",
      page: "334",
      cover: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
      description:
        "A memoir about overcoming a restrictive upbringing in a survivalist family to pursue an education.",
    },
    {
      id: 18,
      title: "The Power of Habit",
      username: "Emily",
      userpicture: "https://randomuser.me/api/portraits/women/8.jpg",
      author: "Charles Duhigg",
      page: "371",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545854312i/12609433.jpg",
      description:
        "Exploring the science behind how habits form and how they can be changed for personal and professional success.",
    },
    {
      id: 19,
      title: "Becoming",
      username: "Michael",
      userpicture: "https://randomuser.me/api/portraits/men/9.jpg",
      author: "Michelle Obama",
      page: "448",
      cover: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
      description:
        "The memoir of the former First Lady, covering her roots, her time in the White House, and her advocacy work.",
    },
    {
      id: 20,
      title: "Thinking, Fast and Slow",
      username: "Anna",
      userpicture: "https://randomuser.me/api/portraits/women/10.jpg",
      author: "Daniel Kahneman",
      page: "499",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600933953i/55440946.jpg",
      description:
        "An exploration of the two systems of thought that drive human behavior: the fast, intuitive system and the slower, more logical system.",
    },
    {
      id: 21,
      title: "একাত্তরের দিনগুলি",
      username: "Sabbir",
      userpicture: "https://randomuser.me/api/portraits/men/9.jpg",
      author: "জাহানারা ইমাম",
      page: "320",
      publisher: "Ananya Publishers",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1289977897i/8998388.jpg",
      description:
        "A diary-based account of the 1971 Liberation War of Bangladesh, depicting the pain, struggle, and resilience of the people.",
    },
    {
      id: 22,
      title: "আমার দেখা নয়াচীন",
      username: "Rehana",
      userpicture: "https://randomuser.me/api/portraits/women/4.jpg",
      author: " বঙ্গবন্ধু শেখ মুজিবুর রহমান",
      page: "240",
      publisher: "Bangla Academy",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F935b848fc_195529.jpg&w=128&q=75",
      description:
        "Kazi Nazrul Islam’s travelogue of his visit to China, offering insights into the culture and society of the country.",
    },
    {
      id: 23,
      title: "বিপ্লবী আত্মকথা",
      username: "Imran",
      userpicture: "https://randomuser.me/api/portraits/men/10.jpg",
      author: " সরৎচন্দ্র দাস",
      page: "290",
      publisher: "Sahitya Prakash",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2FAtmakatha-Sarat_Chandra_Das-33fc3-321394.jpg&w=128&q=75",
      description:
        "The autobiography of Subhas Chandra Bose, detailing his thoughts, ideologies, and the revolutionary movement in India.",
    },
    {
      id: 24,
      title: "একটি জাতির আত্মপ্রতিষ্ঠা",
      username: "Kamal",
      userpicture: "https://randomuser.me/api/portraits/men/11.jpg",
      author: " মোস্তাক আহ্‌মাদ",
      page: "350",
      publisher: "Prothoma Prokashon",
      cover:
        "https://img.cf.rokomari.com/ProductNew20190903/260X372/imgrok0704_42222.GIF",
      description:
        "A detailed history of Bangladesh’s struggle for independence and the events leading up to the birth of the nation.",
    },
    {
      id: 25,
      title: "বাংলাদেশের স্বাধীনতা যুদ্ধ নারীর প্রত্যক্ষ অংশগ্রহন",
      username: "Farzana",
      userpicture: "https://randomuser.me/api/portraits/women/5.jpg",
      author: "আসমা পারভীন",
      page: "310",
      publisher: "Bangladesh Army Publications",
      cover:
        "https://img.cf.rokomari.com/ProductNew20190903/260X372/imgrok0602_21317.GIF",
      description:
        "A compilation of firsthand accounts from freedom fighters, providing a raw and honest portrayal of the Liberation War.",
    },
    {
      id: 26,
      title: "বিসর্জন",
      username: "Arifa",
      userpicture: "https://randomuser.me/api/portraits/women/6.jpg",
      author: "রবীন্দ্রনাথ ঠাকুর",
      page: "180",
      publisher: "Visva-Bharati",
      cover:
        "https://img.cf.rokomari.com/ProductNew20190903/260X372/Bisarjan_-Rabindranath_Tagore-66bbd-263528.jpg",
      description:
        "An exploration of the universe and human existence through Rabindranath Tagore’s perspective, blending philosophy and science.",
    },
    {
      id: 27,
      title: " চুপকথা রূপকথা",
      username: "Sujon",
      userpicture: "https://randomuser.me/api/portraits/men/12.jpg",
      author: " অহনা বিশ্বাস",
      page: "200",
      publisher: "Dey’s Publishing",
      cover:
        "https://img.cf.rokomari.com/ProductNew20190903/260X372/Chupkatha_Rupkatha-Ahona_Bishwas-0da28-322807.jpg",
      description:
        "A well-researched book that separates the myth from reality in the life of Netaji Subhas Chandra Bose.",
    },
    {
      id: 28,
      title: "আধুনিক জীবন ও বিজ্ঞান",
      username: "Mahbub",
      userpicture: "https://randomuser.me/api/portraits/men/13.jpg",
      author: "প্রফেসর ড. নিশীথ কুমার পাল",
      page: "220",
      publisher: "Ananya Publishers",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F84cded724_179926.jpg&w=128&q=75",
      description:
        "A nonfiction work that explores scientific developments and their impacts on modern Bengali society.",
    },
    {
      id: 29,
      title: "গ্রাফিক নভেল-১ : মুজিব ",
      username: "Nazmul",
      userpicture: "https://randomuser.me/api/portraits/men/14.jpg",
      author: "সেন্টার ফর রিসার্চ এন্ড ইনফরমেশন",
      page: "400",
      publisher: "University Press Limited",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F4c1b7edec_98287.jpg&w=128&q=75",
      description:
        "The autobiography of Sheikh Mujibur Rahman, offering deep insights into his life, struggles, and vision for Bangladesh.",
    },
    {
      id: 30,
      title: "বিপন্ন পৃথিবী: জল জলবায়ু ও জীবন ",
      username: "Sajeda",
      userpicture: "https://randomuser.me/api/portraits/women/7.jpg",
      author: " আজাদুর রহমান চন্দন",
      page: "210",
      publisher: "Bangla Academy",
      cover:
        "rokomari.com%2FProductNew20190903%2F130X186%2Ffde44be82ae4_33229.gif&w=128&q=75",
      description:
        "A book that delves into the mysteries of life and the natural world, written by one of the pioneering scientists of Bengal.",
    },
  ],
  fantasy: [
    {
      id: 31,
      title: "পিশাচ সমগ্র",
      username: "Arif",
      userpicture: "https://randomuser.me/api/portraits/men/20.jpg",
      author: "মুহম্মদ জাফর ইকবাল",
      page: "260",
      publisher: "Rokomari",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1717492297i/26040828.jpg",
      description:
        "ওয়ারউলফ অর্থাৎ বিশেষ বিশেষ রাতে মানুষের নেকড়ে হয়ে যাওয়ার কাহিনি নয়, আবার ব্রাম স্টোকারের অবিস্মরণীয় রক্তচোষা ‘ড্রাকুলা’ও নয়। পিশাচ কোনও মানুষ বা অপমানুষের কথা নয়, হঠাৎ-হঠাৎ স্বাভাবিক মানুষ থেকে ভয়ংকর রক্তপিপাসু পিশাচ হয়ে ওঠার হাড় হিম করা সব কাহিনি! অনীশ দেব অসামান্য দক্ষতার শীর্ষে পৌঁছে গেছেন তাঁর ’পিশাচ’ সিরিজের কাহিনিগুলিতে, যা পত্রপত্রিকায় বা বই হয়ে বেরোনোর সঙ্গে সঙ্গে তাঁর অসংখ্য গুণগ্রাহী পাঠক-পাঠিকা ঝাঁপিয়ে পড়তেন। মোট ছয়টি ‘পিশাচ’কাহিনি― আমি পিশাচ, তুমি পিশাচ, পিশাচ প্রহর ১, ২ ও ৩ এবং পিশাচের রাত একত্রিত হয়ে ‘পিশাচ সমগ্র’ এই প্রথম।",
    },
    {
      id: 32,
      title: "রহস্যময় আদম পাহাড়",
      username: "Nadia",
      userpicture: "https://randomuser.me/api/portraits/women/13.jpg",
      author: "উদয় হাকিম",
      page: "280",
      publisher: "Ananda Publishers",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2Ffa3d55f18_197434.jpg&w=128&q=75",
      description:
        "An adventure up a mysterious mountain that holds secrets and magical wonders.",
    },
    {
      id: 33,
      title: " নদী",
      username: "Farhan",
      userpicture: "https://randomuser.me/api/portraits/men/21.jpg",
      author: " মাহমুদ শামসুল হক",
      page: "200",
      publisher: "Prothoma Prokashon",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2Frokimg_20140707_10634.GIF&w=128&q=75",
      description:
        "A river with a mystical aura that can grant wishes but at a great price.",
    },
    {
      id: 34,
      title: "অজানা দ্বীপের কাহিনী",
      username: "Sonia",
      userpicture: "https://randomuser.me/api/portraits/women/14.jpg",
      author: "মুহাম্মদ সাখাওয়াত হুসাইন",
      page: "220",
      publisher: "Onno Prokash",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F681d6b62b_44661.jpg&w=128&q=75",
      description:
        "A gripping story of an island where time and reality twist in unexpected ways.",
    },
    {
      id: 35,
      title: "মৃত্যুপুরী",
      username: "Tanvir",
      userpicture: "https://randomuser.me/api/portraits/men/22.jpg",
      author: "জাবের রহমান",
      page: "240",
      publisher: "Rupa Publications",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544717968i/43224331.jpg",
      description:
        "A tale set in a land where life and death intermingle, and the boundary between them blurs.",
    },
    {
      id: 36,
      title: "Harry Potter and the Sorcerer's Stone",
      username: "Liam",
      userpicture: "https://randomuser.me/api/portraits/men/11.jpg",
      author: "J.K. Rowling",
      page: "309",
      cover: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
      description:
        "The first book in the Harry Potter series, introducing the magical world of Hogwarts and the young wizard Harry Potter.",
    },
    {
      id: 37,
      title: "The Hobbit",
      username: "Olivia",
      userpicture: "https://randomuser.me/api/portraits/women/12.jpg",
      author: "J.R.R. Tolkien",
      page: "310",
      cover: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
      description:
        "Bilbo Baggins' journey through Middle-earth, encountering dwarves, dragons, and the discovery of the One Ring.",
    },
    {
      id: 38,
      title: "The Name of the Wind",
      username: "Chris",
      userpicture: "https://randomuser.me/api/portraits/men/13.jpg",
      author: "Patrick Rothfuss",
      page: "662",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg",
      description:
        "A beautifully written epic about the life of Kvothe, a legendary figure in the world of fantasy.",
    },
    {
      id: 39,
      title: "A Game of Thrones",
      username: "Sophia",
      userpicture: "https://randomuser.me/api/portraits/women/14.jpg",
      author: "George R.R. Martin",
      page: "835",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562726234i/13496.jpg",
      description:
        "The first book in the A Song of Ice and Fire series, a tale of power, family, and betrayal in a fictional medieval world.",
    },
    {
      id: 40,
      title: "Mistborn: The Final Empire",
      username: "James",
      userpicture: "https://randomuser.me/api/portraits/men/15.jpg",
      author: "Brandon Sanderson",
      page: "541",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
      description:
        "A story of rebellion against a tyrannical ruler in a world where certain people can manipulate metals to gain powers.",
    },
  ],
  science: [
    {
      id: 41,
      title: "বিজ্ঞানীর ডায়েরি",
      username: "Ashiq",
      userpicture: "https://randomuser.me/api/portraits/men/23.jpg",
      author: "প্রফেসর ড. নিশীথ কুমার পাল",
      page: "180",
      publisher: "Ananda Publishers",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F4635a21ea_199637.jpg&w=128&q=75",
      description:
        "A fascinating journey into the life and discoveries of famous scientists, presented in an engaging manner for young readers.",
    },
    {
      id: 42,
      title: "মহাবিশ্বের রহস্য",
      username: "Rekha",
      userpicture: "https://randomuser.me/api/portraits/women/15.jpg",
      author: " সৌমেন সাহা",
      publisher: "Prothoma Prokashon",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2Fb774407ac_196832.jpg&w=128&q=75",
      description:
        "An exploration of the mysteries of the universe, including black holes, galaxies, and the origins of the cosmos.",
    },
    {
      id: 43,
      title: "জ্যোতির্বিজ্ঞান পরিচিতি",
      username: "Kamal",
      userpicture: "https://randomuser.me/api/portraits/men/24.jpg",
      author: " মুহাম্মদ বুরহান উদ্দিন",
      page: "220",
      publisher: "Rokomari",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2FJotirbiggan_1st_Part-Muhammad_Burhan_Uddin-495f4-423981.jpeg&w=256&q=75",
      description:
        "An introduction to astronomy, discussing stars, planets, and the structure of the solar system in simple terms.",
    },
    {
      id: 44,
      title: "প্রাণের রহস্য সন্ধানে বিজ্ঞান",
      username: "Shirin",
      userpicture: "https://randomuser.me/api/portraits/women/16.jpg",
      author: " অপরাজিত বসু",
      page: "200",
      publisher: "Onno Prokash",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F37ee0438bd64_36950.gif&w=128&q=75",
      description:
        "A deep dive into the mysteries of life, exploring the origins of life, DNA, and the complex systems of living organisms.",
    },
    {
      id: 45,
      title: "পরমাণু ও পরমাণু শক্তি",
      username: "Rashid",
      userpicture: "https://randomuser.me/api/portraits/men/25.jpg",
      author: " আইজ্যাক আসিমভ ,  আবুল বাসার",
      page: "300",
      publisher: "Ananya Publishers",
      cover:
        "https://www.rokomari.com/_next/image?url=https%3A%2F%2Fimg.cf.rokomari.com%2FProductNew20190903%2F130X186%2F6070304a2_211074.jpg&w=128&q=75",
      description:
        "A comprehensive guide to the world of physics, from the smallest particles to the vast expanses of the universe.",
    },
    {
      id: 46,
      title: "A Brief History of Time",
      username: "Grace",
      userpicture: "https://randomuser.me/api/portraits/women/16.jpg",
      author: "Stephen Hawking",
      page: "212",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
      description:
        "Hawking's exploration of the universe, covering topics from the Big Bang to black holes in an accessible manner.",
    },
    {
      id: 47,
      title: "The Gene: An Intimate History",
      username: "Tom",
      userpicture: "https://randomuser.me/api/portraits/men/17.jpg",
      author: "Siddhartha Mukherjee",
      page: "592",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1452452965i/27276428.jpg",
      description:
        "A history of genetics, from ancient theories of heredity to the discovery of the double helix and the future of genetic engineering.",
    },
    {
      id: 48,
      title: "Cosmos",
      username: "Sophia",
      userpicture: "https://randomuser.me/api/portraits/women/18.jpg",
      author: "Carl Sagan",
      page: "396",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg",
      description:
        "Sagan's classic work that explores the universe, the origin of life, and the future of human civilization in the cosmos.",
    },
    {
      id: 49,
      title: "The Selfish Gene",
      username: "Oliver",
      userpicture: "https://randomuser.me/api/portraits/men/19.jpg",
      author: "Richard Dawkins",
      page: "360",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366758096i/61535.jpg",
      description:
        "Dawkins' revolutionary view of evolution, focusing on how genes shape behavior and the natural world.",
    },
    {
      id: 50,
      title: "The Immortal Life of Henrietta Lacks",
      username: "Isabella",
      userpicture: "https://randomuser.me/api/portraits/women/20.jpg",
      author: "Rebecca Skloot",
      page: "381",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327878144i/6493208.jpg",
      description:
        "The story of Henrietta Lacks and the immortal cell line known as HeLa, which has contributed to countless medical breakthroughs.",
    },
  ],
  history: [
    {
      id: 51,
      title: "Guns, Germs, and Steel",
      username: "Henry",
      userpicture: "https://randomuser.me/api/portraits/men/21.jpg",
      author: "Jared Diamond",
      page: "528",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842.jpg",
      description:
        "An exploration of how geography and environment have shaped the fate of human societies throughout history.",
    },
    {
      id: 52,
      title: "The Silk Roads",
      username: "Emma",
      userpicture: "https://randomuser.me/api/portraits/women/22.jpg",
      author: "Peter Frankopan",
      page: "636",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472636067i/25812847.jpg",
      description:
        "A new history of the world, focusing on the central role of the Silk Roads in connecting East and West.",
    },
    {
      id: 53,
      title: "A People's History of the United States",
      username: "Charles",
      userpicture: "https://randomuser.me/api/portraits/men/23.jpg",
      author: "Howard Zinn",
      page: "729",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1494279423i/2767.jpg",
      description:
        "Zinn's revisionist take on American history, told from the perspective of marginalized groups.",
    },
    {
      id: 54,
      title: "The Wright Brothers",
      username: "Lily",
      userpicture: "https://randomuser.me/api/portraits/women/24.jpg",
      author: "David McCullough",
      page: "320",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430942575i/22609391.jpg",
      description:
        "The story of the Wright brothers and their pioneering efforts in the field of aviation.",
    },
    {
      id: 55,
      title: "The Diary of a Young Girl",
      username: "Lily",
      userpicture: "https://randomuser.me/api/portraits/women/25.jpg",
      author: "Anne Frank",
      page: "320",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
      description:
        "The Diary of a Young Girl by Anne Frank is a deeply moving and personal account of a young Jewish girl’s experiences during World War II. Written between 1942 and 1944, Anne's diary captures her life in hiding during the Nazi occupation of the Netherlands. At just 13 years old, Anne and her family, along with four other people, sought refuge in a hidden annex behind her father's business in Amsterdam. For over two years, they lived in constant fear of discovery by the Gestapo, with their daily lives confined to a small space, sharing limited food and resources.",
    },
    {
      id: 56,
      title: "বাংলার ইতিহাস",
      username: "Anik",
      userpicture: "https://randomuser.me/api/portraits/men/26.jpg",
      author: "আবদুল করিম",
      page: "320",
      publisher: "Prothoma Prokashon",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1502137041i/20403000.jpg",
      description:
        "A detailed account of the history of Bengal, covering ancient, medieval, and modern periods with rich cultural insights.",
    },
    {
      id: 57,
      title: "মহামানবের বাংলাদেশ",
      username: "Sadia",
      userpicture: "https://randomuser.me/api/portraits/women/17.jpg",
      author: "আনিসুজ্জামান",
      page: "280",
      publisher: "Ananya Publishers",
      cover: "https://example.com/history56.jpg",
      description:
        "Explores the lives of great leaders and influencers who shaped the history of Bangladesh.",
    },
    {
      id: 58,
      title: "বাংলাদেশের মুক্তিযুদ্ধ",
      username: "Shuvo",
      userpicture: "https://randomuser.me/api/portraits/men/27.jpg",
      author: "আসাদ চৌধুরী",
      page: "350",
      publisher: "Rokomari",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657775211i/52811760.jpg",
      description:
        "An in-depth study of the Bangladesh Liberation War, exploring key events, strategies, and the struggle for independence.",
    },
    {
      id: 59,
      title: "পূর্ব বাংলার রাজনীতি",
      username: "Mouri",
      userpicture: "https://randomuser.me/api/portraits/women/18.jpg",
      author: "হুমায়ুন কবির",
      page: "290",
      publisher: "Onno Prokash",
      cover: "https://example.com/history58.jpg",
      description:
        "An analysis of the political dynamics of East Bengal, tracing its evolution from the colonial period to independence.",
    },
    {
      id: 60,
      title: "মুঘল সাম্রাজ্য",
      username: "Rahul",
      userpicture: "https://randomuser.me/api/portraits/men/28.jpg",
      author: "শাহরিয়ার কবির",
      page: "400",
      publisher: "Ananda Publishers",
      cover: "https://example.com/history59.jpg",
      description:
        "A comprehensive history of the Mughal Empire in Bengal, focusing on its rulers, culture, and influence on the region.",
    },
  ],
};

export default books;
