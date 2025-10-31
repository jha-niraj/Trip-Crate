'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const motivationalQuotes = [
    "Adventure awaits! Start exploring today! 🌍",
    "The world is yours to discover. Let's go! 🎒",
    "Travel far, travel wide. Make memories! ✨",
    "Every journey begins with a single step! 🚶",
    "Life is short, travel often! 🏔️",
    "Collect moments, not things! 📸",
    "Adventure is calling, will you answer? �️"
]

// Platform feature links that the bot can reference
const platformFeatures = {
    'booking': '/booking',
    'book': '/booking',
    'travel booking': '/booking',
    'hotels': '/hotels',
    'hotel': '/hotels',
    'accommodation': '/hotels',
    'stay': '/hotels',
    'food': '/food',
    'restaurant': '/food',
    'dining': '/food',
    'places': '/places',
    'destinations': '/places',
    'place': '/places',
    'destination': '/places',
    'triund': '/destinations/triund',
    'kasol': '/destinations/kasol',
    'manali': '/destinations/manali',
    'shimla': '/destinations/shimla',
    'dharamshala': '/destinations/dharamshala',
    'rishikesh': '/destinations/rishikesh',
    'leh': '/destinations/leh-ladakh',
    'ladakh': '/destinations/leh-ladakh',
    'goa': '/destinations/goa',
    'bir billing': '/destinations/bir-billing',
    'spiti': '/destinations/spiti',
    'weekend': '/trips/weekend',
    'budget': '/trips/budget',
    'adventure': '/trips/adventure',
    'group': '/trips/group',
    'solo': '/trips/solo',
    'college': '/trips/college',
    'trekking': '/activities/trekking',
    'trek': '/activities/trekking',
    'camping': '/activities/camping',
    'rafting': '/activities/rafting',
    'paragliding': '/activities/paragliding',
    'transport': '/services/transport',
    'guide': '/services/guides',
    'itinerary': '/services/itinerary',
    'insurance': '/services/insurance',
    'community': '/community',
    'reviews': '/reviews',
    'blog': '/blog',
    'tips': '/tips',
    'dashboard': '/dashboard',
    'bookings': '/my-bookings',
}

function findRelevantLinks(message: string): string[] {
    const lowerMessage = message.toLowerCase()
    const links: string[] = []
    
    for (const [keyword, link] of Object.entries(platformFeatures)) {
        if (lowerMessage.includes(keyword)) {
            if (!links.includes(link)) {
                links.push(link)
            }
        }
    }
    
    return links
}

export async function getMotivationalMessage() {
    try {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
        return {
            success: true,
            message: randomQuote
        }
    } catch (error) {
        console.error('Error getting motivational message:', error)
        return {
            success: false,
            message: "Keep pushing forward! You've got this! 💪"
        }
    }
}

export async function chatWithRobot(userMessage: string, conversationHistory: { role: 'user' | 'assistant', content: string }[] = []) {
    try {
        const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
            {
                role: 'system',
                content: `You are a friendly and enthusiastic travel assistant on TripCrate platform. Your role is to:
- Help users discover amazing travel destinations
- Provide travel recommendations and tips
- Keep responses concise (2-3 sentences max)
- Be enthusiastic and use travel-related emojis occasionally
- Help users explore features on the platform
- When users ask about destinations or features, guide them where to find it
- Always be encouraging about travel and exploration

Available features on the platform:
- Travel Booking (/booking)
- Hotels Accommodations (/hotels)
- Food and Beverages (/food)
- Place Details (/places)
- Weekend Trips (/trips/weekend)
- Adventure Activities (/trips/adventure)
- Group Trips (/trips/group)
- Popular destinations: Triund, Kasol, Manali, Shimla, Dharamshala, Rishikesh, Leh Ladakh, Goa
- Activities: Trekking (/activities/trekking), Camping (/activities/camping), Rafting (/activities/rafting), Paragliding (/activities/paragliding)

Remember: You're here to inspire wanderlust and help students travel more!`
            },
            ...conversationHistory.map(msg => ({
                role: msg.role,
                content: msg.content
            })),
            {
                role: 'user',
                content: userMessage
            }
        ]

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
            max_tokens: 150,
            temperature: 0.8,
        })

        const botResponse = completion.choices[0].message.content || "I'm here to help you plan your adventure! 🌍"
        
        // Find relevant links from user message
        const relevantLinks = findRelevantLinks(userMessage)

        return {
            success: true,
            message: botResponse,
            links: relevantLinks
        }
    } catch (error) {
        console.error('Error chatting with robot:', error)
        return {
            success: false,
            message: "I'm having trouble responding right now, but keep exploring! Your next adventure awaits! ✨",
            links: []
        }
    }
}

export async function getWelcomeMessage(userName: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a friendly travel assistant. Give a brief, enthusiastic welcome message to the user about exploring travel destinations. Keep it to 1-2 sentences with an emoji.'
                },
                {
                    role: 'user',
                    content: `Welcome ${userName} to TripCrate platform`
                }
            ],
            max_tokens: 50,
            temperature: 0.9,
        })

        return {
            success: true,
            message: completion.choices[0].message.content || `Welcome ${userName}! Let's explore amazing destinations! 🌍`
        }
    } catch (error) {
        console.error('Error getting welcome message:', error)
        return {
            success: true,
            message: `Hey ${userName}! Ready to discover your next adventure? Let's go! ✈️`
        }
    }
}