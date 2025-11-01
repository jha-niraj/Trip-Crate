'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/mainsidebar';
import OnboardingCheck from '@/components/onboardingcheck';

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	const { data: session } = useSession();

	// For protected routes, show sidebar only when authenticated
	// For public routes (explore, destinations, etc.), show full layout
	const showFullLayout = session?.user || true; // Allow viewing layout even without auth

	return (
		<OnboardingCheck>
			<div className="flex h-screen">
				{showFullLayout && <Sidebar />}
				<div className="flex flex-col flex-1">
					<main className="ml-0 sm:ml-[90px] h-full overflow-y-auto">
						<div className="h-full">
							{children}
						</div>
					</main>
				</div>
			</div>
		</OnboardingCheck>
	);
};

export default Layout;