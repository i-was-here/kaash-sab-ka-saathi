import demoVideo from "@/assets/kaash-arp-demo.mp4";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Watch Kaash in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how easy it is to set up your ERP system and manage your business with Kaash.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <video controls className="w-full rounded-2xl shadow-glow">
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Demo;
