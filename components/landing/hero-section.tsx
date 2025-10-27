"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Users, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Loader2, Flame } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { joinWaitlist } from "@/actions/waitlist.action"
import { getWaitlistCount } from "@/actions/get-waitlist-count.action"
import Image from "next/image"

export function HeroSection() {
	const [email, setEmail] = useState("")
	const [collegeName, setCollegeName] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [titleNumber, setTitleNumber] = useState(0)
	const [waitlistCount, setWaitlistCount] = useState(0)
	
	const titles = useMemo(
		() => ["Triund", "Kasol", "Manali", "Shimla", "Dharamshala"],
		[]
	)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (titleNumber === titles.length - 1) {
				setTitleNumber(0)
			} else {
				setTitleNumber(titleNumber + 1)
			}
		}, 2000)
		return () => clearTimeout(timeoutId)
	}, [titleNumber, titles])

	// Fetch waitlist count on mount
	useEffect(() => {
		const fetchCount = async () => {
			const count = await getWaitlistCount()
			setWaitlistCount(count)
		}
		fetchCount()
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!email) {
			toast.error("Please enter your email address")
			return
		}

		setIsLoading(true)

		try {
			const result = await joinWaitlist(email, collegeName)
			
			if (result.success) {
				toast.success(result.data || "Successfully joined the waitlist!")
				setEmail("")
				setCollegeName("")
				// Refresh count after successful join
				const newCount = await getWaitlistCount()
				setWaitlistCount(newCount)
			} else {
				toast.error(result.message || "Something went wrong")
			}
		} catch (error) {
            console.log("Failed to join waitlist: " + error);
			toast.error("Failed to join waitlist. Please try again.")
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
					alt="Mountain background"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4">
				<div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col min-h-screen">
					
					{/* Animated Title */}
					<div className="flex gap-6 flex-col items-center">
                        <div className="flex gap-4 justify-center items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30">
								<Sparkles className="w-4 h-4 text-teal-400" />
								<span className="text-sm font-semibold text-teal-300">Launch Special - Join Early</span>
							</div>
						</motion.div>

						{/* Waitlist Counter */}
						{waitlistCount > 0 && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30"
							>
								<Flame className="w-4 h-4 text-orange-400 animate-pulse" />
								<div className="flex items-baseline gap-1.5">
									<span className="text-2xl font-bold text-orange-300 tabular-nums">
										{waitlistCount.toLocaleString()}
									</span>
									<span className="text-sm font-semibold text-orange-300/90">
										{waitlistCount === 1 ? 'student' : 'students'} joined
									</span>
								</div>
								<Flame className="w-4 h-4 text-orange-400 animate-pulse" />
							</motion.div>
						)}
                        </div>

						<h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl tracking-tighter text-center font-bold">
							<span className="text-white">Weekend Trips to</span>
							<span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
								&nbsp;
								{titles.map((title, index) => (
									<motion.span
										key={index}
										className="absolute font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400"
										initial={{ opacity: 0, y: "-100" }}
										transition={{ type: "spring", stiffness: 50 }}
										animate={
											titleNumber === index
												? {
														y: 0,
														opacity: 1,
												  }
												: {
														y: titleNumber > index ? -150 : 150,
														opacity: 0,
												  }
										}
									>
										{title}
									</motion.span>
								))}
							</span>
							<span className="text-white">Starting at ₹1,800</span>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center"
						>
							Stop doom-scrolling Instagram reels. Start going places. Real trips. Real budgets. 
							Built by students, for students. Zero BS.
						</motion.p>
					</div>

					{/* Waitlist Form */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="w-full max-w-2xl"
					>
						<div className="w-full bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
							<form onSubmit={handleSubmit} className="w-full space-y-4">
								<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="relative group w-full">
										<Input
											type="email"
											placeholder="Enter your college email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full h-14 text-base bg-black/50 border-2 border-white/20 hover:border-teal-400/50 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20 rounded-2xl shadow-lg transition-all duration-300 placeholder:text-gray-400 text-white font-medium px-6"
											disabled={isLoading}
										/>
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
									</div>
									<div className="relative group w-full">
										<Input
											type="text"
											placeholder="Your college name (optional)"
											value={collegeName}
											onChange={(e) => setCollegeName(e.target.value)}
											className="w-full h-14 text-base bg-black/50 border-2 border-white/20 hover:border-teal-400/50 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20 rounded-2xl shadow-lg transition-all duration-300 placeholder:text-gray-400 text-white font-medium px-6"
											disabled={isLoading}
										/>
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
									</div>
								</div>

								<Button
									type="submit"
									disabled={isLoading}
									className="w-full h-14 text-lg font-bold bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-size-200 hover:bg-pos-100 shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] transition-all duration-500 rounded-2xl group relative overflow-hidden"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<span className="relative z-10 flex items-center justify-center">
										{isLoading ? (
											<>
												<Loader2 className="w-5 h-5 mr-2 animate-spin" />
												Joining Waitlist...
											</>
										) : (
											<>
												Join the Waitlist
												<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
											</>
										)}
									</span>
								</Button>
							</form>

							<div className="flex items-center justify-center mt-6 gap-2">
								<div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
								<p className="text-center text-sm text-gray-400 font-medium">
									Be the first to know when we launch
								</p>
								<div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
							</div>
						</div>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex flex-wrap justify-center gap-4 md:gap-6"
					>
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
					</motion.div>

					{/* Trust Badges */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
					>
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
					</motion.div>
				</div>
			</div>
		</div>
	)
}
