"use server"

export async function createPost(data: any) {
	return { success: true }
}

export async function getCategories() {
	// Placeholder - return empty success response
	// When you add Category model to schema.prisma, fetch real categories
	return { success: true, categories: [] };
}