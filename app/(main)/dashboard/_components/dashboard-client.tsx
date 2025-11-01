"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
    Plane, Camera, MessageSquare, MessageCircle, Coins, 
    TrendingUp, Calendar, MapPin, Hotel, Clock, 
    CheckCircle2, AlertCircle, ArrowRight, Star,
    Sparkles, Trophy, Gift, Target
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface DashboardClientProps {
    user: {
        id: string
        name: string
        email: string
        image: string
        totalTrips: number
        totalPosts: number
        totalPhotos: number
        totalComments: number
        coinsEarned: number
        createdAt: Date
    }
    itineraries: any[]
    bookings: any[]
    earnings: any
}

export function DashboardClient({ user, itineraries, bookings, earnings }: DashboardClientProps) {
    const stats = [
        {
            label: "Total Trips",
            value: user.totalTrips,
            icon: <Plane className="h-5 w-5" />,
            gradient: "from-blue-500 to-cyan-500",
            bg: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
            border: "border-blue-200/50 dark:border-blue-800/30"
        },
        {
            label: "Posts Shared",
            value: user.totalPosts,
            icon: <MessageSquare className="h-5 w-5" />,
            gradient: "from-purple-500 to-pink-500",
            bg: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
            border: "border-purple-200/50 dark:border-purple-800/30"
        },
        {
            label: "Photos Uploaded",
            value: user.totalPhotos,
            icon: <Camera className="h-5 w-5" />,
            gradient: "from-emerald-500 to-teal-500",
            bg: "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
            border: "border-emerald-200/50 dark:border-emerald-800/30"
        },
        {
            label: "Comments",
            value: user.totalComments,
            icon: <MessageCircle className="h-5 w-5" />,
            gradient: "from-orange-500 to-red-500",
            bg: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
            border: "border-orange-200/50 dark:border-orange-800/30"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
                {/* Welcome Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                            Welcome back, {user.name.split(' ')[0]}! 👋
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                            Here's what's happening with your travel adventures
                        </p>
                    </div>
                    <Avatar className="h-16 w-16 border-4 border-white dark:border-neutral-800 shadow-xl hidden md:block">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xl font-bold">
                            {user.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                    </Avatar>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`bg-gradient-to-br ${stat.bg} border ${stat.border} hover:shadow-lg transition-all cursor-pointer group`}>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                                                {stat.label}
                                            </p>
                                            <p className={`text-3xl font-bold mt-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                                {stat.value}
                                            </p>
                                        </div>
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} text-white group-hover:scale-110 transition-transform`}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Coins Card - Prominent */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20 border-2 border-yellow-300/50 dark:border-yellow-700/30 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl shadow-lg">
                                        <Coins className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-amber-700 dark:text-amber-400 font-medium flex items-center gap-2">
                                            <Trophy className="h-4 w-4" />
                                            Total Coins Earned
                                        </p>
                                        <p className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mt-1">
                                            {user.coinsEarned}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right hidden md:block">
                                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-0 mb-2">
                                        <Sparkles className="h-3 w-3 mr-1" />
                                        Top Contributor
                                    </Badge>
                                    <p className="text-xs text-amber-600 dark:text-amber-400">
                                        Keep sharing to earn more!
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Upcoming Itineraries */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Card className="bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl border-neutral-200/50 dark:border-neutral-800/50">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-xl flex items-center gap-2">
                                            <MapPin className="h-5 w-5 text-teal-600" />
                                            Your Itineraries
                                        </CardTitle>
                                        <CardDescription>Upcoming and past adventures</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-teal-600">
                                        View All
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {itineraries.map((itinerary, index) => (
                                    <motion.div
                                        key={itinerary.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all cursor-pointer"
                                    >
                                        <div className="flex gap-4 p-4">
                                            <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={itinerary.image}
                                                    alt={itinerary.destination}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                {itinerary.status === 'upcoming' && (
                                                    <Badge className="absolute top-2 left-2 bg-green-500 text-white border-0 text-xs">
                                                        Upcoming
                                                    </Badge>
                                                )}
                                                {itinerary.status === 'completed' && (
                                                    <Badge className="absolute top-2 left-2 bg-blue-500 text-white border-0 text-xs">
                                                        Completed
                                                    </Badge>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                                                    {itinerary.destination}
                                                </h3>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 flex items-center gap-1">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {new Date(itinerary.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(itinerary.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                        {itinerary.activities} activities
                                                    </span>
                                                    <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                                                        ₹{itinerary.budget.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                
                                {itineraries.length === 0 && (
                                    <div className="text-center py-12">
                                        <MapPin className="h-12 w-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
                                        <p className="text-neutral-500 dark:text-neutral-400">No itineraries yet</p>
                                        <Button className="mt-4" variant="outline">
                                            Create Your First Itinerary
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Recent Bookings */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Card className="bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl border-neutral-200/50 dark:border-neutral-800/50">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-xl flex items-center gap-2">
                                            <Hotel className="h-5 w-5 text-purple-600" />
                                            Recent Bookings
                                        </CardTitle>
                                        <CardDescription>Hotels, flights & activities</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-purple-600">
                                        View All
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {bookings.map((booking, index) => (
                                    <motion.div
                                        key={booking.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all cursor-pointer"
                                    >
                                        <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={booking.image}
                                                alt={booking.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Badge variant="outline" className="text-xs capitalize">
                                                    {booking.type}
                                                </Badge>
                                                {booking.status === 'confirmed' && (
                                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                )}
                                                {booking.status === 'pending' && (
                                                    <Clock className="h-4 w-4 text-orange-500" />
                                                )}
                                            </div>
                                            <h4 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 truncate">
                                                {booking.name}
                                            </h4>
                                            <div className="flex items-center justify-between mt-1">
                                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                    {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                                                    ₹{booking.price.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                
                                {bookings.length === 0 && (
                                    <div className="text-center py-12">
                                        <Hotel className="h-12 w-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
                                        <p className="text-neutral-500 dark:text-neutral-400">No bookings yet</p>
                                        <Button className="mt-4" variant="outline">
                                            Explore Hotels & Flights
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Earnings & Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Card className="bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl border-neutral-200/50 dark:border-neutral-800/50">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-emerald-600" />
                                Earnings & Activity
                            </CardTitle>
                            <CardDescription>Track your contributions and rewards</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Monthly Breakdown */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                        <Target className="h-4 w-4 text-emerald-600" />
                                        Monthly Breakdown
                                    </h3>
                                    {earnings.monthlyBreakdown.map((month: any, index: number) => (
                                        <div key={index} className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                                    {month.month}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                                                    <Coins className="h-4 w-4" />
                                                    {month.coins}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400">
                                                <span>{month.posts} posts</span>
                                                <span>{month.photos} photos</span>
                                            </div>
                                            <Progress value={(month.coins / 600) * 100} className="h-2" />
                                        </div>
                                    ))}
                                </div>

                                {/* Recent Activities */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                        <Gift className="h-4 w-4 text-emerald-600" />
                                        Recent Activities
                                    </h3>
                                    <div className="space-y-3">
                                        {earnings.recentActivities.map((activity: any, index: number) => (
                                            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                <div>
                                                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                                        {activity.action}
                                                    </p>
                                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                                        {activity.date}
                                                    </p>
                                                </div>
                                                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0">
                                                    +{activity.coins} coins
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: "Plan Trip", icon: <MapPin />, color: "teal" },
                        { label: "Book Hotel", icon: <Hotel />, color: "purple" },
                        { label: "Share Photos", icon: <Camera />, color: "pink" },
                        { label: "Write Review", icon: <Star />, color: "amber" }
                    ].map((action, index) => (
                        <Button
                            key={action.label}
                            variant="outline"
                            className={`h-24 flex-col gap-2 hover:bg-${action.color}-50 dark:hover:bg-${action.color}-950/20 hover:border-${action.color}-300 dark:hover:border-${action.color}-700 transition-all`}
                        >
                            <div className={`p-2 rounded-full bg-gradient-to-r from-${action.color}-500 to-${action.color}-600 text-white`}>
                                {action.icon}
                            </div>
                            <span className="text-sm font-medium">{action.label}</span>
                        </Button>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
