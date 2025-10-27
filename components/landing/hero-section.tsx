"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"
import { FormWaitlist } from "@/app/form-waitlist"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HeroSection() {
	return (
		<ScrollExpandMedia
			mediaType="image"
			mediaSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
			bgImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
			title="College Wallet Empty?"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="mt-12 max-w-4xl mx-auto"
			>
				<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-white">
					Weekend Trips Starting at{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
						₹1,800
					</span>
				</h3>
				<p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
					Stop doom-scrolling Instagram reels. Start going places. Real trips. Real budgets. Zero BS.
				</p>

				<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
					<FormWaitlist
						input={(props) => (
							<Input
								{...props}
								placeholder="Enter your college email"
								className="h-12 pr-36 text-base bg-white dark:bg-gray-900"
							/>
						)}
						submit={(props) => (
							<Button
								{...props}
								className="h-10 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
							>
								Join Waitlist
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						)}
					/>
				</div>

				<div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
					<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
						<Users className="w-5 h-5 text-teal-400" />
						<span className="text-sm font-semibold text-white">1000+ Students</span>
					</div>
					<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
						<TrendingUp className="w-5 h-5 text-emerald-400" />
						<span className="text-sm font-semibold text-white">50+ Destinations</span>
					</div>
					<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
						<Sparkles className="w-5 h-5 text-yellow-400" />
						<span className="text-sm font-semibold text-white">Save ₹2000/trip</span>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
					<div className="flex items-center gap-2 justify-center md:justify-start">
						<CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
						<span className="text-sm text-gray-300">No credit card required</span>
					</div>
					<div className="flex items-center gap-2 justify-center md:justify-start">
						<CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
						<span className="text-sm text-gray-300">Student verified</span>
					</div>
					<div className="flex items-center gap-2 justify-center md:justify-start">
						<CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
						<span className="text-sm text-gray-300">Cancel anytime</span>
					</div>
				</div>
			</motion.div>
		</ScrollExpandMedia>
	)
}
