import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import CallToAction from "@/components/CallToAction";
import Demo from "@/components/Demo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <Demo />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
