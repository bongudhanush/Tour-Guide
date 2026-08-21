/* ================================================================
   INCREDIBLE INDIA EXPLORER — script.js
   Complete interactive travel guide for India
   Covers: 36 States/UTs, 60+ Destinations, Search, Map, Planner,
   Favorites, Dark Mode, Trip Planner, Travel Mood, Food, Festivals
   ================================================================ */

'use strict';

/* ================================================================
   SECTION 1: COMPLETE INDIA DATA
   ================================================================ */

/** All 36 Indian States and Union Territories */
const INDIA_STATES = [
  // ─── NORTH INDIA ───
  {
    id: 'jk', name: 'Jammu & Kashmir', capital: 'Srinagar (Summer) / Jammu (Winter)',
    type: 'ut', region: 'north',
    emoji: '🏔️', color: '#4A90D9',
    description: 'The crown jewel of India — stunning valleys, pristine lakes, Mughal gardens and snow-capped peaks make J&K one of the most breathtaking destinations on Earth.',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Patnitop', 'Vaishno Devi'],
    hiddenGems: ['Gurez Valley', 'Bangus Valley', 'Doodpathri', 'Lolab Valley'],
    food: ['Rogan Josh', 'Wazwan Feast', 'Yakhni', 'Haak', 'Kashmiri Pulao', 'Kehwa Tea'],
    festivals: ['Tulip Festival', 'Hemis Festival', 'Lal Chowk Flag Hoisting'],
    culture: 'A confluence of Hindu, Muslim and Buddhist cultures. Famous for Pashmina shawls, carpets, walnut wood crafts and distinctive Kashmiri cuisine.',
    bestTime: 'April–June and September–November',
    budget: '₹3,000–₹8,000/day',
    activities: ['Skiing at Gulmarg', 'Shikara ride on Dal Lake', 'Trekking', 'Apple orchard visits', 'Saffron field tours'],
    tips: ['Book houseboats in advance for peak season', 'Carry warm clothes even in summer', 'Respect local customs']
  },
  {
    id: 'ladakh', name: 'Ladakh', capital: 'Leh',
    type: 'ut', region: 'north',
    emoji: '🏜️', color: '#7F8C8D',
    description: 'The Land of High Passes — a cold desert plateau with ancient monasteries, turquoise lakes and some of the world\'s most dramatic mountain scenery.',
    destinations: ['Leh', 'Pangong Lake', 'Nubra Valley', 'Zanskar', 'Tso Moriri', 'Khardung La'],
    hiddenGems: ['Dha-Hanu Valley', 'Hemis Shukpachan', 'Sumur Village', 'Yarab Tso Lake'],
    food: ['Thukpa', 'Momos', 'Butter Tea', 'Tsampa', 'Skyu', 'Chang'],
    festivals: ['Hemis Festival', 'Losar', 'Ladakh Festival'],
    culture: 'Predominantly Tibetan Buddhist culture. Famous for ancient gompas (monasteries), thangka paintings and the unique Ladakhi way of life.',
    bestTime: 'June–September',
    budget: '₹3,500–₹9,000/day',
    activities: ['Bike trip on Manali-Leh highway', 'Monastery visits', 'Camping at Pangong', 'White water rafting in Zanskar', 'Star gazing'],
    tips: ['Acclimatize for 2–3 days before strenuous activity', 'Carry altitude medicine', 'Inner Line Permit required for some areas']
  },
  {
    id: 'hp', name: 'Himachal Pradesh', capital: 'Shimla',
    type: 'state', region: 'north',
    emoji: '🌲', color: '#27AE60',
    description: 'Land of Snow — pine-forested valleys, apple orchards, ancient temples and adventure sports destinations draw millions of visitors.',
    destinations: ['Shimla', 'Manali', 'Dharamshala', 'Spiti Valley', 'Dalhousie', 'Kasol', 'Bir Billing'],
    hiddenGems: ['Chitkul', 'Kalpa', 'Naggar', 'Prashar Lake', 'Tirthan Valley'],
    food: ['Dham', 'Siddu', 'Chha Gosht', 'Patande', 'Bhey', 'Aktori'],
    festivals: ['Kullu Dussehra', 'Shivratri (Mandi)', 'Minjar Festival', 'Losar'],
    culture: 'Rich tribal culture with distinct Kinnauri, Spitian and Gaddi communities. Known for woollen handicrafts, bronze work and folk music.',
    bestTime: 'March–June and October–February (for snow)',
    budget: '₹2,000–₹6,000/day',
    activities: ['Paragliding at Bir Billing', 'Skiing at Solang Valley', 'Trekking to Pin Parvati Pass', 'River rafting on Beas'],
    tips: ['Book accommodation early in summer', 'Carry rain gear for monsoon treks', 'Respect natural environment']
  },
  {
    id: 'pb', name: 'Punjab', capital: 'Chandigarh',
    type: 'state', region: 'north',
    emoji: '🌾', color: '#F39C12',
    description: 'Land of Five Rivers — the heartland of Sikhism, vibrant Bhangra culture, legendary hospitality and the world\'s most visited Sikh shrine.',
    destinations: ['Amritsar', 'Chandigarh', 'Ludhiana', 'Patiala', 'Anandpur Sahib', 'Fatehgarh Sahib'],
    hiddenGems: ['Harike Wetlands', 'Pulgaon Village', 'Qila Mubarak', 'Nangal Dam'],
    food: ['Amritsari Kulcha', 'Makki di Roti & Sarson da Saag', 'Lassi', 'Butter Chicken', 'Tandoori Chicken', 'Pinni'],
    festivals: ['Baisakhi', 'Lohri', 'Diwali', 'Gurpurabs'],
    culture: 'Proud Sikh heritage, Bhangra dance, colorful phulkari embroidery and the warm tradition of langar (community feast).',
    bestTime: 'October–March',
    budget: '₹2,000–₹5,000/day',
    activities: ['Visit Golden Temple', 'Wagah Border ceremony', 'Rural Punjab farm stays', 'Bhangra performance'],
    tips: ['Cover your head at Gurudwaras', 'Try free langar at Golden Temple', 'Best visited during Baisakhi']
  },
  {
    id: 'hr', name: 'Haryana', capital: 'Chandigarh',
    type: 'state', region: 'north',
    emoji: '🐄', color: '#F7DC6F',
    description: 'Ancient land of Mahabharata — Kurukshetra battlefield, vibrant crafts, and proximity to Delhi make Haryana a fascinating day-trip destination.',
    destinations: ['Chandigarh', 'Gurugram', 'Kurukshetra', 'Panipat', 'Morni Hills', 'Pinjore'],
    hiddenGems: ['Bhindawas Bird Sanctuary', 'Damdama Lake', 'Sultanpur Bird Sanctuary'],
    food: ['Bajra Khichdi', 'Kachri ki Sabzi', 'Singri ki Sabzi', 'Malpua', 'Rabdi'],
    festivals: ['Surajkund Craft Mela', 'Geeta Jayanti', 'Sheetla Mata Fair'],
    culture: 'Jat and Ahir community traditions, phulkari embroidery, jugalbandi folk music and strong agricultural heritage.',
    bestTime: 'October–March',
    budget: '₹1,500–₹4,000/day',
    activities: ['Surajkund Craft Mela', 'Kurukshetra Heritage Tour', 'Rock Garden Chandigarh'],
    tips: ['Day trip from Delhi is easy', 'Visit Surajkund in February for craft fair']
  },
  {
    id: 'dl', name: 'Delhi', capital: 'New Delhi',
    type: 'ut', region: 'north',
    emoji: '🕌', color: '#E74C3C',
    description: 'India\'s capital — a city of layers, from ancient Mughal monuments to Colonial architecture and ultra-modern malls. A food lover\'s and history enthusiast\'s paradise.',
    destinations: ['Red Fort', 'Qutub Minar', 'India Gate', 'Humayun\'s Tomb', 'Chandni Chowk', 'Lodhi Gardens', 'Connaught Place'],
    hiddenGems: ['Agrasen ki Baoli', 'Mehrauli Archaeological Park', 'Hauz Khas Village', 'Nizamuddin Dargah'],
    food: ['Chole Bhature', 'Butter Chicken', 'Dilli ki Chaat', 'Paranthe Wali Gali', 'Biryani', 'Jalebi'],
    festivals: ['Republic Day Parade', 'Diwali', 'Holi', 'Sufi Music Festival'],
    culture: 'Multicultural melting pot — 7 cities in one. Blend of Mughal, British and modern Indian culture with a legendary street food scene.',
    bestTime: 'October–March',
    budget: '₹2,000–₹8,000/day',
    activities: ['Heritage Walk in Old Delhi', 'Metro exploration', 'Museum hopping', 'Street food tour in Chandni Chowk'],
    tips: ['Use Delhi Metro for sightseeing', 'Start early to beat crowds and heat', 'Beware of auto-rickshaw overcharging']
  },
  {
    id: 'uk', name: 'Uttarakhand', capital: 'Dehradun',
    type: 'state', region: 'north',
    emoji: '🙏', color: '#FF6B35',
    description: 'Devbhoomi — Land of the Gods. Where sacred rivers originate, yoga was born, and the Himalayas reach their most spiritual heights.',
    destinations: ['Rishikesh', 'Haridwar', 'Dehradun', 'Mussoorie', 'Nainital', 'Jim Corbett', 'Auli', 'Kedarnath', 'Badrinath'],
    hiddenGems: ['Chopta', 'Lansdowne', 'Kanatal', 'Mukteshwar', 'Chakrata'],
    food: ['Kafuli', 'Aloo Ke Gutke', 'Bhatt ki Churkani', 'Singal', 'Phaanu', 'Buransh Juice'],
    festivals: ['Kumbh Mela', 'Ganga Dussehra', 'Char Dham Yatra season'],
    culture: 'Sacred Hindu culture with roots in Vedic traditions. Known for yoga, meditation retreats, forest tribes and ancient temple architecture.',
    bestTime: 'March–June and September–November',
    budget: '₹2,000–₹6,000/day',
    activities: ['White water rafting in Rishikesh', 'Yoga & meditation retreat', 'Char Dham pilgrimage', 'Skiing at Auli', 'Wildlife safari'],
    tips: ['Book Kedarnath/Badrinath accommodation months in advance', 'Monsoon treks are risky', 'Respect pilgrimage sites']
  },
  {
    id: 'up', name: 'Uttar Pradesh', capital: 'Lucknow',
    type: 'state', region: 'north',
    emoji: '🕌', color: '#8E44AD',
    description: 'Home to the Taj Mahal and the spiritual heartbeat of India — UP is a treasure trove of Mughal heritage, sacred ghats and classical arts.',
    destinations: ['Agra', 'Varanasi', 'Lucknow', 'Mathura', 'Vrindavan', 'Allahabad (Prayagraj)', 'Ayodhya', 'Fatehpur Sikri'],
    hiddenGems: ['Dudhwa National Park', 'Shravasti', 'Sarnath', 'Vindhyachal', 'Chitrakoot'],
    food: ['Lucknawi Biryani', 'Kebabs (Galauti & Tunday)', 'Peda from Mathura', 'Kachori Sabzi', 'Thandai from Varanasi'],
    festivals: ['Kumbh Mela', 'Diwali (Varanasi)', 'Holi (Mathura/Vrindavan)', 'Eid'],
    culture: 'Tehzeeb (refinement) of Lucknow, the spirituality of Varanasi, the romance of Agra. Classical Kathak dance, Chikankari embroidery.',
    bestTime: 'October–March',
    budget: '₹1,500–₹5,000/day',
    activities: ['Taj Mahal sunrise visit', 'Ganga Aarti in Varanasi', 'Boat ride on Ganga', 'Mughal heritage walk'],
    tips: ['Sunrise at Taj Mahal is magical and less crowded', 'Ganga Aarti at Dashashwamedh Ghat is unmissable', 'Friday: Taj Mahal closed']
  },

  // ─── WEST INDIA ───
  {
    id: 'raj', name: 'Rajasthan', capital: 'Jaipur',
    type: 'state', region: 'west',
    emoji: '🏰', color: '#E74C3C',
    description: 'Land of Kings — a royal state with magnificent forts, painted palaces, colorful bazaars, camel safaris and the vast Thar Desert.',
    destinations: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar', 'Ranthambore', 'Ajmer', 'Bikaner', 'Mount Abu'],
    hiddenGems: ['Bundi', 'Chittorgarh', 'Shekhawati', 'Kumbhalgarh', 'Osian', 'Barmer'],
    food: ['Dal Baati Churma', 'Laal Maas', 'Gatte ki Sabzi', 'Ker Sangri', 'Ghewar', 'Mawa Kachori'],
    festivals: ['Pushkar Camel Fair', 'Desert Festival (Jaisalmer)', 'Gangaur', 'Teej', 'Diwali'],
    culture: 'Rajput warrior culture, folk music (Manganiyar, Langa), Kathputli puppetry, colorful block-print textiles and legendary hospitality.',
    bestTime: 'October–March',
    budget: '₹2,500–₹10,000/day',
    activities: ['Palace hotel stay', 'Camel safari in Thar Desert', 'Elephant ride at Amber Fort', 'Hot air balloon over Jaipur'],
    tips: ['Bargain at local markets but respectfully', 'Book heritage hotels for authentic experience', 'Carry a dupatta for temple visits']
  },
  {
    id: 'guj', name: 'Gujarat', capital: 'Gandhinagar',
    type: 'state', region: 'west',
    emoji: '🦁', color: '#F39C12',
    description: 'Birthplace of Gandhi — Gujarat blends vibrant folk culture, unique white salt desert, lion sanctuary, ancient stepwells and the world\'s largest mangroves.',
    destinations: ['Ahmedabad', 'Gir National Park', 'Rann of Kutch', 'Dwarka', 'Somnath', 'Vadodara', 'Surat', 'Patan'],
    hiddenGems: ['Dholavira', 'Champaner', 'Mandvi Beach', 'Saputara', 'Rani ki Vav'],
    food: ['Dhokla', 'Thepla', 'Fafda Jalebi', 'Undhiyu', 'Gujarati Thali', 'Khandvi', 'Surti Locho'],
    festivals: ['Navratri', 'Rann Utsav', 'Uttarayan (Kite Festival)', 'Diwali (Surat)'],
    culture: 'Gandhi\'s homeland with strong Jain and Vaishnav influence. Famous for Patola silk, Kutchi embroidery, garba dance and vegetarian food tradition.',
    bestTime: 'November–February',
    budget: '₹1,500–₹5,000/day',
    activities: ['Rann Utsav under full moon', 'Gir lion safari', 'Heritage walk in Ahmedabad', 'Garba dance during Navratri'],
    tips: ['Most of Gujarat is vegetarian and alcohol-free', 'Rann of Kutch is best November–February', 'Book Rann Utsav early']
  },
  {
    id: 'mh', name: 'Maharashtra', capital: 'Mumbai',
    type: 'state', region: 'west',
    emoji: '🌆', color: '#E67E22',
    description: 'Where dreams meet reality — home to Bollywood, ancient cave art, hill stations, powerful forts and an unmatched coastal lifestyle.',
    destinations: ['Mumbai', 'Pune', 'Nashik', 'Aurangabad', 'Shirdi', 'Lonavala', 'Mahabaleshwar', 'Kolhapur'],
    hiddenGems: ['Tadoba Tiger Reserve', 'Chikhaldara', 'Amboli', 'Kokan Coast (Tarkarli)', 'Lonar Crater Lake'],
    food: ['Vada Pav', 'Misal Pav', 'Pav Bhaji', 'Puran Poli', 'Kanda Poha', 'Kolhapuri Mutton', 'Modak'],
    festivals: ['Ganesh Chaturthi', 'Gudi Padwa', 'Sawai Gandharva Music Festival', 'Nashik Kumbh'],
    culture: 'Maratha warrior tradition, Warli and Paithani art, Lavani folk dance, vibrant film industry and rich Maharashtrian literary heritage.',
    bestTime: 'October–March (coastal); June–September (monsoon waterfalls)',
    budget: '₹2,000–₹8,000/day',
    activities: ['Ajanta & Ellora caves', 'Marine Drive walk', 'Bollywood studio tour', 'Elephanta Island', 'Monsoon trek'],
    tips: ['Book Ajanta–Ellora via package from Aurangabad', 'Avoid Mumbai during monsoon flooding', 'Try local Udupi restaurants']
  },
  {
    id: 'ga', name: 'Goa', capital: 'Panaji',
    type: 'state', region: 'west',
    emoji: '🏖️', color: '#00B4D8',
    description: 'India\'s beach paradise — a former Portuguese colony with golden sands, vibrant nightlife, ancient churches, spice plantations and fresh seafood.',
    destinations: ['Panaji', 'Calangute Beach', 'Baga Beach', 'Anjuna Beach', 'Palolem Beach', 'Old Goa', 'Arambol'],
    hiddenGems: ['Divar Island', 'Chorao Island', 'Butterfly Beach', 'Cabo de Rama', 'Cola Beach'],
    food: ['Fish Curry Rice', 'Prawn Balchão', 'Bebinca', 'Xacuti', 'Feni', 'Ros Omelette'],
    festivals: ['Carnival (February)', 'Shigmo', 'Feast of St. Francis Xavier', 'Sao Joao'],
    culture: 'Unique Indo-Portuguese culture — Latin-Konkani music (Mando), vibrant fish markets, colonial houses and the legendary Goan slowness of life.',
    bestTime: 'November–February',
    budget: '₹2,000–₹8,000/day',
    activities: ['Beach hopping', 'Water sports', 'Spice plantation visit', 'Old Goa churches', 'Night market at Anjuna'],
    tips: ['Rent a scooter to explore', 'South Goa beaches are quieter', 'Avoid Goa during monsoon']
  },

  // ─── CENTRAL INDIA ───
  {
    id: 'mp', name: 'Madhya Pradesh', capital: 'Bhopal',
    type: 'state', region: 'central',
    emoji: '🐅', color: '#27AE60',
    description: 'Heart of India — rich in wildlife sanctuaries, ancient temples, UNESCO heritage sites and some of the best tiger sightings in the world.',
    destinations: ['Bhopal', 'Kanha', 'Bandhavgarh', 'Pench', 'Khajuraho', 'Orchha', 'Ujjain', 'Gwalior', 'Pachmarhi', 'Sanchi'],
    hiddenGems: ['Mandu', 'Bhimbetka Cave Paintings', 'Chanderi', 'Amarkantak', 'Tawa Reservoir'],
    food: ['Dal Bafla', 'Bhutte ka Kees', 'Chakki ki Shaak', 'Mawa Bati', 'Shikanji', 'Poha-Jalebi'],
    festivals: ['Lokrang Festival', 'Tansen Music Festival', 'Khajuraho Dance Festival', 'Kumbh (Ujjain)'],
    culture: 'Gond tribal art, Baiga dance, Chanderi and Maheshwari silk weaving, Malwa folk music and deep Hindu-Jain traditions.',
    bestTime: 'October–March (for wildlife: October–June)',
    budget: '₹2,500–₹7,000/day',
    activities: ['Tiger safari at Kanha/Bandhavgarh', 'Khajuraho temple tour', 'Cave painting at Bhimbetka', 'Sunrise at Orchha'],
    tips: ['Book safari permits months in advance', 'Carry binoculars for wildlife watching', 'June best for tiger sightings']
  },
  {
    id: 'cg', name: 'Chhattisgarh', capital: 'Raipur',
    type: 'state', region: 'central',
    emoji: '🌿', color: '#16A085',
    description: 'India\'s tribal heartland — dense forests, spectacular waterfalls, ancient temples and one of India\'s most authentic indigenous cultural experiences.',
    destinations: ['Raipur', 'Jagdalpur', 'Bastar', 'Chitrakote Falls', 'Sirpur', 'Kawardha'],
    hiddenGems: ['Tirathgarh Waterfall', 'Kanger Valley NP', 'Barnawapara Sanctuary', 'Dantewada'],
    food: ['Chila', 'Faraa', 'Bora', 'Muthia', 'Sabudana Khichdi', 'Dubki Kadi'],
    festivals: ['Bastar Dussehra (75 days!)', 'Madai Festival', 'Goncha Festival'],
    culture: 'Rich Gond, Baiga and Halbi tribal traditions with unique art forms, forest-based healing practices and extraordinary Dussehra celebrations.',
    bestTime: 'October–March',
    budget: '₹1,500–₹4,000/day',
    activities: ['Bastar tribal village visits', 'Chitrakote (India\'s Niagara) waterfall', 'Tribal craft shopping', 'Forest treks'],
    tips: ['Respect tribal communities and ask before photographing', 'Hire a local guide for Bastar region']
  },

  // ─── EAST INDIA ───
  {
    id: 'bh', name: 'Bihar', capital: 'Patna',
    type: 'state', region: 'east',
    emoji: '🕌', color: '#D35400',
    description: 'Cradle of civilization — where Buddhism was born, great empires rose, and ancient universities of the world once stood.',
    destinations: ['Patna', 'Bodh Gaya', 'Vaishali', 'Nalanda', 'Rajgir', 'Gaya', 'Muzaffarpur'],
    hiddenGems: ['Vikramshila Ruins', 'Kakolat Waterfall', 'Manjhar Kund', 'Valmiki National Park'],
    food: ['Litti Chokha', 'Sattu', 'Thekua', 'Khaja', 'Kadhi Badi', 'Bihari Mutton Curry'],
    festivals: ['Chhath Puja', 'Makar Sankranti', 'Sonepur Mela', 'Rajgir Mahotsav'],
    culture: 'Birthplace of Buddhism and Jainism. Maithili, Bhojpuri and Magahi folk traditions, Madhubani painting, Sujni embroidery.',
    bestTime: 'October–March',
    budget: '₹1,000–₹3,000/day',
    activities: ['Buddhist circuit: Bodh Gaya–Nalanda–Rajgir', 'Chhath Puja sunset ceremony', 'Sonepur Cattle Fair'],
    tips: ['Best visited in the Buddhist Circuit package', 'Chhath Puja time is extraordinary to witness']
  },
  {
    id: 'jh', name: 'Jharkhand', capital: 'Ranchi',
    type: 'state', region: 'east',
    emoji: '🌊', color: '#2ECC71',
    description: 'Land of forests and waterfalls — a tribal state with spectacular waterfalls, dense Sal forests, rich mineral wealth and vibrant Adivasi culture.',
    destinations: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Betla NP', 'Deoghar', 'Hazaribagh', 'Parasnath'],
    hiddenGems: ['Hundru Falls', 'Dassam Falls', 'Panchghagh Falls', 'Netarhat', 'Rajrappa'],
    food: ['Dhuska', 'Pittha', 'Handia', 'Rugra', 'Chilka', 'Malpua'],
    festivals: ['Sarhul', 'Karma', 'Tushu Mela', 'Jawa Festival'],
    culture: 'Over 30 Adivasi (tribal) groups including Santhal, Munda and Ho. Famous for dhol-nagada music, Chhau dance and exquisite tribal jewelry.',
    bestTime: 'October–March',
    budget: '₹1,200–₹3,500/day',
    activities: ['Waterfall circuit', 'Betla tiger reserve', 'Deoghar pilgrimage', 'Tribal village tours'],
    tips: ['Waterfalls are best after monsoon (Sept–Nov)', 'Book forest rest houses in advance']
  },
  {
    id: 'wb', name: 'West Bengal', capital: 'Kolkata',
    type: 'state', region: 'east',
    emoji: '🎭', color: '#E74C3C',
    description: 'Cultural capital of India — where poetry meets politics, fish meets arts, and the mighty Himalayas meet the Sundarbans delta.',
    destinations: ['Kolkata', 'Darjeeling', 'Sundarbans', 'Digha Beach', 'Shantiniketan', 'Murshidabad', 'Siliguri'],
    hiddenGems: ['Bishnupur', 'Cooch Behar', 'Lava & Lolaygaon', 'Dooars Tea Gardens', 'Bangriposi'],
    food: ['Rasgulla', 'Fish Curry', 'Kathi Roll', 'Mishti Doi', 'Luchi-Alur Dom', 'Chingri Malai Curry', 'Sandesh'],
    festivals: ['Durga Puja', 'Holi (Dol)', 'Christmas in Kolkata', 'Poush Mela (Shantiniketan)'],
    culture: 'Bengal Renaissance legacy — Tagore, Ray, Bose. Baul music, Durga Puja pandals, terracotta temples, jute crafts and the most literate state.',
    bestTime: 'October–March',
    budget: '₹2,000–₹6,000/day',
    activities: ['Darjeeling toy train', 'Sundarban tiger boat safari', 'Durga Puja pandal hopping', 'Kolkata colonial walk'],
    tips: ['Durga Puja in October is spectacular but crowded', 'Carry mosquito repellent in Sundarbans', 'Try tram rides in Kolkata']
  },
  {
    id: 'od', name: 'Odisha', capital: 'Bhubaneswar',
    type: 'state', region: 'east',
    emoji: '🛕', color: '#FF6B35',
    description: 'Temple State — home to the Jagannath Temple, Sun Temple and 5,000+ other temples along with pristine beaches and tribal heartlands.',
    destinations: ['Bhubaneswar', 'Puri', 'Konark', 'Cuttack', 'Chilika Lake', 'Koraput', 'Simlipal'],
    hiddenGems: ['Daringbadi (Kashmir of Odisha)', 'Taptapani', 'Ushakothi Sanctuary', 'Baliguda'],
    food: ['Dalma', 'Pakhala Bhata', 'Chhena Poda', 'Rasagola (original!)', 'Macha Ghanta', 'Mudhi'],
    festivals: ['Rath Yatra', 'Puri Beach Festival', 'Konark Dance Festival', 'Nuakhai'],
    culture: 'Odissi classical dance, Pattachitra painting, silver filigree work, palm leaf manuscripts and the world-famous Jagannath cult.',
    bestTime: 'October–February',
    budget: '₹1,500–₹4,500/day',
    activities: ['Konark Sun Temple visit', 'Chilika Lake dolphin watching', 'Rath Yatra witnessing', 'Puri beach'],
    tips: ['Non-Hindus cannot enter Jagannath Temple inner sanctum', 'Book Rath Yatra accommodation a year in advance']
  },

  // ─── SOUTH INDIA ───
  {
    id: 'ka', name: 'Karnataka', capital: 'Bengaluru',
    type: 'state', region: 'south',
    emoji: '🌸', color: '#8E44AD',
    description: 'Confluence of cultures — tech capital Bengaluru, royal Mysore, ancient Hampi ruins, coffee estates, tigers and pristine coastlines.',
    destinations: ['Bengaluru', 'Mysore', 'Hampi', 'Coorg', 'Gokarna', 'Mangalore', 'Hassan (Hoysala temples)', 'Dandeli'],
    hiddenGems: ['Nandi Hills', 'Agumbe', 'Sirsi', 'Sandur', 'Bisle Ghat'],
    food: ['Bisi Bele Bath', 'Ragi Mudde', 'Udupi cuisine', 'Coorg Pork Curry', 'Mysore Pak', 'Akki Roti', 'Coffee'],
    festivals: ['Mysore Dasara', 'Ugadi', 'Hampi Festival', 'Pattadakal Dance Festival'],
    culture: 'Kannada literary tradition (Kuvempu), Yakshagana theater, Mysore silk, Sandalwood crafts and Carnatic music heritage.',
    bestTime: 'October–March',
    budget: '₹2,000–₹6,000/day',
    activities: ['Hampi heritage ruins', 'Mysore Palace', 'Coorg coffee plantation stay', 'Nagarhole tiger safari', 'Gokarna beach'],
    tips: ['Hampi is best explored by bicycle', 'Mysore Dasara (Oct) is spectacular', 'Carry warm clothes for Coorg']
  },
  {
    id: 'kl', name: 'Kerala', capital: 'Thiruvananthapuram',
    type: 'state', region: 'south',
    emoji: '🌴', color: '#2EC4B6',
    description: 'God\'s Own Country — serene backwaters, misty tea plantations, elephant festivals, Ayurvedic retreats and some of India\'s most pristine beaches.',
    destinations: ['Munnar', 'Alleppey', 'Wayanad', 'Kochi', 'Thekkady', 'Kovalam', 'Varkala', 'Thrissur', 'Kollam'],
    hiddenGems: ['Mararikulam', 'Bekal Fort', 'Silent Valley', 'Nelliyampathy', 'Athirappilly Falls'],
    food: ['Appam & Stew', 'Kerala Sadya (banana leaf feast)', 'Meen Curry (fish curry)', 'Prawn Moilee', 'Puttu & Kadala', 'Karimeen Pollichathu'],
    festivals: ['Onam', 'Thrissur Pooram', 'Nehru Trophy Boat Race', 'Vishu'],
    culture: 'Matrilineal Nair tradition, Theyyam ritual dance, Kathakali, Mohiniyattam classical dance, Kalaripayattu martial art and eco-conscious living.',
    bestTime: 'September–March',
    budget: '₹2,500–₹8,000/day',
    activities: ['Houseboat stay in Alleppey backwaters', 'Elephant Festival', 'Kathakali performance', 'Ayurvedic massage', 'Tea estate walk'],
    tips: ['Book houseboats directly to avoid middlemen', 'July–August rains make Kerala lush and beautiful', 'Carry insect repellent for forest areas']
  },
  {
    id: 'tn', name: 'Tamil Nadu', capital: 'Chennai',
    type: 'state', region: 'south',
    emoji: '🛕', color: '#C0392B',
    description: 'Temple Land — home to magnificent Dravidian temples, classical Carnatic music, silk weaving traditions and the earliest planned cities of the ancient world.',
    destinations: ['Chennai', 'Madurai', 'Ooty', 'Kodaikanal', 'Mahabalipuram', 'Thanjavur', 'Rameswaram', 'Kanyakumari', 'Chettinad'],
    hiddenGems: ['Yelagiri', 'Meghamalai', 'Kolli Hills', 'Valparai', 'Mudumalai'],
    food: ['Dosa', 'Idli Sambar', 'Chettinad Chicken', 'Pongal', 'Filter Coffee', 'Ven Pongal', 'Parotta'],
    festivals: ['Pongal', 'Natyanjali Festival', 'Chennai Music Season', 'Mahamaham'],
    culture: 'Sangam poetry, Bharatanatyam dance, Carnatic music, Thanjavur paintings, Kanchipuram silk and 2,000-year-old living Dravidian traditions.',
    bestTime: 'October–March',
    budget: '₹2,000–₹6,000/day',
    activities: ['Meenakshi Temple Madurai', 'Sunrise at Kanyakumari', 'Ooty toy train', 'Mahabalipuram temples', 'Chettinad mansions'],
    tips: ['Remove footwear before entering temples', 'Chennai in December for music/dance season', 'Ooty is cold — carry layers']
  },
  {
    id: 'ap', name: 'Andhra Pradesh', capital: 'Amaravati',
    type: 'state', region: 'south',
    emoji: '🌶️', color: '#E74C3C',
    description: 'Land of spice and grace — from Buddhist heritage to one of India\'s richest seafood coastlines, from ancient forts to the sacred Tirumala Hills.',
    destinations: ['Visakhapatnam', 'Tirupati', 'Vijayawada', 'Araku Valley', 'Amaravati', 'Hampi (shared)', 'Horsley Hills'],
    hiddenGems: ['Gandikota Grand Canyon', 'Belum Caves', 'Lambasingi', 'Maredumilli'],
    food: ['Pulihora', 'Gongura Dishes', 'Pesarattu', 'Royyala Iguru (Prawn)', 'Bobbatlu', 'Gutti Vankaya'],
    festivals: ['Ugadi', 'Sankranti', 'Tirupati Brahmotsavam'],
    culture: 'Kuchipudi classical dance, Lepakshi stone art, Kalamkari textile, Kondapalli toys and the rich Vijayanagara Empire legacy.',
    bestTime: 'October–March',
    budget: '₹1,500–₹4,500/day',
    activities: ['Tirupati darshan', 'Gandikota canyon trek', 'Araku Valley tribal village', 'Chilika Lake (shared)'],
    tips: ['Book Tirupati darshan online weeks in advance', 'Gandikota is best Oct–Feb', 'Araku sunrise is stunning']
  },
  {
    id: 'ts', name: 'Telangana', capital: 'Hyderabad',
    type: 'state', region: 'south',
    emoji: '👑', color: '#D4AC0D',
    description: 'Pearl City — Hyderabad\'s Nizami grandeur, tech corridor, India\'s best biryani, ancient forts and the lush Nagarjunasagar.',
    destinations: ['Hyderabad', 'Warangal', 'Nagarjunasagar', 'Ramoji Film City', 'Kawal Wildlife Sanctuary'],
    hiddenGems: ['Pochampally Village', 'Medak Cathedral', 'Laknavaram Lake', 'Bogatha Waterfall'],
    food: ['Hyderabadi Biryani', 'Haleem', 'Lukhmi', 'Qubani Ka Meetha', 'Double ka Meetha', 'Dum Pukht'],
    festivals: ['Bonalu', 'Bathukamma', 'Sammakka Sarakka', 'Hyderabad Deccan Festival'],
    culture: 'Nizami Deccan culture, Bidriware metalwork, Paithani saris, Cheriyal scroll painting and the iconic Irani Chai tradition.',
    bestTime: 'October–February',
    budget: '₹2,000–₹6,000/day',
    activities: ['Golconda Fort sound & light show', 'Charminar shopping', 'Biryani trail', 'Nagarjunasagar dam'],
    tips: ['Hyderabadi Biryani is best at Old City restaurants', 'Evening at Hussain Sagar lake is magical']
  },

  // ─── NORTHEAST INDIA ───
  {
    id: 'as', name: 'Assam', capital: 'Dispur',
    type: 'state', region: 'northeast',
    emoji: '🦏', color: '#2ECC71',
    description: 'Land of the Red River and Blue Hills — home to one-horned rhinos, world\'s largest river island, mystical temples and the finest tea on earth.',
    destinations: ['Guwahati', 'Kaziranga National Park', 'Majuli Island', 'Tezpur', 'Jorhat', 'Haflong', 'Manas NP'],
    hiddenGems: ['Pobitora Sanctuary', 'Haflong Lake', 'Diphu', 'Chakrashila Sanctuary'],
    food: ['Khar', 'Masor Tenga (Sour Fish)', 'Duck Meat Curry', 'Pitha', 'Jolpan', 'Black Sesame Laddoo'],
    festivals: ['Bihu (Bohag, Magh, Kongali)', 'Ambubachi Mela', 'Dehing Patkai Festival'],
    culture: 'Bihu folk dance, Sattriya classical dance, Assam silk (Muga, Eri, Pat), bamboo crafts and the mystical Kamakhya temple tradition.',
    bestTime: 'November–April',
    budget: '₹2,000–₹5,000/day',
    activities: ['Kaziranga jeep/elephant safari', 'Tea estate tour', 'Majuli mask-making', 'River Brahmaputra cruise'],
    tips: ['Best time for rhinos: November–April', 'Kaziranga monsoon flood means safari season Oct–Apr', 'Try traditional Assam tea with pitha']
  },
  {
    id: 'mg', name: 'Meghalaya', capital: 'Shillong',
    type: 'state', region: 'northeast',
    emoji: '🌧️', color: '#1ABC9C',
    description: 'Abode of Clouds — the wettest place on earth has spectacular living root bridges, crystal caves, rolling grasslands and the coolest climate.',
    destinations: ['Shillong', 'Cherrapunji', 'Mawlynnong (Asia\'s cleanest village)', 'Dawki', 'Nohkalikai Falls', 'Mawsynram'],
    hiddenGems: ['Nongriat Village', 'Wei Sawdong Falls', 'Nongkhnum Island', 'Laitlum Canyons'],
    food: ['Jadoh', 'Dohkhlieh', 'Nakham Bitchi', 'Tungrymbai', 'Minil Songa', 'Pukhlein'],
    festivals: ['Shad Suk Mynsiem', 'Nongkrem Dance Festival', 'Cherry Blossom Festival', 'Wangala (Garo)'],
    culture: 'Matrilineal Khasi society, bamboo & cane crafts, Noh Lait traditional jewelry and unique living root bridge engineering by Khasi communities.',
    bestTime: 'October–June',
    budget: '₹2,500–₹6,000/day',
    activities: ['Double Decker living root bridge trek', 'Dawki river kayaking', 'Cave exploration at Mawsmai', 'Sunrise at Shillong Peak'],
    tips: ['Root bridge trek requires physical fitness', 'Cherrapunji waterfalls best July–September', 'Carry raincoat always!']
  },
  {
    id: 'sk', name: 'Sikkim', capital: 'Gangtok',
    type: 'state', region: 'northeast',
    emoji: '🏔️', color: '#3498DB',
    description: 'Jewel in the Himalayas — India\'s cleanest state with stunning monasteries, rhododendron forests, Kanchenjunga views and organic farming culture.',
    destinations: ['Gangtok', 'Pelling', 'Lachung', 'Yuksom', 'Ravangla', 'Namchi', 'Gurudongmar Lake'],
    hiddenGems: ['Zuluk', 'Rinchenpong', 'Tashiding', 'Kanchenjunga Base Camp', 'Khecheopalri Lake'],
    food: ['Momos', 'Thukpa', 'Gundruk', 'Selroti', 'Chhurpi Soup', 'Tongba (millet beer)'],
    festivals: ['Losar', 'Saga Dawa', 'Lossong', 'Pang Lhabsol'],
    culture: 'Predominantly Buddhist (Tibetan tradition), Lepcha indigenous communities, vibrant thangka art, butter sculpture and the largest cardamom producer in India.',
    bestTime: 'March–May and October–December',
    budget: '₹3,000–₹7,000/day',
    activities: ['Kanchenjunga views at sunrise', 'Monastery circuit', 'Yak rides', 'Rhododendron trek (March-April)', 'Permit-required North Sikkim'],
    tips: ['Inner Line Permit needed for North Sikkim', 'March-April for rhododendron blooms', 'Book homestays for authentic experience']
  },
  {
    id: 'ar', name: 'Arunachal Pradesh', capital: 'Itanagar',
    type: 'state', region: 'northeast',
    emoji: '🌄', color: '#E84393',
    description: 'Land of the Dawn-lit Mountains — where the sun first rises in India, with ancient monasteries, rare orchids, and over 26 major tribal communities.',
    destinations: ['Tawang', 'Ziro', 'Bomdila', 'Namdapha NP', 'Pasighat', 'Mechuka'],
    hiddenGems: ['Dirang Valley', 'Pakke Tiger Reserve', 'Along', 'Daporijo'],
    food: ['Apong (rice beer)', 'Lukter', 'Bamboo Shoot Dishes', 'Smoked Pork', 'Papaya Curry', 'Thukpa'],
    festivals: ['Ziro Music Festival', 'Losar', 'Nyokum', 'Ponung Dance Festival'],
    culture: '26+ distinct tribal communities including Apatani, Adi, Monpa. Known for handwoven textiles, silver jewelry, unique rice beer traditions.',
    bestTime: 'October–April',
    budget: '₹3,000–₹7,000/day',
    activities: ['Tawang Monastery visit', 'Ziro Valley trek', 'Bum La Pass (China border)', 'Eagle nest wildlife sanctuary'],
    tips: ['Inner Line Permit required for all non-Arunachal residents', 'Book permit from ILP office or online at least 2 weeks early']
  },
  {
    id: 'mn', name: 'Manipur', capital: 'Imphal',
    type: 'state', region: 'northeast',
    emoji: '🌺', color: '#E84393',
    description: 'Jewel of India — home to the floating lake Loktak, Meitei culture, the world\'s only floating national park and the birthplace of Polo.',
    destinations: ['Imphal', 'Loktak Lake', 'Keibul Lamjao NP', 'Moreh', 'Ukhrul'],
    hiddenGems: ['Dzukou Valley (shared)', 'Shirui Lily Peak', 'Sendra Island', 'Nungba'],
    food: ['Eromba', 'Singju', 'Chak-Hao Kheer', 'Nga-Thongba', 'Iromba'],
    festivals: ['Yaoshang (Holi)', 'Ningol Chakouba', 'Lai Haraoba', 'Cheiraoba'],
    culture: 'Meitei indigenous civilization, Manipuri classical dance, Polo birthplace (first played here), Pung Cholom drum dance.',
    bestTime: 'October–March',
    budget: '₹2,000–₹5,000/day',
    activities: ['Loktak floating lake boat ride', 'Manipuri dance performance', 'Polo match', 'Kangla Fort'],
    tips: ['Register with FRO (Foreigner Registration Office)', 'Try Manipuri thali at local restaurants']
  },
  {
    id: 'mz', name: 'Mizoram', capital: 'Aizawl',
    type: 'state', region: 'northeast',
    emoji: '🌺', color: '#8E44AD',
    description: 'Land of the Blue Mountains — one of India\'s most beautiful hill states with terraced bamboo villages, Phawngpui (Blue Mountain) and the rarest Neelakurinji flowers.',
    destinations: ['Aizawl', 'Champhai', 'Phawngpui NP', 'Reiek Heritage Village', 'Lunglei'],
    hiddenGems: ['Pukzing Cave', 'Vantawng Falls', 'Palak Lake', 'Hmuifang'],
    food: ['Bai', 'Vawksa Rep (smoked pork)', 'Koat Pitha', 'Zu (rice beer)', 'Mizo Sawhchiar'],
    festivals: ['Chapchar Kut', 'Mim Kut', 'Pawl Kut', 'Anthurium Festival'],
    culture: 'Predominantly Christian state with strong choral music tradition, bamboo dancing (Cheraw), handwoven Puan textile.',
    bestTime: 'October–March',
    budget: '₹2,500–₹5,500/day',
    activities: ['Phawngpui Blue Mountain trek', 'Cheraw bamboo dance show', 'Champhai border market'],
    tips: ['ILP required', 'Bring warm clothes', 'Church visits are respectful on Sundays']
  },
  {
    id: 'nl', name: 'Nagaland', capital: 'Kohima',
    type: 'state', region: 'northeast',
    emoji: '🦅', color: '#E07B39',
    description: 'Land of Festivals — 16 major tribes, jaw-dropping Dzukou Valley, the world-famous Hornbill Festival and Kohima War Memorial.',
    destinations: ['Kohima', 'Dimapur', 'Mokokchung', 'Dzukou Valley', 'Nagaland War Cemetery'],
    hiddenGems: ['Phek', 'Mon District', 'Doyang Reservoir', 'Japfü Peak'],
    food: ['Pork with Bamboo Shoots', 'Axone (Fermented Soybean)', 'Smoked Meats', 'Zutho (rice beer)', 'Galho'],
    festivals: ['Hornbill Festival (Dec 1–10)', 'Sekrenyi', 'Moatsu', 'Tuluni'],
    culture: '16 major tribes (Angami, Ao, Sumi, etc.) each with distinct traditions. Headhunting past, warrior culture, unique handwoven shawls.',
    bestTime: 'October–April',
    budget: '₹2,500–₹6,000/day',
    activities: ['Hornbill Festival cultural shows', 'Dzukou Valley trek (shared with Manipur)', 'Kohima War Memorial', 'Village homestays'],
    tips: ['Hornbill Festival (Dec 1-10) is a must-visit', 'ILP required', 'Try local Naga kitchen in tribal homestays']
  },
  {
    id: 'tr', name: 'Tripura', capital: 'Agartala',
    type: 'state', region: 'northeast',
    emoji: '🏛️', color: '#E07B39',
    description: 'Ancient kingdom surrounded by Bangladesh — royal palace ruins, bamboo crafts, sacred Saktipith temples and tribal Kokborok culture.',
    destinations: ['Agartala', 'Neermahal (Lake Palace)', 'Ujjayanta Palace', 'Sepahijala', 'Unakoti'],
    hiddenGems: ['Chabimura Rock Carvings', 'Dumbur Lake', 'Trishna Sanctuary', 'Jampui Hills'],
    food: ['Mui Borok', 'Chakhwi', 'Gudok', 'Berma (fermented fish)', 'Wahan Mosdeng'],
    festivals: ['Kharchi Puja', 'Garia Puja', 'Ker Festival', 'Poush Sangkranti'],
    culture: 'Blend of Bengali and Kokborok tribal traditions. Famous for bamboo and cane handicrafts, distinctive Tripuri textiles.',
    bestTime: 'October–March',
    budget: '₹1,500–₹4,000/day',
    activities: ['Neermahal water palace', 'Unakoti rock carvings', 'Tribal village visits'],
    tips: ['No ILP required', 'Neermahal is best visited by boat at sunset']
  },

  // ─── UNION TERRITORIES (additional) ───
  {
    id: 'an', name: 'Andaman & Nicobar', capital: 'Port Blair',
    type: 'ut', region: 'south',
    emoji: '🏝️', color: '#00B4D8',
    description: 'India\'s island paradise — 572 islands with the world\'s most pristine coral reefs, bioluminescent beaches, cellular jail and rare endemic wildlife.',
    destinations: ['Port Blair', 'Havelock Island', 'Neil Island', 'Baratang Island', 'Ross Island', 'Diglipur'],
    hiddenGems: ['Jolly Buoy Island', 'Cinque Island', 'North Bay Island', 'Little Andaman'],
    food: ['Grilled Seafood', 'Coconut Prawn Curry', 'Red Snapper', 'Lobster', 'Coconut Laddoo'],
    festivals: ['Island Tourism Festival', 'Subhas Mela', 'Beach Festival'],
    culture: 'Unique blend of Bengali, Tamil and Andamanese indigenous tribal culture. Cellular Jail (Kalapani) freedom struggle history.',
    bestTime: 'October–May',
    budget: '₹4,000–₹12,000/day',
    activities: ['Snorkeling at Elephant Beach', 'Scuba diving at Havelock', 'Cellular Jail light & sound show', 'Glass-bottom boat'],
    tips: ['Permit required to visit tribal reserves', 'Havelock and Neil need advance ferry booking', 'Best diving visibility: Oct–May']
  },
  {
    id: 'lk', name: 'Lakshadweep', capital: 'Kavaratti',
    type: 'ut', region: 'south',
    emoji: '🌊', color: '#00B4D8',
    description: 'India\'s coral paradise — 36 pristine atolls with the clearest waters in India, untouched lagoons and one of the world\'s best diving spots.',
    destinations: ['Kavaratti', 'Agatti', 'Bangaram', 'Kadmat', 'Minicoy'],
    hiddenGems: ['Suheli Par', 'Andrott Island', 'Kalpeni Island'],
    food: ['Tuna dishes', 'Coconut-based curries', 'Octopus preparations', 'Kallummakaya (mussels)'],
    festivals: ['Eid celebrations', 'Minicoy cultural events'],
    culture: 'Predominantly Muslim community with Mahl and Malayalam languages. Traditional lakshadweepan boat-making, coir weaving.',
    bestTime: 'October–May',
    budget: '₹8,000–₹25,000/day (all-inclusive resorts)',
    activities: ['Scuba diving', 'Snorkeling', 'Kayaking', 'Glass-bottom boat', 'Deep sea fishing'],
    tips: ['Permits required, visit only through authorized travel agents', 'Alcohol is restricted', 'Advance booking essential']
  },
  {
    id: 'py', name: 'Puducherry', capital: 'Puducherry',
    type: 'ut', region: 'south',
    emoji: '⚜️', color: '#8E44AD',
    description: 'French Riviera of the East — charming cobblestoned streets, colorful colonial buildings, Sri Aurobindo Ashram, serene beaches and fusion cuisine.',
    destinations: ['White Town', 'Auroville', 'Promenade Beach', 'Serenity Beach', 'Ousteri Lake'],
    hiddenGems: ['Srirangam (nearby)', 'Chunnambar Boat House', 'Botanical Garden'],
    food: ['French-Tamilian Fusion', 'Baguettes', 'Crepes', 'Bouillabaisse', 'Filter Coffee', 'Crêpe Masala Dosa'],
    festivals: ['Bastille Day', 'Pongal', 'Masi Magam', 'Aurobindo\'s Birthday'],
    culture: 'French colonial heritage visible in architecture, language and cuisine alongside traditional Tamil culture. Ashram spiritual community.',
    bestTime: 'October–March',
    budget: '₹2,500–₹7,000/day',
    activities: ['Cycling through White Town', 'Auroville meditation', 'Beach sunrise', 'Ashram visit', 'French Quarter café hop'],
    tips: ['Cycle is the best way to explore', 'Beer and wine available (unlike many Indian cities)', 'Auroville meditation with permission']
  },
  {
    id: 'ch', name: 'Chandigarh', capital: 'Chandigarh',
    type: 'ut', region: 'north',
    emoji: '🏙️', color: '#3498DB',
    description: 'India\'s most planned city — designed by Le Corbusier, with beautiful gardens, Rock Garden, and the country\'s highest quality of life rankings.',
    destinations: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Pinjore Gardens', 'Capitol Complex'],
    hiddenGems: ['Morni Hills', 'Nada Sahib Gurudwara', 'Elante Mall area', 'Museum of Architecture'],
    food: ['Butter Chicken', 'Chole Bhature', 'Amritsari Kulcha', 'Punjabi Thali', 'Kulfi'],
    festivals: ['Chandigarh Carnival', 'Surajkund Crafts Mela (nearby)', 'Rose Festival'],
    culture: 'Modern planned city with Punjabi and Haryanvi culture, vibrant café scene and high quality urban life.',
    bestTime: 'October–March',
    budget: '₹2,000–₹5,000/day',
    activities: ['Rock Garden exploration', 'Sukhna Lake boating', 'Sector 17 market', 'Capitol Complex architecture walk'],
    tips: ['Very clean city — don\'t litter', 'Rose Festival in March is beautiful', 'Easy base for Shimla/Manali trips']
  },
  {
    id: 'dd', name: 'Dadra & NH and D&D', capital: 'Daman',
    type: 'ut', region: 'west',
    emoji: '🏖️', color: '#F39C12',
    description: 'A Portuguese coastal heritage gem — historic churches, unspoiled beaches, fortress ruins and a laid-back coastal lifestyle.',
    destinations: ['Daman', 'Diu', 'Silvassa', 'Jampore Beach', 'Diu Fort'],
    hiddenGems: ['Nagoa Beach', 'Nida Beach', 'Vansda National Park'],
    food: ['Seafood', 'Portuguese-Goan dishes', 'Prawn Pulao', 'Bebinca (local version)'],
    festivals: ['Daman Carnival', 'Diu Beach Festival'],
    culture: 'Portuguese colonial history with Gujarati cultural base. Known for being alcohol-permitted (unlike Gujarat) attracting many visitors.',
    bestTime: 'October–March',
    budget: '₹2,000–₹5,000/day',
    activities: ['Diu Fort exploration', 'Beach lounging', 'Church visits', 'Water sports at Nagoa Beach'],
    tips: ['Popular weekend getaway from Surat/Ahmedabad', 'Diu is more developed for tourists than Daman']
  }
];

