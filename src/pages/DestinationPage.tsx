import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    duration: "5 hours",
    title: "Paris City Tour",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    duration: "6 hours",
    title: "Vietnam Ha Long Bay",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    duration: "3 hours",
    title: "Paris Eiffel Tower",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    duration: "4 hours",
    title: "London Bridge Tour",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
    duration: "5 hours",
    title: "Barcelona City Tour",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    duration: "3 hours",
    title: "Japan Temple Tour",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  }
];

const topDestinations = [
  {
    image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb",
    title: "Tour in NewYork",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    price: 1800,
    rating: 4.5,
    reviews: 100
  },
  {
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    title: "Saint Martin Island",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    price: 1800,
    rating: 4.5,
    reviews: 100
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    title: "Perito Moreno Glacier Trail",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    price: 1800,
    rating: 4.5,
    reviews: 100
  }
];

const DestinationPage = () => {
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
            <h1 className="text-5xl font-bold mb-4">Our Destination</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Destination</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded">
                  {destination.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-sm text-white/80">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Seat Section */}
      <section className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3")' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <span className="text-primary uppercase tracking-wider">ARE YOU READY TO TRAVEL?</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">Ready To Travel With Real Adventure And Enjoy Natural</h2>
              <p className="text-white/80">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Book your Seat</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <textarea
                    placeholder="Enter Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  ></textarea>
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
                    Submit →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">TOP ADVENTURE TRIPS</span>
            <h2 className="section-title">Discover Top Destination</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topDestinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-500">From: </span>
                        <span className="text-primary font-semibold">${destination.price}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < Math.floor(destination.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">({destination.reviews} Reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;