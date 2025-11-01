"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Calendar,
    Users, TrendingUp, Shield, Award, Ticket, ArrowUp
} from "lucide-react";
import { NewsletterSubscription } from "@/components/landing/newslettersubscription";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Footer() {
    const handleComingSoon = (featureName: string) => {
        toast.info("Coming Soon!", {
            description: `${featureName} is currently under development. We'll notify you when it's ready!`,
            duration: 3000,
        });
    };

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/explore" },
        { name: "Destinations", href: "/explore#destinations" },
        { name: "Weekend Trips", href: "/explore#weekend-trips" },
        { name: "Community", href: "/explore#community" },
    ];

    const resources = [
        { name: "Travel Guides", href: "/guides", comingSoon: true },
        { name: "Trip Planner", href: "/planner", comingSoon: true },
        { name: "Help Center", href: "/help", comingSoon: true },
        { name: "Travel Tips", href: "/tips", comingSoon: true },
        { name: "Packing Lists", href: "/packing", comingSoon: true },
        { name: "Travel Stories", href: "/stories", comingSoon: true },
    ];

    const eventTypes = [
        { name: "Adventure Trips", href: "/explore#activities", icon: Calendar },
        { name: "Group Travel", href: "/explore#group-trips", icon: Users },
        { name: "Weekend Getaways", href: "/explore#weekend", icon: TrendingUp },
        { name: "Budget Travel", href: "/explore#budget", icon: Shield },
        { name: "Solo Travel", href: "/explore#solo", icon: Award },
    ];

    const company = [
        { name: "About Us", href: "/about", comingSoon: false },
        { name: "Contact", href: "/contact", comingSoon: false },
        { name: "Careers", href: "/careers", comingSoon: true },
        { name: "Press Kit", href: "/press", comingSoon: true },
        { name: "Partners", href: "/partners", comingSoon: true },
    ];

    const legal = [
        { name: "Privacy Policy", href: "/privacy", comingSoon: false },
        { name: "Terms of Service", href: "/terms", comingSoon: false },
        { name: "Cookie Policy", href: "/cookies", comingSoon: true },
        { name: "Refund Policy", href: "/refunds", comingSoon: false },
        { name: "Security", href: "/security", comingSoon: true },
    ];

    const socialLinks = [
        { name: "Facebook", icon: Facebook, href: "https://facebook.com/tripcrate" },
        { name: "Twitter", icon: Twitter, href: "https://twitter.com/tripcrate" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/tripcrate" },
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/tripcrate" },
        { name: "YouTube", icon: Youtube, href: "https://youtube.com/@tripcrate" },
    ];

    const features = [
        { icon: Ticket, text: "100% Secure Bookings" },
        { icon: Shield, text: "24/7 Travel Support" },
        { icon: Award, text: "Trusted by 10,000+ Travelers" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-border">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                        <p className="text-muted-foreground">
                            Get the latest travel deals, destination guides, and adventure tips
                        </p>
                    </div>
                    <div>
                        <NewsletterSubscription />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                        <ul className="space-y-3">
                            {
                                quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Trip Types</h4>
                        <ul className="space-y-3">
                            {
                                eventTypes.map((type) => (
                                    <li key={type.name}>
                                        <Link
                                            href={type.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                                        >
                                            <type.icon className="w-3 h-3" />
                                            {type.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
                        <ul className="space-y-3">
                            {
                                resources.map((link) => (
                                    <li key={link.name}>
                                        {
                                            link.comingSoon ? (
                                                <button
                                                    onClick={() => handleComingSoon(link.name)}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
                                                >
                                                    {link.name}
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                        <ul className="space-y-3">
                            {
                                company.map((link) => (
                                    <li key={link.name}>
                                        {
                                            link.comingSoon ? (
                                                <button
                                                    onClick={() => handleComingSoon(link.name)}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
                                                >
                                                    {link.name}
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                        <ul className="space-y-3">
                            {
                                legal.map((link) => (
                                    <li key={link.name}>
                                        {
                                            link.comingSoon ? (
                                                <button
                                                    onClick={() => handleComingSoon(link.name)}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
                                                >
                                                    {link.name}
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                <a href="mailto:support@tripcrate.com" className="hover:text-primary transition-colors">
                                    support@tripcrate.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                <span>
                                    Himachal Pradesh<br />
                                    India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 mb-8 border-y border-border">
                    {
                        features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={feature.text}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center justify-center gap-3"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <IconComponent className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium text-sm">{feature.text}</span>
                                </motion.div>
                            );
                        })
                    }
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">TripCrate</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} TripCrate. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Empowering student travelers worldwide
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        {
                            socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground mb-3">Trusted Booking & Payment Partners</p>
                    <div className="flex items-center justify-center gap-6 flex-wrap">
                        <div className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground">
                            Razorpay
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground">
                            Stripe
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground">
                            SSL Secured
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground">
                            PCI DSS Compliant
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-neutral-200/20 dark:border-neutral-800/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        © {new Date().getFullYear()} TripCrate. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={scrollToTop}
                            variant="outline"
                            size="sm"
                            className="border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-2xl"
                        >
                            <ArrowUp className="h-4 w-4 mr-1" />
                            Back to Top
                        </Button>
                        <Link href="/signin?ref=footer">
                            <Button
                                variant="ghost"
                                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-2xl"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup?ref=footer">
                            <Button className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black rounded-2xl font-semibold transition-all duration-200">
                                Start Exploring
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}