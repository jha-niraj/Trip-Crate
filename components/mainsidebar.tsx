"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, Share2, MessageCircleCode, Home, Compass, Map, Hotel, UtensilsCrossed, Sparkles, Moon, Sun, User } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
	DropdownMenu, DropdownMenuContent, DropdownMenuItem,
	DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { ThemeToggle } from "./themeswitcher"

export interface Route {
	path: string
	name: string
	icon?: React.ReactNode
	status: string
}

interface SidebarProps {
	isCollapsed?: boolean
	toggleSidebar?: () => void
}

const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
	const pathname = usePathname()
	const router = useRouter()
	const { data: session } = useSession()
	const { theme, setTheme } = useTheme()

	const isActiveRoute = (path: string) => {
		if (path === 'explore') {
			return pathname === '/explore' || pathname === '/'
		}
		return pathname.includes(path)
	}

	const handleSignOut = async () => {
		try {
			await signOut({ callbackUrl: '/' })
		} catch (error) {
			console.error("Failed to sign out", error)
			toast.error("Failed to sign out")
		}
	}

	const handleNavigation = (path: string) => {
		router.push(`/${path}`)
	}

	const routes: Route[] = [
		{
			path: "dashboard",
			name: "Dashboard",
			icon: <Home className="h-5 w-5" />,
			status: "active"
		},
		{
			path: "explore",
			name: "Explore",
			icon: <Compass className="h-5 w-5" />,
			status: "active"
		},
		{
			path: "profile",
			name: "Profile",
			icon: <User className="h-5 w-5" />,
			status: "active"
		},
		{
			path: "destinations",
			name: "Destinations",
			icon: <Map className="h-5 w-5" />,
			status: "coming-soon"
		},
		{
			path: "hotels",
			name: "Hotels",
			icon: <Hotel className="h-5 w-5" />,
			status: "coming-soon"
		},
		{
			path: "food",
			name: "Food",
			icon: <UtensilsCrossed className="h-5 w-5" />,
			status: "coming-soon"
		},
	]

	const displayRoutes = routes.filter((route) => route.status === "active")

	return (
		<TooltipProvider>
			<div className="fixed top-0 left-0 h-full w-[90px] bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 dark:from-slate-900 dark:via-black dark:to-slate-900 backdrop-blur-xl border-r border-border/20 shadow-2xl z-20 sm:block hidden">
				<div className="flex flex-col h-full">
					{/* Logo Section */}
					<div className="flex items-center justify-center p-4 h-[80px] border-b border-border/50">
						<Link href="/" className="flex flex-col items-center justify-center group cursor-pointer">
							<Image
								src="/validatexmainlogo.png"
								alt="TripCrate"
								width={40}
								height={40}
								className="rounded-xl"
							/>
							<h1 className="text-xs font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent whitespace-nowrap mt-1">
								TripCrate
							</h1>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="flex-grow overflow-y-auto py-4">
						<div className="space-y-1 px-2">
							{
								displayRoutes.map((route, index) => {
									const isActive = isActiveRoute(route.path)

									return (
										<Tooltip key={index}>
											<TooltipTrigger asChild>
												<motion.button
													onClick={() => handleNavigation(route.path)}
													className="block w-full cursor-pointer"
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.98 }}
													transition={{ duration: 0.1 }}
												>
													<div
														className={`
															${isActive
																? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
																: "hover:bg-muted/70 text-foreground"
															} 
															flex flex-col items-center justify-center rounded-xl transition-all duration-200 cursor-pointer group relative overflow-hidden px-3 py-3
														`}
													>
														{
															isActive && (
																<motion.div
																	layoutId="activeBackground"
																	className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
																	transition={{ duration: 0.2 }}
																/>
															)
														}
														<div className="relative z-10 flex flex-col items-center justify-center">
															<div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
																{route.icon}
															</div>
															<motion.span
																initial={{ opacity: 0, y: -5 }}
																animate={{ opacity: 1, y: 0 }}
																transition={{ delay: index * 0.05 }}
																className="text-xs font-medium truncate mt-1 text-center"
															>
																{route.name}
															</motion.span>
														</div>
													</div>
												</motion.button>
											</TooltipTrigger>
											<TooltipContent side='right'>
												<p>{route.name}</p>
											</TooltipContent>
										</Tooltip>
									)
								})
							}
						</div>
					</div>

					{/* Bottom Actions */}
					<div className="border-t border-border/50 p-3 mt-auto">
						<div className="space-y-1">
							{/* Theme Toggle */}
							<Tooltip>
								<TooltipTrigger asChild>
									<ThemeToggle />
								</TooltipTrigger>
								<TooltipContent side='right'>
									<p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
								</TooltipContent>
							</Tooltip>

							{
								session?.user && (
									<>
										{/* Feedback */}
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="sm"
													onClick={() => router.push("/feedback")}
													className="w-full justify-center px-0 hover:bg-muted cursor-pointer"
												>
													<MessageCircleCode className="h-4 w-4" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side='right'>
												<p>Feedback</p>
											</TooltipContent>
										</Tooltip>

										{/* Logout */}
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="sm"
													onClick={handleSignOut}
													className="w-full justify-center px-0 hover:bg-muted cursor-pointer text-destructive hover:text-destructive"
												>
													<LogOut className="h-4 w-4" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side='right'>
												<p>Sign Out</p>
											</TooltipContent>
										</Tooltip>
									</>
								)
							}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Bottom Navigation */}
			<div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 dark:from-slate-900 dark:via-black dark:to-slate-900 border-t border-border/20 backdrop-blur-xl shadow-2xl z-20 pb-safe">
				<div className="grid grid-cols-5 items-center py-2 px-1 gap-1">
					{
						displayRoutes.slice(0, 4).map((route) => {
							const isActive = isActiveRoute(route.path)

							return (
								<button
									key={route.path}
									onClick={() => handleNavigation(route.path)}
									className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-colors ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
								>
									<div className="w-5 h-5 flex items-center justify-center">
										{route.icon}
									</div>
									<span className="text-[10px] font-medium truncate max-w-[60px]">{route.name}</span>
								</button>
							)
						})
					}
					
					{
						session?.user ? (
							<Button
								variant="ghost"
								size="icon"
								onClick={handleSignOut}
								className="flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/50 h-auto"
							>
								<div className="w-5 h-5 flex items-center justify-center">
									<LogOut className="h-5 w-5" />
								</div>
								<span className="text-[10px] font-medium">Logout</span>
							</Button>
						) : (
							<Button
								variant="ghost"
								size="icon"
								onClick={() => router.push('/signin')}
								className="flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/50 h-auto"
							>
								<div className="w-5 h-5 flex items-center justify-center">
									<Home className="h-5 w-5" />
								</div>
								<span className="text-[10px] font-medium">Login</span>
							</Button>
						)
					}
				</div>
			</div>
		</TooltipProvider>
	)
}

export default Sidebar 