/** 60+ Popular Destinations */
const DESTINATIONS = [
  { id: 'd01', name: 'Taj Mahal', state: 'Uttar Pradesh', region: 'north',
    emoji: '🕌', gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    categories: ['heritage','forts-palaces','photography','culture'],
    rating: 4.9, season: 'Oct–Mar', budget: '₹2,500/day',
    description: 'The crown jewel of Indian architecture — a symbol of eternal love built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal. A UNESCO World Heritage Site and one of the 7 Wonders of the World.',
    attractions: ['Main Mausoleum', 'Masjid Mosque', 'Jawab Building', 'Charbagh Gardens', 'Agra Fort (nearby)'],
    food: ['Petha (Agra sweet)', 'Mughlai Biryani', 'Kebabs'],
    activities: ['Sunrise viewing', 'Moonlight viewing (full moon)', 'Photography', 'Agra Fort visit'],
    tips: 'Closed Fridays. Sunrise is the best time to visit. Photography cameras free, tripods need permit.', hidden: false },

  { id: 'd02', name: 'Goa Beaches', state: 'Goa', region: 'west',
    emoji: '🏖️', gradient: 'linear-gradient(135deg,#00B4D8,#48cae4)',
    categories: ['beaches','adventure','culture','food'],
    rating: 4.7, season: 'Nov–Feb', budget: '₹3,000/day',
    description: 'India\'s beach paradise with over 100km of golden coastline. From the party beaches of North Goa to the serene shores of South Goa, there\'s a beach for every mood.',
    attractions: ['Calangute Beach', 'Palolem Beach', 'Anjuna Flea Market', 'Old Goa Churches', 'Dudhsagar Falls'],
    food: ['Fish Curry Rice', 'Prawn Balchão', 'Bebinca dessert', 'Feni cocktails'],
    activities: ['Water sports', 'Beach hopping', 'Night markets', 'Spice plantation tours', 'Dolphin watching'],
    tips: 'Rent a scooter for mobility. South Goa is quieter. Avoid monsoon (June-Sept). Book 3 months ahead for Christmas.', hidden: false },

  { id: 'd03', name: 'Munnar', state: 'Kerala', region: 'south',
    emoji: '🍃', gradient: 'linear-gradient(135deg,#134E5E,#71B280)',
    categories: ['nature','mountains','photography','spiritual'],
    rating: 4.8, season: 'Sep–May', budget: '₹3,500/day',
    description: 'A hill station draped in emerald tea plantations at 1,600m altitude. Cascading waterfalls, misty peaks and the rare Neelakurinji flowers (bloom once in 12 years) make Munnar extraordinary.',
    attractions: ['Eravikulam National Park', 'Mattupetty Dam', 'Anamudi Peak', 'Top Station', 'Chinnar Wildlife Sanctuary'],
    food: ['Kerala Sadya', 'Appam & Stew', 'Tea estate breakfast'],
    activities: ['Tea estate walk', 'Trekking to Anamudi', 'Paragliding', 'Wildlife spotting'],
    tips: 'Visit October–March for best weather. Book resorts early. Neelakurinji blooms next around 2030.', hidden: false },

  { id: 'd04', name: 'Manali', state: 'Himachal Pradesh', region: 'north',
    emoji: '🏔️', gradient: 'linear-gradient(135deg,#2980B9,#6DD5FA)',
    categories: ['mountains','adventure','nature','photography'],
    rating: 4.6, season: 'May–Jun, Oct–Dec', budget: '₹3,000/day',
    description: 'Gateway to the Himalayas — adventure capital of India with skiing, river rafting, paragliding and the world-famous Rohtang Pass leading to Ladakh.',
    attractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Vashisht Hot Springs', 'Mall Road'],
    food: ['Siddu', 'Trout fish', 'Tibetan thukpa', 'Apple products'],
    activities: ['Skiing at Solang', 'Rohtang Pass drive', 'River rafting', 'Paragliding', 'Camping'],
    tips: 'Rohtang Pass needs permit (book online). Avoid July–August rains. Check road status before Leh journey.', hidden: false },

  { id: 'd05', name: 'Jaipur', state: 'Rajasthan', region: 'west',
    emoji: '🏰', gradient: 'linear-gradient(135deg,#F7971E,#FFD200)',
    categories: ['heritage','forts-palaces','culture','photography'],
    rating: 4.8, season: 'Oct–Mar', budget: '₹3,000/day',
    description: 'The Pink City — India\'s most photogenic city with majestic forts, colorful bazaars, blue pottery workshops and the magnificent Amber Fort. Capital of royal Rajasthan.',
    attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Jal Mahal'],
    food: ['Dal Baati Churma', 'Laal Maas', 'Ghewar', 'Pyaaz Kachori', 'Lassi'],
    activities: ['Elephant ride at Amber Fort', 'Hot air balloon', 'Block print workshop', 'Heritage walk', 'Light & Sound show'],
    tips: 'ComboTicket covers 5 major monuments. Bargain at Johari Bazaar. Best in festival season (Oct-Mar).', hidden: false },

  { id: 'd06', name: 'Udaipur', state: 'Rajasthan', region: 'west',
    emoji: '🌅', gradient: 'linear-gradient(135deg,#ee9ca7,#ffdde1)',
    categories: ['heritage','forts-palaces','culture','photography'],
    rating: 4.9, season: 'Oct–Mar', budget: '₹3,500/day',
    description: 'City of Lakes — the most romantic city in India with shimmering lake palaces, ancient temples and vibrant puppet shows. A masterpiece of Rajput architecture.',
    attractions: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon ki Bari', 'Jagdish Temple'],
    food: ['Dal Baati Churma', 'Rajasthani Thali', 'Traditional sweets'],
    activities: ['Lake boat ride at sunset', 'Puppet show', 'City Palace tour', 'Vintage car ride'],
    tips: 'Book Lake Palace (Taj Hotel) for sunset views from lake. Visit during October–March. Ropeway to Karni Mata Temple.', hidden: false },

  { id: 'd07', name: 'Varanasi', state: 'Uttar Pradesh', region: 'north',
    emoji: '🕯️', gradient: 'linear-gradient(135deg,#f7931e,#f15a24)',
    categories: ['spiritual','culture','photography','heritage'],
    rating: 4.9, season: 'Oct–Mar', budget: '₹2,000/day',
    description: 'The oldest living city on Earth — the spiritual capital of India where the Ganga burns eternal, ancient ghats echo with centuries of devotion and life\'s cycle is experienced in its entirety.',
    attractions: ['Dashashwamedh Ghat', 'Manikarnika Ghat', 'Kashi Vishwanath Temple', 'Sarnath', 'Ramnagar Fort'],
    food: ['Kachori Sabzi', 'Thandai', 'Malaiyo', 'Banarasi Paan', 'Chena Dahi Vada'],
    activities: ['Ganga Aarti at sunset/sunrise', 'Boat ride on Ganga', 'Silk weaving workshop', 'Sarnath Buddhist site', 'Old city walk'],
    tips: 'Wake up before dawn for the most magical experience. Boat ride at sunrise is unmissable. Be respectful at cremation ghats.', hidden: false },

  { id: 'd08', name: 'Hampi', state: 'Karnataka', region: 'south',
    emoji: '🏛️', gradient: 'linear-gradient(135deg,#D4A574,#C67B2A)',
    categories: ['heritage','forts-palaces','photography','culture'],
    rating: 4.8, season: 'Oct–Mar', budget: '₹2,000/day',
    description: 'Ancient capital of the Vijayanagara Empire — a surreal UNESCO World Heritage landscape of temple ruins, massive boulders, and a magnificent heritage that rivals Angkor Wat.',
    attractions: ['Virupaksha Temple', 'Vittala Temple with Stone Chariot', 'Hampi Bazaar', 'Matanga Hill Sunrise', 'Elephant Stables'],
    food: ['Karnataka Thali', 'Bisi Bele Bath', 'Ragi Mudde'],
    activities: ['Coracle boat ride', 'Bicycle tour of ruins', 'Sunrise at Matanga Hill', 'Rock climbing'],
    tips: 'Rent a bicycle or auto for a full day. Stay on Virupaksha side for sunset views. Closed Tuesdays. Minimum 2 days to explore.', hidden: false },

  { id: 'd09', name: 'Ladakh', state: 'Ladakh', region: 'north',
    emoji: '🏜️', gradient: 'linear-gradient(135deg,#4b6cb7,#182848)',
    categories: ['mountains','adventure','spiritual','photography'],
    rating: 4.9, season: 'Jun–Sep', budget: '₹4,000/day',
    description: 'The Last Shangri-La — an other-worldly high-altitude desert with ancient Buddhist monasteries perched on clifftops, impossibly blue lakes and mountain passes touching the sky.',
    attractions: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Thiksey Monastery', 'Magnetic Hill', 'Hemis Monastery'],
    food: ['Thukpa', 'Momos', 'Butter Tea', 'Tsampa'],
    activities: ['Bike trip on Manali-Leh Highway', 'Camel safari in Nubra', 'Monastery circuit', 'White water rafting', 'Star gazing'],
    tips: 'Acclimatize 2-3 days in Leh before going higher. Altitude sickness is real. Inner Line Permit needed for some areas.', hidden: false },

  { id: 'd10', name: 'Shillong', state: 'Meghalaya', region: 'northeast',
    emoji: '🌧️', gradient: 'linear-gradient(135deg,#1abc9c,#2ecc71)',
    categories: ['nature','mountains','culture','photography'],
    rating: 4.6, season: 'Oct–Jun', budget: '₹3,000/day',
    description: 'Scotland of the East — a charming hill town with waterfalls, clean air, vibrant music scene and gateway to the world\'s wettest places.',
    attractions: ['Shillong Peak', 'Elephant Falls', 'Ward\'s Lake', 'Police Bazaar', 'Cathedral of Mary Help of Christians'],
    food: ['Jadoh (rice & meat)', 'Dohkhlieh', 'Tungrymbai', 'Black Sesame'],
    activities: ['Living Root Bridge trek', 'Dawki river kayaking', 'Cave exploration', 'Cherry blossom viewing (April)'],
    tips: 'Carry raincoat always. Taxis are main transport. Visit Cherrapunji and Mawsynram from Shillong.', hidden: false },

  { id: 'd11', name: 'Rishikesh', state: 'Uttarakhand', region: 'north',
    emoji: '🧘', gradient: 'linear-gradient(135deg,#11998e,#38ef7d)',
    categories: ['spiritual','adventure','nature','culture'],
    rating: 4.7, season: 'Sep–Nov, Mar–May', budget: '₹2,500/day',
    description: 'World Yoga Capital — where the Ganga rushes down from the Himalayas, Beatles came for enlightenment, and adventure meets spirituality on the banks of the sacred river.',
    attractions: ['Laxman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Beatles Ashram', 'Parmarth Niketan'],
    food: ['Sattvic Ashram food', 'Aloo puri', 'Fresh Ganga-side chai', 'Banana lassi'],
    activities: ['White water rafting (Grade 3-4)', 'Yoga retreat', 'Bungee jumping', 'Camping on Ganga banks', 'Evening Ganga Aarti'],
    tips: 'Non-vegetarian food and alcohol not available near temples. Book yoga retreats months in advance. Rafting Oct–Apr is best.', hidden: false },

  { id: 'd12', name: 'Ooty', state: 'Tamil Nadu', region: 'south',
    emoji: '🌿', gradient: 'linear-gradient(135deg,#3a7bd5,#3a6073)',
    categories: ['nature','mountains','photography'],
    rating: 4.5, season: 'Mar–Jun', budget: '₹2,500/day',
    description: 'Queen of Hill Stations — misty Nilgiri Mountains with colonial bungalows, emerald tea gardens, a heritage toy train and the famous Botanical Gardens.',
    attractions: ['Ooty Lake', 'Botanical Gardens', 'Doddabetta Peak', 'Nilgiri Mountain Railway', 'Pykara Falls'],
    food: ['Nilgiri Tea', 'Homemade Chocolate', 'Varkey Biscuits', 'Ooty Shortbread'],
    activities: ['Toy train ride', 'Boating on Ooty Lake', 'Horse riding', 'Rose Garden visit', 'Tea estate walk'],
    tips: 'Toy train (Mettupalayam–Ooty) must be booked in advance. Best months: April–June for pleasant weather.', hidden: false },

  { id: 'd13', name: 'Darjeeling', state: 'West Bengal', region: 'east',
    emoji: '☕', gradient: 'linear-gradient(135deg,#355C7D,#6C5B7B)',
    categories: ['mountains','nature','photography'],
    rating: 4.7, season: 'Mar–May, Oct–Dec', budget: '₹3,000/day',
    description: 'Queen of the Hills — at 2,134m, with Kanchenjunga views, misty tea gardens, a UNESCO-listed toy train and some of the world\'s most prized tea.',
    attractions: ['Tiger Hill Sunrise', 'Darjeeling Himalayan Railway', 'Batasia Loop', 'Peace Pagoda', 'Tea Estate Tour'],
    food: ['Darjeeling Tea', 'Momos', 'Thukpa', 'Churpee', 'Gundruk Soup'],
    activities: ['Tiger Hill 4AM sunrise (Kanchenjunga view)', 'Toy train ride', 'Tea plantation walk', 'Rock garden'],
    tips: 'Tiger Hill sunrise is unmissable — book a taxi by 3:30AM. April rhododendron season is beautiful.', hidden: false },

  { id: 'd14', name: 'Andaman Islands', state: 'Andaman & Nicobar', region: 'south',
    emoji: '🐠', gradient: 'linear-gradient(135deg,#00B4D8,#90e0ef)',
    categories: ['beaches','adventure','nature','wildlife'],
    rating: 4.9, season: 'Nov–Apr', budget: '₹5,000/day',
    description: 'India\'s untouched island paradise with crystal-clear turquoise water, world-class coral reefs, bioluminescent beaches and the historic Cellular Jail.',
    attractions: ['Radhanagar Beach (Havelock)', 'Cellular Jail', 'Neil Island', 'Ross Island', 'Baratang Limestone Caves'],
    food: ['Grilled Lobster', 'Coconut Prawn Curry', 'Red Snapper', 'Fish Tikka'],
    activities: ['Scuba diving', 'Snorkeling at Elephant Beach', 'Sea walking', 'Kayaking', 'Jungle camping'],
    tips: 'Book ferry between islands well in advance. Carry cash (ATMs are limited). Photography in tribal areas restricted.', hidden: false },

  { id: 'd15', name: 'Mysore', state: 'Karnataka', region: 'south',
    emoji: '👑', gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
    categories: ['heritage','culture','forts-palaces','spiritual'],
    rating: 4.7, season: 'Oct–Feb', budget: '₹2,500/day',
    description: 'City of Palaces — the former capital of Wodeyar kings with a stunning illuminated palace, fragrant sandalwood products, silk and the most spectacular Dasara celebrations.',
    attractions: ['Mysore Palace', 'Chamundeshwari Temple', 'Brindavan Gardens', 'Mysore Zoo', 'St Philomena\'s Church'],
    food: ['Mysore Pak', 'Bisi Bele Bath', 'Mysore Masala Dosa', 'Filter Coffee'],
    activities: ['Palace illumination (Sunday evenings)', 'Dasara procession (October)', 'Silk weaving factory', 'Yoga Sutras class'],
    tips: 'Mysore Palace illuminated 7–7:45 PM on Sundays. Visit during Dasara (October) for spectacular elephant procession.', hidden: false },

  { id: 'd16', name: 'Amritsar', state: 'Punjab', region: 'north',
    emoji: '✨', gradient: 'linear-gradient(135deg,#D4AC0D,#C9A227)',
    categories: ['spiritual','heritage','culture','food'],
    rating: 4.9, season: 'Oct–Mar', budget: '₹2,000/day',
    description: 'Sacred heart of Sikhism — the Golden Temple\'s mirror-like sacred pool reflects golden light at dawn, while the Wagah Border ceremony ignites nationalist fervor every sunset.',
    attractions: ['Golden Temple (Harmandir Sahib)', 'Wagah Border', 'Jallianwala Bagh', 'Akal Takht', 'Mata Temple'],
    food: ['Amritsari Kulcha', 'Dal Makhani', 'Lassi (Punjabi)', 'Pinni'],
    activities: ['Dawn visit to Golden Temple', 'Wagah Border ceremony', 'Langar (free community meal)', 'Heritage walk'],
    tips: 'Golden Temple is open 24/7 and most beautiful at 4AM. Dress modestly, cover head. Langar is free for all. Wagah ceremony: reach by 4PM.', hidden: false },

  { id: 'd17', name: 'Alleppey (Alappuzha)', state: 'Kerala', region: 'south',
    emoji: '🛶', gradient: 'linear-gradient(135deg,#134E5E,#71B280)',
    categories: ['nature','spiritual','culture','adventure'],
    rating: 4.8, season: 'Sep–Feb', budget: '₹3,500/day',
    description: 'Venice of the East — a network of backwater canals, coconut palms and paddy fields navigated by traditional Kerala houseboats (kettuvallams) make Alleppey truly magical.',
    attractions: ['Backwater Houseboat', 'Alappuzha Beach', 'Nehru Trophy Boat Race (Aug)', 'Marari Beach', 'Krishnapuram Palace'],
    food: ['Kerala Sadya', 'Karimeen Pollichathu', 'Prawn Moilee', 'Appam & Stew'],
    activities: ['Overnight houseboat stay', 'Village canoe tour', 'Coir weaving workshop', 'Boat race (August)'],
    tips: 'Book houseboats directly for better rates. November is the best month. For budget: public ferries cover the same waterways at 1/10 the price.', hidden: false },

  { id: 'd18', name: 'Kaziranga', state: 'Assam', region: 'northeast',
    emoji: '🦏', gradient: 'linear-gradient(135deg,#27AE60,#2ECC71)',
    categories: ['wildlife','nature','photography','adventure'],
    rating: 4.9, season: 'Nov–Apr', budget: '₹4,000/day',
    description: 'Home to 2/3 of the world\'s one-horned rhinoceros population — a UNESCO World Heritage Site with extraordinary wildlife including tigers, elephants and the rare Gangetic dolphins.',
    attractions: ['Elephant Safaris', 'Jeep Safaris', 'Mihimukh Range', 'Bagori Range', 'Burhapahar Range'],
    food: ['Assamese Thali', 'Khar', 'Masor Tenga', 'Rice Beer (Apong)'],
    activities: ['Elephant safari at dawn', 'Jeep safari', 'Bird watching (500+ species)', 'Tea estate visit'],
    tips: 'Book safaris 3 months in advance for peak season. June–October: park closed for monsoon. Elephant safari is the best way to see rhinos.', hidden: false },

  { id: 'd19', name: 'Kochi', state: 'Kerala', region: 'south',
    emoji: '⚓', gradient: 'linear-gradient(135deg,#0F3460,#533483)',
    categories: ['heritage','culture','food','beaches'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹3,000/day',
    description: 'Queen of the Arabian Sea — where Chinese fishing nets meet Jewish Synagogues, Dutch buildings stand beside mosques and the world\'s spice trade once began.',
    attractions: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Jewish Synagogue', 'Marine Drive'],
    food: ['Fish Molee', 'Prawn Biryani', 'Appam & Stew', 'Kerala Parotta'],
    activities: ['Fort Kochi heritage walk', 'Kathakali performance', 'Kerala cooking class', 'Sunset cruise', 'Pepper & spice market'],
    tips: 'Stay in Fort Kochi (1 hour ferry from Ernakulam). December art scene is vibrant. Kathakali show at Kerala Kathakali Centre is excellent.', hidden: false },

  { id: 'd20', name: 'Ranthambore', state: 'Rajasthan', region: 'west',
    emoji: '🐅', gradient: 'linear-gradient(135deg,#FF8C00,#FFC200)',
    categories: ['wildlife','adventure','photography','nature'],
    rating: 4.8, season: 'Oct–Jun', budget: '₹4,500/day',
    description: 'India\'s most famous tiger reserve where Bengal tigers roam ancient fort ruins — the best place in the world for guaranteed wild tiger sightings.',
    attractions: ['Ranthambore Fort (inside jungle)', 'Tiger Safari Zones', 'Padam Talao Lake', 'Jogi Mahal'],
    food: ['Rajasthani Thali', 'Dal Baati Churma', 'Laal Maas'],
    activities: ['Tiger safari (6 zones)', 'Sunrise jeep safari', 'Bird watching (300+ species)', 'Fort exploration'],
    tips: 'Book 3 months in advance. Zone 1,2,3 are best for tigers. Best sightings March–June when vegetation is sparse.', hidden: false },

  { id: 'd21', name: 'Zanskar Valley', state: 'Ladakh', region: 'north',
    emoji: '❄️', gradient: 'linear-gradient(135deg,#2c3e50,#4ca1af)',
    categories: ['mountains','adventure','spiritual','photography'],
    rating: 4.8, season: 'Jun–Sep', budget: '₹5,000/day',
    description: 'One of Earth\'s most remote and spectacular valleys — accessible by treacherous mountain roads in summer or the legendary Chadar frozen river trek in winter.',
    attractions: ['Padum', 'Zangla Monastery', 'Phugtal Monastery (cliff)', 'Rangdum Lake', 'Chadar Trek Route'],
    food: ['Tibetan Thukpa', 'Momos', 'Butter Tea', 'Chang'],
    activities: ['Chadar frozen river trek (January)', 'Monastery stays', 'Trekking', 'River rafting on Zanskar River'],
    tips: 'Most remote valley in India. Road from Kargil opens June–October. Chadar trek in January is extreme — only for very fit trekkers.', hidden: false },

  { id: 'd22', name: 'Tawang', state: 'Arunachal Pradesh', region: 'northeast',
    emoji: '🗻', gradient: 'linear-gradient(135deg,#614385,#516395)',
    categories: ['spiritual','mountains','culture','photography'],
    rating: 4.8, season: 'Mar–Oct', budget: '₹4,000/day',
    description: 'Tibet\'s closest Indian counterpart — at 3,048m with the legendary Tawang Monastery (one of the world\'s largest), saffron-robed monks and stunning war memorials.',
    attractions: ['Tawang Monastery', 'Sela Pass', 'Bum La Pass (China border)', 'WWII War Memorial', 'PT Tso Lake'],
    food: ['Khura (rice pancakes)', 'Apong (rice beer)', 'Momos', 'Thukpa'],
    activities: ['Monastery visit', 'Bum La Pass (permit required)', 'Monpa village homestay', 'Festival witnessing'],
    tips: 'ILP required. Best visited April–June and Sept–Oct. Bum La Pass requires a special permit and local guide.', hidden: false },

  { id: 'd23', name: 'Varkala', state: 'Kerala', region: 'south',
    emoji: '🌊', gradient: 'linear-gradient(135deg,#00B4D8,#2EC4B6)',
    categories: ['beaches','spiritual','nature','adventure'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹2,500/day',
    description: 'Kerala\'s cliff beach paradise — a dramatic laterite cliff overlooking the Arabian Sea with the sacred Janardhana Swami Temple, natural springs and a vibrant beach café culture.',
    attractions: ['Varkala Cliff Beach', 'Janardhana Swami Temple', 'Black Beach', 'Kappil Beach', 'Papanasam Beach'],
    food: ['Kerala Fish Fry', 'Coconut water', 'Fresh Seafood', 'Keralite Thali'],
    activities: ['Cliff-top yoga', 'Surfing lessons', 'Ayurvedic spa', 'Parasailing', 'Sunset watching'],
    tips: 'Less touristy than Kovalam. Stay on North Cliff for the best experience. Surfing season Nov–Mar.', hidden: false },

  { id: 'd24', name: 'Khajuraho', state: 'Madhya Pradesh', region: 'central',
    emoji: '🏛️', gradient: 'linear-gradient(135deg,#e96c5a,#f5af19)',
    categories: ['heritage','culture','photography','forts-palaces'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹2,500/day',
    description: 'UNESCO World Heritage temples with extraordinary erotic sculptures — a triumph of 10th century Chandela dynasty architecture depicting the full spectrum of human experience.',
    attractions: ['Western Temple Group', 'Eastern Temples', 'Kandariya Mahadev Temple', 'Chitragupta Temple'],
    food: ['MP Thali', 'Dal Bafla', 'Poha-Jalebi'],
    activities: ['Sunrise at Western temples', 'Light & Sound show', 'Khajuraho Dance Festival (Feb)', 'Tribal craft shopping'],
    tips: 'Khajuraho Dance Festival in February is spectacular. Western temples are most famous. Start early morning for best light for photography.', hidden: false },

  { id: 'd25', name: 'Pushkar', state: 'Rajasthan', region: 'west',
    emoji: '🐪', gradient: 'linear-gradient(135deg,#F7971E,#c67b2a)',
    categories: ['spiritual','culture','festivals','heritage'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹2,000/day',
    description: 'Sacred city of Brahma — the only Brahma temple in the world sits beside a holy lake where thousands of pilgrims bathe, and the world\'s most famous camel fair transforms the desert.',
    attractions: ['Brahma Temple', 'Pushkar Lake Ghats', 'Rose Gardens', 'Pushkar Camel Fair Ground', 'Savitri Temple'],
    food: ['Pure Vegetarian thalis', 'Malpua', 'Traditional sweets'],
    activities: ['Camel Fair (November)', 'Sunrise hot air balloon', 'Rose fields', 'Holy dip at Pushkar Lake'],
    tips: 'Pushkar is sacred — no meat, eggs or alcohol in the main town. Camel Fair (usually November) needs planning months in advance.', hidden: false },

  { id: 'd26', name: 'Coorg', state: 'Karnataka', region: 'south',
    emoji: '☕', gradient: 'linear-gradient(135deg,#2d6a4f,#52b788)',
    categories: ['nature','mountains','adventure','food'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹3,500/day',
    description: 'Scotland of India — a misty coffee estate district with warrior Kodava culture, roaring Abbey Falls, white water rafting and some of India\'s best plantation stays.',
    attractions: ['Abbey Falls', 'Raja\'s Seat', 'Dubare Elephant Camp', 'Nagarhole NP', 'Talakaveri (Cauvery source)'],
    food: ['Pork Curry (Pandi Curry)', 'Coorg Rice (Kumbala Kanji)', 'Coffee', 'Akki Roti'],
    activities: ['Coffee estate tour', 'White water rafting', 'Jungle safari', 'Elephant interaction'],
    tips: 'Best October–February. June–August monsoon turns waterfalls spectacular but roads slippery. Book estate homestays early.', hidden: false },

  { id: 'd27', name: 'Majuli', state: 'Assam', region: 'northeast',
    emoji: '🏝️', gradient: 'linear-gradient(135deg,#27AE60,#1abc9c)',
    categories: ['culture','nature','spiritual','photography'],
    rating: 4.6, season: 'Oct–Mar', budget: '₹2,500/day',
    description: 'World\'s largest river island on the Brahmaputra — a UNESCO World Heritage candidate with ancient Sattriya monasteries, mask-making villages and Neo-Vaishnavism headquarters.',
    attractions: ['Kamalabari Satra', 'Auniati Satra', 'Garamur Satra', 'Mishing tribal villages', 'Mask-making workshops'],
    food: ['Assamese Thali', 'Pitha', 'Fresh river fish', 'Apong (rice beer)'],
    activities: ['Satra monastery visits', 'Traditional mask making', 'Cycling across the island', 'Bird watching'],
    tips: 'Take ferry from Neemati Ghat (Jorhat). Stay in a satra guesthouse for authentic experience. Visit October–March before floods.', hidden: false },

  { id: 'd28', name: 'Chikmagalur', state: 'Karnataka', region: 'south',
    emoji: '🌱', gradient: 'linear-gradient(135deg,#2d6a4f,#40916c)',
    categories: ['nature','mountains','adventure','food'],
    rating: 4.6, season: 'Sep–Mar', budget: '₹3,000/day',
    description: 'Coffee Land of India — rolling coffee estates, misty Mullayanagiri peak (Karnataka\'s highest), and the birthplace of Indian coffee production.',
    attractions: ['Mullayanagiri Peak', 'Bababudangiri Hills', 'Hebbe Falls', 'Z Point', 'Coffee Museum'],
    food: ['Estate Coffee', 'Ragi Mudde', 'Karnataka Thali', 'Fresh honey'],
    activities: ['Coffee estate walks', 'Trek to Mullayanagiri', 'Birdwatching', 'Heritage homestay'],
    tips: 'Monsoon (July-September) turns the estates spectacular. Coffee harvest season (November-February) is most beautiful.', hidden: false },

  { id: 'd29', name: 'Puri', state: 'Odisha', region: 'east',
    emoji: '🛕', gradient: 'linear-gradient(135deg,#FF6B35,#F9844A)',
    categories: ['spiritual','beaches','culture','heritage'],
    rating: 4.7, season: 'Oct–Mar', budget: '₹2,000/day',
    description: 'One of India\'s 4 sacred Char Dhams — home to Lord Jagannath, the world-famous Rath Yatra and beautiful beaches make Puri a unique blend of devotion and leisure.',
    attractions: ['Jagannath Temple', 'Puri Beach', 'Konark Sun Temple (64km)', 'Chilika Lake', 'Rath Yatra Route'],
    food: ['Mahaprasad (temple food)', 'Pakhala Bhata', 'Chenna Poda', 'Crab Curry'],
    activities: ['Temple pilgrimage', 'Rath Yatra witnessing (July)', 'Beach walk at dawn', 'Sand art watching'],
    tips: 'Non-Hindus not allowed inside Jagannath Temple. Rath Yatra (July) is extraordinary but extremely crowded. Konark must-see from Puri.', hidden: false },

  { id: 'd30', name: 'Mahabalipuram', state: 'Tamil Nadu', region: 'south',
    emoji: '🌊', gradient: 'linear-gradient(135deg,#C0392B,#E74C3C)',
    categories: ['heritage','beaches','culture','photography'],
    rating: 4.7, season: 'Nov–Mar', budget: '₹2,500/day',
    description: 'Shore Temple city — 7th-century Pallava rock-cut temples by the sea, ancient bas-reliefs and the remarkable Five Rathas chariots make this UNESCO site utterly unique.',
    attractions: ['Shore Temple', 'Arjuna\'s Penance (world\'s largest bas-relief)', 'Five Rathas', 'Krishna\'s Butter Ball', 'Cave Temples'],
    food: ['Tamil Thali', 'Seafood', 'Filter Coffee', 'Dosa varieties'],
    activities: ['Sunrise at Shore Temple', 'Stone carving workshop', 'Beach walk', 'Day trip to Chennai'],
    tips: 'Morning light at Shore Temple is magical. Combined UNESCO ticket covers all monuments. Stone carving workshops are excellent souvenirs.', hidden: false }
];

/** Hidden Gems of India */
const HIDDEN_DESTINATIONS = [
  { id: 'h01', name: 'Ziro Valley', state: 'Arunachal Pradesh', emoji: '🌾', region: 'northeast',
    description: 'A UNESCO aspirant valley where the Apatani tribe practices ancient sustainable agriculture with unique nose plugs tradition.',
    gradient: 'linear-gradient(135deg,#E84393,#8E44AD)', badge: 'Tribal Paradise' },
  { id: 'h02', name: 'Majuli Island', state: 'Assam', emoji: '🏝️', region: 'northeast',
    description: 'World\'s largest river island, home to ancient Sattriya monasteries and the Neo-Vaishnavism tradition.',
    gradient: 'linear-gradient(135deg,#27AE60,#2ECC71)', badge: 'UNESCO Aspirant' },
  { id: 'h03', name: 'Tawang Monastery', state: 'Arunachal Pradesh', emoji: '🗻', region: 'northeast',
    description: 'Asia\'s largest Buddhist monastery at 3,048m, surrounded by glacial lakes and Himalayan peaks.',
    gradient: 'linear-gradient(135deg,#614385,#516395)', badge: 'Himalayan Secret' },
  { id: 'h04', name: 'Gurez Valley', state: 'Jammu & Kashmir', emoji: '🏔️', region: 'north',
    description: 'A remote, unspoiled Himalayan valley with a river winding between ancient Dard villages, untouched by mass tourism.',
    gradient: 'linear-gradient(135deg,#4A90D9,#357ABD)', badge: 'Lost Valley' },
  { id: 'h05', name: 'Chopta', state: 'Uttarakhand', emoji: '⛷️', region: 'north',
    description: 'The Mini Switzerland of India — a meadow at 2,900m with panoramic Himalayan views and the trek to Tungnath (world\'s highest Shiva temple).',
    gradient: 'linear-gradient(135deg,#2980B9,#6DD5FA)', badge: 'Mini Switzerland' },
  { id: 'h06', name: 'Gandikota', state: 'Andhra Pradesh', emoji: '🏜️', region: 'south',
    description: 'India\'s Grand Canyon — a dramatic gorge carved by the Penna River through red quartzite rock with a 13th-century fort.',
    gradient: 'linear-gradient(135deg,#E74C3C,#C0392B)', badge: 'India\'s Grand Canyon' },
  { id: 'h07', name: 'Dzukou Valley', state: 'Nagaland/Manipur', emoji: '🌺', region: 'northeast',
    description: 'Valley of Flowers of Northeast India — a stunning high-altitude valley blooming with rare Dzukou lilies in summer.',
    gradient: 'linear-gradient(135deg,#E84393,#C0392B)', badge: 'Flower Valley' },
  { id: 'h08', name: 'Spiti Valley', state: 'Himachal Pradesh', emoji: '🏜️', region: 'north',
    description: 'Middle Land between India and Tibet — a cold desert mountain valley with thousand-year-old monasteries perched on clifftops.',
    gradient: 'linear-gradient(135deg,#7F8C8D,#4A90D9)', badge: 'Cold Desert' },
  { id: 'h09', name: 'Mararikulam', state: 'Kerala', emoji: '🌴', region: 'south',
    description: 'Kerala\'s most pristine and undiscovered beach — a fishing village with palm-fringed white sand, far from the tourist crowds.',
    gradient: 'linear-gradient(135deg,#00B4D8,#2EC4B6)', badge: 'Pristine Beach' },
  { id: 'h10', name: 'Lonar Lake', state: 'Maharashtra', emoji: '☄️', region: 'west',
    description: 'World\'s only hypervelocity basaltic impact crater lake — formed 50,000 years ago by a meteor, now a saline and alkaline lake with ancient temples.',
    gradient: 'linear-gradient(135deg,#8E44AD,#6C3483)', badge: 'Meteor Crater' },
  { id: 'h11', name: 'Chettinad', state: 'Tamil Nadu', emoji: '🏛️', region: 'south',
    description: '18,000 mansions and some of India\'s most complex, spiciest cuisine define this extraordinary merchant community\'s homeland.',
    gradient: 'linear-gradient(135deg,#C0392B,#922B21)', badge: 'Culinary Heritage' },
  { id: 'h12', name: 'Nubra Valley', state: 'Ladakh', emoji: '🐪', region: 'north',
    description: 'Where camels walk on Himalayan sand dunes between snowcapped 5,000m peaks — a surreal landscape accessible via the world\'s highest motorable pass.',
    gradient: 'linear-gradient(135deg,#F7971E,#C67B2A)', badge: 'Desert Himalayas' }
];

/** Indian Foods by State */
const FOODS = [
  { name: 'Dal Baati Churma', state: 'Rajasthan', emoji: '🍲', desc: 'Baked dough balls dipped in ghee with lentil curry and sweet churma crumble — the soul food of Rajasthan.' },
  { name: 'Appam & Sadya', state: 'Kerala', emoji: '🥘', desc: 'Lacy rice pancakes with a 20+ dish banana leaf feast featuring sambar, avial, payasam and more.' },
  { name: 'Amritsari Kulcha', state: 'Punjab', emoji: '🫓', desc: 'Crispy stuffed bread baked in a tandoor and served with spiced chickpeas — Amritsar\'s legendary street food.' },
  { name: 'Hyderabadi Biryani', state: 'Telangana', emoji: '🍛', desc: 'Slow-cooked dum biryani with saffron, whole spices and tender mutton — considered the finest biryani in India.' },
  { name: 'Dosa & Pongal', state: 'Tamil Nadu', emoji: '🫔', desc: 'Paper-thin crispy crepe made from fermented batter served with sambar and chutneys — South India\'s gift to breakfast.' },
  { name: 'Dhokla', state: 'Gujarat', emoji: '🟡', desc: 'Steamed fermented chickpea cake — a light, tangy and healthy Gujarati snack loved across India.' },
  { name: 'Rasgulla & Fish Curry', state: 'West Bengal', emoji: '🐟', desc: 'Spongy milk-solid balls in sugar syrup alongside a tangy mustard-coconut fish curry — Bengal in a nutshell.' },
  { name: 'Misal Pav', state: 'Maharashtra', emoji: '🌶️', desc: 'Fiery sprouted moth bean curry topped with farsan and served with soft pav — Mumbai\'s most beloved breakfast.' },
  { name: 'Khar', state: 'Assam', emoji: '🍳', desc: 'A unique alkaline dish made from raw papaya or fish cooked with filtered ash water — the first course in Assamese cuisine.' },
  { name: 'Bisi Bele Bath', state: 'Karnataka', emoji: '🍲', desc: 'A warm, comforting one-pot meal of rice, lentils, vegetables and spices — Karnataka\'s signature dish.' },
  { name: 'Rogan Josh', state: 'Jammu & Kashmir', emoji: '🍖', desc: 'Aromatic slow-cooked lamb in Kashmiri spices and dried cockscomb flower giving it a brilliant red color.' },
  { name: 'Litti Chokha', state: 'Bihar', emoji: '🫙', desc: 'Roasted dough balls stuffed with spiced sattu served with mashed vegetables — Bihar\'s earthy soul food.' },
  { name: 'Chettinad Chicken', state: 'Tamil Nadu', emoji: '🍗', desc: 'India\'s most complex spice blend — a fiery chicken curry with 30+ spices unique to the Chettinad merchant community.' },
  { name: 'Gongura Mutton', state: 'Andhra Pradesh', emoji: '🌿', desc: 'Tangy sorrel leaf based mutton curry — the iconic flavor of Andhra cuisine, famously spicy.' },
  { name: 'Wazwan Feast', state: 'Jammu & Kashmir', emoji: '👑', desc: 'A 36-course royal Kashmiri feast featuring Rogan Josh, Yakhni, Seekh Kabab and Rista — hospitality at its finest.' },
  { name: 'Bamboo Shoot Curry', state: 'Arunachal Pradesh', emoji: '🎋', desc: 'Fresh bamboo shoots cooked with pork or dried fish and local herbs — the signature flavor of Northeast India.' },
  { name: 'Thukpa', state: 'Ladakh', emoji: '🍜', desc: 'Hearty Tibetan noodle soup with vegetables or meat — the perfect warming meal in high-altitude cold desert.' },
  { name: 'Undhiyu', state: 'Gujarat', emoji: '🥗', desc: 'A slow-cooked winter mix of seasonal vegetables and dumplings in spiced gravy — Gujarat\'s festive classic.' },
  { name: 'Jadoh', state: 'Meghalaya', emoji: '🍚', desc: 'Red rice cooked with pork or chicken and fragrant herbs — the quintessential Khasi tribal meal.' },
  { name: 'Peda from Mathura', state: 'Uttar Pradesh', emoji: '🍬', desc: 'Soft milk-solid sweets offered to Lord Krishna — the most famous sweet of the Braj region.' }
];

/** Indian Festivals */
const FESTIVALS = [
  { name: 'Diwali', state: 'Pan India', emoji: '🪔', season: 'autumn', date: 'October–November',
    desc: 'Festival of Lights — the most celebrated Indian festival with fireworks, earthen lamps, sweets and family gatherings marking Lord Ram\'s return to Ayodhya.',
    tip: 'Best experienced in Varanasi, Jaipur or Diwali markets of Delhi.' },
  { name: 'Holi', state: 'Pan India', emoji: '🎨', season: 'spring', date: 'March',
    desc: 'Festival of Colors — a joyous explosion of gulal colors celebrating the victory of good over evil and the arrival of spring.',
    tip: 'Mathura-Vrindavan Holi (Lathmar Holi) and Barsana are the most spectacular. Wear white clothes!' },
  { name: 'Onam', state: 'Kerala', emoji: '🌸', season: 'monsoon', date: 'August–September',
    desc: 'Kerala\'s harvest festival celebrating King Mahabali\'s return — 10 days of flower carpets (Pookalam), snake boat races and elaborate Sadya feasts.',
    tip: 'Nehru Trophy Boat Race in Alleppey during Onam week is unmissable.' },
  { name: 'Pongal', state: 'Tamil Nadu', emoji: '☀️', season: 'winter', date: 'January',
    desc: 'Tamil harvest festival — a 4-day celebration thanking the Sun god with sweet rice cooked in clay pots and Jallikattu bull-taming events.',
    tip: 'Rural Tamil Nadu during Pongal is the most authentic experience.' },
  { name: 'Bihu', state: 'Assam', emoji: '🌿', season: 'spring', date: 'April, October, January',
    desc: 'Assam\'s three agricultural festivals — Bohag Bihu (spring) is the grandest with Bihu dance performances and community feasting.',
    tip: 'Bohag Bihu in April sees spectacular performances. Attend a community Bihu night.' },
  { name: 'Durga Puja', state: 'West Bengal', emoji: '🪆', season: 'autumn', date: 'October',
    desc: 'Kolkata\'s greatest celebration — 5 days when artistic pandal (tent) installations of Goddess Durga transform the city into the world\'s largest art festival.',
    tip: 'Pandal hopping all night during Panchami–Navami in Kolkata is an unmissable experience.' },
  { name: 'Navratri & Garba', state: 'Gujarat', emoji: '💃', season: 'autumn', date: 'September–October',
    desc: 'Nine nights of devotion to Goddess Durga — Gujarat\'s Garba dance celebrations are the world\'s largest folk dance events attracting millions.',
    tip: 'Vadodara and Ahmedabad\'s Garba grounds during Navratri nights are breathtaking. Dress in traditional chaniya-choli.' },
  { name: 'Ganesh Chaturthi', state: 'Maharashtra', emoji: '🐘', season: 'monsoon', date: 'August–September',
    desc: 'Mumbai\'s biggest festival — 11 days of public celebration of Lord Ganesha culminating in massive processions immersing clay idols in the sea.',
    tip: 'Mumbai\'s Lalbaugcha Raja procession on final day draws 10 million people.' },
  { name: 'Hornbill Festival', state: 'Nagaland', emoji: '🦅', season: 'winter', date: 'December 1–10',
    desc: 'Festival of Festivals — all 16 Naga tribes perform their traditional dances, music and displays of warrior culture simultaneously at Kisama Heritage Village.',
    tip: 'Book accommodation in Kohima 6 months in advance. This is a once-in-a-lifetime cultural experience.' },
  { name: 'Pushkar Camel Fair', state: 'Rajasthan', emoji: '🐪', season: 'autumn', date: 'November',
    desc: 'World\'s largest camel fair — 50,000+ camels, horses and cattle trade hands while pilgrims bathe in Pushkar Lake and balloon rides float over the Thar.',
    tip: 'Book accommodation a year in advance. The nights with bonfire music are magical.' },
  { name: 'Mysore Dasara', state: 'Karnataka', emoji: '👑', season: 'autumn', date: 'October',
    desc: 'Royal procession of the former Mysore kingdom — a caparisoned elephant carries the golden idol of Goddess Chamundeshwari through illuminated streets.',
    tip: 'The Mysore Palace illumination during Dasara (over 100,000 lights) is extraordinary.' },
  { name: 'Kumbh Mela', state: 'Uttar Pradesh/Uttarakhand', emoji: '🙏', season: 'winter', date: 'Every 12 years (Prayagraj), 6 years (Haridwar/Nashik)',
    desc: 'The world\'s largest human gathering — millions of pilgrims bathe at the confluence of sacred rivers on auspicious dates to attain moksha (liberation).',
    tip: 'Shahi Snan (Royal Bath) days see the largest crowds. Attend the Naga Sadhu procession for an otherworldly experience.' },
  { name: 'Hemis Festival', state: 'Ladakh', emoji: '⛩️', season: 'summer', date: 'June–July',
    desc: 'Ladakh\'s grandest festival at Hemis Monastery — colorful cham (masked) dances performed by monks to depict the victory of good over evil.',
    tip: 'Accommodation in Leh is scarce during festival. Book 4–6 months in advance.' },
  { name: 'Thrissur Pooram', state: 'Kerala', emoji: '🎆', season: 'summer', date: 'April–May',
    desc: 'Kerala\'s grandest temple festival — two groups of caparisoned elephants compete with percussion and fireworks in the largest temple festival in Asia.',
    tip: 'The Kudamattom (umbrella exchange) ritual and the midnight fireworks are extraordinary.' },
  { name: 'Rann Utsav', state: 'Gujarat', emoji: '🌕', season: 'winter', date: 'November–February',
    desc: 'A cultural festival on the white salt desert of Kutch — full moon nights, folk performances, camel rides and handicraft bazaars transform the moonlit landscape.',
    tip: 'Full moon nights at the Rann under the stars are extraordinarily beautiful. Book 4 months in advance.' }
];

/** Travel Tips Categories */
const TRAVEL_TIPS = [
  { icon: '🎒', title: 'Packing Essentials', preview: 'Light cotton clothes, scarves, sunscreen, medicines...',
    tips: ['Pack light cotton clothes for South India; layers for North/Himalayan regions', 'Always carry a dupatta/scarf for temple visits', 'Bring mosquito repellent (DEET based) for forests and backwaters', 'High SPF sunscreen is essential year-round', 'Carry basic medicines: ORS, paracetamol, antacid, band-aids', 'Portable water filter or purification tablets for remote areas', 'A rain poncho for monsoon season or Kerala', 'Download offline maps (Maps.me or Google Maps offline)'] },
  { icon: '💰', title: 'Budget Planning', preview: 'India for all budgets — backpacker to luxury...',
    tips: ['Budget: ₹1,000–1,500/day (hostel, street food, local transport)', 'Mid-range: ₹3,000–6,000/day (guesthouse, restaurants, AC transport)', 'Luxury: ₹10,000+/day (heritage hotels, fine dining, private tours)', 'Always carry cash — many places don\'t accept cards', 'Negotiate taxi fares beforehand or insist on meters', 'Entry fees for foreigners are higher than for Indians at monuments', 'Train travel is the most cost-effective way to cover long distances', 'Temple towns often offer very affordable local food (Rs 50-100 for a meal)'] },
  { icon: '🚆', title: 'Getting Around', preview: 'Train, bus, auto, metro — India\'s transport options...',
    tips: ['Indian Railways: book 60-120 days in advance on IRCTC app', 'Sleeper class for budget; 3AC/2AC for comfort', 'Ola/Uber available in all major cities — safer than random autos', 'Ola Intercity for outstation travel within states', 'For Northeast India: helicopter services are sometimes the only option', 'Self-drive in India is not recommended for first-timers', 'Ladakh road trip: hire a local driver or join an organized trip', 'Local buses are cheapest but not always on schedule'] },
  { icon: '🏨', title: 'Accommodation', preview: 'From palace hotels to homestays — booking tips...',
    tips: ['Heritage hotels in Rajasthan offer a royal experience at moderate prices', 'Homestays in Northeast India and Kerala give the most authentic experience', 'Temple towns (Varanasi, Pushkar, Rishikesh) have excellent budget dharamshalas (guesthouses)', 'Book via MakeMyTrip, Booking.com, or direct with hotels for best rates', 'Beach shacks in Goa during peak season (Nov-Feb) require advance booking', 'Houseboat stays in Alleppey: negotiate directly at the houseboat jetty', 'Wilderness camps and forest lodges for wildlife reserves must be booked months in advance', 'Air Bnb has excellent options for longer city stays'] },
  { icon: '🛡️', title: 'Safety Tips', preview: 'Stay safe while exploring India...', 
    tips: ['Register your itinerary with your country\'s embassy for remote areas', 'Keep photocopies of passport, visa, hotel bookings separately', 'India is generally safe; petty theft is the main concern in tourist areas', 'Avoid accepting food or drinks from strangers on trains', 'Women should dress modestly, especially in smaller towns', 'Walk confidently and purposefully in markets', 'Keep emergency numbers saved: 100 (Police), 108 (Ambulance)', 'Travel insurance covering medical evacuation is strongly recommended'] },
  { icon: '💳', title: 'Money & Payments', preview: 'Cash, UPI, cards — navigating Indian payments...',
    tips: ['Always carry cash — most small establishments, markets and rural areas are cash-only', 'UPI (Google Pay, PhonePe, Paytm) is widely accepted — set up an Indian number', 'ATMs widely available in cities; fewer in rural areas — withdraw enough before going remote', 'Exchange money at banks or authorized dealers — never on the street', 'Keep small denominations for rickshaws, markets, tips', 'Credit cards accepted at hotels, major restaurants, malls', 'Currency: Indian Rupee (₹). Current exchange: check live rates', 'Free entry to many historic sites for children under 15'] },
  { icon: '📱', title: 'Connectivity', preview: 'Stay connected across India...', 
    tips: ['Buy a local SIM on arrival: Airtel or Jio are best (bring passport copy)', 'Jio has the widest 4G coverage in rural and remote areas', 'WhatsApp is the primary communication app in India', 'Many hotels/cafes have WiFi — speed varies significantly', 'Download offline apps before visiting remote areas (no signal in Spiti/Zanskar)', 'Power cuts are common in smaller towns — carry a power bank', 'Voltage is 220V, 50Hz — EU and UK plugs generally fit; US/Australian travelers need adapters', 'Google Translate camera mode helps with menus and signs in local languages'] },
  { icon: '🌦️', title: 'Weather & Seasons', preview: 'India\'s diverse climates and best times to visit...', 
    tips: ['Winter (Oct-Mar): Best for South India, Rajasthan, Delhi, wildlife', 'Summer (Apr-Jun): Best for Himalayas, Ladakh, Northeast (May-June)', 'Monsoon (Jul-Sep): Avoid beach destinations; best for Meghalaya, Kerala, waterfalls', 'Cyclone season (Oct-Dec) affects Tamil Nadu and Andhra Pradesh coastlines', 'Ladakh: open June-September only (harsh winter closes roads)', 'India has 5 main climate zones: tropical, subtropical, arid, semi-arid, alpine', 'Pack layers even for South India — air conditioning is aggressive', 'Check weather alerts before trekking in the Himalayas'] },
  { icon: '🍛', title: 'Food Safety', preview: 'Eating safely while enjoying India\'s incredible cuisine...', 
    tips: ['Street food is generally safe if cooked fresh and hot in front of you', 'Avoid raw salads in budget restaurants', 'Bottled water only — never drink tap water', 'Start with milder dishes and build up spice tolerance gradually', 'Vegetarian options are abundant and excellent across India', 'Most South Indian food is naturally gluten-free (rice-based)', 'Lassi, chai and coconut water are all generally safe', 'Look for busy local places — high turnover means fresh food'] },
  { icon: '🗣️', title: 'Language & Culture', preview: 'Communicating and respecting local customs...', 
    tips: ['Hindi is understood in most of North India; English is widely spoken in cities', 'South India: Tamil, Telugu, Kannada, Malayalam — Hindi less commonly spoken', '"Namaste" with folded hands is the universally respectful greeting', 'Remove footwear before entering homes, temples, mosques', 'Always use your right hand for giving/receiving things and eating', 'Photography: always ask permission before photographing people', 'Bargaining is expected in markets but do it with a smile', 'Being loud or aggressive is not respected — patience is highly valued'] }
];

/** Experience Categories */
const EXPERIENCES = [
  { id: 'mountains', emoji: '🏔️', title: 'Mountains', count: '180+ spots', gradient: 'linear-gradient(135deg,#2980B9,#6DD5FA)', categories: ['mountains'] },
  { id: 'beaches', emoji: '🏖️', title: 'Beaches', count: '60+ beaches', gradient: 'linear-gradient(135deg,#00B4D8,#48cae4)', categories: ['beaches'] },
  { id: 'temples', emoji: '🛕', title: 'Temples', count: '200+ shrines', gradient: 'linear-gradient(135deg,#FF6B35,#FFB347)', categories: ['spiritual'] },
  { id: 'forts', emoji: '🏰', title: 'Forts & Palaces', count: '100+ sites', gradient: 'linear-gradient(135deg,#F7971E,#FFD200)', categories: ['forts-palaces'] },
  { id: 'nature', emoji: '🌿', title: 'Nature', count: '300+ parks', gradient: 'linear-gradient(135deg,#134E5E,#71B280)', categories: ['nature'] },
  { id: 'wildlife', emoji: '🐅', title: 'Wildlife', count: '50+ reserves', gradient: 'linear-gradient(135deg,#27AE60,#2EC4B6)', categories: ['wildlife'] },
  { id: 'food', emoji: '🍛', title: 'Food Trails', count: '36 cuisines', gradient: 'linear-gradient(135deg,#E07B39,#FFD200)', categories: ['food'] },
  { id: 'culture', emoji: '🎭', title: 'Culture', count: '100+ forms', gradient: 'linear-gradient(135deg,#8E44AD,#C0392B)', categories: ['culture'] },
  { id: 'adventure', emoji: '🏕️', title: 'Adventure', count: '50+ activities', gradient: 'linear-gradient(135deg,#e96c5a,#f5af19)', categories: ['adventure'] },
  { id: 'waterfalls', emoji: '🌊', title: 'Waterfalls', count: '90+ falls', gradient: 'linear-gradient(135deg,#0F3460,#00B4D8)', categories: ['nature'] },
  { id: 'cities', emoji: '🏙️', title: 'Cities', count: '50+ metros', gradient: 'linear-gradient(135deg,#4A90D9,#667eea)', categories: ['cities'] },
  { id: 'spiritual', emoji: '🧘', title: 'Spiritual', count: '500+ sites', gradient: 'linear-gradient(135deg,#FF6B35,#764ba2)', categories: ['spiritual'] },
  { id: 'photography', emoji: '📸', title: 'Photography', count: 'Unlimited shots', gradient: 'linear-gradient(135deg,#2C3E50,#FD746C)', categories: ['photography'] },
  { id: 'festivals', emoji: '🎉', title: 'Festivals', count: '30+ events/year', gradient: 'linear-gradient(135deg,#E84393,#FF6B35)', categories: ['festivals'] }
];

/** Travel Moods */
const TRAVEL_MOODS = [
  { mood: 'Beach Escape', emoji: '🌊', desc: 'Sun, sand and sea', categories: ['beaches'],
    destinations: ['Goa Beaches', 'Andaman Islands', 'Varkala', 'Mahabalipuram', 'Kovalam', 'Pondicherry'] },
  { mood: 'Mountain Adventure', emoji: '🏔️', desc: 'Peaks and passes', categories: ['mountains','adventure'],
    destinations: ['Ladakh', 'Manali', 'Spiti Valley', 'Zanskar Valley', 'Tawang', 'Chopta'] },
  { mood: 'Romantic Getaway', emoji: '❤️', desc: 'Perfect for couples', categories: ['heritage','beaches','nature'],
    destinations: ['Udaipur', 'Alleppey', 'Coorg', 'Darjeeling', 'Goa Beaches', 'Varkala'] },
  { mood: 'Peace & Spirituality', emoji: '🧘', desc: 'Seek inner calm', categories: ['spiritual'],
    destinations: ['Varanasi', 'Rishikesh', 'Amritsar', 'Pushkar', 'Bodh Gaya', 'Tawang Monastery'] },
  { mood: 'Food Journey', emoji: '🍛', desc: 'Taste every region', categories: ['food'],
    destinations: ['Amritsar', 'Hyderabad', 'Jaipur', 'Kochi', 'Kolkata', 'Mysore'] },
  { mood: 'History & Culture', emoji: '🏛️', desc: 'Monuments and heritage', categories: ['heritage','culture','forts-palaces'],
    destinations: ['Taj Mahal', 'Hampi', 'Khajuraho', 'Mysore', 'Mahabalipuram', 'Varanasi'] },
  { mood: 'Wildlife Adventure', emoji: '🐅', desc: 'Into the wild', categories: ['wildlife','nature'],
    destinations: ['Ranthambore', 'Kaziranga', 'Jim Corbett', 'Sundarbans', 'Bandhavgarh', 'Periyar'] },
  { mood: 'Backpacking', emoji: '🎒', desc: 'Adventure on a budget', categories: ['adventure','mountains','beaches'],
    destinations: ['Rishikesh', 'Manali', 'Goa Beaches', 'Hampi', 'Varanasi', 'Darjeeling'] }
];

/** Travel Styles for Trip Planner */
const TRAVEL_STYLES = [
  { value: 'backpacking', emoji: '🎒', name: 'Backpacking' },
  { value: 'family',      emoji: '👨‍👩‍👧', name: 'Family' },
  { value: 'luxury',      emoji: '👑', name: 'Luxury' },
  { value: 'adventure',   emoji: '🏕️', name: 'Adventure' },
  { value: 'romantic',    emoji: '❤️', name: 'Romantic' },
  { value: 'spiritual',   emoji: '🧘', name: 'Spiritual' },
  { value: 'cultural',    emoji: '🎭', name: 'Cultural' },
  { value: 'nature',      emoji: '🌿', name: 'Nature' }
];

/* ================================================================
   SECTION 2: INDIA MAP DATA — Real Geographic State Paths
   Coordinate system: x=(lon-68)*20.5, y=(37.5-lat)*22  ViewBox 590x680
   ================================================================ */

/**
 * INDIA_MAP_DATA — Each state has: id, name, region, type, color (fill),
 * hcolor (hover fill), capital name, cx/cy (label centre), ccx/ccy (capital dot),
 * d (SVG polygon point-string, space-separated x,y pairs).
 *
 * Projection used to generate coords:
 *   x = (longitude - 68.0) * 20.5
 *   y = (37.5 - latitude)  * 22.0
 * ViewBox: 0 0 590 680
 */
const INDIA_MAP_DATA = [
  {id:'jk',     name:'Jammu & Kashmir',   region:'north',     type:'ut',
   color:'#F48FB1', hcolor:'#F8BBD0', capital:'Srinagar',
   cx:133, cy:82,  ccx:138, ccy:74,
   d:'113,18 128,4 148,2 165,8 178,22 178,44 185,65 180,88 168,112 155,118 138,118 124,112 116,96 110,72 108,46'},
  {id:'ladakh', name:'Ladakh',             region:'north',     type:'ut',
   color:'#FFF176', hcolor:'#FFF9C4', capital:'Leh',
   cx:222, cy:68,  ccx:215, ccy:72,
   d:'178,22 188,4 210,2 235,4 258,18 265,40 245,65 248,88 225,112 198,118 185,95 185,65 178,44'},
  {id:'hp',     name:'Himachal Pradesh',   region:'north',     type:'state',
   color:'#FFB74D', hcolor:'#FFCC80', capital:'Shimla',
   cx:195, cy:138, ccx:192, ccy:148,
   d:'155,118 168,112 180,88 185,95 198,118 225,112 228,140 220,155 205,162 195,158 182,150 168,145 158,138'},
  {id:'pb',     name:'Punjab',             region:'north',     type:'state',
   color:'#A5D6A7', hcolor:'#C8E6C9', capital:'Chandigarh',
   cx:122, cy:138, ccx:162, ccy:158,
   d:'110,118 124,112 138,118 155,118 158,138 155,155 162,165 155,178 138,182 122,178 110,165 108,148'},
  {id:'ch',     name:'Chandigarh',         region:'north',     type:'ut',
   color:'#B0BEC5', hcolor:'#CFD8DC', capital:'Chandigarh',
   cx:163, cy:161, ccx:163, ccy:160,
   d:'158,156 166,154 168,163 160,165'},
  {id:'hr',     name:'Haryana',            region:'north',     type:'state',
   color:'#80D8FF', hcolor:'#B3E5FC', capital:'Chandigarh',
   cx:155, cy:200, ccx:162, ccy:158,
   d:'122,178 138,182 155,178 162,165 172,160 182,155 188,175 192,198 185,212 172,222 162,225 150,218 138,205 125,198 118,185'},
  {id:'dl',     name:'Delhi',              region:'north',     type:'ut',
   color:'#EF9A9A', hcolor:'#FFCDD2', capital:'New Delhi',
   cx:178, cy:210, ccx:178, ccy:210,
   d:'172,204 182,202 185,212 176,215 170,210'},
  {id:'uk',     name:'Uttarakhand',        region:'north',     type:'state',
   color:'#FFCC80', hcolor:'#FFE0B2', capital:'Dehradun',
   cx:243, cy:148, ccx:232, ccy:158,
   d:'205,162 220,155 228,140 225,112 248,88 258,105 270,118 272,138 268,158 255,175 242,182 228,178 218,168'},
  {id:'up',     name:'Uttar Pradesh',      region:'north',     type:'state',
   color:'#F48FB1', hcolor:'#F8BBD0', capital:'Lucknow',
   cx:265, cy:225, ccx:270, ccy:232,
   d:'185,212 192,198 218,168 228,178 242,182 255,175 268,158 285,175 308,188 325,202 335,222 330,245 315,258 295,265 272,268 250,265 228,258 208,250 190,242 178,228 172,222 185,212'},
  {id:'raj',    name:'Rajasthan',          region:'west',      type:'state',
   color:'#FFD740', hcolor:'#FFECB3', capital:'Jaipur',
   cx:108, cy:248, ccx:148, ccy:235,
   d:'108,148 110,165 118,185 108,200 95,212 72,218 48,208 28,218 18,238 22,265 28,285 45,302 68,318 92,325 110,318 125,308 135,295 142,275 148,252 155,232 162,225 150,218 138,205 125,198 118,185 122,178 108,165'},
  {id:'guj',    name:'Gujarat',            region:'west',      type:'state',
   color:'#00E5FF', hcolor:'#80DEEA', capital:'Gandhinagar',
   cx:75,  cy:345, ccx:88,  ccy:330,
   d:'22,285 28,285 45,302 68,318 92,325 112,318 128,328 125,348 115,362 98,378 78,382 58,378 38,368 22,355 10,338 5,318 8,298 15,285'},
  {id:'dd',     name:'D&NH & D&D',         region:'west',      type:'ut',
   color:'#A1887F', hcolor:'#BCAAA4', capital:'Daman',
   cx:107, cy:373, ccx:107, ccy:373,
   d:'100,368 110,366 112,375 104,378'},
  {id:'mh',     name:'Maharashtra',        region:'west',      type:'state',
   color:'#CE93D8', hcolor:'#E1BEE7', capital:'Mumbai',
   cx:195, cy:392, ccx:108, ccy:408,
   d:'98,378 115,362 128,328 148,318 155,298 165,282 178,268 190,242 208,250 228,258 250,265 262,280 268,298 265,322 252,342 238,358 218,370 198,378 178,378 158,375 138,368 120,358 108,342 100,325'},
  {id:'ga',     name:'Goa',                region:'west',      type:'state',
   color:'#1B5E20', hcolor:'#388E3C', capital:'Panaji',
   cx:118, cy:395, ccx:120, ccy:390,
   d:'112,382 126,378 130,388 128,400 116,402 110,395'},
  {id:'mp',     name:'Madhya Pradesh',     region:'central',   type:'state',
   color:'#C5E1A5', hcolor:'#DCEDC8', capital:'Bhopal',
   cx:218, cy:305, ccx:195, ccy:308,
   d:'148,252 155,232 162,225 172,222 178,228 190,242 208,250 228,258 250,265 262,280 268,298 265,322 252,342 238,358 218,358 202,348 185,342 168,340 155,332 142,315 135,295 142,275'},
  {id:'cg',     name:'Chhattisgarh',       region:'central',   type:'state',
   color:'#80CBC4', hcolor:'#B2DFDB', capital:'Raipur',
   cx:292, cy:348, ccx:282, ccy:352,
   d:'265,322 268,298 285,295 302,295 318,302 332,315 338,335 332,358 322,372 308,382 292,388 278,380 268,368 252,342'},
  {id:'bh',     name:'Bihar',              region:'east',      type:'state',
   color:'#FFAB40', hcolor:'#FFD180', capital:'Patna',
   cx:355, cy:228, ccx:352, ccy:238,
   d:'335,222 355,212 382,208 402,215 415,228 412,248 400,262 382,268 362,268 342,262 332,248 330,245'},
  {id:'jh',     name:'Jharkhand',          region:'east',      type:'state',
   color:'#66BB6A', hcolor:'#A5D6A7', capital:'Ranchi',
   cx:355, cy:308, ccx:355, ccy:315,
   d:'332,248 342,262 362,268 382,268 400,262 412,272 408,292 395,308 378,318 362,322 345,318 332,308 322,295 318,302 302,295 310,275 318,262'},
  {id:'wb',     name:'West Bengal',        region:'east',      type:'state',
   color:'#29B6F6', hcolor:'#81D4FA', capital:'Kolkata',
   cx:412, cy:282, ccx:415, ccy:345,
   d:'402,215 415,208 432,212 440,228 438,248 428,265 418,282 410,298 402,312 395,325 395,342 388,352 378,342 378,318 395,308 408,292 412,272 400,262 412,248 415,228'},
  {id:'od',     name:'Odisha',             region:'east',      type:'state',
   color:'#FFAB40', hcolor:'#FFD180', capital:'Bhubaneswar',
   cx:325, cy:375, ccx:355, ccy:385,
   d:'332,308 345,318 362,322 378,318 388,332 395,342 395,358 382,372 368,382 352,390 335,390 318,382 308,368 308,352 322,372 332,358 338,335 332,308'},
  {id:'sk',     name:'Sikkim',             region:'northeast', type:'state',
   color:'#80DEEA', hcolor:'#B2EBF2', capital:'Gangtok',
   cx:428, cy:215, ccx:428, ccy:215,
   d:'418,208 432,205 438,215 435,228 422,232 415,222'},
  {id:'as',     name:'Assam',              region:'northeast', type:'state',
   color:'#26C6DA', hcolor:'#80DEEA', capital:'Dispur',
   cx:478, cy:242, ccx:475, ccy:248,
   d:'440,228 452,222 468,218 492,215 515,218 532,225 535,240 528,252 510,258 488,260 468,258 448,255 438,248'},
  {id:'ar',     name:'Arunachal Pradesh',  region:'northeast', type:'state',
   color:'#42A5F5', hcolor:'#90CAF9', capital:'Itanagar',
   cx:498, cy:195, ccx:520, ccy:238,
   d:'440,228 438,215 445,208 462,200 485,192 510,185 538,182 558,188 568,205 555,215 540,220 525,222 515,218 492,215 468,218 452,222'},
  {id:'mg',     name:'Meghalaya',          region:'northeast', type:'state',
   color:'#F06292', hcolor:'#F48FB1', capital:'Shillong',
   cx:453, cy:268, ccx:458, ccy:268,
   d:'438,248 448,255 468,258 478,268 472,278 458,282 442,280 435,270 435,255'},
  {id:'nl',     name:'Nagaland',           region:'northeast', type:'state',
   color:'#FFA726', hcolor:'#FFCC02', capital:'Kohima',
   cx:530, cy:245, ccx:528, ccy:252,
   d:'528,225 542,222 552,230 552,248 542,258 530,260 520,252 520,238'},
  {id:'mn',     name:'Manipur',            region:'northeast', type:'state',
   color:'#AB47BC', hcolor:'#CE93D8', capital:'Imphal',
   cx:538, cy:278, ccx:538, ccy:278,
   d:'528,258 542,258 550,265 552,280 548,295 535,302 522,298 515,285 518,268'},
  {id:'mz',     name:'Mizoram',            region:'northeast', type:'state',
   color:'#26A69A', hcolor:'#80CBC4', capital:'Aizawl',
   cx:518, cy:318, ccx:518, ccy:312,
   d:'515,285 522,278 535,282 542,295 542,312 535,328 522,335 510,325 508,308 515,295'},
  {id:'tr',     name:'Tripura',            region:'northeast', type:'state',
   color:'#D4E157', hcolor:'#F0F4C3', capital:'Agartala',
   cx:488, cy:305, ccx:488, ccy:308,
   d:'472,288 482,282 490,288 492,302 488,315 478,320 468,312 468,298'},
  {id:'ts',     name:'Telangana',          region:'south',     type:'state',
   color:'#26C6DA', hcolor:'#4DD0E1', capital:'Hyderabad',
   cx:215, cy:412, ccx:208, ccy:418,
   d:'168,378 185,362 202,358 218,358 238,358 252,368 258,382 255,402 240,415 222,420 205,415 192,402 182,388'},
  {id:'ap',     name:'Andhra Pradesh',     region:'south',     type:'state',
   color:'#FFB74D', hcolor:'#FFD54F', capital:'Amaravati',
   cx:302, cy:442, ccx:278, ccy:455,
   d:'238,358 268,368 278,380 292,388 308,382 322,372 335,378 348,395 350,415 340,432 320,445 298,455 278,458 258,455 240,445 232,428 238,408 255,402 258,382 252,368'},
  {id:'ka',     name:'Karnataka',          region:'south',     type:'state',
   color:'#BA68C8', hcolor:'#CE93D8', capital:'Bengaluru',
   cx:182, cy:470, ccx:195, ccy:488,
   d:'110,402 120,395 135,388 158,382 178,378 198,378 218,370 232,382 238,408 232,428 240,445 235,462 220,475 205,488 188,495 172,495 155,488 142,478 128,462 118,448 112,428 108,412'},
  {id:'kl',     name:'Kerala',             region:'south',     type:'state',
   color:'#43A047', hcolor:'#81C784', capital:'Thiruvananthapuram',
   cx:148, cy:548, ccx:158, ccy:590,
   d:'155,488 172,495 182,508 180,528 175,548 165,565 152,580 138,592 125,595 118,582 120,562 128,542 132,522 138,502 148,490'},
  {id:'tn',     name:'Tamil Nadu',         region:'south',     type:'state',
   color:'#EC407A', hcolor:'#F48FB1', capital:'Chennai',
   cx:225, cy:545, ccx:248, ccy:542,
   d:'205,488 220,475 235,462 240,445 258,455 278,458 285,472 280,492 268,508 255,525 240,538 225,548 210,548 198,538 188,522 182,508 188,495'},
  {id:'py',     name:'Puducherry',         region:'south',     type:'ut',
   color:'#E91E63', hcolor:'#F48FB1', capital:'Puducherry',
   cx:252, cy:525, ccx:252, ccy:525,
   d:'248,520 256,518 258,526 250,528'},
  {id:'an',     name:'Andaman & Nicobar',  region:'south',     type:'ut',
   color:'#00ACC1', hcolor:'#00BCD4', capital:'Port Blair',
   cx:553, cy:415, ccx:553, ccy:435,
   d:'548,368 556,365 560,382 562,400 558,420 553,438 548,452 542,444 545,426 548,408 549,388 548,372'},
  {id:'lk',     name:'Lakshadweep',        region:'south',     type:'ut',
   color:'#0288D1', hcolor:'#29B6F6', capital:'Kavaratti',
   cx:38,  cy:495, ccx:38,  ccy:495,
   d:'32,484 44,484 46,492 44,502 32,502'}
];

/* ================================================================
   SECTION 2b: renderMap — Accurate India SVG with real state shapes
   ================================================================ */
function renderMap() {
  const svg = document.getElementById('india-map');
  if (!svg) return;

  svg.setAttribute('viewBox', '0 0 590 680');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  let html = `
    <defs>
      <radialGradient id="oceanBg" cx="40%" cy="55%" r="75%">
        <stop offset="0%"   stop-color="#1565C0" stop-opacity="0.88"/>
        <stop offset="100%" stop-color="#0D1B2A"/>
      </radialGradient>
      <pattern id="wavesPat" patternUnits="userSpaceOnUse" width="30" height="15">
        <path d="M0,8 Q7.5,5 15,8 Q22.5,11 30,8" fill="none"
              stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
      <filter id="landShadow" x="-5%" y="-5%" width="115%" height="115%">
        <feDropShadow dx="1" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.45)"/>
      </filter>
      <filter id="stateGlow" x="-15%" y="-15%" width="130%" height="130%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Ocean background -->
    <rect width="590" height="680" fill="url(#oceanBg)" rx="12"/>
    <rect width="590" height="680" fill="url(#wavesPat)" rx="12"/>

    <!-- Sea name labels -->
    <text x="60"  y="455" fill="rgba(255,255,255,0.22)" font-size="8.5" font-style="italic"
          font-family="Outfit,sans-serif" text-anchor="middle" transform="rotate(18,60,455)">Arabian Sea</text>
    <text x="458" y="438" fill="rgba(255,255,255,0.22)" font-size="8.5" font-style="italic"
          font-family="Outfit,sans-serif" text-anchor="middle" transform="rotate(-10,458,438)">Bay of Bengal</text>
    <text x="215" y="655" fill="rgba(255,255,255,0.18)" font-size="7.5" font-style="italic"
          font-family="Outfit,sans-serif" text-anchor="middle">Indian Ocean</text>

    <!-- Lakshadweep inset box -->
    <rect x="4" y="452" width="72" height="68" rx="5"
          fill="rgba(10,22,42,0.82)" stroke="rgba(255,255,255,0.22)" stroke-width="0.8" stroke-dasharray="3,2"/>
    <text x="40" y="464" fill="rgba(255,255,255,0.55)" font-size="4.8" font-family="Outfit,sans-serif" text-anchor="middle">Lakshadweep</text>
    <circle cx="25" cy="478" r="2.5" fill="#0288D1" stroke="#fff" stroke-width="0.5"/>
    <circle cx="35" cy="490" r="2"   fill="#0288D1" stroke="#fff" stroke-width="0.5"/>
    <circle cx="48" cy="483" r="1.8" fill="#0288D1" stroke="#fff" stroke-width="0.5"/>
    <circle cx="40" cy="502" r="2"   fill="#0288D1" stroke="#fff" stroke-width="0.5"/>
    <circle cx="55" cy="496" r="1.5" fill="#0288D1" stroke="#fff" stroke-width="0.5"/>
    <text x="40" y="516" fill="rgba(255,255,255,0.45)" font-size="4.2" font-family="Outfit,sans-serif" text-anchor="middle">● Kavaratti</text>

    <!-- Andaman & Nicobar inset box -->
    <rect x="519" y="338" width="68" height="140" rx="5"
          fill="rgba(10,22,42,0.82)" stroke="rgba(255,255,255,0.22)" stroke-width="0.8" stroke-dasharray="3,2"/>
    <text x="553" y="350" fill="rgba(255,255,255,0.55)" font-size="4.5" font-family="Outfit,sans-serif" text-anchor="middle">Andaman &amp;</text>
    <text x="553" y="358" fill="rgba(255,255,255,0.55)" font-size="4.5" font-family="Outfit,sans-serif" text-anchor="middle">Nicobar Islands</text>
    <path d="M548,365 L556,362 L560,378 L562,396 L560,415 L555,435 L550,450 L544,442 L546,424 L548,405 L549,385 L547,368 Z"
          fill="#00ACC1" stroke="rgba(255,255,255,0.65)" stroke-width="0.8"/>
    <circle cx="552" cy="435" r="2" fill="#fff" stroke="#1565C0" stroke-width="0.8"/>
    <text x="553" y="464" fill="rgba(255,255,255,0.45)" font-size="4.2" font-family="Outfit,sans-serif" text-anchor="middle">Port Blair</text>

    <!-- Compass rose -->
    <g transform="translate(540,45)" opacity="0.88">
      <circle cx="0" cy="0" r="22" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.28)" stroke-width="0.8"/>
      <circle cx="0" cy="0" r="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" stroke-width="0.5"/>
      <circle cx="0" cy="0" r="3.5" fill="rgba(255,255,255,0.5)"/>
      <polygon points="0,-20 2.5,-7 0,-10 -2.5,-7" fill="#EF5350"/>
      <polygon points="0,20 2.5,7 0,10 -2.5,7"   fill="rgba(255,255,255,0.55)"/>
      <polygon points="20,0 7,2.5 10,0 7,-2.5"   fill="rgba(255,255,255,0.45)"/>
      <polygon points="-20,0 -7,2.5 -10,0 -7,-2.5" fill="rgba(255,255,255,0.45)"/>
      <text x="0" y="-25" text-anchor="middle" fill="white" font-size="8" font-weight="700" font-family="Outfit,sans-serif">N</text>
      <text x="0" y="32"  text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="6" font-family="Outfit,sans-serif">S</text>
      <text x="28" y="2.5" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="6" font-family="Outfit,sans-serif">E</text>
      <text x="-28" y="2.5" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="6" font-family="Outfit,sans-serif">W</text>
    </g>

    <!-- Legend box -->
    <rect x="450" y="72" width="132" height="82" rx="6"
          fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
    <text x="460" y="86" fill="white" font-size="7.5" font-weight="700" font-family="Outfit,sans-serif">Legend</text>
    <text x="460" y="98"  fill="#FF4444" font-size="9">★</text><text x="472" y="99"  fill="rgba(255,255,255,0.85)" font-size="5.5" font-family="Outfit,sans-serif">National Capital</text>
    <circle cx="463" cy="109" r="3" fill="#1565C0" stroke="white" stroke-width="0.8"/>
    <text x="472" y="112"  fill="rgba(255,255,255,0.85)" font-size="5.5" font-family="Outfit,sans-serif">State Capital</text>
    <circle cx="463" cy="121" r="3" fill="none" stroke="white" stroke-width="1.2"/>
    <text x="472" y="124"  fill="rgba(255,255,255,0.85)" font-size="5.5" font-family="Outfit,sans-serif">UT Capital</text>
    <line x1="457" y1="133" x2="477" y2="133" stroke="rgba(255,255,255,0.7)" stroke-width="1"/>
    <text x="480" y="136"  fill="rgba(255,255,255,0.85)" font-size="5.5" font-family="Outfit,sans-serif">State Boundary</text>
    <line x1="457" y1="145" x2="477" y2="145" stroke="rgba(255,255,255,0.45)" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="480" y="148"  fill="rgba(255,255,255,0.85)" font-size="5.5" font-family="Outfit,sans-serif">Intl. Boundary</text>

    <!-- Stats box -->
    <rect x="450" y="162" width="132" height="75" rx="6"
          fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>
    <text x="460" y="178" fill="white" font-size="8" font-family="Outfit,sans-serif">🗺️  28 States</text>
    <text x="460" y="196" fill="rgba(255,255,255,0.85)" font-size="8" font-family="Outfit,sans-serif">🔵  8 Union Territories</text>
    <text x="460" y="214" fill="rgba(255,255,255,0.85)" font-size="8" font-family="Outfit,sans-serif">🇮🇳  Total 36</text>
    <text x="460" y="230" fill="#FFD740" font-size="6.5" font-family="Outfit,sans-serif">Incredible India ✨</text>

    <!-- ── All state polygons ── -->
    <g id="states-group" filter="url(#landShadow)">
  `;

  /* Render each state as a colored polygon */
  INDIA_MAP_DATA.forEach(st => {
    const stateData = INDIA_STATES.find(s => s.id === st.id);
    const destCount = stateData ? stateData.destinations.length : 0;
    html += `<polygon
      class="state-path ${st.region}"
      id="map-${st.id}"
      points="${st.d}"
      data-id="${st.id}"
      data-name="${st.name}"
      data-region="${st.region}"
      data-capital="${stateData ? stateData.capital : st.capital}"
      data-dests="${destCount}"
      data-base-color="${st.color}"
      data-hover-color="${st.hcolor}"
      tabindex="0" role="button" aria-label="${st.name}"
      fill="${st.color}"
      stroke="rgba(255,255,255,0.78)"
      stroke-width="${st.type==='ut' ? '0.7' : '1'}"
      stroke-linejoin="round"
      style="cursor:pointer;transition:fill 0.15s,opacity 0.15s"
    ><title>${st.name}</title></polygon>`;
  });

  html += `</g>`;

  /* ── Capital dots ── */
  html += `<g id="capitals-group" pointer-events="none">`;
  INDIA_MAP_DATA.forEach(st => {
    if (st.id === 'an' || st.id === 'lk') return;
    if (st.id === 'dl') {
      html += `<text x="${st.ccx}" y="${st.ccy+2}" text-anchor="middle"
        font-size="8" fill="#FF1744">★</text>`;
    } else {
      html += `<circle cx="${st.ccx}" cy="${st.ccy}" r="${st.type==='ut'?1.8:2.2}"
        fill="${st.type==='ut' ? 'none' : '#1a237e'}"
        stroke="white" stroke-width="${st.type==='ut' ? '1.3' : '0.9'}"/>`;
    }
  });
  html += `</g>`;

  /* ── State name labels ── */
  const abbrevMap = {
    'Jammu & Kashmir':'J&K', 'Himachal Pradesh':'H.P.', 'Uttarakhand':'Uttarakhand',
    'Uttar Pradesh':'Uttar Pradesh', 'Madhya Pradesh':'M.P.',
    'Arunachal Pradesh':'Arunachal Pr.', 'Andhra Pradesh':'Andhra Pradesh',
    'West Bengal':'W. Bengal', 'D&NH & D&D':'D&NH', 'Tamil Nadu':'Tamil Nadu',
    'Puducherry':'Pondi.', 'Andaman & Nicobar':'', 'Lakshadweep':''
  };

  html += `<g id="labels-group" pointer-events="none">`;
  INDIA_MAP_DATA.forEach(st => {
    if (st.id === 'an' || st.id === 'lk' || st.id === 'dd') return;
    const rawLabel = abbrevMap.hasOwnProperty(st.name) ? abbrevMap[st.name] : st.name;
    if (!rawLabel) return;
    const words = rawLabel.split(' ');
    const fsize = rawLabel.length > 14 ? 4.2 : rawLabel.length > 9 ? 5 : 5.5;
    const lineH = fsize + 1.8;

    if (words.length >= 2 && rawLabel.length > 8) {
      const half = Math.ceil(words.length / 2);
      const l1 = words.slice(0, half).join(' ');
      const l2 = words.slice(half).join(' ');
      html += `<text text-anchor="middle" font-size="${fsize}" font-family="Outfit,sans-serif"
        font-weight="700" fill="rgba(0,0,0,0.82)"
        paint-order="stroke" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linejoin="round">
        <tspan x="${st.cx}" dy="0"   y="${st.cy - lineH/2}">${l1}</tspan>
        <tspan x="${st.cx}" dy="${lineH}">${l2}</tspan>
      </text>`;
    } else {
      html += `<text x="${st.cx}" y="${st.cy}" text-anchor="middle"
        font-size="${fsize}" font-family="Outfit,sans-serif" font-weight="700"
        fill="rgba(0,0,0,0.82)"
        paint-order="stroke" stroke="rgba(255,255,255,0.6)" stroke-width="2"
        stroke-linejoin="round">${rawLabel}</text>`;
    }

    /* Capital city label (tiny) below state name */
    if (!['ch','dd','py','sk','ch'].includes(st.id)) {
      const capShort = (st.capital || '').replace('Thiruvananthapuram','T.Puram');
      html += `<text x="${st.ccx}" y="${st.ccy+7}" text-anchor="middle"
        font-size="3.8" font-family="Outfit,sans-serif" fill="rgba(0,0,0,0.6)">${capShort}</text>`;
    }
  });
  html += `</g>`;

  svg.innerHTML = html;

  /* ── Event listeners ── */
  svg.querySelectorAll('.state-path').forEach(path => {
    path.addEventListener('mouseenter', e => {
      path.style.fill      = path.dataset.hoverColor;
      path.style.opacity   = '0.88';
      path.style.strokeWidth = '2';
      showMapTooltip(e, path);
    });
    path.addEventListener('mouseleave', () => {
      path.style.fill      = path.dataset.baseColor;
      path.style.opacity   = '1';
      path.style.strokeWidth = path.dataset.region === 'ut' ? '0.7' : '1';
      hideMapTooltip();
    });
    path.addEventListener('click',     ()  => openStateModal(path.dataset.id));
    path.addEventListener('mousemove', e   => moveMapTooltip(e));
    path.addEventListener('keydown',   e   => { if (e.key === 'Enter') openStateModal(path.dataset.id); });
  });

  /* ── Legend region filter ── */
  const legendEl = document.getElementById('legend-items');
  if (legendEl) {
    legendEl.addEventListener('click', e => {
      const item = e.target.closest('.legend-item');
      if (!item) return;
      const region = item.dataset.region;
      document.querySelectorAll('.legend-item').forEach(i => {
        i.classList.remove('active'); i.setAttribute('aria-pressed', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-pressed', 'true');
      highlightMapRegion(region);
    });
  }
}





/* ================================================================
   SECTION 3: APPLICATION STATE
   ================================================================ */

const APP = {
  favorites: [],                    // Array of destination IDs
  destinationsPage: 1,             // Pagination tracker
  destinationsPerPage: 9,          // Items per page
  activeRegionFilter: 'all',       // Active destinations filter
  activeStateFilter: 'all',        // Active states filter
  activeFoodFilter: 'all',         // Active food filter
  activeFestivalFilter: 'all',     // Active festival filter
  activeCategoryFilter: null,      // Active experience category
  plannerStep: 1,                  // Trip planner step
  searchTimeout: null              // Debounce timer
};

/* ================================================================
   SECTION 4: INITIALIZATION
   ================================================================ */

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadFavorites();
  initDarkMode();
  initNavbar();
  initMobileNav();
  initSearch();
  renderMap();
  renderExperiences();
  renderDestinations();
  renderHiddenIndia();
  renderStateExplorer();
  renderTravelStyles();
  renderFood();
  renderFestivals();
  renderTips();
  renderFavorites();
  initScrollAnimations();
  initCounters();
  initBackToTop();
  initModalClosers();
  initFilterButtons();
  initMoodFab();
}

/* ================================================================
   SECTION 5: DARK MODE
   ================================================================ */

function initDarkMode() {
  const saved = localStorage.getItem('india-explorer-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('dark-mode-toggle');
  if (btn) {
    btn.addEventListener('click', toggleDarkMode);
  }
}

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('india-explorer-theme', next);
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on', 'info');
}

/* ================================================================
   SECTION 6: NAVBAR
   ================================================================ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ================================================================
   SECTION 7: SEARCH
   ================================================================ */

function initSearch() {
  const input = document.getElementById('hero-search');
  const btn   = document.getElementById('hero-search-btn');
  const sugg  = document.getElementById('search-suggestions');

  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(APP.searchTimeout);
    APP.searchTimeout = setTimeout(() => showSuggestions(input.value.trim()), 200);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      hideSuggestions();
      handleHeroSearch();
    }
    if (e.key === 'Escape') hideSuggestions();
  });

  if (btn) btn.addEventListener('click', () => { hideSuggestions(); handleHeroSearch(); });

  // Close suggestions on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search')) hideSuggestions();
  });
}

function showSuggestions(query) {
  const sugg = document.getElementById('search-suggestions');
  if (!sugg) return;

  if (!query || query.length < 2) {
    hideSuggestions();
    return;
  }

  const q = query.toLowerCase();
  const results = [];

  // Search states
  INDIA_STATES.filter(s => s.name.toLowerCase().includes(q)).slice(0, 4).forEach(s => {
    results.push({ type: 'state', icon: s.emoji, name: s.name, meta: `${s.type === 'ut' ? 'Union Territory' : 'State'} · ${s.region}`, action: () => openStateModal(s.id) });
  });

  // Search destinations
  DESTINATIONS.filter(d => d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)).slice(0, 4).forEach(d => {
    results.push({ type: 'dest', icon: d.emoji, name: d.name, meta: `📍 ${d.state}`, action: () => openDestinationModal(d.id) });
  });

  // Search foods
  FOODS.filter(f => f.name.toLowerCase().includes(q)).slice(0, 2).forEach(f => {
    results.push({ type: 'food', icon: f.emoji, name: f.name, meta: `🍽️ ${f.state}`, action: () => { closeModal('search-modal'); document.getElementById('food-explorer').scrollIntoView({ behavior: 'smooth' }); } });
  });

  if (results.length === 0) {
    hideSuggestions();
    return;
  }

  sugg.innerHTML = results.map((r, i) => `
    <div class="suggestion-item" role="option" tabindex="0"
         onclick="handleSuggestionClick(${i})"
         onkeydown="if(event.key==='Enter') handleSuggestionClick(${i})">
      <span class="suggestion-icon">${r.icon}</span>
      <div>
        <div class="suggestion-name">${r.name}</div>
        <div class="suggestion-meta">${r.meta}</div>
      </div>
    </div>
  `).join('');

  // Store results for click handler
  sugg._results = results;
  sugg.classList.add('visible');
}

function handleSuggestionClick(index) {
  const sugg = document.getElementById('search-suggestions');
  if (sugg && sugg._results && sugg._results[index]) {
    sugg._results[index].action();
    hideSuggestions();
    document.getElementById('hero-search').value = '';
  }
}

function hideSuggestions() {
  const sugg = document.getElementById('search-suggestions');
  if (sugg) sugg.classList.remove('visible');
}

function handleHeroSearch() {
  const input = document.getElementById('hero-search');
  if (!input) return;
  const query = input.value.trim();
  if (!query) return;
  showSearchResults(query);
}

function showSearchResults(query) {
  const q = query.toLowerCase();
  const body = document.getElementById('search-modal-body');

  const stateResults = INDIA_STATES.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.capital.toLowerCase().includes(q) ||
    s.destinations.some(d => d.toLowerCase().includes(q)) ||
    s.food.some(f => f.toLowerCase().includes(q)) ||
    (s.description && s.description.toLowerCase().includes(q))
  );

  const destResults = DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.state.toLowerCase().includes(q) ||
    d.categories.some(c => c.includes(q)) ||
    (d.description && d.description.toLowerCase().includes(q))
  );

  const foodResults = FOODS.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.state.toLowerCase().includes(q) ||
    f.desc.toLowerCase().includes(q)
  );

  const festResults = FESTIVALS.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.state.toLowerCase().includes(q) ||
    f.desc.toLowerCase().includes(q)
  );

  const total = stateResults.length + destResults.length + foodResults.length + festResults.length;

  body.innerHTML = `
    <div class="search-results-content">
      <h2 class="search-results-title" id="search-results-title">Search Results</h2>
      <p class="search-results-query">Found ${total} result${total !== 1 ? 's' : ''} for "<strong>${escapeHTML(query)}</strong>"</p>
      ${total === 0 ? '<div class="empty-favorites" style="padding:3rem 1rem"><span class="empty-icon">🔍</span><h3>No results found</h3><p>Try searching for: Kerala, Goa, Rajasthan, beach, fort, temple...</p></div>' : ''}
      ${stateResults.length ? `
        <div class="search-result-group">
          <div class="search-result-group-title">States & Union Territories</div>
          ${stateResults.map(s => `
            <div class="search-result-item" onclick="closeModal('search-modal'); openStateModal('${s.id}')">
              <span class="search-result-icon">${s.emoji}</span>
              <div>
                <div class="search-result-name">${s.name}</div>
                <div class="search-result-meta">Capital: ${s.capital} · ${s.region} India</div>
              </div>
            </div>
          `).join('')}
        </div>` : ''}
      ${destResults.length ? `
        <div class="search-result-group">
          <div class="search-result-group-title">Destinations</div>
          ${destResults.map(d => `
            <div class="search-result-item" onclick="closeModal('search-modal'); openDestinationModal('${d.id}')">
              <span class="search-result-icon">${d.emoji}</span>
              <div>
                <div class="search-result-name">${d.name}</div>
                <div class="search-result-meta">📍 ${d.state} · ⭐ ${d.rating}</div>
              </div>
            </div>
          `).join('')}
        </div>` : ''}
      ${foodResults.length ? `
        <div class="search-result-group">
          <div class="search-result-group-title">Foods</div>
          ${foodResults.map(f => `
            <div class="search-result-item" onclick="closeModal('search-modal'); document.getElementById('food-explorer').scrollIntoView({behavior:'smooth'})">
              <span class="search-result-icon">${f.emoji}</span>
              <div>
                <div class="search-result-name">${f.name}</div>
                <div class="search-result-meta">🍽️ ${f.state}</div>
              </div>
            </div>
          `).join('')}
        </div>` : ''}
      ${festResults.length ? `
        <div class="search-result-group">
          <div class="search-result-group-title">Festivals</div>
          ${festResults.map(f => `
            <div class="search-result-item" onclick="closeModal('search-modal'); document.getElementById('festivals').scrollIntoView({behavior:'smooth'})">
              <span class="search-result-icon">${f.emoji}</span>
              <div>
                <div class="search-result-name">${f.name}</div>
                <div class="search-result-meta">📍 ${f.state} · ${f.date}</div>
              </div>
            </div>
          `).join('')}
        </div>` : ''}
    </div>
  `;

  openModal('search-modal');
}

