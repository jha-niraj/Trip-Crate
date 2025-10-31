'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/mainsidebar';
import MainNavbar from '@/components/mainnavbar';
import OnboardingCheck from '@/components/onboardingcheck';

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
	const { data: session } = useSession();

	useEffect(() => {
		const savedState = localStorage.getItem('mainSidebarCollapsed');
		if (savedState !== null) {
			setSidebarCollapsed(JSON.parse(savedState));
		}
	}, []);

	const toggleSidebar = () => {
		const newState = !sidebarCollapsed;
		setSidebarCollapsed(newState);
		localStorage.setItem('mainSidebarCollapsed', JSON.stringify(newState));
	};

	// For protected routes, show sidebar only when authenticated
	// For public routes (explore, destinations, etc.), show full layout
	const showFullLayout = session?.user || true; // Allow viewing layout even without auth

	return (
		<OnboardingCheck>
			<div className="flex h-screen">
				{showFullLayout && (
					<Sidebar
						isCollapsed={sidebarCollapsed}
						toggleSidebar={toggleSidebar}
					/>
				)}
				<div className="flex flex-col flex-1">
					{showFullLayout && <MainNavbar isCollapsed={sidebarCollapsed} />}
					<main className={`backdrop-blur-sm transition-all duration-300 ${showFullLayout ? (sidebarCollapsed ? 'sm:ml-[60px] ml-[0px]' : 'sm:ml-[180px] ml-[0px]') + ' pt-16' : ''}`}>
						<div className="h-full pb-16 md:pb-0">
							{children}
						</div>
					</main>
				</div>
			</div>
		</OnboardingCheck>
	);
};

export default Layout;