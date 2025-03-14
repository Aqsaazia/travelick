import React from 'react';
import { Shield, Users, Clock, Play } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <div className="flex items-center space-x-2">
              <span>Home</span>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-subtitle">ABOUT US</span>
              <h2 className="section-title">We provide the best tour facilities</h2>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: Shield,
                    title: "Safety First Always",
                    description: "Your safety is our top priority"
                  },
                  {
                    icon: Users,
                    title: "Expert Tour Guide",
                    description: "Professional guide services"
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    description: "Always here to help you"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
                alt="Tour group"
                className="rounded"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
                  alt="Adventure"
                  className="rounded"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">ARE YOU READY TO TRAVEL</h2>
            <p className="text-2xl font-light">Travelite is a World Leading Online Tour Booking Platform</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "890+", label: "Total Donation" },
              { number: "570+", label: "Campaigns Closed" },
              { number: "930+", label: "Happy People" },
              { number: "69+", label: "Our Volunteers" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;