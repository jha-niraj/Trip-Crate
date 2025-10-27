"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-column"

const testimonials: Testimonial[] = [
	{
		quote: "TripCrate saved me so much money on my Goa trip! Found the perfect hostel and the cheapest bike rental. Plus, earned coins for my next adventure!",
		name: "Priya Sharma",
		role: "Student, Delhi University",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
	},
	{
		quote: "Finally, travel info I can actually trust! Real reviews from real students. No fake sponsored content. The day itineraries are chef's kiss!",
		name: "Rahul Verma",
		role: "Student, IIT Bombay",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
	},
	{
		quote: "The student discounts are insane! Got 30% off at this cafe in Manali because someone posted about it. TripCrate literally pays for itself.",
		name: "Ananya Gupta",
		role: "Student, SRCC",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
	},
	{
		quote: "Made my first solo trip happen with TripCrate. The community is so helpful and the coins system is genius. Already planning my next trip!",
		name: "Arjun Mehta",
		role: "Student, NIT Trichy",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
	},
	{
		quote: "Best travel app for students, hands down. Found a carpool to Rishikesh, saved ₹800, and made new friends. This is how travel should be.",
		name: "Sneha Reddy",
		role: "Student, BITS Pilani",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
	},
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 5).concat(testimonials.slice(0, 1))

export function TestimonialsSection() {
	return (
		<section className="py-20 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-950 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Students <span className="text-teal-600 dark:text-teal-400">Love</span> TripCrate
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						Don't just take our word for it. Here's what real students are saying.
					</p>
				</motion.div>

				<div className="relative">
					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[740px] overflow-hidden"
						style={{
							maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
						}}
					>
						<TestimonialsColumn testimonials={firstColumn} duration={15} />
						<TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:flex" />
						<TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:flex" />
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-800">
						<span className="text-2xl">💚</span>
						<span className="font-semibold text-gray-900 dark:text-white">Join 1000+ Happy Travelers</span>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
