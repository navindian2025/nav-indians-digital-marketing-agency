import Link from "next/link"
import { ArrowRight, BarChart, Globe, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">DigiGrowth</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Accelerate Your Digital Growth
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We help businesses like yours reach new heights with data-driven marketing strategies that deliver
                  real results.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Digital Marketing Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Digital Marketing Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of digital marketing services to help your business grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <Globe className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">SEO Optimization</h3>
                <p className="text-center text-gray-500">
                  Improve your search engine rankings and drive organic traffic to your website.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <BarChart className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">PPC Advertising</h3>
                <p className="text-center text-gray-500">
                  Target your ideal customers with precision and maximize your ROI with paid advertising.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Social Media</h3>
                <p className="text-center text-gray-500">
                  Build your brand presence and engage with your audience across social platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Grow Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join hundreds of satisfied clients who have transformed their digital presence with DigiGrowth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <p className="text-sm text-gray-500">© 2025 DigiGrowth. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