/* ================================================================

function showMapTooltip(e, path) {
  const tooltip = document.getElementById('map-tooltip');
  if (!tooltip) return;

  const name    = path.dataset.name;
  const capital = path.dataset.capital;
  const dests   = path.dataset.dests;
  const region  = path.dataset.region;

  tooltip.innerHTML = `
    <div class="tooltip-name">${name}</div>
    <div class="tooltip-capital">🏛️ ${capital || 'N/A'}</div>
    <div class="tooltip-destinations">✈️ ${dests}+ destinations · ${capitalize(region)} India</div>
    <div style="font-size:10px;color:var(--text-muted);margin-top:4px">Click to explore →</div>
  `;

  tooltip.classList.add('visible');

  // Update sidebar preview
  updateSidebarPreview(path.dataset.id);
}

function moveMapTooltip(e) {
  const tooltip = document.getElementById('map-tooltip');
  const wrapper = document.querySelector('.map-wrapper');
  if (!tooltip || !wrapper) return;

  const rect = wrapper.getBoundingClientRect();
  let x = e.clientX - rect.left + 12;
  let y = e.clientY - rect.top  + 12;

  // Keep tooltip within wrapper
  const tw = tooltip.offsetWidth || 200;
  const th = tooltip.offsetHeight || 80;
  if (x + tw > rect.width)  x = e.clientX - rect.left - tw - 12;
  if (y + th > rect.height) y = e.clientY - rect.top  - th - 12;

  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}

function hideMapTooltip() {
  const tooltip = document.getElementById('map-tooltip');
  if (tooltip) tooltip.classList.remove('visible');
}

function highlightMapRegion(region) {
  document.querySelectorAll('.state-path').forEach(path => {
    if (region === 'all') {
      path.style.opacity = '1';
    } else if (path.dataset.region === region || (region === 'ut' && path.closest('polygon'))) {
      // Check type for UT filter
      const stateData = INDIA_STATES.find(s => s.id === path.dataset.id);
      if (region === 'ut') {
        path.style.opacity = stateData && stateData.type === 'ut' ? '1' : '0.3';
      } else {
        path.style.opacity = path.dataset.region === region ? '1' : '0.3';
      }
    } else {
      path.style.opacity = '0.3';
    }
  });
}

function updateSidebarPreview(stateId) {
  const preview = document.getElementById('map-state-preview');
  if (!preview) return;

  const state = INDIA_STATES.find(s => s.id === stateId);
  if (!state) return;

  const topDests = state.destinations.slice(0, 4);

  preview.innerHTML = `
    <div class="state-preview-content">
      <div class="preview-name">${state.emoji} ${state.name}</div>
      <div class="preview-capital">🏛️ ${state.capital}</div>
      <div class="preview-dests">
        ${topDests.map(d => `<span class="preview-dest-tag">${d}</span>`).join('')}
      </div>
      <button class="btn btn-primary btn-sm preview-explore-btn" onclick="openStateModal('${state.id}')">
        Explore ${state.name} →
      </button>
    </div>
  `;
}

/* ================================================================
   SECTION 9: EXPERIENCE CARDS
   ================================================================ */

