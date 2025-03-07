import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Monitor } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "A tour of the best High Altitude Campsites",
    author: "Edwards Lee",
    date: "June 16,2024",
    category: "Adventure",
    excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    title: "A place where start new life with adventure travel",
    author: "Edwards Lee",
    date: "July 06,2024",
    category: "Travel",
    excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
    title: "Travel the most beautiful places in the world",
    author: "Edwards Lee",
    date: "June 20,2024",
    category: "Travel",
    excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  
];

const services = [
  {
    icon: Globe,
    title: "Lot Of Choices",
    description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
  },
  {
    icon: Users,
    title: "Best Tour Guide",
    description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
  },
  {
    icon: Monitor,
    title: "Easy Booking",
    description: "Amet minim mollit non deserunt ullamco aliqua dolor do amet sint Velit."
  }
];

const BlogPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527631746610-bca00a040d60")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">OUR BLOG</span>
            <h2 className="section-title">Get the Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold mb-4 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-subtitle">WHAT WE SERVE</span>
            <h2 className="section-title">Top Values For You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
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
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;