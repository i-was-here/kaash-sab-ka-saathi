import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of Indian entrepreneurs who are already using Kaash to 
            automate their business operations and scale rapidly.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg font-semibold px-8 shadow-glow">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg font-semibold px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call & Talk to ARP
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">5 Min</div>
              <div className="text-white/80">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-white/80">Indian Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">AI Assistant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;