function renderExperiences() {
  const grid = document.getElementById('experience-grid');
  if (!grid) return;

  grid.innerHTML = EXPERIENCES.map(exp => `
    <div class="experience-card reveal" style="--card-gradient:${exp.gradient}" role="listitem"
         onclick="openCategoryModal('${exp.id}', '${exp.title}', ${JSON.stringify(exp.categories)})"
         tabindex="0"
         onkeydown="if(event.key==='Enter') openCategoryModal('${exp.id}', '${exp.title}', ${JSON.stringify(exp.categories)})">
      <span class="exp-icon">${exp.emoji}</span>
      <div class="exp-title">${exp.title}</div>
      <div class="exp-count">${exp.count}</div>
    </div>
  `).join('');
}

function openCategoryModal(id, title, categories) {
  const body = document.getElementById('category-modal-body');
  const matching = DESTINATIONS.filter(d => d.categories.some(c => categories.includes(c)));

  body.innerHTML = `
    <div style="padding: 2rem">
      <h2 id="category-modal-title" style="font-family:var(--font-display);font-size:2rem;color:var(--text-primary);margin-bottom:0.5rem">
        ${EXPERIENCES.find(e => e.id === id)?.emoji || ''} ${title}
      </h2>
      <p style="color:var(--text-muted);margin-bottom:2rem">${matching.length} destinations found</p>
      <div class="destinations-grid">
        ${matching.length ? matching.map(d => createDestinationCard(d)).join('') : '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1">No destinations found in this category.</p>'}
      </div>
    </div>
  `;
  openModal('category-modal');
}

