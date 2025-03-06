import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const guides = [
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    name: "Leslie Alexander",
    role: "Tour Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    name: "Robert Fox",
    role: "Consultant"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Jenny Wilson",
    role: "Tour Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Darlene Robertson",
    role: "Tour Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Fred Andrew",
    role: "Consultant"
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    name: "Yuni Albert",
    role: "Tour Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    name: "Jessica Brown",
    role: "Consultant"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Fred Andrew",
    role: "Tour Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    name: "Max Panelyk",
    role: "Tour Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Dennis Fletcher",
    role: "Consultant"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Anna Bryan",
    role: "Tour Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    name: "Taylor Ducket",
    role: "Tour Manager"
  }
];

const testimonials = [
  {
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit was officia consequat duis enim velit mollit as Exercitation veniam consequat sunt.",
    name: "Ralph Edwards",
    role: "Tour Guide",
    rating: 4,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  },
  {
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit was officia consequat duis enim velit mollit as Exercitation veniam consequat sunt.",
    name: "Ralph Edwards",
    role: "Tour Guide",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  }
];

const TourGuidePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Tours</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Tour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Guides Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">TOURS GUIDE</span>
            <h2 className="section-title">Our Travel Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative">
                  <img 
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-primary"><Facebook size={20} /></a>
                      <a href="#" className="text-white hover:text-primary"><Twitter size={20} /></a>
                      <a href="#" className="text-white hover:text-primary"><Instagram size={20} /></a>
                      <a href="#" className="text-white hover:text-primary"><Linkedin size={20} /></a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
                  <p className="text-gray-600">{guide.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">TESTIMONIAL</span>
            <h2 className="section-title">What The People Thinks About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                alt="Trekking Sale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="text-white text-3xl font-bold mb-4">Monthly Sale<br />Trekking Apparel</h3>
                <p className="text-white mb-4">Up to 50% Off</p>
                <button className="bg-primary text-white px-6 py-2 rounded w-fit hover:bg-primary-dark transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden bg-secondary">
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="text-white text-3xl font-bold mb-4">Explore The World</h3>
                <p className="text-white/80 mb-4">New Adventure Tour</p>
                <button className="bg-primary text-white px-6 py-2 rounded w-fit hover:bg-primary-dark transition-colors">
                  Book Now
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
                alt="World Tour"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourGuidePage;