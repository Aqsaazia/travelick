import React, { useState, useEffect } from 'react';
import { Star, Shield, Users, Clock, Globe, MapPin, Monitor, Facebook, Twitter, Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: "/src/assests/images/B1-HUNZA.jpg",
    location: "Hunza Valley",
    title: "Explore the World in 360°, one virtual step at a time.",
    description: "From Pakistan’s breathtaking landscapes to global wonders, Travelick brings the world to your fingertips.",
    rating: 4.5,
    reviews: 245
  }
];

const HomePage = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) * 0.02; // Adjust speed
      const moveY = (clientY - centerY) * 0.02;
      
      setTranslate({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const x = (e.clientX / window.innerWidth - 0.5) * 4;
  //     const y = (e.clientY / window.innerHeight - 0.5) * 4;
  //     setTranslate({ x, y });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: `translate(${translate.x}px, ${translate.y}px)`
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full text-white">
                  <span className="inline-block text-primary border-b-2 border-primary w-24 mb-4">
                    {slide.location}
                  </span>
                  <h1 className="text-6xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
                  <button className="btn-primary w-fit">Explore →</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
      {/* Top Destinations Section */}
      <section className="py-16">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">DISCOVER TOP DESTINATION</span>
          <h2 className="section-title">Popular Destinations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                image: "/src/assests/images/hunza.jpg",
                title: "Hunza Valley",
                reviews: "1.5k Reviews"
              },
              {
                image: "/src/assests/images/Karachi-Pakistan.webp",
                title: "Karachi",
                reviews: "2k Reviews"
              },
              {
                image: "/src/assests/images/Islamabad.jpg",
                title: "Islamabad",
                reviews: "1.2k Reviews"
              }
            ].map((destination, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{destination.reviews}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2 className="section-title">We provide the best tour facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "360° Virtual Tours",
                description: "Immersive virtual experiences of Pakistan's finest locations."
              },
              {
                icon: Globe,
                title: "High-Quality Footage",
                description: "Crystal clear 4K virtual tours with authentic sounds."
              },
              {
                icon: Users,
                title: "Virtual Guide",
                description: "AI-powered virtual guide explaining historical significance."
              },
              {
                icon: Globe,
                title: "High-Quality Footage",
                description: "Crystal clear 4K virtual tours with authentic sounds."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-16">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">POPULAR TOURS</span>
          <h2 className="section-title">Most Popular Adventure Tours</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                image: "/src/assests/images/badshahi.jpg",
                title: "Badshahi Mosque",
                location: "Lahore, Pakistan",
                experience: "360° Tour"
              },
              {
                image: "/src/assests/images/Deosai-plains.jpg",
                title: "Deosai Plains",
                location: "Skardu, Pakistan",
                experience: "Virtual Trek"
              },
              {
                image: "/src/assests/images/R.jpg",
                title: "Faisal Mosque",
                location: "Islamabad, Pakistan",
                experience: "Virtual Visit"
              }
            ].map((tour, index) => (
              <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 text-white px-3 py-1 rounded">
                    
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600">{tour.location}</p>
                  <button className="mt-4 w-full btn-primary">Experience Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Serve Section */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">WHAT WE SERVE</span>
          <h2 className="section-title">Top Values For You</h2>
          <p className="text-gray-600 mb-12">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Lot Of Choices",
                description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
              },
              {
                icon: MapPin,
                title: "Best Tour Guide",
                description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
              },
              {
                icon: Monitor,
                title: "Easy Booking",
                description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                  <service.icon size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className=" text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">TOURS GUIDE</span>
          <h2 className="section-title">Our Travel Guide</h2>
          <p className="text-gray-600 mb-12">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.guide-prev',
              nextEl: '.guide-next'
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
                name: "Robert Fox",
                role: "Consultant",
                socials: true
              },
              {
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                name: "Jenny Wilson",
                role: "Tour Manager",
                socials: true
              },
              {
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                name: "Darlene Robertson",
                role: "Tour Guide",
                socials: true
              },
              {
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                name: "Fred Andrew",
                role: "Consultant",
                socials: true
              }
            ].map((guide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={guide.image} 
                    alt={guide.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
                    <p className="text-gray-600">{guide.role}</p>
                    {guide.socials && (
                      <div className="flex justify-center space-x-4 mt-4">
                        <Facebook className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer" />
                        <Twitter className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer" />
                        <Instagram className="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer" />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-end space-x-4 mt-8">
            <button className="guide-prev p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="guide-next p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">TESTIMONIAL</span>
          <h2 className="section-title">What The People Thinks About Us</h2>
          <p className="text-gray-600 mb-12">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            {[...Array(3)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-primary text-white p-8 rounded-lg">
                    <p className="text-lg mb-6">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do that amet sint. Velit was officia consequat duis enim velit mollit as Exercitation veniam consequat sunt.
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold">Ralph Edwards</h4>
                        <p className="text-primary-light">Tour Guide</p>
                        <div className="flex text-yellow-400 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt="Testimonial"
                        className="w-20 h-20 rounded-lg ml-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-600 mb-6">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit was officia consequat duis enim velit mollit as Exercitation veniam consequat sunt.
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">Ralph Edwards</h4>
                        <p className="text-gray-600">Tour Guide</p>
                        <div className="flex text-yellow-400 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt="Testimonial"
                        className="w-20 h-20 rounded-lg ml-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">OUR BLOG</span>
          <h2 className="section-title">Get the Latest News</h2>
          <p className="text-gray-600 mb-12">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.blog-prev',
              nextEl: '.blog-next'
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
                title: "Things to see and do when visiting Japan",
                author: "Edwards Lee",
                date: "July 26,2024",
                tags: ["Adventure", "Travel"]
              },
              {
                image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7",
                title: "A Tour of the Best High Altitude Campsites",
                author: "Edwards Lee",
                date: "June 16,2024",
                tags: ["Adventure"]
              },
              {
                image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
                title: "A place where start new life with adventure travel",
                author: "Edwards Lee",
                date: "July 06,2024",
                tags: ["Travel"]
              }
            ].map((post, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                    <div className="flex gap-2">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-end space-x-4 mt-8">
            <button className="blog-prev p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="blog-next p-2 rounded-full border border-gray-300 hover:border-primary">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;