/* ================================================================
   SECTION 10: DESTINATIONS GRID
   ================================================================ */

function renderDestinations() {
  APP.destinationsPage = 1;
  filterAndRenderDestinations();
}

function filterAndRenderDestinations() {
  const grid = document.getElementById('destinations-grid');
  const loadBtn = document.getElementById('load-more-btn');
  if (!grid) return;

  const filter = APP.activeRegionFilter;
  let filtered = filter === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.region === filter);

  const total   = filtered.length;
  const showing = APP.destinationsPage * APP.destinationsPerPage;
  const sliced  = filtered.slice(0, showing);

  grid.innerHTML = sliced.map(d => createDestinationCard(d)).join('');

  if (loadBtn) {
    loadBtn.style.display = showing >= total ? 'none' : 'inline-flex';
  }
}

function createDestinationCard(d) {
  const isFav = APP.favorites.includes(d.id);
  return `
    <article class="dest-card reveal" role="listitem" tabindex="0"
             onclick="openDestinationModal('${d.id}')"
             onkeydown="if(event.key==='Enter') openDestinationModal('${d.id}')">
      <div class="dest-card-image">
        <div class="card-bg" style="background:${d.gradient}">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;opacity:0.35">${d.emoji}</div>
        </div>
        <div class="card-overlay"></div>
        <div class="dest-rating">⭐ ${d.rating}</div>
        <div class="dest-season-tag">🌤️ ${d.season}</div>
        <button class="dest-fav-btn ${isFav ? 'active' : ''}"
                id="fav-btn-${d.id}"
                aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
                onclick="event.stopPropagation(); toggleFavorite('${d.id}')">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="dest-card-body">
        <div class="dest-location">📍 ${d.state}</div>
        <h3 class="dest-name">${d.name}</h3>
        <p class="dest-desc">${d.description}</p>
        <div class="dest-card-footer">
          <span class="dest-budget">${d.budget}</span>
          <button class="dest-explore-btn">Explore</button>
        </div>
      </div>
    </article>
  `;
}

