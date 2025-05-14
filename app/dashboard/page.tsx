"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Bell, Home, LogOut, Menu, MessageSquare, Rocket, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    // This would be replaced with actual logout logic
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl">DigiGrowth</span>
            </Link>
          </div>
          <nav className="grid gap-1 p-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/campaigns"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              Campaigns
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
          <div className="absolute bottom-4 left-4">
            <Button variant="ghost" className="gap-2" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <div className="flex items-center gap-2 md:hidden">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="font-bold">DigiGrowth</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Avatar"
              className="rounded-full"
              height={32}
              width={32}
            />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 flex-col border-r md:flex">
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl">DigiGrowth</span>
            </Link>
          </div>
          <nav className="grid gap-1 p-2">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/campaigns"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
            >
              <BarChart3 className="h-5 w-5" />
              Campaigns
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
          <div className="mt-auto p-4">
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-4 md:gap-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-gray-500">Here's what's happening with your campaigns today.</p>
              </div>
              <Button>Create Campaign</Button>
            </div>

            {/* Stats cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">452.4K</div>
                  <p className="text-xs text-green-500">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32.7K</div>
                  <p className="text-xs text-green-500">+8.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.6%</div>
                  <p className="text-xs text-green-500">+1.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">2 ending this week</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent campaigns */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>Your 5 most recent marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Summer Sale Promotion",
                      status: "Active",
                      impressions: "125.4K",
                      clicks: "12.3K",
                      conversion: "4.2%",
                    },
                    {
                      name: "Product Launch - XYZ",
                      status: "Active",
                      impressions: "98.7K",
                      clicks: "8.5K",
                      conversion: "3.8%",
                    },
                    {
                      name: "Holiday Special",
                      status: "Scheduled",
                      impressions: "0",
                      clicks: "0",
                      conversion: "0%",
                    },
                    {
                      name: "Brand Awareness",
                      status: "Active",
                      impressions: "215.2K",
                      clicks: "9.8K",
                      conversion: "2.1%",
                    },
                    {
                      name: "Retargeting Campaign",
                      status: "Active",
                      impressions: "78.6K",
                      clicks: "5.4K",
                      conversion: "6.2%",
                    },
                  ].map((campaign, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-sm text-gray-500">
                          Status:{" "}
                          <span className={campaign.status === "Active" ? "text-green-500" : "text-orange-500"}>
                            {campaign.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="text-right">
                          <div className="font-medium">{campaign.impressions}</div>
                          <div className="text-gray-500">Impressions</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{campaign.clicks}</div>
                          <div className="text-gray-500">Clicks</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{campaign.conversion}</div>
                          <div className="text-gray-500">Conversion</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
