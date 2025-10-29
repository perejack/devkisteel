import { Link } from "react-router-dom";
import { ArrowRight, Building, Shield, Award, Truck } from "lucide-react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, getProductsByCategory } from "@/data/products";

const Home = () => {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);
  
  const categories = [
    {
      name: "Steel Bars",
      description: "Deformed and round steel bars for construction",
      image: "/images/tmtsteel.jpg",
      count: getProductsByCategory("Steel Bars").length,
      href: "/category/steel-bars"
    },
    {
      name: "Security Products", 
      description: "Barbed wire and chain link fencing",
      image: "/images/chain-link-fence-concertina-wire.jpg",
      count: getProductsByCategory("Security Products").length,
      href: "/category/security-products"
    },
    {
      name: "BRC Mesh",
      description: "Welded reinforcement mesh for concrete",
      image: "/images/welded-wire-mesh-plants-for-reinforcement-mesh-brc-.jpg",
      count: getProductsByCategory("BRC Mesh").length,
      href: "/category/brc-mesh"
    },
    {
      name: "Construction Materials",
      description: "Essential building materials and supplies",
      image: "/images/7e97e58a0eab8716fe2c1c34a2769067.jpg",
      count: getProductsByCategory("Construction Materials").length,
      href: "/category/construction-materials"
    }
  ];

  const features = [
    {
      title: "KEBS Certified",
      description: "All our products meet Kenya Bureau of Standards quality requirements"
    },
    {
      title: "Fast Delivery",
      description: "Quick delivery across Kenya with our efficient logistics network"
    },
    {
      title: "Competitive Pricing",
      description: "Best market prices with flexible payment terms for bulk orders"
    },
    {
      title: "Expert Support",
      description: "Technical support and consultation for your construction projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of premium steel products for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 h-10">{category.description}</p>
                  <p className="text-xs text-accent font-semibold mb-4">
                    {category.count} Products Available
                  </p>
                  <Link to={category.href}>
                    <Button variant="outline" className="w-full">
                      Browse Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid 
        products={featuredProducts} 
        title="Featured Products" 
        showFilters={false}
      />

      {/* Features Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DevKi?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Industry-leading quality, service, and reliability for over two decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-industrial-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-industrial-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a custom quote for your steel requirements. Our team is ready to help you choose the right products for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="industrial" className="text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;