"use client"

import { useEffect, useState } from "react"
import { Instagram, Linkedin } from "lucide-react"
import { toast } from "sonner"
import { joinWaitlist } from "@/actions/waitlist.action"
import { getWaitlistCount } from "@/actions/get-waitlist-count.action"
import Link from "next/link"
import { Input } from "../ui/input"
import Image from "next/image"

export function HeroSection() {
    const [email, setEmail] = useState("")
    const [collegeName, setCollegeName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [waitlistCount, setWaitlistCount] = useState<number | null>(null)
    const [isLoadingCount, setIsLoadingCount] = useState(true)

    // Fetch waitlist count on mount
    useEffect(() => {
        const fetchCount = async () => {
            setIsLoadingCount(true)
            const count = await getWaitlistCount()
            setWaitlistCount(count)
            setIsLoadingCount(false)
        }
        fetchCount()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            toast.error("Please enter a valid email address")
            return
        }

        setIsLoading(true)

        try {
            const result = await joinWaitlist(email, collegeName)

            if (result.success) {
                toast.success(result.data || "Successfully joined the waitlist!")
                setEmail("")
                setCollegeName("")
                setIsSubmitted(true)

                // Refresh count after successful join
                const newCount = await getWaitlistCount()
                setWaitlistCount(newCount)

                // Reset success message after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 3000)
            } else {
                toast.error(result.message || "Something went wrong")
            }
        } catch (error) {
            console.log("Failed to join waitlist: " + error)
            toast.error("Failed to join waitlist. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-gray-950"></div>
            <GradientBars />

            <div className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
                <div className="mb-6 sm:mb-8">
                    <TrustElements count={waitlistCount} isLoading={isLoadingCount} />
                </div>
                <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 animate-fadeIn px-4">
                    <span className="block font-medium text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap">
                        Weekend Trips to Dream Places,
                    </span>
                    <span className="block italic text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap">
                        Starting at Just ₹1,800.
                    </span>
                </h1>
                <div className="mb-6 sm:mb-10 px-4">
                    <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-800 leading-relaxed animate-fadeIn animation-delay-200">
                        Be the first to know when we launch.
                    </p>
                    <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-800 leading-relaxed animate-fadeIn animation-delay-300">
                        Join the waitlist and get exclusive early access.
                    </p>
                </div>
                <div className="w-full max-w-2xl mb-6 sm:mb-8 px-4">
                    <WaitlistForm
                        email={email}
                        setEmail={setEmail}
                        collegeName={collegeName}
                        setCollegeName={setCollegeName}
                        isLoading={isLoading}
                        isSubmitted={isSubmitted}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className="flex justify-center space-x-6">
                    <Link href="#" className="text-black hover:text-gray-700 transition-colors duration-300">
                        <Instagram size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                    </Link>
                    <Link href="#" className="text-black hover:text-gray-700 transition-colors duration-300">
                        <Linkedin size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

type AvatarProps = {
    imageSrc: string
    delay: number
}

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay }) => {
    return (
        <div
            className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg animate-fadeIn"
            style={{ animationDelay: `${delay}ms` }}
        >
            <Image
                src={imageSrc}
                alt="User avatar"
                className="h-full w-full object-cover"
                height={48}
                width={48}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
    )
}

type TrustElementsProps = {
    count: number | null
    isLoading: boolean
}

const TrustElements: React.FC<TrustElementsProps> = ({ count, isLoading }) => {
    const avatars = [
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
    ]

    return (
        <div className="inline-flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
            <div className="flex -space-x-2 sm:-space-x-3">
                {
                    avatars.map((avatar, index) => (
                        <Avatar key={index} imageSrc={avatar} delay={index * 200} />
                    ))
                }
            </div>
            {
                isLoading ? (
                    <div className="flex items-center gap-2 animate-fadeIn">
                        <div className="h-4 w-4 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                        <p className="text-white whitespace-nowrap">Loading...</p>
                    </div>
                ) : (
                    <p className="text-white animate-fadeIn whitespace-nowrap" style={{ animationDelay: '800ms' }}>
                        <span className="text-white font-semibold">{count?.toLocaleString() || '0'}</span> currently on the waitlist
                    </p>
                )
            }
        </div>
    )
}

type WaitlistFormProps = {
    email: string
    setEmail: (email: string) => void
    collegeName: string
    setCollegeName: (name: string) => void
    isLoading: boolean
    isSubmitted: boolean
    handleSubmit: (e: React.FormEvent) => void
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
    email,
    setEmail,
    collegeName,
    setCollegeName,
    isLoading,
    isSubmitted,
    handleSubmit
}) => {
    return (
        <div className="relative z-10 w-full">
            {
                !isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email"
                                className="flex-1 px-6 sm:px-8 py-3 sm:py-4 placeholder:text-white rounded-full bg-gray-900/60 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300"
                                required
                                disabled={isLoading}
                            />
                            <Input
                                type="text"
                                value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}
                                placeholder="Your College Name (Optional)"
                                className="flex-1 px-6 sm:px-8 py-3 sm:py-4 placeholder:text-white rounded-full bg-gray-900/60 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300"
                                disabled={isLoading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base flex items-center justify-center ${isLoading
                                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                                    : 'bg-white hover:bg-gray-100 text-black'
                                }`}
                        >
                            {
                                isLoading ? (
                                    <>
                                        <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-300 border-t-black rounded-full animate-spin mr-2"></div>
                                        Joining Waitlist...
                                    </>
                                ) : (
                                    'Join The Waitlist'
                                )
                            }
                        </button>
                    </form>
                ) : (
                    <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center animate-fadeIn text-sm sm:text-base">
                        Thanks! We&apos;ll notify you when we launch.
                    </div>
                )
            }
        </div>
    )
}

const GradientBars: React.FC = () => {
    const [numBars] = useState(15)

    const calculateHeight = (index: number, total: number) => {
        const position = index / (total - 1)
        const maxHeight = 100
        const minHeight = 30

        const center = 0.5
        const distanceFromCenter = Math.abs(position - center)
        const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2)

        return minHeight + (maxHeight - minHeight) * heightPercentage
    }

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div
                className="flex h-full"
                style={{
                    width: '100%',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased',
                }}
            >
                {
                    Array.from({ length: numBars }).map((_, index) => {
                        const height = calculateHeight(index, numBars)
                        return (
                            <div
                                key={index}
                                style={{
                                    flex: '1 0 calc(100% / 15)',
                                    maxWidth: 'calc(100% / 15)',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgb(255, 255, 143), transparent)',
                                    transform: `scaleY(${height / 100})`,
                                    transformOrigin: 'bottom',
                                    transition: 'transform 0.5s ease-in-out',
                                    animation: 'pulseBar 2s ease-in-out infinite alternate',
                                    animationDelay: `${index * 0.1}s`,
                                    outline: '1px solid rgba(0, 0, 0, 0)',
                                    boxSizing: 'border-box',
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}