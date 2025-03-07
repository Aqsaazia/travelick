import React from 'react';
import { Link, useParams } from 'react-router-dom';

const blogPosts = {
  1: {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "A tour of the best High Altitude Campsites",
    author: "Edwards Lee",
    date: "June 16, 2024",
    content: `Sed eros dolor, pulvinar nec luctus a, malesuada ac nisi. Aliquam eleifend est dui et suscipit. Nam semper accumsan ante, ac dapibus urna dapibus ut. Aenean laoreet, quam nibh in porttitor. Aenean vel eros posuere, blandit ligula et, lobortis tellus. Morto quis nunc in risus ornare egestas et ae. Donec.

    Ut interdum tristique nunc eget lacus egestas aliquam. Sed eros dolor, pulvinar nec luctus a, malesuada ac nisi. Aliquam eleifend est dui et suscipit. Nam semper accumsan ante, ac dapibus urna dapibus ut. Aenean laoreet, quam nibh in porttitor.`
  },
  2: {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    title: "A place where start new life with adventure travel",
    author: "Edwards Lee",
    date: "July 06, 2024",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur passage of Lorem Ipsum vel quam id amet lectus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  },
  3: {
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
    title: "Travel the most beautiful places in the world",
    author: "Edwards Lee",
    date: "June 20, 2024",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  }
};

const recentPosts = [
  {
    id: 1,
    title: "There Are Many Variations Passages",
    date: "Jan 26, 2024",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  },
  {
    id: 2,
    title: "The point of using Lorem ipsum",
    date: "Jan 06, 2024",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    id: 3,
    title: "The leap into electronic typesetting",
    date: "Jan 16, 2024",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    id: 4,
    title: "It has survived not only five centuries",
    date: "Jan 06, 2024",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];

const BlogSinglePage = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return <div>Blog post not found</div>;
  }

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
            <h1 className="text-5xl font-bold mb-4">Blog Single</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-primary">Blog Single</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
                  <div className="prose max-w-none">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                    <blockquote className="border-l-4 border-primary pl-4 italic my-8">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </blockquote>
                  </div>

                  {/* Author Section */}
                  <div className="mt-8 border-t pt-8">
                    <h3 className="text-xl font-bold mb-4">Posted By Admin</h3>
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                        alt="Author"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="font-semibold">Marion Alvarado</h4>
                        <p className="text-gray-600">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-8 border-t pt-8">
                    <h3 className="text-xl font-bold mb-6">Comments</h3>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Jhini Snow",
                          date: "15.04.2023",
                          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                          comment: "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody, depressed bunch, can't we?"
                        },
                        {
                          name: "Steffi Smith",
                          date: "23.05.2023",
                          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur passage of Lorem Ipsum vel quam id amet lectus."
                        }
                      ].map((comment, index) => (
                        <div key={index} className="flex space-x-4">
                          <img
                            src={comment.image}
                            alt={comment.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">{comment.name}</h4>
                              <span className="text-gray-500 text-sm">{comment.date}</span>
                            </div>
                            <p className="text-gray-600 mt-1">{comment.comment}</p>
                            <button className="text-primary mt-2 text-sm">Reply</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comment Form */}
                  <div className="mt-8 border-t pt-8">
                    <h3 className="text-xl font-bold mb-6">Leave A Comments</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <textarea
                        rows={4}
                        placeholder="Enter Your Message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
                      >
                        Submit →
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-6">Recent Post</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 rounded object-cover"
                      />
                      <div>
                        <h4 className="font-semibold hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSinglePage;