// Search data structure for the explore page
export interface SearchItem {
    title: string
    description: string
    link: string
    category: string
    keywords: string[]
}

export const exploreSearchData: SearchItem[] = [
    // Travel Booking Features
    {
        title: "Travel Booking",
        description: "Book your complete travel package with ease",
        link: "/booking",
        category: "Travel Booking",
        keywords: ["travel", "booking", "package", "book", "trip", "journey"]
    },
    {
        title: "Hotels Accommodations",
        description: "Find and book the best hotels for your stay",
        link: "/hotels",
        category: "Hotels Accommodations",
        keywords: ["hotels", "accommodation", "stay", "rooms", "lodging", "resorts"]
    },
    {
        title: "Food and Beverages",
        description: "Discover local cuisines and restaurants",
        link: "/food",
        category: "Food and Beverages",
        keywords: ["food", "beverages", "restaurants", "cuisine", "dining", "meals"]
    },
    {
        title: "Place Details",
        description: "Get detailed information about destinations",
        link: "/places",
        category: "Place Details",
        keywords: ["place", "details", "destinations", "attractions", "sightseeing", "tourist"]
    },

    // Popular Destinations
    {
        title: "Triund",
        description: "Trek to the beautiful Triund hilltop with stunning views",
        link: "/destinations/triund",
        category: "Destinations",
        keywords: ["triund", "trek", "himachal", "mcleodganj", "dharamshala", "mountains", "hiking"]
    },
    {
        title: "Kasol",
        description: "Experience the serene beauty of Kasol valley",
        link: "/destinations/kasol",
        category: "Destinations",
        keywords: ["kasol", "parvati", "valley", "himachal", "backpacking", "nature"]
    },
    {
        title: "Manali",
        description: "Visit the picturesque hill station of Manali",
        link: "/destinations/manali",
        category: "Destinations",
        keywords: ["manali", "solang", "rohtang", "himachal", "adventure", "skiing"]
    },
    {
        title: "Shimla",
        description: "Explore the queen of hills - Shimla",
        link: "/destinations/shimla",
        category: "Destinations",
        keywords: ["shimla", "mall road", "ridge", "himachal", "colonial", "heritage"]
    },
    {
        title: "Dharamshala",
        description: "Discover the spiritual hub of Dharamshala",
        link: "/destinations/dharamshala",
        category: "Destinations",
        keywords: ["dharamshala", "mcleodganj", "dalai lama", "himachal", "tibet", "monastery"]
    },
    {
        title: "Rishikesh",
        description: "Adventure and spirituality in Rishikesh",
        link: "/destinations/rishikesh",
        category: "Destinations",
        keywords: ["rishikesh", "rafting", "yoga", "ganga", "uttarakhand", "adventure"]
    },
    {
        title: "Leh Ladakh",
        description: "Bike trip to the land of high passes",
        link: "/destinations/leh-ladakh",
        category: "Destinations",
        keywords: ["leh", "ladakh", "bike", "pangong", "nubra", "khardungla", "mountains"]
    },
    {
        title: "Goa",
        description: "Beach paradise with vibrant nightlife",
        link: "/destinations/goa",
        category: "Destinations",
        keywords: ["goa", "beach", "party", "nightlife", "baga", "calangute", "anjuna"]
    },
    {
        title: "Bir Billing",
        description: "Paragliding capital of India",
        link: "/destinations/bir-billing",
        category: "Destinations",
        keywords: ["bir", "billing", "paragliding", "himachal", "adventure", "flying"]
    },
    {
        title: "Spiti Valley",
        description: "Explore the cold desert mountain valley",
        link: "/destinations/spiti",
        category: "Destinations",
        keywords: ["spiti", "valley", "himachal", "kaza", "desert", "monastery", "offbeat"]
    },

    // Trip Types
    {
        title: "Weekend Trips",
        description: "Perfect getaways for your weekends",
        link: "/trips/weekend",
        category: "Trip Types",
        keywords: ["weekend", "short", "trip", "getaway", "quick", "2days"]
    },
    {
        title: "Budget Trips",
        description: "Travel more, spend less - Budget-friendly trips",
        link: "/trips/budget",
        category: "Trip Types",
        keywords: ["budget", "cheap", "affordable", "economical", "student", "backpacking"]
    },
    {
        title: "Adventure Trips",
        description: "Thrilling adventures for adrenaline junkies",
        link: "/trips/adventure",
        category: "Trip Types",
        keywords: ["adventure", "trekking", "rafting", "paragliding", "camping", "extreme"]
    },
    {
        title: "Group Trips",
        description: "Join fellow travelers on group expeditions",
        link: "/trips/group",
        category: "Trip Types",
        keywords: ["group", "team", "together", "friends", "community", "social"]
    },
    {
        title: "Solo Trips",
        description: "Curated experiences for solo travelers",
        link: "/trips/solo",
        category: "Trip Types",
        keywords: ["solo", "alone", "independent", "backpacker", "individual"]
    },
    {
        title: "College Trips",
        description: "Special packages for college students",
        link: "/trips/college",
        category: "Trip Types",
        keywords: ["college", "student", "university", "youth", "educational"]
    },

    // Services
    {
        title: "Transportation",
        description: "Comfortable travel with buses and bikes",
        link: "/services/transport",
        category: "Services",
        keywords: ["transport", "bus", "bike", "cab", "vehicle", "rental"]
    },
    {
        title: "Tour Guides",
        description: "Expert local guides for your journey",
        link: "/services/guides",
        category: "Services",
        keywords: ["guide", "tour", "local", "expert", "leader", "assistance"]
    },
    {
        title: "Itinerary Planning",
        description: "Customized travel itineraries",
        link: "/services/itinerary",
        category: "Services",
        keywords: ["itinerary", "planning", "schedule", "route", "plan", "customize"]
    },
    {
        title: "Travel Insurance",
        description: "Travel worry-free with insurance coverage",
        link: "/services/insurance",
        category: "Services",
        keywords: ["insurance", "safety", "coverage", "protection", "emergency"]
    },

    // Activities
    {
        title: "Trekking",
        description: "Guided trekking expeditions",
        link: "/activities/trekking",
        category: "Activities",
        keywords: ["trekking", "hiking", "mountains", "trail", "expedition", "climb"]
    },
    {
        title: "Camping",
        description: "Camping experiences under the stars",
        link: "/activities/camping",
        category: "Activities",
        keywords: ["camping", "bonfire", "tents", "outdoor", "nature", "stargazing"]
    },
    {
        title: "River Rafting",
        description: "White water rafting adventures",
        link: "/activities/rafting",
        category: "Activities",
        keywords: ["rafting", "river", "water", "rapids", "adventure", "sports"]
    },
    {
        title: "Paragliding",
        description: "Soar through the skies",
        link: "/activities/paragliding",
        category: "Activities",
        keywords: ["paragliding", "flying", "sky", "adventure", "aerial", "gliding"]
    },
    {
        title: "Sightseeing",
        description: "Explore famous landmarks and attractions",
        link: "/activities/sightseeing",
        category: "Activities",
        keywords: ["sightseeing", "attractions", "landmarks", "monuments", "tourist", "spots"]
    },

    // Resources
    {
        title: "Travel Blog",
        description: "Read travel stories and guides",
        link: "/blog",
        category: "Resources",
        keywords: ["blog", "stories", "guides", "tips", "articles", "reading"]
    },
    {
        title: "Travel Tips",
        description: "Essential travel tips for students",
        link: "/tips",
        category: "Resources",
        keywords: ["tips", "advice", "help", "guide", "information", "hacks"]
    },
    {
        title: "Packing Guide",
        description: "What to pack for your trip",
        link: "/packing",
        category: "Resources",
        keywords: ["packing", "checklist", "essentials", "gear", "luggage", "items"]
    },
    {
        title: "Photo Gallery",
        description: "Browse stunning travel photos",
        link: "/gallery",
        category: "Resources",
        keywords: ["gallery", "photos", "images", "pictures", "photography", "memories"]
    },

    // Community
    {
        title: "Community Hub",
        description: "Connect with fellow travelers",
        link: "/community",
        category: "Community",
        keywords: ["community", "travelers", "connect", "social", "network", "friends"]
    },
    {
        title: "Trip Reviews",
        description: "Read and share trip experiences",
        link: "/reviews",
        category: "Community",
        keywords: ["reviews", "feedback", "ratings", "experiences", "testimonials"]
    },
    {
        title: "Travel Stories",
        description: "Share your travel adventures",
        link: "/stories",
        category: "Community",
        keywords: ["stories", "share", "adventures", "experiences", "journey", "tales"]
    },

    // Other Features
    {
        title: "My Bookings",
        description: "View and manage your bookings",
        link: "/my-bookings",
        category: "Account",
        keywords: ["bookings", "trips", "reservations", "my", "upcoming", "past"]
    },
    {
        title: "Dashboard",
        description: "View your personal dashboard",
        link: "/dashboard",
        category: "Account",
        keywords: ["dashboard", "profile", "account", "overview", "personal"]
    },
]

