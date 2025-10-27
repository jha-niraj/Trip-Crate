"use client"

import { motion } from "framer-motion"
import { Star, MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

const destinations = [
	{
		name: "Triund",
		location: "Dharamshala, HP",
		image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
		rating: 4.8,
		reviews: 342,
		budget: "₹1,800",
		duration: "2 Days",
		difficulty: "Easy Trek",
		highlights: ["Himalayan Views", "Camping", "Sunrise Trek"],
		gradient: "from-orange-500/80 to-pink-500/80",
	},
	{
		name: "Kasol",
		location: "Parvati Valley, HP",
		image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
		rating: 4.7,
		reviews: 521,
		budget: "₹2,500",
		duration: "3 Days",
		difficulty: "Relaxed",
		highlights: ["Café Culture", "Riverside Camps", "Israeli Vibes"],
		gradient: "from-green-500/80 to-teal-500/80",
	},
	{
		name: "Manali",
		location: "Kullu, HP",
		image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=80",
		rating: 4.9,
		reviews: 789,
		budget: "₹3,200",
		duration: "4 Days",
		difficulty: "Moderate",
		highlights: ["Rohtang Pass", "Solang Valley", "Old Manali"],
		gradient: "from-blue-500/80 to-purple-500/80",
	},
	{
		name: "Shimla",
		location: "Himachal Pradesh",
		image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80",
		rating: 4.6,
		reviews: 634,
		budget: "₹2,800",
		duration: "3 Days",
		difficulty: "Easy",
		highlights: ["Mall Road", "Jakhu Temple", "Colonial Charm"],
		gradient: "from-red-500/80 to-orange-500/80",
	},
	{
		name: "Narkanda",
		location: "Shimla, HP",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		rating: 4.5,
		reviews: 198,
		budget: "₹2,200",
		duration: "2 Days",
		difficulty: "Easy",
		highlights: ["Apple Orchards", "Skiing", "Hatu Peak"],
		gradient: "from-cyan-500/80 to-blue-500/80",
	},
	{
		name: "Dharamshala",
		location: "Kangra, HP",
		image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
		rating: 4.7,
		reviews: 456,
		budget: "₹2,400",
		duration: "3 Days",
		difficulty: "Easy",
		highlights: ["Tibetan Culture", "McLeod Ganj", "Cricket Stadium"],
		gradient: "from-yellow-500/80 to-red-500/80",
	},
]

export function DestinationsCarousel() {
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
						<MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
						<span className="text-sm font-semibold text-teal-700 dark:text-teal-300">Popular Destinations</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Where Students <span className="text-teal-600 dark:text-teal-400">Actually</span> Go
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						From Triund's sunrise views to Kasol's café culture — these are the trips happening every weekend.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-4">
							{destinations.map((destination, index) => (
								<CarouselItem key={destination.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ y: -8 }}
										className="group relative h-full"
									>
										<div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col">
											{/* Image */}
											<div className="relative h-64 overflow-hidden">
												<Image
													src={destination.image}
													alt={destination.name}
													fill
													className="object-cover group-hover:scale-110 transition-transform duration-500"
												/>
												<div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} to-transparent opacity-60`} />
												
												{/* Overlay content */}
												<div className="absolute top-4 right-4">
													<div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
														<Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
														<span className="font-bold text-gray-900 dark:text-white">{destination.rating}</span>
														<span className="text-sm text-gray-600 dark:text-gray-400">({destination.reviews})</span>
													</div>
												</div>
												
												<div className="absolute bottom-4 left-4 right-4">
													<h3 className="text-3xl font-bold text-white mb-1">{destination.name}</h3>
													<div className="flex items-center gap-2 text-white/90">
														<MapPin className="w-4 h-4" />
														<span className="text-sm">{destination.location}</span>
													</div>
												</div>
											</div>

											{/* Content */}
											<div className="p-6 flex-1 flex flex-col">
												<div className="flex flex-wrap gap-2 mb-4">
													{destination.highlights.map((highlight) => (
														<span
															key={highlight}
															className="px-3 py-1 text-xs font-semibold bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full"
														>
															{highlight}
														</span>
													))}
												</div>

												<div className="grid grid-cols-2 gap-4 mb-6">
													<div>
														<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
															<Calendar className="w-4 h-4" />
															<span className="text-sm">Duration</span>
														</div>
														<p className="font-bold text-gray-900 dark:text-white">{destination.duration}</p>
													</div>
													<div>
														<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
															<Users className="w-4 h-4" />
															<span className="text-sm">Difficulty</span>
														</div>
														<p className="font-bold text-gray-900 dark:text-white">{destination.difficulty}</p>
													</div>
												</div>

												<div className="mt-auto">
													<div className="flex items-center justify-between mb-4">
														<div>
															<p className="text-sm text-gray-600 dark:text-gray-400">Starting from</p>
															<p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{destination.budget}</p>
														</div>
														<div className="text-sm text-gray-600 dark:text-gray-400">per person</div>
													</div>
													
													<button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all group-hover:shadow-lg">
														<span>View Details</span>
														<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
													</button>
												</div>
											</div>
										</div>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="hidden md:flex -left-12" />
						<CarouselNext className="hidden md:flex -right-12" />
					</Carousel>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
						All trips verified by students. All budgets broken down. No surprises.
					</p>
					<button className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors">
						<span>Explore All Destinations</span>
						<ArrowRight className="w-5 h-5" />
					</button>
				</motion.div>
			</div>
		</section>
	)
}
