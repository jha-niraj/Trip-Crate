'use client'

import { useState, useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
    Search, Sparkles, ArrowRight, Send, ExternalLink, MessageSquare, MapPin
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from '@/components/ui/dialog'
import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle
} from '@/components/ui/sheet'
import { SplineScene } from '@/components/ui/spline-screen'
import { Spotlight } from '@/components/ui/spotlight'
import { exploreSearchData, featureCards, type SearchItem } from '@/lib/explore-data'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'

// Category icon mapping
const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
        'Travel Booking': '✈️',
        'Hotels Accommodations': '🏨',
        'Food and Beverages': '🍽️',
        'Place Details': '📍',
        'Destinations': '🏔️',
        'Trip Types': '🎒',
        'Services': '🛎️',
        'Activities': '⛰️',
        'Resources': '📚',
        'Community': '🌍',
        'Account': '👤',
    }
    return iconMap[category] || '✨'
}

export default function ExplorePage() {
    const { data: session } = useSession()
    const userName = session?.user?.name?.split(' ')[0] || 'Explorer'
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<SearchItem[]>([])
    const [showSearchDialog, setShowSearchDialog] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [searchMode, setSearchMode] = useState<'place' | 'chat'>('place')

    // Robot chat states
    const [showChat, setShowChat] = useState(false)
    const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant', content: string, links?: string[] }[]>([])
    const [userInput, setUserInput] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [motivationalMsg, setMotivationalMsg] = useState('')
    const [showMotivation, setShowMotivation] = useState(true)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Handle search - only filter results, don't auto-open dialog
    useEffect(() => {
        if (searchQuery.trim().length > 0 && searchMode === 'place') {
            setIsSearching(true)
            const timer = setTimeout(() => {
                const results = exploreSearchData.filter(item => {
                    const query = searchQuery.toLowerCase()
                    return (
                        item.title.toLowerCase().includes(query) ||
                        item.description.toLowerCase().includes(query) ||
                        item.category.toLowerCase().includes(query) ||
                        item.keywords.some(keyword => keyword.toLowerCase().includes(query))
                    )
                })
                setSearchResults(results)
                setIsSearching(false)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            setSearchResults([])
            setIsSearching(false)
        }
    }, [searchQuery, searchMode])

    // Fetch motivational message on mount
    useEffect(() => {
        async function fetchMotivation() {
            const { getMotivationalMessage } = await import('@/actions/explore.action')
            const result = await getMotivationalMessage()
            if (result.success) {
                setMotivationalMsg(result.message)
            }
        }
        fetchMotivation()

        // Rotate motivational messages every 10 seconds
        const interval = setInterval(fetchMotivation, 10000)
        return () => clearInterval(interval)
    }, [])

    // Auto scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chatMessages, isSending])

    // Handle chat with robot
    const handleSendMessage = async () => {
        if (!userInput.trim() || isSending) return

        const newMessage = { role: 'user' as const, content: userInput }
        setChatMessages(prev => [...prev, newMessage])
        setUserInput('')
        setIsSending(true)

        try {
            const { chatWithRobot } = await import('@/actions/explore.action')
            const result = await chatWithRobot(userInput, chatMessages)

            if (result.success) {
                setChatMessages(prev => [...prev, {
                    role: 'assistant',
                    content: result.message,
                    links: result.links
                }])
            }
        } catch (error) {
            console.error('Chat error:', error)
        } finally {
            setIsSending(false)
        }
    }

    const typewriterSequence = [
        'search for Triund trek...',
        2000,
        'search for Kasol weekend trip...',
        2000,
        'search for hotels in Manali...',
        2000,
        'search for paragliding...',
        2000,
        'search for budget trips...',
        2000,
        'search for group adventures...',
        2000,
        'search for camping activities...',
        2000,
        'search for food places...',
        2000,
    ]

    const handleSearchSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        
        if (searchMode === 'place') {
            setShowSearchDialog(true)
        } else {
            // Chat mode - open chat sheet
            setShowChat(true)
            // Send the search query as a chat message
            if (searchQuery.trim()) {
                const messageContent = searchQuery
                const newMessage = { role: 'user' as const, content: messageContent }
                setChatMessages(prev => [...prev, newMessage])
                setSearchQuery('')
                
                // Create a new state setter to avoid closure issues
                const sendingStateSetter = (value: boolean) => {
                    setIsSending(value)
                }
                
                sendingStateSetter(true)

                // Get chat response
                try {
                    const { chatWithRobot } = await import('@/actions/explore.action')
                    const result = await chatWithRobot(messageContent, chatMessages)

                    if (result.success) {
                        setChatMessages(prev => [...prev, {
                            role: 'assistant',
                            content: result.message,
                            links: result.links
                        }])
                    }
                } catch (error) {
                    console.error('Chat error:', error)
                } finally {
                    sendingStateSetter(false)
                }
            }
        }
    }

    return (
        <div className="h-screen w-full bg-white dark:bg-black/[0.96] relative overflow-hidden flex flex-col">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <Dialog open={showSearchDialog} onOpenChange={setShowSearchDialog}>
                <DialogContent className="max-w-4xl bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800 max-h-[90vh] p-0">
                    <DialogHeader className="px-6 pt-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                        <DialogTitle className="text-neutral-900 dark:text-white flex items-center gap-3 text-2xl">
                            <div className="p-2.5 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-xl shadow-lg">
                                <Search className="w-6 h-6 text-white" />
                            </div>
                            Travel Search Results
                        </DialogTitle>
                        <DialogDescription className="text-neutral-600 dark:text-neutral-400 text-base mt-2">
                            Found <span className="font-bold text-teal-600 dark:text-teal-400">{searchResults.length}</span> result{searchResults.length !== 1 ? 's' : ''} for <span className="font-semibold text-neutral-800 dark:text-neutral-300">&quot;{searchQuery}&quot;</span>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="overflow-y-auto px-6 py-6 max-h-[calc(90vh-140px)]">
                        {
                            isSearching ? (
                                <div className="p-16 text-center">
                                    <div className="relative w-16 h-16 mx-auto mb-6">
                                        <div className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800"></div>
                                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-600 animate-spin"></div>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 font-medium">Searching destinations...</p>
                                </div>
                            ) : searchResults.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {
                                        searchResults.map((item, index) => (
                                            <Link key={index} href={item.link} onClick={() => setShowSearchDialog(false)}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
                                                >
                                                    <div className="group relative bg-neutral-50/40 dark:bg-neutral-900/40 border border-neutral-300/50 dark:border-neutral-800/50 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40 hover:border-teal-400 dark:hover:border-teal-500 backdrop-blur-md transition-all duration-300 overflow-hidden rounded-xl p-4 cursor-pointer h-full hover:shadow-lg hover:shadow-teal-500/10">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/0 dark:from-neutral-800/0 to-teal-50/0 dark:to-teal-950/0 group-hover:from-teal-50/20 dark:group-hover:from-teal-950/20 group-hover:to-emerald-50/20 dark:group-hover:to-emerald-950/20 transition-all duration-300" />

                                                        <div className="relative flex items-start gap-3">
                                                            <div className="text-2xl p-2 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-600/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                                {getCategoryIcon(item.category)}
                                                            </div>

                                                            <div className="flex-1 min-w-0">
                                                                <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100 mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                                                                    {item.title}
                                                                </h3>

                                                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2.5 leading-relaxed line-clamp-2">
                                                                    {item.description}
                                                                </p>

                                                                <Badge className="bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-500/20 dark:to-emerald-500/20 text-teal-700 dark:text-teal-400 border-0 text-xs font-semibold px-2 py-0.5">
                                                                    {item.category}
                                                                </Badge>
                                                            </div>

                                                            <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 group-hover:translate-x-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all flex-shrink-0 mt-1" />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="relative w-24 h-24 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-full"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <MapPin className="w-12 h-12 text-neutral-400 dark:text-neutral-600" />
                                        </div>
                                    </div>
                                    <p className="text-neutral-700 dark:text-neutral-300 text-xl font-bold mb-2">No destinations found</p>
                                    <p className="text-neutral-500 dark:text-neutral-500 text-sm">Try searching for different places or activities</p>
                                </div>
                            )
                        }
                    </div>
                </DialogContent>
            </Dialog>

            <div className="flex h-full flex-1 overflow-hidden">
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center max-w-3xl overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 space-y-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 leading-tight">
                            Welcome Back, {userName}! 👋
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                            Ready for your next adventure? Discover amazing destinations and create unforgettable memories!
                        </p>
                    </motion.div>

                    <div className="mb-10">
                        <form onSubmit={handleSearchSubmit} className="relative flex gap-2">
                            <Button
                                type="button"
                                onClick={() => setSearchMode(searchMode === 'place' ? 'chat' : 'place')}
                                className={`px-4 py-7 rounded-2xl transition-all duration-300 ${
                                    searchMode === 'place' 
                                        ? 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700' 
                                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                                }`}
                                title={searchMode === 'place' ? 'Switch to Chat Mode' : 'Switch to Place Search'}
                            >
                                {searchMode === 'place' ? <MapPin className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                            </Button>
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    {searchMode === 'place' ? (
                                        <Search className="h-5 w-5 text-neutral-500" />
                                    ) : (
                                        <MessageSquare className="h-5 w-5 text-neutral-500" />
                                    )}
                                </div>
                                <Input
                                    type="text"
                                    placeholder=""
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 pr-4 py-7 text-lg bg-neutral-100/60 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 rounded-2xl backdrop-blur-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-500 transition-all duration-300"
                                />
                                {
                                    !searchQuery && (
                                        <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none text-neutral-500">
                                            {searchMode === 'place' ? (
                                                <TypeAnimation
                                                    sequence={typewriterSequence}
                                                    wrapper="span"
                                                    speed={50}
                                                    repeat={Infinity}
                                                    className="text-lg"
                                                />
                                            ) : (
                                                <span className="text-lg">ask about destinations, tips, bookings...</span>
                                            )}
                                        </div>
                                    )
                                }
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={!searchQuery.trim()}
                                className={`px-8 py-7 rounded-2xl transition-all duration-300 ${
                                    searchMode === 'place'
                                        ? 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700'
                                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                                }`}
                            >
                                {searchMode === 'place' ? <Search className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                            </Button>
                        </form>
                        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                            <div className={`w-2 h-2 rounded-full ${searchMode === 'place' ? 'bg-teal-500' : 'bg-purple-500'} animate-pulse`} />
                            <span>{searchMode === 'place' ? 'Place Search Mode' : 'Chat Mode'} - Click the icon to switch</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-8">
                        {
                            featureCards.slice(0, 8).map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link href={feature.link}>
                                        <Card className="group cursor-pointer relative bg-neutral-50/40 dark:bg-neutral-900/40 border-neutral-300/50 dark:border-neutral-800/50 hover:bg-neutral-100/40 dark:hover:bg-neutral-800/40 hover:border-neutral-400 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 overflow-hidden h-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/0 dark:from-neutral-800/0 to-neutral-300/0 dark:to-neutral-900/0 group-hover:from-neutral-200/10 dark:group-hover:from-neutral-800/10 group-hover:to-neutral-300/20 dark:group-hover:to-neutral-900/20 transition-all duration-300" />

                                            <CardContent className="p-4 relative z-10">
                                                <div className="flex items-start gap-3">
                                                    <div className={`text-2xl p-2 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                        {feature.icon}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold mb-1 text-neutral-800 dark:text-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors truncate">
                                                            {feature.title}
                                                        </h3>
                                                        <p className="text-xs text-neutral-600 dark:text-neutral-500 line-clamp-2">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-neutral-500 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 relative items-center justify-center p-8">
                    <AnimatePresence>
                        {
                            motivationalMsg && !showChat && showMotivation && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-10 right-10 z-20 max-w-xs"
                                >
                                    <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 dark:from-teal-900/30 dark:via-emerald-900/30 dark:to-cyan-900/30 backdrop-blur-xl border-2 border-teal-300/50 dark:border-teal-500/30 rounded-2xl p-4 shadow-2xl shadow-teal-500/20">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                ✨
                                            </div>
                                            <p className="text-sm text-neutral-800 dark:text-teal-100 leading-relaxed font-medium">
                                                {motivationalMsg}
                                            </p>
                                            <button
                                                onClick={() => setShowMotivation(false)}
                                                className="text-neutral-600 dark:text-teal-300 hover:text-neutral-900 dark:hover:text-white text-xl leading-none"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rotate-45 absolute -bottom-2 right-8 border-r-2 border-b-2 border-teal-300/50 dark:border-teal-500/30" />
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full h-full max-h-[800px] relative rounded-3xl overflow-hidden">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Sheet open={showChat} onOpenChange={setShowChat}>
                <SheetContent
                    side="right"
                    className="w-full h-full sm:w-[80vw] md:w-[50vw] sm:max-w-[80vw] overflow-y-auto bg-white/95 dark:bg-neutral-950/95 border-neutral-300 dark:border-neutral-800 backdrop-blur-xl p-0 flex flex-col"
                    style={{ maxWidth: '50vw' }}
                >
                    <SheetHeader className="px-6 pt-6 pb-4 border-b border-neutral-300 dark:border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                                🗺️
                            </div>
                            <div>
                                <SheetTitle className="text-neutral-900 dark:text-white text-lg">TripCrate Travel Assistant</SheetTitle>
                                <SheetDescription className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    Ask me about destinations, bookings, or travel tips
                                </SheetDescription>
                            </div>
                        </div>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                        {
                            chatMessages.length === 0 && (
                                <div className="h-full flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 via-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                                            <Sparkles className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-neutral-900 dark:text-white font-semibold mb-2">Hi! I&apos;m your Travel Assistant 🌍</h3>
                                            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm">
                                                I&apos;m here to help you explore destinations, plan trips, and discover the best travel experiences!
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-neutral-500 text-xs">Try asking:</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <Badge
                                                    variant="outline"
                                                    className="bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"
                                                    onClick={() => setUserInput("Best weekend trips near Delhi?")}
                                                >
                                                    Weekend trips
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"
                                                    onClick={() => setUserInput("Tell me about Triund trek")}
                                                >
                                                    Triund trek
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"
                                                    onClick={() => setUserInput("Budget-friendly trips?")}
                                                >
                                                    Budget trips
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            chatMessages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-2"
                                >
                                    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                                            ? 'bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white'
                                            : 'bg-neutral-100 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-800'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.content}</p>
                                        </div>
                                    </div>
                                    {
                                        msg.links && msg.links.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pl-4">
                                                {
                                                    msg.links.map((link, linkIdx) => (
                                                        <Link key={linkIdx} href={link}>
                                                            <Badge
                                                                variant="outline"
                                                                className="bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 border-teal-300 dark:border-teal-500/30 cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-500/30"
                                                            >
                                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                                {link.split('/').filter(Boolean).pop()}
                                                            </Badge>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </motion.div>
                            ))
                        }
                        {
                            isSending && (
                                <div className="flex justify-start">
                                    <div className="bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 rounded-2xl px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="px-6 py-4 border-t border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                        <div className="flex gap-2">
                            <Input
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask about destinations, tips, bookings..."
                                className="flex-1 bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 focus:border-teal-500 dark:focus:border-teal-500"
                                disabled={isSending}
                            />
                            <Button
                                onClick={handleSendMessage}
                                disabled={isSending || !userInput.trim()}
                                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 hover:from-teal-700 hover:via-emerald-700 hover:to-cyan-700"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}