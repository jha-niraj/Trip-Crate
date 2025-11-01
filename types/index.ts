import { Role } from "@prisma/client"

export interface ProfileUser {
	id: string
	name: string | null
	email: string | null
	image: string | null
	tagline: string | null
	location: string | null
	interests: string[]
	role: Role | null
	totalTrips: number
	totalPosts: number
	totalPhotos: number
	totalComments: number
	coinsEarned: number
	createdAt: Date
	updatedAt: Date
}

export interface ProfileStats {
	totalTrips: number
	totalPosts: number
	totalPhotos: number
	totalComments: number
	coinsEarned: number
	memberSince: string
}

export interface LocationResult {
	name: string
	state: string
	district?: string
	formatted: string // "City, State, India"
}