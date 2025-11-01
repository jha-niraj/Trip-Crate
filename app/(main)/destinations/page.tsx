import { MapPin, ArrowLeft, Compass } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DestinationsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 dark:from-slate-950 dark:via-black dark:to-slate-950 p-4 sm:p-8">
			<div className="max-w-4xl mx-auto space-y-8">
				{/* Header */}
				<div className="flex items-center gap-4">
					<Link href="/dashboard">
						<Button variant="ghost" size="icon" className="rounded-full">
							<ArrowLeft className="h-5 w-5" />
						</Button>
					</Link>
					<div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
							Destinations
						</h1>
						<p className="text-muted-foreground mt-1">
							Explore amazing travel destinations
						</p>
					</div>
				</div>

				{/* Coming Soon Card */}
				<Card className="border-2 border-dashed border-teal-200 dark:border-teal-900 bg-gradient-to-br from-white/50 to-teal-50/50 dark:from-slate-900/50 dark:to-teal-950/50 backdrop-blur-sm p-12 text-center">
					<div className="flex flex-col items-center gap-6">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 blur-2xl opacity-20 rounded-full" />
							<div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl shadow-xl">
								<Compass className="h-12 w-12 text-white" />
							</div>
						</div>
						
						<div className="space-y-2">
							<h2 className="text-2xl font-bold text-foreground">
								Coming Soon
							</h2>
							<p className="text-muted-foreground max-w-md">
								We're working on bringing you the best destination discovery experience. 
								Soon you'll be able to explore thousands of amazing places to visit!
							</p>
						</div>

						<div className="flex flex-wrap gap-3 justify-center mt-4">
							<div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-teal-200 dark:border-teal-800">
								<MapPin className="h-4 w-4 text-teal-600" />
								<span className="text-sm font-medium">Popular Destinations</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-emerald-200 dark:border-emerald-800">
								<Compass className="h-4 w-4 text-emerald-600" />
								<span className="text-sm font-medium">Curated Travel Guides</span>
							</div>
						</div>

						<Link href="/dashboard" className="mt-6">
							<Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg">
								Back to Dashboard
							</Button>
						</Link>
					</div>
				</Card>
			</div>
		</div>
	)
}
