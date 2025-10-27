"use server"

import { prisma } from "@/lib/prisma"
import type { ActionResult } from "@/lib/utils"

export async function joinWaitlist(email: string, collegeName?: string): Promise<ActionResult<string>> {
	try {
		// Basic email validation
		if (!email || !email.includes("@")) {
			return {
				success: false,
				message: "Please enter a valid email address",
			}
		}

		// Check if email already exists
		const existingEntry = await prisma.waitlist.findUnique({
			where: { email },
		})

		if (existingEntry) {
			return {
				success: false,
				message: "You're already on the waitlist!",
			}
		}

		// Add to waitlist
		await prisma.waitlist.create({
			data: { 
				email,
				collegeName: collegeName || null,
			},
		})

		return {
			success: true,
			data: "Successfully joined the waitlist! We'll notify you soon.",
			id: Date.now().toString(),
		}
	} catch (error) {
		console.error("Waitlist error:", error)
		return {
			success: false,
			message: "Something went wrong. Please try again.",
		}
	}
}