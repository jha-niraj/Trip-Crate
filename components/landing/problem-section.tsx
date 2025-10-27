"use client"

import { motion } from "framer-motion"
import { AlertCircle, XCircle, TrendingDown, Frown } from "lucide-react"
import Image from "next/image"

export function ProblemSection() {
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
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 mb-6">
						<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
						<span className="text-sm font-semibold text-red-700 dark:text-red-300">The Reality Check</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Travel Sites Are <span className="text-red-600 dark:text-red-400">Lying</span> to You
					</h2>
					<p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						Let's talk about the elephant in the room — and no, it's not your empty wallet.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
					>
						<div className="flex items-start gap-4 mb-6">
							<div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
								<span className="text-2xl">✨</span>
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">What They Promise</h3>
								<p className="text-green-600 dark:text-green-400 text-lg font-semibold">"Weekend in Goa for ₹2,000!"</p>
							</div>
						</div>
						<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
							<Image
								src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
								alt="Paradise beach"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<p className="absolute bottom-4 left-4 text-white font-semibold text-lg">✨ Dream Destination</p>
						</div>
						<p className="text-gray-600 dark:text-gray-400 italic">
							Looks amazing, right? Just click "Book Now" and... wait for it...
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-red-200 dark:border-red-800"
					>
						<div className="flex items-start gap-4 mb-6">
							<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
								<XCircle className="w-7 h-7 text-red-600" />
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">The Reality</h3>
								<p className="text-red-600 dark:text-red-400 text-lg font-semibold">₹8,000 + "hidden fees" + regret</p>
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
								<TrendingDown className="w-5 h-5 text-red-600 mt-1" />
								<div>
									<p className="font-semibold text-gray-900 dark:text-white">Hotel that smells like regret</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">+ ₹3,500 "service charge"</p>
								</div>
							</div>
							<div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
								<TrendingDown className="w-5 h-5 text-red-600 mt-1" />
								<div>
									<p className="font-semibold text-gray-900 dark:text-white">Food that costs more than rent</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">₹500 for a sandwich? Really?</p>
								</div>
							</div>
							<div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
								<Frown className="w-5 h-5 text-red-600 mt-1" />
								<div>
									<p className="font-semibold text-gray-900 dark:text-white">Eating Maggi for 47 days straight</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">Because your wallet went on vacation without you</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl"
				>
					<h3 className="text-3xl md:text-4xl font-bold mb-4">We're Not Here to Sell Dreams.</h3>
					<p className="text-xl mb-6 opacity-90">We're here to sell doable trips.</p>
					<p className="text-lg opacity-80">Because someone has to tell you the truth.</p>
				</motion.div>
			</div>
		</section>
	)
}
