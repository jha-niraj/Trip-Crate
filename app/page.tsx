"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/navbar"
import Footer from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { DestinationsCarousel } from "@/components/landing/destinations-carousel"
import { CurrencySection } from "@/components/landing/currency-section"
import { InfluencerSection } from "@/components/landing/influencer-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function TripCrateLanding() {
	return (
		<div className="w-full bg-background text-foreground">
			<Header />
			
			{/* New Modern Hero Section */}
			<HeroSection />

			{/* New Problem Section with Images */}
			<ProblemSection />

			{/* New Solution Section with Images */}
			<SolutionSection />

			{/* New Features Section with Hover Effects */}
			<FeaturesSection />

			{/* New Destinations Carousel */}
			<DestinationsCarousel />

			{/* New Currency/Rewards Section */}
			<CurrencySection />

			{/* New Influencer/Creator Section */}
			<InfluencerSection />

			{/* New Testimonials Section */}
			<TestimonialsSection />

			{/* How It Works Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-950">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold mb-4 text-center"
					>
						Plan a Trip in 60 Seconds
					</motion.h2>
					<p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
						No complicated forms. No endless scrolling. Just simple, straightforward trip planning.
					</p>

					<div className="grid md:grid-cols-3 gap-12 relative">
						{/* Connection Lines */}
						<div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

						{[
							{ 
								step: "1", 
								title: "Pick Your College", 
								desc: "Select your university and we'll show you nearby destinations optimized for weekend getaways.",
								icon: "🎓",
							},
							{ 
								step: "2", 
								title: "Choose Your Vibe", 
								desc: "Solo adventure? Squad trip? Weekend escape? We've got itineraries for every mood.",
								icon: "✨",
							},
							{ 
								step: "3", 
								title: "Book or Wing It", 
								desc: "Get instant access to hotels, transport, and food spots with exclusive student discounts.",
								icon: "🚀",
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.2 }}
								viewport={{ once: true }}
								className="relative text-center group"
							>
								{/* Glow Effect */}
								<div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
								
								<div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all">
									{/* Step Number Badge */}
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white font-bold text-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform">
										{item.step}
									</div>
									
									{/* Icon */}
									<div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
										{item.icon}
									</div>
									
									<h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">
										{item.title}
									</h3>
									<p className="text-foreground/70 leading-relaxed">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
						className="text-center mt-16"
					>
						<Button className="px-8 py-6 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-xl">
							Start Planning Now →
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Charter Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-white dark:bg-neutral-950">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="font-serif text-4xl md:text-5xl italic mb-6">Visit. Document. Earn. Repeat.</h2>
						<p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
							You're going to Tamil Nadu? Kerala? Shimla? Take photos, write the truth, submit via form. We verify →
							feature your guide → you get 20% of every booking.
						</p>
						<p className="text-lg text-foreground/70 mb-12">
							Turn your trip into pocket money. Or at least, free biryani.
						</p>
						<Button className="px-8 py-6 text-lg" shine>
							Become a Charter Explorer
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-cyan-500/10" />
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
				</div>

				<div className="max-w-5xl mx-auto text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="inline-block mb-6"
						>
							<span className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-sm font-semibold backdrop-blur-sm">
								🚀 Launch Special - Join Early
							</span>
						</motion.div>

						<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Stop Scrolling.
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mt-2">
								Start Going.
							</span>
						</h2>
						
						<p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
							Your next trip isn't on Instagram. It's one click away. And it won't bankrupt you. Real destinations, real budgets, real experiences.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button className="px-8 py-6 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all group">
								<span>Get Started - It's Free</span>
								<ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
								Watch Demo Video
							</Button>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="mt-12 flex items-center justify-center gap-8 text-sm text-foreground/60"
						>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-5 h-5 text-teal-600" />
								<span>No credit card required</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-5 h-5 text-teal-600" />
								<span>Cancel anytime</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-5 h-5 text-teal-600" />
								<span>Student verified</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}