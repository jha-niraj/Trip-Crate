import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { DashboardClient } from "./_components/dashboard-client"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
        redirect('/signin')
    }

    // Fetch user data
    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id as string
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            totalTrips: true,
            totalPosts: true,
            totalPhotos: true,
            totalComments: true,
            coinsEarned: true,
            createdAt: true
        }
    })

    if (!user) {
        redirect('/signin')
    }

    // Mock data for itineraries, bookings, and earnings
    const mockItineraries = [
        {
            id: "1",
            destination: "Manali, Himachal Pradesh",
            startDate: "2025-12-15",
            endDate: "2025-12-20",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
            status: "upcoming",
            activities: 12,
            budget: 45000
        },
        {
            id: "2",
            destination: "Goa Beaches",
            startDate: "2025-11-25",
            endDate: "2025-11-28",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
            status: "upcoming",
            activities: 8,
            budget: 28000
        },
        {
            id: "3",
            destination: "Jaipur Heritage Tour",
            startDate: "2025-10-10",
            endDate: "2025-10-14",
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
            status: "completed",
            activities: 15,
            budget: 35000
        }
    ]

    const mockBookings = [
        {
            id: "1",
            type: "hotel",
            name: "Snow Valley Resort, Manali",
            date: "2025-12-15",
            status: "confirmed",
            price: 18000,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
        },
        {
            id: "2",
            type: "flight",
            name: "Delhi to Goa - IndiGo",
            date: "2025-11-25",
            status: "confirmed",
            price: 8500,
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400"
        },
        {
            id: "3",
            type: "activity",
            name: "Paragliding Adventure, Bir Billing",
            date: "2025-12-17",
            status: "pending",
            price: 3500,
            image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400"
        }
    ]

    const mockEarnings = {
        totalEarned: user.coinsEarned,
        monthlyBreakdown: [
            { month: "Oct 2025", coins: 450, posts: 8, photos: 25 },
            { month: "Sep 2025", coins: 380, posts: 6, photos: 20 },
            { month: "Aug 2025", coins: 520, posts: 10, photos: 30 }
        ],
        recentActivities: [
            { action: "Posted trip review", coins: 50, date: "2 days ago" },
            { action: "Uploaded 5 photos", coins: 25, date: "3 days ago" },
            { action: "Commented on itinerary", coins: 10, date: "5 days ago" },
            { action: "Shared destination guide", coins: 75, date: "1 week ago" }
        ]
    }

    return (
        <DashboardClient
            user={user}
            itineraries={mockItineraries}
            bookings={mockBookings}
            earnings={mockEarnings}
        />
    )
}