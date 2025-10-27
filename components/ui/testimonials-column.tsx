"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface Testimonial {
	quote: string
	name: string
	role: string
	image: string
}

export const TestimonialsColumn = ({
	testimonials,
	className,
	duration = 15,
}: {
	testimonials: Testimonial[]
	className?: string
	duration?: number
}) => {
	return (
		<div className={cn("flex flex-col gap-6", className)}>
			<motion.div
				className="flex flex-col gap-6"
				animate={{
					translateY: "-50%",
				}}
				transition={{
					duration: duration,
					repeat: Infinity,
					ease: "linear",
					repeatType: "loop",
				}}
			>
				{[...testimonials, ...testimonials].map((testimonial, idx) => (
					<div
						key={idx}
						className="p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-teal-500/10 dark:shadow-teal-500/5"
					>
						<p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
							"{testimonial.quote}"
						</p>
						<div className="flex items-center gap-3">
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								width={40}
								height={40}
								className="rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold text-neutral-800 dark:text-neutral-100">
									{testimonial.name}
								</p>
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									{testimonial.role}
								</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	)
}