function initFilterButtons() {
  // Destinations filter
  const destFilter = document.getElementById('destinations-filter');
  if (destFilter) {
    destFilter.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      destFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP.activeRegionFilter = btn.dataset.filter;
      APP.destinationsPage = 1;
      filterAndRenderDestinations();
    });
  }

  // State explorer filter
  const stateFilter = document.getElementById('state-filters');
  if (stateFilter) {
    stateFilter.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      stateFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP.activeStateFilter = btn.dataset.region;
      filterStates();
    });
  }

  // Festival filter
  const festFilter = document.getElementById('festival-filters');
  if (festFilter) {
    festFilter.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      festFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP.activeFestivalFilter = btn.dataset.season;
      filterFestivals();
    });
  }

  // Load more button
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      APP.destinationsPage++;
      filterAndRenderDestinations();
      showToast('✅ More destinations loaded!', 'success');
    });
  }
}

/* ================================================================
   SECTION 11: HIDDEN INDIA
   ================================================================ */

function renderHiddenIndia() {
  const grid = document.getElementById('hidden-grid');
  if (!grid) return;

  grid.innerHTML = HIDDEN_DESTINATIONS.map(h => `
    <article class="hidden-card reveal" role="listitem"
             onclick="openHiddenModal('${h.id}')"
             tabindex="0"
             onkeydown="if(event.key==='Enter') openHiddenModal('${h.id}')">
      <span class="hidden-badge">${h.badge}</span>
      <span class="hidden-card-emoji">${h.emoji}</span>
      <div class="hidden-card-state">📍 ${h.state}</div>
      <h3 class="hidden-card-name">${h.name}</h3>
      <p class="hidden-card-desc">${h.description}</p>
    </article>
  `).join('');
}

