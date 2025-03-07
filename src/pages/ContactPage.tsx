import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
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
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2">Location :</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="mt-1" />
                    <p>Tpwits 17 hills</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Call Us :</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone />
                      <p>+1-1111-000-000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone />
                      <p>+1-111-111-111</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Mail Us :</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Mail />
                      <p>dummy@example.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail />
                      <p>test@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Your Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <textarea
                  rows={6}
                  placeholder="Enter Your Message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.28068968446431!3d44.96873997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b33290c18f6d2b%3A0x4eca2d7f68b73f40!2sWalker%20Art%20Center!5e0!3m2!1sen!2sus!4v1623869115012!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
    </div>
  );
};

export default ContactPage;