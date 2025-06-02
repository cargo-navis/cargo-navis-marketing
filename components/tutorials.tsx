'use client'

import Link from 'next/link'
import { Playfair_Display_SC } from 'next/font/google'
import { TruckIcon } from '@heroicons/react/24/outline'

const playfairDisplaySc = Playfair_Display_SC({ subsets: ['latin'], weight: ['400', '700'] })

export function TutorialsComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <TruckIcon className="h-6 w-6 text-[#0E6A75]" />
          <span className={`ml-2 text-2xl font-bold text-gray-900 ${playfairDisplaySc.className}`}>CargoNavis</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8" style={{ background: "linear-gradient(45deg, rgb(19 148 159 / 40%), 50%, transparent)" }}>
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-3xl font-bold mb-6 ${playfairDisplaySc.className}`}>Tutorials</h1>
          
          <p className="mb-4">Welcome to the CargoNavis Tutorials section. Here you&apos;ll find comprehensive video guides that will help you master our platform&apos;s features and make the most of your logistics operations. Whether you&apos;re new to CargoNavis or looking to enhance your existing knowledge, these tutorials are designed to provide clear, step-by-step instructions for every aspect of our system.</p>
          
          <p className="mb-8">Our goal is to empower you with the knowledge and skills needed to efficiently manage your transportation business. From basic navigation to advanced features, these tutorials will guide you through every step of the process.</p>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Login (Authentication)</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Getting Started with CargoNavis</h3>
              <p className="mb-4">Learn how to create an account and securely log in to your CargoNavis dashboard.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/login.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Shipments</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Shipment Overview</h3>
              <p className="mb-4">Learn about the essential shipment data points including pricing, cargo details, dates, locations, and how to effectively track and manage this information in your dashboard.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/shipment-management.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Shipment Management</h3>
              <p className="mb-4">Learn how to create new shipments, copying existing ones, manage invoice statuses, handle cargo data, and generate PDF documents for your shipments.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/how-to-shipments.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Shipment Alerts</h3>
              <p className="mb-4">Discover visual indicators that help you identify shipments that are not complete or properly assigned, ensuring you never miss critical updates.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/shipment-alerts.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Fleet</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Fleet Management Basics</h3>
              <p className="mb-4">Learn how to add and manage your vehicles in the CargoNavis system.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/fleet-management.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Alerts</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Alert Management</h3>
              <p className="mb-4">Learn how to manage alerts for document expirations, maintenance schedules, and other important notifications.</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/alerts.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfairDisplaySc.className}`}>Employees</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Employee Management</h3>
              <p className="mb-4">Set up and manage your team members with proper roles.</p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 mt-8 border-t">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 CargoNavis. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
} 