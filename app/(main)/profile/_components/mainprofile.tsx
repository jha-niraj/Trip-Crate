"use client"

import { ProfileForm } from "./profileform"
import { SettingsForm } from "./settingsform"
import { 
    Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card"
import { 
    Avatar, AvatarFallback, AvatarImage 

} from "@/components/ui/avatar"
import { 
    Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
    User, Settings, Calendar, MapPin, Globe, Trophy, MessageSquare, Shield, Plane, 
    Camera, MessageCircle, Coins, Sparkles
} from "lucide-react"
import { ProfileUser, ProfileStats } from "@/types"

interface MainProfileProps {
	user: ProfileUser;
	stats: ProfileStats;
	isGoogleUser: boolean;
}

export function MainProfile({ user, stats, isGoogleUser }: MainProfileProps) {
	return (
		<div className="min-h-screen bg-white dark:bg-neutral-950">
			<div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-1/3">
						<Card className="sticky top-24 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-neutral-200/20 dark:border-neutral-800/20">
							<CardHeader className="text-center">
								<div className="relative mx-auto">
									<Avatar className="h-32 w-32 mx-auto border-4 border-white dark:border-neutral-800 shadow-xl ring-4 ring-teal-500/20">
										<AvatarImage src={user.image || undefined} alt={user.name || "User"} />
										<AvatarFallback className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-2xl font-bold">
											{user.name?.split(" ").map((n: string) => n[0]).join("") || "U"}
										</AvatarFallback>
									</Avatar>
								</div>
								<CardTitle className="text-2xl font-bold mt-4 text-neutral-900 dark:text-white">
									{user.name}
								</CardTitle>
								<CardDescription className="text-lg text-neutral-600 dark:text-neutral-400">
									{user.email}
								</CardDescription>
								{
									user.tagline && (
										<div className="flex items-center justify-center gap-2 mt-2">
											<Sparkles className="h-4 w-4 text-teal-500" />
											<p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
												{user.tagline}
											</p>
										</div>
									)
								}
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-center">
									<Badge variant="outline" className="flex items-center gap-2 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300">
										<Shield className="h-4 w-4" />
										{user.role === 'ADMIN' ? 'Administrator' : 'Travel Enthusiast'}
									</Badge>
								</div>

								<Separator className="bg-neutral-200 dark:bg-neutral-800" />

								<div className="space-y-3">
									{
										user.location && (
											<div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
												<MapPin className="h-4 w-4 text-teal-500" />
												<span>{user.location}</span>
											</div>
										)
									}
									{
										stats && (
											<div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
												<Calendar className="h-4 w-4 text-teal-500" />
												<span>Member since {stats.memberSince}</span>
											</div>
										)
									}
								</div>
								{
									user.interests && user.interests.length > 0 && (
										<>
											<Separator className="bg-neutral-200 dark:bg-neutral-800" />
											<div className="space-y-2">
												<h4 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
													<Globe className="h-4 w-4 text-emerald-500" />
													Travel Interests
												</h4>
												<div className="flex flex-wrap gap-2">
													{
														user.interests.map((interest: string, index: number) => (
															<Badge
																key={index}
																variant="outline"
																className="text-xs border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-900/10"
															>
																{interest}
															</Badge>
														))
													}
												</div>
											</div>
										</>
									)
								}

								<Separator className="bg-neutral-200 dark:bg-neutral-800" />

								<div className="space-y-3">
									<h4 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
										<Trophy className="h-4 w-4 text-yellow-500" />
										Travel Statistics
									</h4>
									<div className="grid grid-cols-2 gap-3">
										<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 p-3 rounded-lg border border-blue-200/50 dark:border-blue-800/30">
											<div className="flex items-center justify-center gap-1.5 mb-1">
												<Plane className="h-4 w-4 text-blue-600 dark:text-blue-400" />
												<p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
													{user.totalTrips || 0}
												</p>
											</div>
											<p className="text-xs text-center text-blue-700 dark:text-blue-300 font-medium">Trips</p>
										</div>
										<div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/30 p-3 rounded-lg border border-purple-200/50 dark:border-purple-800/30">
											<div className="flex items-center justify-center gap-1.5 mb-1">
												<MessageSquare className="h-4 w-4 text-purple-600 dark:text-purple-400" />
												<p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
													{user.totalPosts || 0}
												</p>
											</div>
											<p className="text-xs text-center text-purple-700 dark:text-purple-300 font-medium">Posts</p>
										</div>
										<div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/30 p-3 rounded-lg border border-pink-200/50 dark:border-pink-800/30">
											<div className="flex items-center justify-center gap-1.5 mb-1">
												<Camera className="h-4 w-4 text-pink-600 dark:text-pink-400" />
												<p className="text-2xl font-bold text-pink-600 dark:text-pink-400">
													{user.totalPhotos || 0}
												</p>
											</div>
											<p className="text-xs text-center text-pink-700 dark:text-pink-300 font-medium">Photos</p>
										</div>
										<div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/30 p-3 rounded-lg border border-orange-200/50 dark:border-orange-800/30">
											<div className="flex items-center justify-center gap-1.5 mb-1">
												<MessageCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
												<p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
													{user.totalComments || 0}
												</p>
											</div>
											<p className="text-xs text-center text-orange-700 dark:text-orange-300 font-medium">Comments</p>
										</div>
										<div className="col-span-2 bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/30 p-3 rounded-lg border border-yellow-200/50 dark:border-yellow-800/30">
											<div className="flex items-center justify-center gap-1.5 mb-1">
												<Coins className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
												<p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
													{user.coinsEarned || 0}
												</p>
											</div>
											<p className="text-xs text-center text-yellow-700 dark:text-yellow-300 font-medium">Coins Earned</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="lg:w-2/3">
						<Tabs defaultValue="profile" className="w-full">
							<TabsList className="grid w-full grid-cols-2 bg-neutral-100 dark:bg-neutral-800">
								<TabsTrigger
									value="profile"
									className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900"
								>
									<User className="h-4 w-4" />
									Profile
								</TabsTrigger>
								<TabsTrigger
									value="settings"
									className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900"
								>
									<Settings className="h-4 w-4" />
									Settings
								</TabsTrigger>
							</TabsList>
							<TabsContent value="profile" className="mt-3">
								<Card className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-neutral-200/20 dark:border-neutral-800/20">
									<CardHeader>
										<CardTitle className="text-neutral-900 dark:text-white">
											Profile Information
										</CardTitle>
										<CardDescription className="text-neutral-600 dark:text-neutral-400">
											Update your profile information, tagline, and travel interests to connect with fellow explorers
										</CardDescription>
									</CardHeader>
									<CardContent>
										<ProfileForm user={user} />
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="settings" className="mt-3">
								<Card className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-neutral-200/20 dark:border-neutral-800/20">
									<CardHeader>
										<CardTitle className="text-neutral-900 dark:text-white">
											Account Settings
										</CardTitle>
										<CardDescription className="text-neutral-600 dark:text-neutral-400">
											Manage your account preferences and security settings
										</CardDescription>
									</CardHeader>
									<CardContent>
										<SettingsForm user={user} isGoogleUser={isGoogleUser} />
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	)
}