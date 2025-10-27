"use client"

import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle, Share2, Camera } from "lucide-react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

// Placeholder testimonials - User will need to provide actual Instagram reel URLs
const testimonials = [
	{
		id: 1,
		username: "@student_wanderer",
		location: "Triund Trek",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
		caption: "Best ₹1,800 I ever spent! The TripCrate guide was spot-on 🏔️",
		likes: 342,
		comments: 28,
	},
	{
		id: 2,
		username: "@campus_explorer",
		location: "Kasol Vibes",
		image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=800&fit=crop&q=80",
		caption: "Found the best cafes thanks to TripCrate! Budget: ₹2,200 💯",
		likes: 521,
		comments: 45,
	},
	{
		id: 3,
		username: "@dorm_to_peaks",
		location: "Manali Adventures",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
		caption: "Student discount + TripCrate guide = Perfect weekend! 🎿",
		likes: 689,
		comments: 67,
	},
	{
		id: 4,
		username: "@budget_backpacker",
		location: "Dharamshala Diaries",
		image: "https://images.unsplash.com/photo-1587974928442-77dc3e25828?w=600&h=800&fit=crop&q=80",
		caption: "Living my best life on a student budget ✨ #TripCrate",
		likes: 445,
		comments: 34,
	},
	{
		id: 5,
		username: "@hostel_nomad",
		location: "Shimla Memories",
		image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=800&fit=crop&q=80",
		caption: "Maggi at Mall Road hits different when you've saved ₹3K 😎",
		likes: 278,
		comments: 19,
	},
	{
		id: 6,
		username: "@study_break_traveler",
		location: "Narkanda Snow",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
		caption: "Exams done. Budget trip checked. Life's good! ❄️",
		likes: 392,
		comments: 41,
	},
]

export function InstagramTestimonials() {
	return (
		<section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 mb-6">
						<Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
						<span className="text-sm font-semibold text-pink-700 dark:text-pink-300">Real Students, Real Stories</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						See What Students Are <span className="text-pink-600 dark:text-pink-400">Sharing</span>
					</h2>
					<p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
						These aren't stock photos. These are real trips by real students using TripCrate.
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
							{testimonials.map((post, index) => (
								<CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ y: -8 }}
										className="group relative"
									>
										{/* Instagram-style card */}
										<div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
											{/* Header */}
											<div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
												<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-0.5">
													<div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
														<span className="text-sm font-bold">
															{post.username.charAt(1).toUpperCase()}
														</span>
													</div>
												</div>
												<div className="flex-1">
													<p className="font-semibold text-sm text-gray-900 dark:text-white">
														{post.username}
													</p>
													<p className="text-xs text-gray-600 dark:text-gray-400">{post.location}</p>
												</div>
												<Instagram className="w-5 h-5 text-pink-600" />
											</div>

											{/* Image */}
											<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900">
												<Image
													src={post.image}
													alt={post.location}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    height={100}
                                                    width={100}
                                                />
												
												{/* Play button overlay */}
												<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
													<div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
														<div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1" />
													</div>
												</div>
											</div>

											{/* Actions */}
											<div className="p-4">
												<div className="flex items-center gap-4 mb-3">
													<button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 transition-colors">
														<Heart className="w-6 h-6" />
														<span className="text-sm font-semibold">{post.likes}</span>
													</button>
													<button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
														<MessageCircle className="w-6 h-6" />
														<span className="text-sm font-semibold">{post.comments}</span>
													</button>
													<button className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors ml-auto">
														<Share2 className="w-6 h-6" />
													</button>
												</div>
												
												<p className="text-sm text-gray-900 dark:text-white">
													<span className="font-semibold">{post.username}</span>{" "}
													<span className="text-gray-700 dark:text-gray-300">{post.caption}</span>
												</p>
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

				{/* CTA to tag */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
						<div className="absolute inset-0 opacity-20">
							<div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
							<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
						</div>
						
						<div className="relative z-10">
							<Camera className="w-16 h-16 mx-auto mb-6" />
							<h3 className="text-3xl md:text-5xl font-bold mb-6">
								Tag Us & Get Featured!
							</h3>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Share your TripCrate adventure on Instagram. Tag <span className="font-bold">@tripcrate</span> and we'll verify and post your real student experience here.
							</p>
							
							<div className="flex flex-wrap justify-center gap-4">
								<div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
									<Instagram className="w-5 h-5" />
									<span className="font-semibold">Tag @tripcrate</span>
								</div>
								<div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
									<Camera className="w-5 h-5" />
									<span className="font-semibold">Share your journey</span>
								</div>
								<div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
									<Heart className="w-5 h-5" />
									<span className="font-semibold">Get featured</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
