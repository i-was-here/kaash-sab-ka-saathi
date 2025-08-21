import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kaash
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#audience" className="text-muted-foreground hover:text-primary transition-colors">
              Who It's For
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" className="hidden md:flex" onClick={() => window.open("https://wa.me/918618791312", "_blank")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
