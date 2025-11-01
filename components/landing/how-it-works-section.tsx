"use client"

import { motion } from "framer-motion"

export function HowItWorksSection() {
	return (
		<section id="how-it-works" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white via-teal-50/30 to-white dark:from-neutral-950 dark:via-teal-950/10 dark:to-neutral-950">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="inline-block mb-6"
					>
						<span className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-sm font-semibold backdrop-blur-sm">
							🎬 See It In Action
						</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						How{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
							TripCrate
						</span>
						{" "}Works
					</h2>
					<p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
						Watch this quick video to see how easy it is to plan your next adventure with TripCrate. 
						From discovering destinations to booking your trip - all in one place.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="relative max-w-5xl mx-auto"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />
					
					<div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
						<div className="aspect-video w-full">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/cWDJoK8zw58"
								title="How TripCrate Works"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>

					<div className="absolute -top-10 -left-10 w-20 h-20 bg-teal-500/30 rounded-full blur-2xl animate-pulse" />
					<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-20 grid md:grid-cols-3 gap-8"
				>
					{
						[
							{
								icon: "🎯",
								title: "Simple & Quick",
								description: "Plan your entire trip in under 5 minutes with our intuitive interface"
							},
							{
								icon: "💰",
								title: "Student Discounts",
								description: "Exclusive deals on hotels, transport, and activities for students"
							},
							{
								icon: "🗺️",
								title: "Curated Experiences",
								description: "Handpicked destinations and itineraries perfect for college trips"
							}
						].map((feature, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
								viewport={{ once: true }}
								className="text-center group"
							>
								<div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
									{feature.title}
								</h3>
								<p className="text-foreground/70 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))
					}
				</motion.div>
			</div>
		</section>
	)
}