// Feature cards for the main explore page
export interface FeatureCard {
    title: string
    description: string
    icon: string
    link: string
    color: string
}

export const featureCards: FeatureCard[] = [
    {
        title: "Travel Booking",
        description: "Book complete travel packages for your dream destinations",
        icon: "✈️",
        link: "/booking",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Hotels Accommodations",
        description: "Find and book the perfect stay for your journey",
        icon: "🏨",
        link: "/hotels",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Food and Beverages",
        description: "Discover local cuisines and best restaurants",
        icon: "🍽️",
        link: "/food",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Place Details",
        description: "Get complete information about destinations",
        icon: "📍",
        link: "/places",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Weekend Trips",
        description: "Perfect weekend getaways starting at ₹1,800",
        icon: "🎒",
        link: "/trips/weekend",
        color: "from-yellow-500 to-amber-500"
    },
    {
        title: "Adventure Activities",
        description: "Trekking, rafting, paragliding and more",
        icon: "⛰️",
        link: "/activities",
        color: "from-indigo-500 to-violet-500"
    },
    {
        title: "Group Trips",
        description: "Join fellow travelers on group expeditions",
        icon: "👥",
        link: "/trips/group",
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Travel Community",
        description: "Connect with travelers and share experiences",
        icon: "🌍",
        link: "/community",
        color: "from-teal-500 to-cyan-500"
    },
]
