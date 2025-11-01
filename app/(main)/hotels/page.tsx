import { Hotel, ArrowLeft, Bed, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HotelsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-black dark:to-slate-950 p-4 sm:p-8">
			<div className="max-w-4xl mx-auto space-y-8">
				{/* Header */}
				<div className="flex items-center gap-4">
					<Link href="/dashboard">
						<Button variant="ghost" size="icon" className="rounded-full">
							<ArrowLeft className="h-5 w-5" />
						</Button>
					</Link>
					<div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Hotels
						</h1>
						<p className="text-muted-foreground mt-1">
							Find and book the perfect accommodation
						</p>
					</div>
				</div>

				{/* Coming Soon Card */}
				<Card className="border-2 border-dashed border-purple-200 dark:border-purple-900 bg-gradient-to-br from-white/50 to-purple-50/50 dark:from-slate-900/50 dark:to-purple-950/50 backdrop-blur-sm p-12 text-center">
					<div className="flex flex-col items-center gap-6">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 rounded-full" />
							<div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl shadow-xl">
								<Hotel className="h-12 w-12 text-white" />
							</div>
						</div>
						
						<div className="space-y-2">
							<h2 className="text-2xl font-bold text-foreground">
								Coming Soon
							</h2>
							<p className="text-muted-foreground max-w-md">
								We're building a comprehensive hotel booking platform with exclusive deals. 
								Soon you'll have access to thousands of verified hotels and accommodations!
							</p>
						</div>

						<div className="flex flex-wrap gap-3 justify-center mt-4">
							<div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-purple-200 dark:border-purple-800">
								<Bed className="h-4 w-4 text-purple-600" />
								<span className="text-sm font-medium">Best Price Guarantee</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-pink-200 dark:border-pink-800">
								<Star className="h-4 w-4 text-pink-600" />
								<span className="text-sm font-medium">Verified Reviews</span>
							</div>
						</div>

						<Link href="/dashboard" className="mt-6">
							<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
								Back to Dashboard
							</Button>
						</Link>
					</div>
				</Card>
			</div>
		</div>
	)
}
