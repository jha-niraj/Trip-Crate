"use client"

import { motion } from "framer-motion"
import { Hotel, Bike, UtensilsCrossed, MapPin, Calendar, Percent } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
	{
		title: "Hotels & Stays",
		description: "Student-friendly accommodations verified by real travelers. Clean, safe, and wallet-friendly.",
		icon: Hotel,
	},
	{
		title: "Transport & Bikes",
		description: "Bus routes, bike rentals, and carpool options. Get there without breaking the bank.",
		icon: Bike,
	},
	{
		title: "Food & Dining",
		description: "Best local eats where students actually go. Real food, real prices, real recommendations.",
		icon: UtensilsCrossed,
	},
	{
		title: "Places to Visit",
		description: "Hidden gems and must-see spots. Curated by students who've explored every corner.",
		icon: MapPin,
	},
	{
		title: "Day Itineraries",
		description: "Ready-to-go plans that maximize fun and minimize costs. No guessing, just traveling.",
		icon: Calendar,
	},
	{
		title: "Real-Time Discounts",
		description: "Student discounts, group deals, and seasonal offers. Save more, travel more.",
		icon: Percent,
	},
]

const Feature = ({
	title,
	description,
	icon: Icon,
	index,
}: {
	title: string
	description: string
	icon: any
	index: number
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 border-neutral-200",
				(index === 0 || index === 3) && "lg:border-l dark:border-neutral-800 border-neutral-200",
				index < 3 && "lg:border-b dark:border-neutral-800 border-neutral-200"
			)}
		>
			{index < 3 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 3 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				<Icon className="w-10 h-10" />
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	)
}

export function FeaturesSection() {
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
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Everything You <span className="text-teal-600 dark:text-teal-400">Actually</span> Need
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						No fluff. No filler. Just the essentials to plan your perfect trip.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
					{features.map((feature, index) => (
						<Feature key={feature.title} {...feature} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
						All in one place. No jumping between 10 apps. No regrets.
					</p>
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-800">
						<span className="text-2xl">🎯</span>
						<span className="font-semibold text-gray-900 dark:text-white">One Platform. Endless Adventures.</span>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