function openHiddenModal(id) {
  const dest = HIDDEN_DESTINATIONS.find(h => h.id === id);
  if (!dest) return;

  const body = document.getElementById('destination-modal-body');
  body.innerHTML = `
    <div class="dest-modal-hero" style="background:${dest.gradient}">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:8rem;opacity:0.5">${dest.emoji}</div>
      <div style="position:absolute;bottom:1.5rem;left:2rem;right:2rem">
        <span style="background:rgba(255,107,53,0.9);color:#fff;padding:4px 12px;border-radius:999px;font-size:0.75rem;font-weight:700">${dest.badge}</span>
      </div>
    </div>
    <div class="dest-modal-body">
      <div class="dest-location" style="color:var(--color-saffron);font-weight:700;margin-bottom:0.5rem">📍 ${dest.state}</div>
      <h2 class="dest-modal-title" id="dest-modal-title">${dest.name}</h2>
      <div class="dest-modal-desc">${dest.description}</div>
      <div class="modal-section">
        <div class="modal-section-title">🌟 Why Visit?</div>
        <p class="modal-text">This hidden gem remains one of India's best-kept secrets — untouched by mass tourism and offering an authentic experience that mainstream destinations can no longer provide. Those who venture here are rewarded with extraordinary landscapes and genuine local culture.</p>
      </div>
      <div class="dest-modal-actions" style="margin-top:1.5rem">
        <a href="#trip-planner" onclick="closeModal('destination-modal')" class="btn btn-primary">Plan a Visit →</a>
        <button class="btn btn-outline" onclick="addHiddenToFavorites('${id}')">❤️ Add to Wishlist</button>
      </div>
    </div>
  `;
  openModal('destination-modal');
}

function addHiddenToFavorites(id) {
  const dest = HIDDEN_DESTINATIONS.find(h => h.id === id);
  if (!dest) return;
  if (!APP.favorites.includes(id)) {
    APP.favorites.push(id);
    saveFavorites();
    showToast(`❤️ ${dest.name} added to your wishlist!`, 'heart');
    renderFavorites();
  } else {
    showToast('Already in your wishlist!', 'info');
  }
}

/* ================================================================
   SECTION 12: STATE EXPLORER
   ================================================================ */

function renderStateExplorer() {
  filterStates();
}

