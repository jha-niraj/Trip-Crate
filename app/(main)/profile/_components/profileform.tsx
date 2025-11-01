"use client"

import { useState, useRef, useEffect } from "react"
import { updateProfile, uploadProfileImage } from "@/actions/profile.action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { 
    Loader2, Camera, X, Plus, MapPin, Sparkles 
} from "lucide-react"
import { 
    Avatar, AvatarFallback, AvatarImage 
} from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProfileUser } from "@/types"

interface ProfileFormProps {
	user: ProfileUser
}

export function ProfileForm({ user }: ProfileFormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [imageUploading, setImageUploading] = useState(false)
	const imageInputRef = useRef<HTMLInputElement>(null)

	const [formData, setFormData] = useState({
		name: user.name || "",
		tagline: user.tagline || "",
		location: user.location || "",
		interests: user.interests || [],
		image: user.image || ""
	})

	const [newInterest, setNewInterest] = useState("")
	const [locationSearch, setLocationSearch] = useState("")
	const [locationResults, setLocationResults] = useState<any[]>([])
	const [showLocationDropdown, setShowLocationDropdown] = useState(false)

	// India location search with popular cities
	const searchIndiaLocations = async (query: string) => {
		if (query.length < 2) {
			setLocationResults([])
			return
		}

		try {
			// India cities database - can be replaced with actual API
			const indianCities = [
				{ city: "Jalandhar", state: "Punjab", country: "India" },
				{ city: "Jaipur", state: "Rajasthan", country: "India" },
				{ city: "Mumbai", state: "Maharashtra", country: "India" },
				{ city: "Delhi", state: "Delhi", country: "India" },
				{ city: "Bangalore", state: "Karnataka", country: "India" },
				{ city: "Hyderabad", state: "Telangana", country: "India" },
				{ city: "Chennai", state: "Tamil Nadu", country: "India" },
				{ city: "Kolkata", state: "West Bengal", country: "India" },
				{ city: "Pune", state: "Maharashtra", country: "India" },
				{ city: "Ahmedabad", state: "Gujarat", country: "India" },
				{ city: "Surat", state: "Gujarat", country: "India" },
				{ city: "Lucknow", state: "Uttar Pradesh", country: "India" },
				{ city: "Kanpur", state: "Uttar Pradesh", country: "India" },
				{ city: "Nagpur", state: "Maharashtra", country: "India" },
				{ city: "Indore", state: "Madhya Pradesh", country: "India" },
				{ city: "Bhopal", state: "Madhya Pradesh", country: "India" },
				{ city: "Visakhapatnam", state: "Andhra Pradesh", country: "India" },
				{ city: "Patna", state: "Bihar", country: "India" },
				{ city: "Vadodara", state: "Gujarat", country: "India" },
				{ city: "Ghaziabad", state: "Uttar Pradesh", country: "India" },
				{ city: "Ludhiana", state: "Punjab", country: "India" },
				{ city: "Agra", state: "Uttar Pradesh", country: "India" },
				{ city: "Nashik", state: "Maharashtra", country: "India" },
				{ city: "Chandigarh", state: "Chandigarh", country: "India" },
				{ city: "Amritsar", state: "Punjab", country: "India" },
				{ city: "Manali", state: "Himachal Pradesh", country: "India" },
				{ city: "Shimla", state: "Himachal Pradesh", country: "India" },
				{ city: "Dharamshala", state: "Himachal Pradesh", country: "India" },
				{ city: "Kasol", state: "Himachal Pradesh", country: "India" },
				{ city: "Rishikesh", state: "Uttarakhand", country: "India" },
				{ city: "Leh", state: "Ladakh", country: "India" },
				{ city: "Goa", state: "Goa", country: "India" },
				{ city: "Kochi", state: "Kerala", country: "India" },
				{ city: "Varanasi", state: "Uttar Pradesh", country: "India" },
			]

			const filtered = indianCities.filter(city =>
				city.city.toLowerCase().includes(query.toLowerCase()) ||
				city.state.toLowerCase().includes(query.toLowerCase())
			).slice(0, 5)

			setLocationResults(filtered)
			setShowLocationDropdown(filtered.length > 0)
		} catch (error) {
			console.error("Error searching locations:", error)
		}
	}

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (locationSearch) {
				searchIndiaLocations(locationSearch)
			}
		}, 300)

		return () => clearTimeout(debounce)
	}, [locationSearch])

	const selectLocation = (city: any) => {
		const formatted = `${city.city}, ${city.state}, ${city.country}`
		setFormData(prev => ({
			...prev,
			location: formatted
		}))
		setLocationSearch("")
		setShowLocationDropdown(false)
	}

	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		setImageUploading(true)

		try {
			const uploadFormData = new FormData()
			uploadFormData.append('image', file)

			const result = await uploadProfileImage(uploadFormData)

			if (result.success) {
				const newImageUrl = result.imageUrl || ""
				setFormData(prev => ({
					...prev,
					image: newImageUrl
				}))
				toast.success("Profile image uploaded successfully!")
			} else {
				toast.error(result.error || "Failed to upload image")
			}
		} catch (error) {
			console.error('Upload error:', error)
			toast.error("Failed to upload image")
		} finally {
			setImageUploading(false)
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const result = await updateProfile({
				name: formData.name,
				tagline: formData.tagline || undefined,
				location: formData.location || undefined,
				interests: formData.interests,
			})

			if (result.success) {
				toast.success("Profile updated successfully!")
			} else {
				toast.error(result.error || "Failed to update profile")
			}
		} catch {
			toast.error("An error occurred while updating profile")
		} finally {
			setIsLoading(false)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleRemoveImage = () => {
		setFormData(prev => ({
			...prev,
			image: ""
		}))
	}

	const addInterest = () => {
		if (newInterest.trim() && !formData.interests.includes(newInterest.trim()) && formData.interests.length < 10) {
			setFormData(prev => ({
				...prev,
				interests: [...prev.interests, newInterest.trim()]
			}))
			setNewInterest("")
		}
	}

	const removeInterest = (interestToRemove: string) => {
		setFormData(prev => ({
			...prev,
			interests: prev.interests.filter(interest => interest !== interestToRemove)
		}))
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Profile Image Section */}
			<Card className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/20 dark:via-neutral-900/50 dark:to-emerald-950/20 border-teal-200/50 dark:border-teal-800/30">
				<CardContent className="pt-6">
					<div className="flex items-center gap-6">
						<div className="relative group">
							<Avatar className="h-28 w-28 border-4 border-white dark:border-neutral-800 shadow-xl ring-2 ring-teal-500/20">
								<AvatarImage src={formData.image || undefined} alt="Profile" />
								<AvatarFallback className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-2xl font-bold">
									{formData.name?.split(" ").map((n: string) => n[0]).join("") || "U"}
								</AvatarFallback>
							</Avatar>
							{imageUploading && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
									<Loader2 className="h-8 w-8 text-white animate-spin" />
								</div>
							)}
							<button
								type="button"
								onClick={() => imageInputRef.current?.click()}
								className="absolute bottom-0 right-0 p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all transform hover:scale-110"
							>
								<Camera className="h-4 w-4" />
							</button>
						</div>
						<div className="flex-1">
							<Label htmlFor="profileImage" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
								<Sparkles className="h-4 w-4 text-teal-600" />
								Profile Picture
							</Label>
							<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
								Upload a clear photo (Max 5MB) • JPG, PNG, or GIF
							</p>
							<div className="flex gap-2">
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={() => imageInputRef.current?.click()}
									disabled={imageUploading}
									className="border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
								>
									{imageUploading ? "Uploading..." : "Change Photo"}
								</Button>
								{formData.image && (
									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={handleRemoveImage}
										className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
									>
										Remove
									</Button>
								)}
							</div>
							<input
								ref={imageInputRef}
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								className="hidden"
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Basic Info */}
			<div className="grid gap-4 md:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="name" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
						Full Name *
					</Label>
					<Input
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="border-neutral-300 dark:border-neutral-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20"
						placeholder="Enter your full name"
					/>
				</div>

				<div className="space-y-2 relative">
					<Label htmlFor="location" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
						<MapPin className="h-4 w-4 text-teal-600" />
						Location
					</Label>
					<div className="relative">
						<Input
							id="location"
							name="location"
							value={formData.location}
							onChange={(e) => {
								setFormData(prev => ({ ...prev, location: e.target.value }))
								setLocationSearch(e.target.value)
							}}
							className="border-neutral-300 dark:border-neutral-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20"
							placeholder="Search for your city..."
							autoComplete="off"
						/>
						{showLocationDropdown && locationResults.length > 0 && (
							<div className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl max-h-60 overflow-auto">
								{locationResults.map((city, index) => (
									<button
										key={index}
										type="button"
										onClick={() => selectLocation(city)}
										className="w-full text-left px-4 py-3 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-0"
									>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-teal-600" />
											<div>
												<p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
													{city.city}
												</p>
												<p className="text-xs text-neutral-500 dark:text-neutral-400">
													{city.state}, {city.country}
												</p>
											</div>
										</div>
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Tagline */}
			<div className="space-y-2">
				<Label htmlFor="tagline" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
					Tagline
				</Label>
				<Textarea
					id="tagline"
					name="tagline"
					value={formData.tagline}
					onChange={handleChange}
					className="border-neutral-300 dark:border-neutral-700 focus:border-teal-500 dark:focus:border-teal-400 min-h-[80px] focus:ring-2 focus:ring-teal-500/20"
					placeholder="A catchy tagline about yourself... (e.g., 'Adventure seeker 🌍 | Mountain lover ⛰️')"
					maxLength={100}
				/>
				<p className="text-xs text-neutral-500 dark:text-neutral-400 text-right">
					{formData.tagline.length}/100 characters
				</p>
			</div>

			{/* Interests */}
			<div className="space-y-3">
				<Label className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
					Travel Interests (Max 10)
				</Label>
				<div className="flex flex-wrap gap-2 mb-2 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg border border-emerald-200/50 dark:border-emerald-800/30 min-h-[60px]">
					{formData.interests.length === 0 ? (
						<p className="text-sm text-neutral-400 dark:text-neutral-500 italic">
							Add interests like "Adventure Travel", "Photography", "Food Tourism"...
						</p>
					) : (
						formData.interests.map((interest, index) => (
							<Badge
								key={index}
								variant="outline"
								className="border-emerald-300 dark:border-emerald-700 bg-white dark:bg-neutral-900 text-emerald-700 dark:text-emerald-300 cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all hover:scale-105 px-3 py-1.5"
								onClick={() => removeInterest(interest)}
							>
								{interest}
								<X className="ml-1.5 h-3.5 w-3.5" />
							</Badge>
						))
					)}
				</div>
				{formData.interests.length < 10 && (
					<div className="flex gap-2">
						<Input
							value={newInterest}
							onChange={(e) => setNewInterest(e.target.value)}
							placeholder="Add an interest..."
							className="border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									e.preventDefault()
									addInterest()
								}
							}}
						/>
						<Button
							type="button"
							variant="outline"
							onClick={addInterest}
							disabled={!newInterest.trim()}
							className="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-4"
						>
							<Plus className="h-4 w-4" />
						</Button>
					</div>
				)}
			</div>

			{/* Submit Button */}
			<div className="flex justify-end pt-4">
				<Button
					type="submit"
					disabled={isLoading || !formData.name.trim()}
					className="bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-600 hover:via-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all px-8"
				>
					{isLoading ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Saving Changes...
						</>
					) : (
						<>
							<Sparkles className="mr-2 h-4 w-4" />
							Save Profile
						</>
					)}
				</Button>
			</div>
		</form>
	)
}