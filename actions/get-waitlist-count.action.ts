"use server"

import { prisma } from "@/lib/prisma"

export async function getWaitlistCount(): Promise<number> {
	try {
		const count = await prisma.waitlist.count()
		return count
	} catch (error) {
		console.error("Error fetching waitlist count:", error)
		return 0
	}
}
