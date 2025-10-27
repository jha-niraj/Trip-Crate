"use client"

import { motion } from "framer-motion"
import { Coins, MessageSquare, PenTool, Camera, Gift, TrendingUp, Zap } from "lucide-react"

const earnWays = [
	{
		icon: MessageSquare,
		title: "Post Comments",
		description: "Share your tips and experiences",
		reward: "+10 TC",
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		icon: PenTool,
		title: "Write Blogs",
		description: "Create detailed travel guides",
		reward: "+50 TC",
		gradient: "from-purple-500 to-pink-500",
	},
	{
		icon: Camera,
		title: "Document Trips",
		description: "Upload photos and videos",
		reward: "+25 TC",
		gradient: "from-orange-500 to-red-500",
	},
]

const redeemOptions = [
	{
		icon: Gift,
		title: "Hotel Discounts",
		description: "Use TC for up to 20% off on stays",
		color: "teal",
	},
	{
		icon: TrendingUp,
		title: "Transport Deals",
		description: "Get discounts on buses and bike rentals",
		color: "emerald",
	},
	{
		icon: Zap,
		title: "Food Vouchers",
		description: "Redeem at partner restaurants",
		color: "cyan",
	},
]

export function CurrencySection() {
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
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
						<Coins className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
						<span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">TripCrate Currency</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Get Paid to <span className="text-orange-600 dark:text-orange-400">Share</span> Your Adventures
					</h2>
					<p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						Earn TripCrate Coins (TC) every time you contribute to the community. Then spend them on your next trip.
					</p>
				</motion.div>

				{/* How to Earn */}
				<div className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
							💰 How to Earn TC
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Every comment, blog, and photo earns you real currency
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{earnWays.map((way, index) => (
							<motion.div
								key={way.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="group relative"
							>
								<div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
									<div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${way.gradient} shadow-lg mb-6`}>
										<way.icon className="w-8 h-8 text-white" />
									</div>
									
									<h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{way.title}</h4>
									<p className="text-gray-600 dark:text-gray-400 mb-4">{way.description}</p>
									
									<div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
										<span className="text-sm text-gray-600 dark:text-gray-400">You earn</span>
										<span className={`text-2xl font-bold bg-gradient-to-r ${way.gradient} bg-clip-text text-transparent`}>
											{way.reward}
										</span>
									</div>
								</div>

								{/* Floating coins animation */}
								<motion.div
									className="absolute -top-4 -right-4 text-4xl"
									animate={{ y: [0, -10, 0] }}
									transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
								>
									🪙
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>

				{/* How to Redeem */}
				<div className="mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
							🎁 How to Spend TC
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Turn your contributions into real savings on your next adventure
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{redeemOptions.map((option, index) => (
							<motion.div
								key={option.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
							>
								<div className={`w-16 h-16 rounded-2xl bg-${option.color}-100 dark:bg-${option.color}-900/30 flex items-center justify-center mb-6`}>
									<option.icon className={`w-8 h-8 text-${option.color}-600 dark:text-${option.color}-400`} />
								</div>
								
								<h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{option.title}</h4>
								<p className="text-gray-600 dark:text-gray-400">{option.description}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden"
				>
					<div className="absolute inset-0 opacity-20">
						<div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
						<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
					</div>
					
					<div className="relative z-10 text-center max-w-3xl mx-auto">
						<div className="text-6xl mb-6">💎</div>
						<h3 className="text-3xl md:text-5xl font-bold mb-6">
							The More You Share, The More You Save
						</h3>
						<p className="text-xl mb-8 opacity-90">
							1 TC = ₹1 in discounts. No limits. No expiry. Just pure value.
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
								<p className="text-4xl font-bold mb-2">500 TC</p>
								<p className="text-sm opacity-90">Average monthly earnings</p>
							</div>
							<div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
								<p className="text-4xl font-bold mb-2">20%</p>
								<p className="text-sm opacity-90">Max discount per booking</p>
							</div>
							<div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
								<p className="text-4xl font-bold mb-2">∞</p>
								<p className="text-sm opacity-90">Never expires</p>
							</div>
						</div>

						<button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
							Start Earning TC Now
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
