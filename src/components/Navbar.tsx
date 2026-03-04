import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="HireShield logo" className="w-8 h-8" />
          <span className="text-lg font-bold font-display text-foreground">HireShield</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#scoring" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Scoring</a>
        </div>

        <Button variant="hero" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
