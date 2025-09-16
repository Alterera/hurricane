import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'hello@bidyutnath.com',
      link: 'mailto:hello@bidyutnath.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+91 7577-0603-94',
      link: 'tel:+917577060394'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      detail: 'Nagaon, Assam, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <BsWhatsapp className="w-6 h-6" />,
      name: 'Whatsapp',
      url: 'https://wa.me/917577060394',
      color: 'hover:text-green-500'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      url: 'https://www.instagram.com/biiidyut1/',
      color: 'hover:text-pink-400'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: 'Instagram',
      url: 'https://www.facebook.com/bidyut.nath.9883',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section
      id="contact"
      className={`myfont py-20 transition-colors duration-300 bg-gray-900 text-gray-100`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-semibold mb-6 text-gray-100`}
                >
                  Let's Connect
                </h3>
                <p
                  className={`mb-8 leading-relaxed text-gray-400`}
                >
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology. Feel free to
                  reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700'
                        `}
                  >
                    <div
                      className={`p-3 rounded-lg bg-gray-700 text-white`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-gray-100`}
                      >
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`transition-colors duration-200 text-gray-400 hover:text-white`}
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p
                          className={`text-gray-400`}
                        >
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4
                  className={`text-lg font-semibold mb-4 text-gray-100`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg bg-gray-800 text-gray-300
                      } ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex h-[80vh] flex-col items-center justify-center">
              <div className="w-full max-w-lg bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Get In Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Contact</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Write your message..."
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-full bg-black text-white border border-gray-700 hover:bg-gray-900 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
