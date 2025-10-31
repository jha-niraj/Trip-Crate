"use client"

import { motion } from "framer-motion"
import {
    CheckCircle2, Sparkles, Heart, Users
} from "lucide-react"
import Image from "next/image"

export function SolutionSection() {
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 mb-6">
                        <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">The Solution</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Travel Made <span className="text-teal-600 dark:text-teal-400">Honest</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Trips designed by students, for students. No BS. Just real prices and real experiences.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
                    >
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                                alt="Student exploring"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <Users className="w-8 h-8 text-white mb-2" />
                                <p className="text-white font-bold text-lg">By Students</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Real Student Experiences</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Every destination, hotel, and cafe is tried and tested by students from WPU, LPU, PU, and HP University.
                        </p>
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="font-semibold">100% Student-Verified</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
                    >
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=600&q=80"
                                alt="Budget planning"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <Sparkles className="w-8 h-8 text-white mb-2" />
                                <p className="text-white font-bold text-lg">Transparent</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">No Hidden Costs</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            What you see is what you pay. We show you the exact breakdown — hotels, food, transport, everything.
                        </p>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Hotel</span>
                                <span className="font-semibold text-gray-900 dark:text-white">₹1,200</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Food</span>
                                <span className="font-semibold text-gray-900 dark:text-white">₹800</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Transport</span>
                                <span className="font-semibold text-gray-900 dark:text-white">₹500</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
                            <div className="flex justify-between font-bold text-teal-600 dark:text-teal-400">
                                <span>Total</span>
                                <span>₹2,500</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
                    >
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                                alt="Student community"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <Heart className="w-8 h-8 text-white mb-2" />
                                <p className="text-white font-bold text-lg">Community</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Built for You</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Connect with fellow travelers, share experiences, and get tips from students who've actually been there.
                        </p>
                        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="font-semibold">Active Student Community</span>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-12 text-black dark:text-white overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">
                            Your Next Adventure Starts at ₹1,800
                        </h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Triund, Kasol, Manali, Dharamshala — all within your budget. No dreams. Just trips.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Student Pricing</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Verified Stays</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Real Reviews</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}