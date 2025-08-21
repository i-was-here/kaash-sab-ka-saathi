import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingCart, Languages, Clock } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: "Micro-Business Owners",
      description: "Perfect for entrepreneurs selling via WhatsApp and digital platforms who need organized business systems.",
      stats: "70% of small sellers in India"
    },
    {
      icon: ShoppingCart,
      title: "Online Sellers Without ERP",
      description: "Individual sellers and small teams managing sales manually who need automated inventory and listing tools.",
      stats: "60M+ sellers nationwide"
    },
    {
      icon: Languages,
      title: "Regional Language Entrepreneurs",
      description: "Business owners comfortable in Hindi, Tamil, Telugu, and other Indian languages who need native support.",
      stats: "10+ languages supported"
    },
    {
      icon: Clock,
      title: "Time-Constrained Business Owners",
      description: "Busy entrepreneurs who need fast setup and minimal friction to focus on growth instead of admin tasks.",
      stats: "Setup in under 5 minutes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Indian Entrepreneurs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kaash understands the unique challenges of Indian micro-businesses and provides 
            solutions tailored to local needs and languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card key={index} className="shadow-card border-0 hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-secondary rounded-lg p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{audience.title}</CardTitle>
                      <div className="text-sm font-semibold text-primary mb-3">{audience.stats}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {audience.description}
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

export default TargetAudience;