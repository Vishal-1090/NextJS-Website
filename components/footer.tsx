import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background">
      {/* Main Footer */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand + Address */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl text-foreground">
             Dr. Maya Reynolds, PsyD
            </h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <p>123th Street 45 W, </p>
              <p> Santa Monica, CA 90401</p>
              <br />
              <Link href="mailto:email@example.com" className="hover:text-foreground transition-colors">
                drmayareynolds@gmail.com
              </Link>
              <br />
              <Link href="tel:5555555555" className="hover:text-foreground transition-colors">
                (+1) 9876543210
              </Link>
            </div>
          </div>

        
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-base text-foreground">Hours</h4>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <p>{"Monday \u2013 Friday"}</p>
              <p>10am - 6pm</p>
            </div>
          </div>

          {/* Column 3: Find */}
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="font-serif text-base text-foreground md:text-right">
              Find
            </h4>
            <nav className="flex flex-col gap-1 text-muted-foreground text-sm md:text-right">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="#blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>

     
      <div className="bg-[hsl(var(--section-light))]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8">
          <div className="text-center text-muted-foreground text-xs md:text-sm flex flex-col gap-3">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy & Cookies Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Good Faith Estimate
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Website Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Disclaimer
              </Link>
            </div>
            <p>
              All Rights Reserved &copy; 2024 Dr. Maya Reynolds, PsyD 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