function filterStates() {
  const grid = document.getElementById('states-grid');
  if (!grid) return;

  const filter = APP.activeStateFilter;
  let filtered;

  if (filter === 'all') {
    filtered = INDIA_STATES;
  } else if (filter === 'ut') {
    filtered = INDIA_STATES.filter(s => s.type === 'ut');
  } else {
    filtered = INDIA_STATES.filter(s => s.region === filter && s.type === 'state');
  }

  const regionColors = { north: '#4A90D9', south: '#2EC4B6', east: '#E07B39', west: '#9B59B6', central: '#27AE60', northeast: '#E84393' };

  grid.innerHTML = filtered.map(s => {
    const color = regionColors[s.region] || '#F39C12';
    return `
      <article class="state-card reveal" role="listitem"
               onclick="openStateModal('${s.id}')"
               tabindex="0"
               onkeydown="if(event.key==='Enter') openStateModal('${s.id}')">
        <div class="state-card-banner" style="background:linear-gradient(135deg, ${color}33, ${color}88)">
          <span class="banner-emoji" style="font-size:3rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-60%)">${s.emoji}</span>
          <span class="state-type-badge">${s.type === 'ut' ? 'UT' : capitalize(s.region)}</span>
        </div>
        <div class="state-card-body">
          <div class="state-card-region" style="color:${color}">${s.type === 'ut' ? 'Union Territory' : capitalize(s.region) + ' India'}</div>
          <h3 class="state-card-name">${s.name}</h3>
          <div class="state-card-capital">🏛️ ${s.capital}</div>
          <div class="state-card-meta">
            <span class="state-dest-count">✈️ ${s.destinations.length}+ spots</span>
            <button class="state-explore-btn">Explore</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ================================================================
   SECTION 13: STATE DETAIL MODAL
   ================================================================ */

function openStateModal(id) {
  const state = INDIA_STATES.find(s => s.id === id);
  if (!state) return;

  const regionColors = { north: '#4A90D9', south: '#2EC4B6', east: '#E07B39', west: '#9B59B6', central: '#27AE60', northeast: '#E84393' };
  const color = regionColors[state.region] || '#F39C12';

  const body = document.getElementById('state-modal-body');
  body.innerHTML = `
    <div class="state-modal-content">
      <div class="state-modal-banner" style="background:linear-gradient(135deg, ${color}55, ${color}aa)">
        <span style="font-size:8rem;filter:drop-shadow(0 4px 20px rgba(0,0,0,0.3))">${state.emoji}</span>
        <div style="position:absolute;bottom:1.5rem;left:2rem">
          <span style="background:rgba(0,0,0,0.4);backdrop-filter:blur(10px);color:#fff;padding:4px 12px;border-radius:999px;font-size:0.75rem;font-weight:700;border:1px solid rgba(255,255,255,0.2)">
            ${state.type === 'ut' ? '🏴 Union Territory' : '🗺️ State'} · ${capitalize(state.region)} India
          </span>
        </div>
      </div>
      <h2 id="state-modal-title" style="font-family:var(--font-display);font-size:2.5rem;font-weight:700;color:var(--text-primary);margin-bottom:0.75rem">${state.name}</h2>
      <div class="state-info-chips">
        <span class="info-chip">🏛️ ${state.capital}</span>
        <span class="info-chip">✈️ ${state.destinations.length}+ Destinations</span>
        <span class="info-chip">🕐 Best: ${state.bestTime}</span>
        <span class="info-chip">💰 ${state.budget}</span>
      </div>
      <p class="modal-text" style="font-size:1rem;margin-bottom:1.5rem;line-height:1.8">${state.description}</p>
      <div class="state-modal-grid">
        <div>
          <div class="modal-section">
            <div class="modal-section-title">🏙️ Famous Destinations</div>
            <div class="modal-tag-list">
              ${state.destinations.map(d => `<span class="modal-tag" onclick="searchFromModal('${d}')">${d}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">💎 Hidden Gems</div>
            <div class="modal-tag-list">
              ${state.hiddenGems.map(g => `<span class="modal-tag">${g}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">🍛 Famous Food</div>
            <div class="modal-tag-list">
              ${state.food.map(f => `<span class="modal-tag">${f}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">🎉 Festivals</div>
            <div class="modal-tag-list">
              ${state.festivals.map(f => `<span class="modal-tag">${f}</span>`).join('')}
            </div>
          </div>
        </div>
        <div>
          <div class="modal-section">
            <div class="modal-section-title">🎭 Culture</div>
            <p class="modal-text">${state.culture}</p>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">🏃 Activities</div>
            <div class="modal-tag-list">
              ${state.activities.map(a => `<span class="modal-tag">${a}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">💡 Travel Tips</div>
            <ul style="padding-left:1rem;">
              ${state.tips.map(t => `<li style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:0.5rem;line-height:1.6">${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap">
        <a href="#trip-planner" class="btn btn-primary" onclick="closeModal('state-modal');document.getElementById('planner-destination').value='${state.name}'">✈️ Plan a Trip to ${state.name}</a>
        <button class="btn btn-outline" onclick="addStateToFavorites('${state.id}')">❤️ Add to Wishlist</button>
      </div>
    </div>
  `;

  openModal('state-modal');
}

function addStateToFavorites(id) {
  const state = INDIA_STATES.find(s => s.id === id);
  if (!state) return;
  const key = 'state-' + id;
  if (!APP.favorites.includes(key)) {
    APP.favorites.push(key);
    saveFavorites();
    showToast(`❤️ ${state.name} added to My India!`, 'heart');
    renderFavorites();
  } else {
    showToast('Already in My India!', 'info');
  }
}

function searchFromModal(term) {
  closeModal('state-modal');
  setTimeout(() => {
    document.getElementById('hero-search').value = term;
    showSearchResults(term);
  }, 300);
}

/* ================================================================
   SECTION 14: DESTINATION DETAIL MODAL
   ================================================================ */

function openDestinationModal(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) { openHiddenModal(id); return; }

  const isFav = APP.favorites.includes(id);
  const body  = document.getElementById('destination-modal-body');

  body.innerHTML = `
    <div class="dest-modal-hero" style="background:${dest.gradient}">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:8rem;opacity:0.4">${dest.emoji}</div>
      <div style="position:absolute;top:1.5rem;right:1.5rem;display:flex;gap:0.75rem;margin-top:3rem">
        <span style="background:rgba(0,0,0,0.4);color:#fff;padding:6px 14px;border-radius:999px;font-size:0.875rem;font-weight:700;backdrop-filter:blur(10px)">⭐ ${dest.rating}</span>
        <span style="background:rgba(255,107,53,0.85);color:#fff;padding:6px 14px;border-radius:999px;font-size:0.875rem;font-weight:700">🌤️ ${dest.season}</span>
      </div>
    </div>
    <div class="dest-modal-body">
      <div style="color:var(--color-saffron);font-weight:700;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">📍 ${dest.state}</div>
      <h2 class="dest-modal-title" id="dest-modal-title">${dest.name}</h2>
      <div class="dest-modal-meta">
        <span class="info-chip">💰 ${dest.budget}</span>
        <span class="info-chip">🌤️ Best: ${dest.season}</span>
        ${dest.categories.slice(0,3).map(c => `<span class="info-chip">${c.charAt(0).toUpperCase() + c.slice(1)}</span>`).join('')}
      </div>
      <p class="dest-modal-desc">${dest.description}</p>
      <div class="dest-modal-grid">
        <div>
          <div class="modal-section">
            <div class="modal-section-title">🎯 Top Attractions</div>
            <div class="modal-tag-list">
              ${dest.attractions.map(a => `<span class="modal-tag">${a}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">🍛 Local Food</div>
            <div class="modal-tag-list">
              ${dest.food.map(f => `<span class="modal-tag">${f}</span>`).join('')}
            </div>
          </div>
        </div>
        <div>
          <div class="modal-section">
            <div class="modal-section-title">🏃 Activities</div>
            <div class="modal-tag-list">
              ${dest.activities.map(a => `<span class="modal-tag">${a}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">💡 Travel Tip</div>
            <p class="modal-text" style="font-style:italic">${dest.tips}</p>
          </div>
        </div>
      </div>
      <div class="dest-modal-actions">
        <button class="btn btn-primary" onclick="toggleFavorite('${id}'); document.getElementById('dest-modal-close').click()" id="modal-fav-btn-${id}">
          ${isFav ? '❤️ In Your Wishlist' : '🤍 Add to Wishlist'}
        </button>
        <a href="#trip-planner" onclick="closeModal('destination-modal');document.getElementById('planner-destination').value='${dest.name}'" class="btn btn-outline">✈️ Plan a Trip</a>
      </div>
    </div>
  `;

  openModal('destination-modal');
}

/* ================================================================
   SECTION 15: TRIP PLANNER
   ================================================================ */

function renderTravelStyles() {
  const container = document.getElementById('style-options');
  if (!container) return;

  container.innerHTML = TRAVEL_STYLES.map(s => `
    <label class="style-card">
      <input type="radio" name="travel-style" value="${s.value}" ${s.value === 'backpacking' ? 'checked' : ''} />
      <span class="style-icon">${s.emoji}</span>
      <span class="style-name">${s.name}</span>
    </label>
  `).join('');
}

let currentPlannerStep = 1;

function plannerNext(step) {
  if (step === 1) {
    const dest = document.getElementById('planner-destination').value.trim();
    if (!dest) { showToast('Please enter a destination!', 'error'); return; }
  }

  const current = document.getElementById(`step-${step}`);
  const next    = document.getElementById(`step-${step + 1}`);
  if (current) current.classList.remove('active');
  if (next)    next.classList.add('active');

  // Update step indicators
  document.getElementById(`step-ind-${step}`).classList.remove('active');
  document.getElementById(`step-ind-${step}`).classList.add('done');
  document.querySelectorAll('.step-line')[step - 1].classList.add('done');
  const nextInd = document.getElementById(`step-ind-${step + 1}`);
  if (nextInd) nextInd.classList.add('active');

  currentPlannerStep = step + 1;
}

function plannerBack(step) {
  const current = document.getElementById(`step-${step}`);
  const prev    = document.getElementById(`step-${step - 1}`);
  if (current) current.classList.remove('active');
  if (prev)    prev.classList.add('active');

  document.getElementById(`step-ind-${step}`).classList.remove('active');
  const prevInd = document.getElementById(`step-ind-${step - 1}`);
  if (prevInd) { prevInd.classList.remove('done'); prevInd.classList.add('active'); }
  document.querySelectorAll('.step-line')[step - 2].classList.remove('done');

  currentPlannerStep = step - 1;
}

function generateItinerary() {
  const dest      = document.getElementById('planner-destination').value.trim() || 'India';
  const days      = parseInt(document.getElementById('planner-days').value) || 7;
  const travelers = parseInt(document.getElementById('planner-travelers').value) || 2;
  const budget    = document.querySelector('input[name="budget"]:checked')?.value || 'moderate';
  const style     = document.querySelector('input[name="travel-style"]:checked')?.value || 'backpacking';

  if (!dest) { showToast('Please enter a destination!', 'error'); return; }

  const result = document.getElementById('planner-result');

  // Generate day-by-day itinerary
  const itinerary = generateDayByDay(dest, days, budget, style, travelers);

  const budgetMap = { budget: '₹5,000–₹10,000', moderate: '₹10,000–₹25,000', premium: '₹25,000–₹50,000', luxury: '₹50,000+' };
  const styleMap  = { backpacking: '🎒 Backpacking', family: '👨‍👩‍👧 Family', luxury: '👑 Luxury', adventure: '🏕️ Adventure', romantic: '❤️ Romantic', spiritual: '🧘 Spiritual', cultural: '🎭 Cultural', nature: '🌿 Nature' };

  result.innerHTML = `
    <div class="itinerary-header">
      <h3 class="itinerary-title">🗺️ Your ${days}-Day ${dest} Journey</h3>
      <p class="itinerary-meta">
        👥 ${travelers} traveler${travelers > 1 ? 's' : ''} &nbsp;•&nbsp;
        ${styleMap[style] || style} &nbsp;•&nbsp;
        💰 ${budgetMap[budget] || budget}/person
      </p>
    </div>
    ${itinerary.map((day, i) => `
      <div class="itinerary-day" style="animation:fadeInUp 0.4s ease ${i * 0.05}s both">
        <div class="day-header">
          <span class="day-number">Day ${day.day}</span>
          <span class="day-title">${day.title}</span>
        </div>
        <div class="day-activities">${day.activities}</div>
        ${day.tip ? `<div class="day-tip">💡 ${day.tip}</div>` : ''}
      </div>
    `).join('')}
    <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--border-color)">
      <button class="btn btn-outline" style="width:100%" onclick="window.print()">🖨️ Print Itinerary</button>
    </div>
  `;

  showToast('✨ Your itinerary is ready!', 'success');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function generateDayByDay(dest, days, budget, style, travelers) {
  const templates = {
    backpacking: [
      { title: 'Arrival & Orientation', activities: `Arrive in ${dest}. Check into your hostel/budget guesthouse. Explore the main market on foot. Try local street food for dinner. Meet fellow travelers.`, tip: 'Use local trains/buses for cheap transport.' },
      { title: 'Major Attractions', activities: `Start early for the top landmark. Pack lunch from a local eatery to save money. Visit the main heritage site in the afternoon. Attend the evening street market.`, tip: 'Many monuments are free for students with ID.' },
      { title: 'Local Culture & Hidden Gems', activities: `Visit a local neighborhood away from tourist zones. Hire a local guide for ₹200-500. Try the local specialty thali for lunch. Sunset at a viewpoint.`, tip: 'Talk to locals — they know the best hidden spots.' },
      { title: 'Nature & Adventure', activities: `Day trip to the nearest nature destination. Trek, swim or cycle. Carry packed breakfast. Return before sunset. Evening bonfire/community gathering.`, tip: 'Rent bicycles for the day — it\'s cheaper and fun.' },
      { title: 'Food Trail', activities: `Dedicated food day — try 5 different local dishes. Visit the spice market. Attend a cooking class (₹500-1,000). Street food evening.`, tip: 'Busy stalls with locals = good food at best prices.' },
      { title: 'Day Trip', activities: `Visit a nearby town or attraction by local bus. Explore at your own pace. Return by evening. Pack light for day trip.`, tip: 'Local buses are 1/10th the price of tourist taxis.' },
      { title: 'Shopping & Departure', activities: `Morning shopping for souvenirs and local crafts at the market. Bargain respectfully. Final meal at your favorite local spot. Head to bus/train station/airport.`, tip: 'Buy local crafts directly from artisans for fair prices.' }
    ],
    family: [
      { title: 'Safe Arrival & Rest', activities: `Arrive and check into a family-friendly hotel. Short orientation walk. Early dinner at a clean restaurant. Rest — especially important for children.`, tip: 'Book hotels near main attractions to minimize travel with kids.' },
      { title: 'Main Attractions (Child-Friendly)', activities: `Start at the most child-friendly major attraction. Comfortable transportation arranged. Interactive or wildlife experiences. Light lunch with familiar options. Afternoon rest/pool time.`, tip: 'Most major monuments have clean restrooms now.' },
      { title: 'Cultural Experience', activities: `Local craft workshop (children love block printing, pottery). Cultural show or puppet performance. Easy nature walk. Traditional thali dinner together.`, tip: 'Many resorts offer kids\' cultural workshops.' },
      { title: 'Adventure (Family Scale)', activities: `Boat ride, elephant interaction or wildlife safari (child-appropriate). Picnic lunch. Afternoon at a park or garden. Ice cream evening!`, tip: 'Check minimum age requirements for activities beforehand.' },
      { title: 'Leisure & Local Life', activities: `Morning at leisure. Visit a local farm or village. Let children interact with animals. Buy traditional toys as souvenirs. Early dinner.`, tip: 'Let children lead — they often find the most delightful things.' },
      { title: 'Relaxation Day', activities: `Pool morning. Light sightseeing. Souvenir shopping for kids. Games evening.`, tip: 'Keep one day free for unexpected discoveries.' },
      { title: 'Memorable Finale', activities: `Final special activity — hot air balloon, horse ride or boat cruise depending on destination. Pack memories and mementos. Head home.`, tip: 'Take a family photo at the most iconic spot.' }
    ],
    luxury: [
      { title: 'Grand Arrival', activities: `Private airport transfer. Check into a heritage hotel or 5-star property. Welcome drink and spa treatment. Sunset rooftop dinner with city views.`, tip: 'Request early check-in for smooth arrival experience.' },
      { title: 'Exclusive Heritage Access', activities: `Private guided heritage tour before public opening. Exclusive monument access (many offer this for ₹5,000-15,000). Private chef-curated lunch. Sunset cocktails.`, tip: 'Premium UNESCO sites offer exclusive dawn/dusk access.' },
      { title: 'Royal Cultural Immersion', activities: `Private cultural performance in a heritage setting. Masterclass in local art form. Royal thali lunch with table service. Evening with a local royal family (many heritage hotels offer this).`, tip: 'Book cultural experiences through the hotel concierge.' },
      { title: 'Wellness & Nature', activities: `Morning yoga at sunrise. Ayurvedic spa morning. Helicopter or private vehicle to nature destination. Gourmet picnic. Return by private car.`, tip: 'Most luxury properties have in-house spa; book in advance.' },
      { title: 'Culinary Excellence', activities: `Exclusive cooking class with a master chef. Farm-to-table lunch. Curated wine/spirits pairing dinner.`, tip: 'Order in advance for heritage cuisine — it can take 4–6 hours to prepare.' },
      { title: 'Exclusive Experiences', activities: `Hot air balloon at dawn. Private boat cruise. Bespoke shopping with a stylist. Fine dining farewell dinner.`, tip: 'Book balloon 3 months in advance during peak season.' },
      { title: 'Graceful Departure', activities: `Leisurely breakfast. Spa morning. Private transfer. Last shopping at curated boutiques.`, tip: 'Ask the hotel to pack local specialties for your journey home.' }
    ]
  };

  const template = templates[style] || templates.backpacking;
  const result = [];

  for (let i = 0; i < days; i++) {
    const dayTemplate = template[i] || template[i % template.length];
    result.push({
      day: i + 1,
      title: dayTemplate.title,
      activities: dayTemplate.activities.replace(/\{dest\}/g, dest),
      tip: dayTemplate.tip
    });
  }

  return result;
}

/* ================================================================
   SECTION 16: FOOD EXPLORER
   ================================================================ */

function renderFood() {
  // Populate state filter select
  const select = document.getElementById('food-state-filter');
  if (select) {
    const states = [...new Set(FOODS.map(f => f.state))].sort();
    states.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      select.appendChild(opt);
    });
  }

  filterFood();
}

function filterFood() {
  const grid   = document.getElementById('food-grid');
  const select = document.getElementById('food-state-filter');
  if (!grid) return;

  const filter = select ? select.value : 'all';
  const filtered = filter === 'all' ? FOODS : FOODS.filter(f => f.state === filter);

  grid.innerHTML = filtered.map(f => `
    <div class="food-card reveal" role="listitem">
      <div class="food-emoji">${f.emoji}</div>
      <div class="food-info">
        <div class="food-name">${f.name}</div>
        <div class="food-state-tag">📍 ${f.state}</div>
        <p class="food-desc">${f.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ================================================================
   SECTION 17: FESTIVALS
   ================================================================ */

function renderFestivals() {
  filterFestivals();
}

function filterFestivals() {
  const grid   = document.getElementById('festivals-grid');
  if (!grid) return;

  const filter = APP.activeFestivalFilter;
  const filtered = filter === 'all' ? FESTIVALS : FESTIVALS.filter(f => f.season === filter);

  const gradients = {
    spring: 'linear-gradient(135deg,#11998e,#38ef7d)',
    summer: 'linear-gradient(135deg,#F7971E,#FFD200)',
    monsoon: 'linear-gradient(135deg,#0F3460,#00B4D8)',
    autumn: 'linear-gradient(135deg,#E07B39,#FF6B35)',
    winter: 'linear-gradient(135deg,#667eea,#764ba2)'
  };

  grid.innerHTML = filtered.map(f => `
    <article class="festival-card reveal" role="listitem"
             onclick="openFestivalModal('${f.name}')"
             tabindex="0"
             onkeydown="if(event.key==='Enter') openFestivalModal('${f.name}')">
      <div class="festival-banner" style="background:${gradients[f.season] || 'linear-gradient(135deg,#667eea,#764ba2)'}">
        <span>${f.emoji}</span>
        <span class="festival-season-tag">${capitalize(f.season)}</span>
      </div>
      <div class="festival-body">
        <h3 class="festival-name">${f.name}</h3>
        <div class="festival-meta">
          <span class="festival-state">📍 ${f.state}</span>
          <span class="festival-date">📅 ${f.date}</span>
        </div>
        <p class="festival-desc">${f.desc}</p>
        <div class="festival-tip">💡 Tip: ${f.tip}</div>
      </div>
    </article>
  `).join('');
}

function openFestivalModal(name) {
  const fest = FESTIVALS.find(f => f.name === name);
  if (!fest) return;
  // For now, show a toast; could open a modal for more detail
  showToast(`🎉 ${fest.name} — ${fest.date}`, 'info');
}

/* ================================================================
   SECTION 18: TRAVEL TIPS
   ================================================================ */

function renderTips() {
  const grid = document.getElementById('tips-grid');
  if (!grid) return;

  grid.innerHTML = TRAVEL_TIPS.map((tip, i) => `
    <div class="tip-card reveal" role="listitem"
         onclick="openTipModal(${i})"
         tabindex="0"
         onkeydown="if(event.key==='Enter') openTipModal(${i})">
      <span class="tip-icon">${tip.icon}</span>
      <h3 class="tip-title">${tip.title}</h3>
      <p class="tip-preview">${tip.preview}</p>
    </div>
  `).join('');
}

function openTipModal(index) {
  const tip  = TRAVEL_TIPS[index];
  const body = document.getElementById('tips-modal-body');

  body.innerHTML = `
    <div class="tips-modal-content">
      <h2 class="tips-modal-title" id="tips-modal-title">${tip.icon} ${tip.title}</h2>
      <div class="tips-list">
        ${tip.tips.map(t => `
          <div class="tip-item">
            <span class="tip-item-icon">✅</span>
            <p class="tip-item-text">${t}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  openModal('tips-modal');
}

/* ================================================================
   SECTION 19: FAVORITES
   ================================================================ */

function loadFavorites() {
  try {
    APP.favorites = JSON.parse(localStorage.getItem('india-explorer-favorites')) || [];
  } catch (e) {
    APP.favorites = [];
  }
}

function saveFavorites() {
  localStorage.setItem('india-explorer-favorites', JSON.stringify(APP.favorites));
}

function toggleFavorite(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;

  const idx = APP.favorites.indexOf(id);
  if (idx === -1) {
    APP.favorites.push(id);
    showToast(`❤️ ${dest.name} added to My India!`, 'heart');
  } else {
    APP.favorites.splice(idx, 1);
    showToast(`💔 ${dest.name} removed from My India`, 'info');
  }

  saveFavorites();

  // Update all fav buttons for this destination
  document.querySelectorAll(`#fav-btn-${id}, #modal-fav-btn-${id}`).forEach(btn => {
    const isFav = APP.favorites.includes(id);
    btn.textContent = isFav ? '❤️' : '🤍';
    btn.classList.toggle('active', isFav);
    btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');
  });

  renderFavorites();
}

function renderFavorites() {
  const container = document.getElementById('favorites-container');
  if (!container) return;

  const favDests  = DESTINATIONS.filter(d => APP.favorites.includes(d.id));
  const favStates = INDIA_STATES.filter(s => APP.favorites.includes('state-' + s.id));
  const hiddenFavs = HIDDEN_DESTINATIONS.filter(h => APP.favorites.includes(h.id));

  const allFavs = [...favDests.map(d => ({ type: 'dest', data: d })),
                   ...favStates.map(s => ({ type: 'state', data: s })),
                   ...hiddenFavs.map(h => ({ type: 'hidden', data: h }))];

  if (allFavs.length === 0) {
    container.innerHTML = `
      <div class="empty-favorites">
        <span class="empty-icon">🗺️</span>
        <h3>No favorites yet!</h3>
        <p>Explore destinations and click the ❤️ to save them here.</p>
        <a href="#destinations" class="btn btn-primary">Explore Destinations</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="favorites-actions">
      <button class="btn btn-outline btn-sm" onclick="clearFavorites()">🗑️ Clear All</button>
    </div>
    <div class="favorites-grid">
      ${allFavs.map(item => {
        if (item.type === 'dest') {
          const d = item.data;
          return `<article class="dest-card" role="listitem">
            <div class="dest-card-image">
              <div class="card-bg" style="background:${d.gradient}">
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;opacity:0.35">${d.emoji}</div>
              </div>
              <div class="card-overlay"></div>
              <div class="dest-rating">⭐ ${d.rating}</div>
              <button class="dest-fav-btn active" onclick="toggleFavorite('${d.id}')">❤️</button>
            </div>
            <div class="dest-card-body">
              <div class="dest-location">📍 ${d.state}</div>
              <h3 class="dest-name">${d.name}</h3>
              <p class="dest-desc">${d.description}</p>
              <div class="dest-card-footer">
                <span class="dest-budget">${d.budget}</span>
                <button class="dest-explore-btn" onclick="openDestinationModal('${d.id}')">Explore</button>
              </div>
            </div>
          </article>`;
        }
        if (item.type === 'state') {
          const s = item.data;
          return `<div class="state-card" onclick="openStateModal('${s.id}')">
            <div class="state-card-banner" style="background:linear-gradient(135deg,rgba(255,107,53,0.3),rgba(255,179,71,0.5))">
              <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);font-size:3rem">${s.emoji}</span>
              <button class="dest-fav-btn active" style="bottom:0.75rem;right:0.75rem" onclick="event.stopPropagation();addStateToFavorites('${s.id}')">❤️</button>
            </div>
            <div class="state-card-body">
              <div class="state-card-region" style="color:var(--color-saffron)">${capitalize(s.region)} India</div>
              <h3 class="state-card-name">${s.name}</h3>
              <div class="state-card-capital">🏛️ ${s.capital}</div>
            </div>
          </div>`;
        }
        if (item.type === 'hidden') {
          const h = item.data;
          return `<div class="hidden-card" style="background:${h.gradient};color:#fff" onclick="openHiddenModal('${h.id}')">
            <span class="hidden-badge">${h.badge}</span>
            <span style="font-size:2rem;display:block;margin-bottom:0.75rem">${h.emoji}</span>
            <div style="font-size:0.75rem;font-weight:700;color:rgba(255,255,255,0.7);margin-bottom:0.5rem">📍 ${h.state}</div>
            <h3 style="font-size:1.25rem;font-weight:700;color:#fff">${h.name}</h3>
          </div>`;
        }
      }).join('')}
    </div>
  `;
}

function clearFavorites() {
  APP.favorites = [];
  saveFavorites();
  renderFavorites();
  // Update all fav buttons
  document.querySelectorAll('.dest-fav-btn.active').forEach(btn => {
    btn.textContent = '🤍';
    btn.classList.remove('active');
  });
  showToast('🗑️ Wishlist cleared', 'info');
}

/* ================================================================
   SECTION 20: TRAVEL MOOD
   ================================================================ */

function initMoodFab() {
  const fab = document.getElementById('mood-fab');
  if (fab) {
    fab.addEventListener('click', openMoodModal);
  }
}

function openMoodModal() {
  const body = document.getElementById('mood-modal-body');
  body.innerHTML = `
    <div class="mood-modal-content">
      <h2 class="mood-modal-title" id="mood-modal-title">What's Your Travel Mood? ✨</h2>
      <p class="mood-modal-subtitle">Tell us your vibe — we'll find your perfect India destination.</p>
      <div class="mood-options">
        ${TRAVEL_MOODS.map(m => `
          <div class="mood-option" onclick="showMoodResults('${m.mood}')"
               tabindex="0" role="button"
               onkeydown="if(event.key==='Enter') showMoodResults('${m.mood}')">
            <span class="mood-icon">${m.emoji}</span>
            <div>
              <div class="mood-name">${m.mood}</div>
              <div class="mood-desc">${m.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  openModal('mood-modal');
}

function showMoodResults(moodName) {
  const mood = TRAVEL_MOODS.find(m => m.mood === moodName);
  if (!mood) return;

  const body = document.getElementById('mood-modal-body');
  body.innerHTML = `
    <div class="mood-results">
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <button onclick="openMoodModal()" style="background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:999px;padding:0.5rem 1rem;cursor:pointer;color:var(--text-secondary);font-size:0.875rem">← Back</button>
        <span style="font-size:1.5rem">${mood.emoji}</span>
      </div>
      <h2 class="mood-results-title">${moodName} Destinations</h2>
      <div class="mood-results-grid">
        ${mood.destinations.map(destName => {
          const dest = DESTINATIONS.find(d => d.name === destName || d.name.includes(destName));
          const state = INDIA_STATES.find(s => s.name === destName || s.destinations.includes(destName));
          if (dest) {
            return `<div class="mood-result-card" onclick="closeModal('mood-modal'); openDestinationModal('${dest.id}')">
              <div style="font-size:2rem;margin-bottom:0.5rem">${dest.emoji}</div>
              <div class="mood-result-name">${dest.name}</div>
              <div class="mood-result-state">📍 ${dest.state}</div>
            </div>`;
          } else if (state) {
            return `<div class="mood-result-card" onclick="closeModal('mood-modal'); openStateModal('${state.id}')">
              <div style="font-size:2rem;margin-bottom:0.5rem">${state.emoji}</div>
              <div class="mood-result-name">${state.name}</div>
              <div class="mood-result-state">📍 ${capitalize(state.region)} India</div>
            </div>`;
          } else {
            return `<div class="mood-result-card">
              <div style="font-size:2rem;margin-bottom:0.5rem">📍</div>
              <div class="mood-result-name">${destName}</div>
              <div class="mood-result-state">India</div>
            </div>`;
          }
        }).join('')}
      </div>
    </div>
  `;
}

/* ================================================================
   SECTION 21: MODAL SYSTEM
   ================================================================ */

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-content')?.focus();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModalClosers() {
  // Close buttons
  ['state-modal-close', 'dest-modal-close', 'mood-modal-close', 'search-modal-close', 'tips-modal-close', 'category-modal-close'].forEach(btnId => {
    const btn = document.getElementById(btnId);
    const modalId = btnId.replace('-close', '');
    if (btn) btn.addEventListener('click', () => closeModal(modalId));
  });

  // Overlay clicks
  ['state-modal-overlay', 'dest-modal-overlay', 'mood-modal-overlay', 'search-modal-overlay', 'tips-modal-overlay', 'category-modal-overlay'].forEach(id => {
    const overlay = document.getElementById(id);
    if (overlay) {
      const modalId = id.replace('-overlay', '');
      overlay.addEventListener('click', () => closeModal(modalId));
    }
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['state-modal', 'destination-modal', 'mood-modal', 'search-modal', 'tips-modal', 'category-modal'].forEach(closeModal);
    }
  });
}

/* ================================================================
   SECTION 22: TOAST NOTIFICATIONS
   ================================================================ */

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const iconMap = { success: '✅', error: '❌', info: '💡', heart: '❤️' };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${iconMap[type] || '💡'}</span><span>${message}</span>`;

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });

  // Auto-remove
  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3000);
}

/* ================================================================
   SECTION 23: SCROLL ANIMATIONS & COUNTERS
   ================================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target   = parseInt(el.dataset.target);
  const duration = 1800;
  const start    = performance.now();

  function update(currentTime) {
    const elapsed  = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current  = Math.round(eased * target);
    el.textContent = current.toLocaleString('en-IN');

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('en-IN');
  }

  requestAnimationFrame(update);
}

/* ================================================================
   SECTION 24: BACK TO TOP
   ================================================================ */

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================================================
   SECTION 25: NEWSLETTER
   ================================================================ */

function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email');
  if (!email) return;

  const val = email.value.trim();
  if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    showToast('Please enter a valid email address!', 'error');
    return;
  }

  email.value = '';
  showToast('🎉 Subscribed! Welcome to the India Explorer community!', 'success');
}

/* ================================================================
   SECTION 26: UTILITY FUNCTIONS
   ================================================================ */

/** Capitalize first letter of a string */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Safely escape HTML to prevent XSS */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ================================================================
   SECTION 27: SERVICE WORKER REGISTRATION (Optional offline support)
   ================================================================ */

// Register service worker if supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Service worker registration disabled for basic file:// protocol
    // Uncomment below for production server deployment:
    // navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/* ================================================================
   END OF SCRIPT — Incredible India Explorer
   Total: 36 States/UTs · 30+ Destinations · Complete Data
   Features: Map, Search, Planner, Favorites, Dark Mode, Filters
   ================================================================ */
