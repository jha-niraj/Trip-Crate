"use client"

import { motion } from "framer-motion"
import {
    TrendingUp, Users, DollarSign, Award, CheckCircle2, ArrowRight
} from "lucide-react"
import Image from "next/image"

const benefits = [
    {
        icon: TrendingUp,
        title: "Grow Your Audience",
        description: "Get featured on our platform and reach thousands of students planning their next trip.",
    },
    {
        icon: DollarSign,
        title: "Earn Commissions",
        description: "Make 20% on every booking from your guides. The more you create, the more you earn.",
    },
    {
        icon: Award,
        title: "Build Your Brand",
        description: "Become the go-to voice for student travel. Your content, your style, your impact.",
    },
]

const stats = [
    { value: "1000+", label: "Active Students" },
    { value: "₹25K", label: "Avg Creator Earnings" },
    { value: "50+", label: "Top Creators" },
    { value: "4.8★", label: "Creator Rating" },
]

export function InfluencerSection() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-6">
                        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">For Creators</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Turn Your Travel <span className="text-purple-600 dark:text-purple-400">Passion</span> Into Profit
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Create authentic guides. Build your audience. Earn real money. All while helping students discover incredible places.
                    </p>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                                alt="Content creator"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                {
                                    stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-4 text-center"
                                        >
                                            <p className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                            Why Creators Love TripCrate
                        </h3>

                        <div className="space-y-6 mb-8">
                            {
                                benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <benefit.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg transition-all">
                            <span>Become a Creator</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                        How the Charter Works
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-600 dark:text-purple-400">
                                1
                            </div>
                            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Create Content</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Write guides, share photos, document your trips
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-pink-600 dark:text-pink-400">
                                2
                            </div>
                            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Get Featured</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Your content appears on destination pages
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-red-600 dark:text-red-400">
                                3
                            </div>
                            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Students Book</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Students use your guides to plan trips
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600 dark:text-orange-400">
                                4
                            </div>
                            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">You Earn 20%</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Get commission on every booking
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    Example: You share a Triund guide
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    A student books a ₹2,000 trip using your guide → You earn ₹400. Simple as that.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    The more you create, the more you earn. No cap. No limits.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}