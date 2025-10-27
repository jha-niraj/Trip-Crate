"use client"

import { useEffect, useRef, useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { FormWaitlist } from "./form-waitlist"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { MapPin, Map, Utensils, Pin, Sparkles, Users } from "lucide-react"
import { inputVariants } from "@/components/ui/input"

const DURATION = 0.3
const DELAY = DURATION
const EASE_OUT = "easeOut"
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const
const SPRING = {
	type: "spring" as const,
	stiffness: 60,
	damping: 10,
	mass: 0.8,
}

export default function TripCrateLanding() {
	const [isOpen, setIsOpen] = useState(false)
	const isInitialRender = useRef(true)

	useEffect(() => {
		return () => {
			isInitialRender.current = false
		}
	}, [isOpen])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false)
			}
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	return (
		<div className="w-full bg-background text-foreground">
			{/* Hero Section */}
			<section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 pointer-events-none" />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative z-10 text-center max-w-4xl"
				>
					<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic mb-6 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
						College Wallet Empty?
					</h1>
					<p className="text-xl md:text-2xl font-medium mb-8 text-foreground/80 text-balance">
						Trips Don't Have To Be.
					</p>
					<p className="text-lg md:text-xl mb-12 text-foreground/70 max-w-2xl mx-auto text-balance">
						Yeah, exams suck. But ditching Punjab for Manali on a bus-ticket budget? That's… actually doable. Pick your
						uni, skip the fake influencer reels, and get real plans: hotels, bikes, food, discounts — all curated by
						students who've actually been there.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative z-10 flex flex-col items-center gap-6 mt-12"
				>
					<div className="flex flex-col gap-4 w-full max-w-xl">
						<FormWaitlist
							input={(props: React.ComponentProps<"input">) => (
								<input
									autoCapitalize="off"
									autoComplete="email"
									placeholder="Enter your email"
									className={inputVariants()}
									{...props}
								/>
							)}
							submit={(props: React.ComponentProps<"button">) => (
								<button
									className={buttonVariants({
										variant: "iconButton",
										size: "icon-xl",
									})}
									{...props}
								>
									<ArrowRightIcon className="w-4 h-4 text-current" />
								</button>
							)}
						/>
						<p className="text-sm md:text-base text-center text-foreground/60">
							Join 1000+ students planning their next adventure
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
				>
					<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</section>

			{/* Problem Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-secondary/20 to-accent/10">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="font-serif text-4xl md:text-5xl italic mb-8">Travel Sites Are Lying to You.</h2>
						<div className="space-y-6 text-lg md:text-xl text-foreground/80">
							<p className="font-medium text-foreground">"Weekend in Goa for ₹2,000!"</p>
							<p className="text-foreground/70">Reality: ₹8,000 + "hidden fees" + hostel that smells like regret.</p>
							<p className="text-foreground/70">Meanwhile, you're eating Maggi for the 47th day.</p>
							<p className="text-xl font-semibold text-foreground mt-8">We're not here to sell dreams.</p>
							<p className="text-foreground/70">We're here to sell doable trips. Because someone has to.</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Solution Section */}
			<section className="py-20 md:py-32 px-4 md:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="font-serif text-4xl md:text-5xl italic mb-8">
							Student-Curated. Student-Approved. Student-Survivable.
						</h2>
						<div className="space-y-6 text-lg md:text-xl text-foreground/80">
							<p className="text-foreground/70">Every guide is written by a real student who:</p>
							<ul className="space-y-4 ml-6">
								<li className="flex gap-3">
									<span className="text-primary font-bold">✓</span>
									<span>Took the 3 a.m. bus</span>
								</li>
								<li className="flex gap-3">
									<span className="text-primary font-bold">✓</span>
									<span>Bargained with the dhaba uncle</span>
								</li>
								<li className="flex gap-3">
									<span className="text-primary font-bold">✓</span>
									<span>Found a cottage for ₹800/night</span>
								</li>
								<li className="flex gap-3">
									<span className="text-primary font-bold">✓</span>
									<span>Lived to post the reel</span>
								</li>
							</ul>
							<p className="text-foreground/70 mt-8">No corporate fluff. No "luxury on a budget" nonsense.</p>
							<p className="text-foreground/70">Just: "Here's what actually works."</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* What We Provide Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="font-serif text-4xl md:text-5xl italic mb-4 text-center"
					>
						Everything You Need for the Perfect Trip
					</motion.h2>
					<p className="text-center text-foreground/70 mb-16 text-lg">We handle the planning. You handle the fun.</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								icon: MapPin,
								title: "Curated Places",
								desc: "Hidden gems, popular spots, and everything in between — all verified by students.",
							},
							{
								icon: Map,
								title: "Hotels & Stays",
								desc: "Budget hostels to cozy cottages. Real prices. Real reviews. No surprises.",
							},
							{
								icon: Utensils,
								title: "Food & Dining",
								desc: "Where to eat without emptying your wallet. Local favorites + student-approved spots.",
							},
							{
								icon: Pin,
								title: "Nearby Things",
								desc: "Activities, treks, cafes, viewpoints — everything within reach from your base.",
							},
							{
								icon: Sparkles,
								title: "Itineraries",
								desc: "Day-by-day plans created by students who've been there. Copy-paste ready.",
							},
							{
								icon: Users,
								title: "Real Reviews",
								desc: "Honest feedback from real travelers. No fake ratings. No corporate BS.",
							},
						].map((item, idx) => {
							const Icon = item.icon
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: idx * 0.1 }}
									viewport={{ once: true }}
									className="p-6 md:p-8 border border-border rounded-2xl bg-white/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all group"
								>
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors mb-4">
										<Icon className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>
									<p className="text-foreground/70">{item.desc}</p>
								</motion.div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Recently Added Places Section */}
			<section className="py-20 md:py-32 px-4 md:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="font-serif text-4xl md:text-5xl italic mb-4 text-center"
					>
						Recently Added Places
					</motion.h2>
					<p className="text-center text-foreground/70 mb-16 text-lg">
						Fresh guides from students exploring new destinations
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								place: "Triund Trek, Dharamshala",
								author: "Priya",
								college: "WPU",
								budget: "₹2,500",
								days: "2 Days",
								highlights: "Trek, camping, sunrise views",
							},
							{
								place: "Manali Old Town",
								author: "Arjun",
								college: "LPU",
								budget: "₹3,000",
								days: "3 Days",
								highlights: "Cafes, shopping, nightlife",
							},
							{
								place: "Mandi Lake Circuit",
								author: "Simran",
								college: "WPU",
								budget: "₹1,800",
								days: "1 Day",
								highlights: "Boating, local food, temples",
							},
							{
								place: "Kasol Backpacker Hub",
								author: "Rohan",
								college: "PU",
								budget: "₹2,200",
								days: "2 Days",
								highlights: "Hostels, parties, nature",
							},
							{
								place: "Shimla Mall Road",
								author: "Neha",
								college: "HP University",
								budget: "₹2,800",
								days: "2 Days",
								highlights: "Shopping, cafes, views",
							},
							{
								place: "Narkanda Skiing",
								author: "Vikram",
								college: "LPU",
								budget: "₹3,500",
								days: "2 Days",
								highlights: "Skiing, adventure, snow",
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="p-6 border border-border rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 hover:shadow-lg transition-all group cursor-pointer"
							>
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
											{item.place}
										</h3>
										<p className="text-sm text-foreground/60">
											by {item.author} • {item.college}
										</p>
									</div>
									<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
										{item.days}
									</span>
								</div>
								<div className="space-y-2 mb-4">
									<p className="text-sm text-foreground/70">
										<span className="font-semibold">Budget:</span> {item.budget}
									</p>
									<p className="text-sm text-foreground/70">
										<span className="font-semibold">Highlights:</span> {item.highlights}
									</p>
								</div>
								<Button variant="outline" className="w-full text-sm bg-transparent">
									View Full Guide
								</Button>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-secondary/20 to-accent/10">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="font-serif text-4xl md:text-5xl italic mb-16 text-center"
					>
						What You Actually Need
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								title: "Uni-Onboarding",
								desc: 'Type "WPU" → see Manali first. Not Kerala. Logic.',
							},
							{
								title: "Real Discounts",
								desc: "15% off cottages, ₹200 meals — we begged, you save.",
							},
							{
								title: "Transport Options",
								desc: "Bus (₹500), Bike (₹1,000), Car (split 4 ways) — pick your vibe.",
							},
							{
								title: "Curated Itineraries",
								desc: '"2 Days in Mandi on ₹3,000" — tested, not theorized.',
							},
							{
								title: "UGC Charter",
								desc: "Visit, document, submit → earn 20% of bookings. Yes, you get paid.",
							},
							{
								title: "Real Student Voices",
								desc: "No fake reviews. Just honest takes from people like you.",
							},
						].map((feature, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="p-6 md:p-8 border border-border/50 rounded-2xl bg-white/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
							>
								<h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
								<p className="text-foreground/70">{feature.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Influencer Welcome Section */}
			<section className="py-20 md:py-32 px-4 md:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="font-serif text-4xl md:text-5xl italic mb-6">
							Influencers, Content Creators, Travel Enthusiasts
						</h2>
						<p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
							We're welcoming everyone who's making real effort to create the best travel experiences for students and
							travelers.
						</p>
						<div className="space-y-6 text-lg text-foreground/70 mb-12">
							<p>
								<span className="font-semibold text-foreground">Your content matters.</span> Whether you're a
								micro-influencer with 5K followers or a travel vlogger with 500K, we want to feature your authentic
								guides and experiences.
							</p>
							<p>
								<span className="font-semibold text-foreground">Get paid for your passion.</span> Earn commissions on
								every booking made through your guides. No minimum follower count. No gatekeeping.
							</p>
							<p>
								<span className="font-semibold text-foreground">Build your audience here.</span> Reach students actively
								planning trips. Real engagement. Real conversions.
							</p>
						</div>
						<Button className="px-8 py-6 text-lg" shine>
							Join as a Creator
						</Button>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="font-serif text-4xl md:text-5xl italic mb-16 text-center"
					>
						Plan a Trip in 60 Seconds
					</motion.h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ step: "1", title: "Pick Your College", desc: "We know where you are." },
							{ step: "2", title: "Choose Your Vibe", desc: "Weekend? Solo? Squad?" },
							{ step: "3", title: "Book or Wing It", desc: "Links, codes, maps — done." },
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-serif text-2xl mb-4 shadow-lg">
									{item.step}
								</div>
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-foreground/70">{item.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-secondary/20 to-accent/10">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="font-serif text-4xl md:text-5xl italic mb-4 text-center"
					>
						Don't Trust Us.
					</motion.h2>
					<p className="text-center text-foreground/70 mb-16 text-lg">Trust Them.</p>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								quote: "Found a ₹600 stay in McLeod Ganj. Thought it was a scam. It wasn't.",
								author: "Rohan",
								college: "WPU CSE",
							},
							{
								quote: "Rented a bike for ₹900. Rode to Triund. Came back alive. 10/10.",
								author: "Simran",
								college: "LPU BBA",
							},
							{
								quote: "Finally, a site that doesn't treat students like walking ATMs.",
								author: "Anonymous",
								college: "But grateful",
							},
						].map((testimonial, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="p-6 md:p-8 border border-border/50 rounded-2xl bg-white/50 backdrop-blur-sm"
							>
								<p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
								<p className="font-semibold">— {testimonial.author}</p>
								<p className="text-sm text-foreground/60">{testimonial.college}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Charter Section */}
			<section className="py-20 md:py-32 px-4 md:px-8">
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
			<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
				<div className="max-w-7xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="font-serif text-4xl md:text-5xl italic mb-6">Stop Scrolling. Start Going.</h2>
						<p className="text-lg md:text-xl text-foreground/80 mb-12">
							Your next trip isn't on Instagram. It's one click away. And it won't bankrupt you.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="px-8 py-6 text-lg" shine>
								I'm from WPU / LPU
							</Button>
							<Button variant="outline" className="px-8 py-6 text-lg bg-white/50">
								I'm from Somewhere Else
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-4 md:px-8 border-t border-border/50 text-center text-foreground/60 bg-gradient-to-r from-secondary/5 to-accent/5">
				<p className="mb-2">Made by students, for students.</p>
				<p className="mb-4">No investors. No BS. Just trips.</p>
				<p className="text-sm">© 2025 Student Trips — Punjab's worst-kept secret.</p>
			</footer>
		</div>
	)
}