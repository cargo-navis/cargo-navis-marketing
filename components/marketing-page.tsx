'use client'

import { Button } from "@/components/ui/button"
import { TruckIcon, UsersIcon, BellAlertIcon, ArchiveBoxIcon, ChartBarIcon, ShieldCheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { Playfair_Display_SC } from 'next/font/google'

const playfairDisplaySc = Playfair_Display_SC({ subsets: ['latin'], weight: ['400', '700'] })

export function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <TruckIcon className="h-6 w-6 text-[#0E6A75]" />
          <span className={`ml-2 text-2xl font-bold text-gray-900 ${playfairDisplaySc.className}`}>CargoNavis</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium uppercase hover:underline underline-offset-4" href="/tutorials">
            Tutorials
          </Link>
          <Link href="https://app.cargo-navis.com">
            <Button className="bg-[#0E6A75] text-white hover:bg-[#0E6A75]/90">Log In</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" style={{ background: 'linear-gradient(45deg,#13949f,35%,transparent)' }}>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none`}>
                  Navigate Your Logistics with <br/><span className={playfairDisplaySc.className}>CargoNavis</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Effortlessly manage your trucks, employees, and shipments all in one powerful platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <TruckIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Fleet Management</h3>
                <p className="text-sm text-gray-500">Efficiently track and manage your entire fleet of trucks.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Employee Management</h3>
                <p className="text-sm text-gray-500">Easily manage your workforce and optimize employee efficiency.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BellAlertIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Alerts</h3>
                <p className="text-sm text-gray-500">Get notified about the expiration of your vehicle licenses and documents.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">Roadmap</h2>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl text-center mb-12">Upcoming Features</h3>
            <p className="text-center text-gray-500 mb-10">Discover the exciting features we&#39;re developing to further enhance your logistics experience.</p>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ArchiveBoxIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Shipment Tracking</h3>
                <p className="text-sm text-gray-500">Monitor your shipments from pickup to delivery with detailed tracking information.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ChartBarIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-gray-500">Gain valuable insights with our comprehensive analytics and reporting tools.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 text-[#0E6A75] mb-4" />
                <h3 className="text-lg font-bold mb-2">Security & Compliance</h3>
                <p className="text-sm text-gray-500">Ensure your operations meet industry standards with our security features.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" style={{ background: 'linear-gradient(45deg, rgb(19 148 159 / 50%), 50%, transparent)' }}>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or want to learn more? We&#39;re here to help.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="mailto:info@cargo-navis.com">
                  <Button className="bg-[#0E6A75] text-white hover:bg-[#0E6A75]/90 inline-flex items-center px-4 py-2">
                    <EnvelopeIcon />
                    <span>Email Us</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Cargo Navis d.o.o. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}