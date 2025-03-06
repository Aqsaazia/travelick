import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

const tourCategories = [
  {
    icon: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=50&h=50&fit=crop",
    title: "Adventure Tour",
    active: true
  },
  {
    icon: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=50&h=50&fit=crop",
    title: "Cultural Tour"
  },
  {
    icon: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=50&h=50&fit=crop",
    title: "Group Tour"
  },
  {
    icon: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=50&h=50&fit=crop",
    title: "Luxury Tour"
  },
  {
    icon: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=50&h=50&fit=crop",
    title: "Historical Tour"
  }
];

const tours = [
  {
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    title: "Cuba Sailing Adventure",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "10% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "North Island Adventure Tour",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "15% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    title: "Islands Kayaking Tour",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "20% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    title: "Los Glaciares & Fitz Roy Trip",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "10% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    title: "Island Kayak Tour",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "15% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "North Island Adventure Tour",
    location: "Main Street, Brooklyn, NY",
    rating: 4,
    price: 250.00,
    discount: "10% OFF"
  }
];

const popularTours = [
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Perito Moreno Glacier Trail",
    location: "Argentina"
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Tonosi and Bailey",
    location: "Thailand"
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    title: "Kawarau Bridge",
    location: "New Zealand"
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    title: "Kerio Valley",
    location: "Kenya"
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Cortina D'Ampezzo",
    location: "Italy"
  }
];

const ToursPage = () => {
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
            <h1 className="text-5xl font-bold mb-4">Our Tours</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Tour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tourCategories.map((category, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all
                  ${category.active 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:bg-primary hover:text-white'}`}
              >
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-12 h-12 rounded-full object-cover mb-3"
                />
                <span className="text-sm font-medium text-center">{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded">
                    {tour.discount}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-600 hover:text-red-500">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{tour.title}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(tour.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.location}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary font-semibold">${tour.price}</span>
                      <span className="text-gray-500">/Per person</span>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="pb-16">
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

      {/* Popular Tours */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">POPULAR TOURS</span>
            <h2 className="section-title">Most Popular Adventure Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden group">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-white/80">{tour.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToursPage;