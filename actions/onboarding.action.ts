'use server'

import { auth } from "@/auth";

export type OnboardingInput = {
	userRole?: string;
	categories?: string[];
	customCategory?: string;
};

export async function completeOnboarding(data: OnboardingInput) {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return { success: false, error: "Not authenticated" };
		}

		// Placeholder for future onboarding logic
		// When you add Category and CategorySelection models to schema.prisma,
		// implement the full onboarding flow here
		
		return { success: true };
	} catch (error) {
		console.error("Error completing onboarding:", error);
		return { success: false, error: "Failed to complete onboarding" };
	}
}

export async function checkOnboardingStatus() {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return { needsOnboarding: true };
		}

		// For now, assume onboarding is complete
		// When you add onboardingCompleted field to User model,
		// check it here
		return {
			needsOnboarding: false,
			userRole: 'USER'
		};
	} catch (error) {
		console.error("Error checking onboarding status:", error);
		return { needsOnboarding: true };
	}
}

export async function redirectAfterOnboarding(userRole: string) {
	// Placeholder - redirect to dashboard
	return '/dashboard';
}