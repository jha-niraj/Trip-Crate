import { getProfile, getUserStats } from "@/actions/profile.action"
import { MainProfile } from "./_components/mainprofile"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/signin')
    }

    const [profileData, statsData, accounts] = await Promise.all([
        getProfile(),
        getUserStats(),
        prisma.account.findMany({
            where: {
                userId: session.user.id as string
            },
            select: {
                provider: true
            }
        })
    ])

    if (!profileData.success || !profileData.user) {
        return (
            <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600">Error loading profile</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">Please try again later</p>
                </div>
            </div>
        )
    }

    const { user } = profileData
    const stats = statsData.success ? statsData.stats : null

    // Check if user is using Google OAuth
    const isGoogleUser = accounts.some(account => account.provider === 'google')

    // Transform stats to ProfileStats format
    const profileStats = stats ? {
        memberSince: stats.memberSince || new Date().toISOString(),
        totalTrips: stats.totalTrips || 0,
        totalPosts: stats.totalPosts || 0,
        totalPhotos: stats.totalPhotos || 0,
        totalComments: stats.totalComments || 0,
        coinsEarned: stats.coinsEarned || 0
    } : {
        memberSince: new Date().toISOString(),
        totalTrips: 0,
        totalPosts: 0,
        totalPhotos: 0,
        totalComments: 0,
        coinsEarned: 0
    }

    return <MainProfile user={user} stats={profileStats} isGoogleUser={isGoogleUser} />
}