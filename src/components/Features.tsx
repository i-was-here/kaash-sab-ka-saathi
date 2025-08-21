import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Smartphone, Globe, TrendingUp, Bot, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp ERP Setup",
      description: "Speak, text, or call on WhatsApp to build your ERP system instantly. No technical knowledge required.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Smart Business Intelligence",
      description: "Track inventory, get low-stock alerts, and receive actionable insights for better decision-making.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Auto-Listing & Lead Generation",
      description: "Automatically create product listings across marketplaces and get intelligent follow-up prompts.",
      color: "text-accent"
    },
    {
      icon: Bot,
      title: "Voice-Enabled Assistant",
      description: "Interact naturally with your digital assistant through voice or text in real-time conversations.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "10+ Indian Languages",
      description: "Communicate fluently in Hindi, Tamil, Telugu, Kannada, and 7 other Indian languages.",
      color: "text-secondary"
    },
    {
      icon: Smartphone,
      title: "Call Your ARP",
      description: "Simply call and talk to your Agentic Resource Planner like speaking to a business assistant.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kaash combines accessibility, automation, and intelligence in one seamless experience 
            designed specifically for Indian micro-businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-glow transition-smooth border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;