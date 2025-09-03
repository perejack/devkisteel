import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-steel.jpg";

const Hero = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "KEBS certified steel products for reliable construction"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick delivery across Kenya for your project needs"
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "Over 20 years of excellence in steel manufacturing"
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Future
              <span className="block text-red-600">Rests on Steel</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed">
              Premium quality steel products for construction excellence. 
              From deformed bars to security solutions - building Kenya's future, one structure at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button size="lg" variant="destructive" className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="ghost" className="text-lg px-8 py-4 text-white hover:bg-white/10">
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-industrial-orange/20 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-industrial-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;