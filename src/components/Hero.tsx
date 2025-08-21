import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Empower Your</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Micro-Business
                </span>
                <br />
                <span className="text-foreground">with Kaash</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Set up your ERP system in minutes via WhatsApp. Manage inventory, 
                generate leads, and grow your business—all in your preferred Indian language.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg font-semibold">
                Get Started on WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>

            {/* Language Support Badge */}
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">10+ Languages:</strong> Hindi • Tamil • Telugu • Kannada • Marathi • Bengali • Gujarati • Malayalam • Punjabi • Odia
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Indian entrepreneur managing business through Kaash digital assistant"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glow"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card">
                Setup in Minutes!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;