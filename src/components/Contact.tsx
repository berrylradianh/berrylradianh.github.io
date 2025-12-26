import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ContactInfo } from '../types';

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo: ContactInfo[] = [
    {
      type: 'email',
      label: 'Gmail',
      value: 'berrylhamesha@gmail.com',
      url: 'mailto:berrylhamesha@gmail.com',
      icon: '/assets/email.png',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'Berryl Radian Hamesha',
      url: 'https://www.linkedin.com/in/berryl-radian-hamesha-475936205/',
      icon: '/assets/linkedin.png',
    },
  ];

  return (
    <section
      id="contact"
      ref={contactRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-20 px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-neon-purple text-lg font-semibold mb-3 tracking-wide uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contactInfo.map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-8 flex items-center gap-6 group"
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full ${
                    contact.type === 'email' 
                      ? 'bg-[#EA4335] group-hover:bg-[#d33426]' 
                      : 'bg-[#0077b5] group-hover:bg-[#006399]'
                  } flex items-center justify-center transition-colors`}
                >
                  <img
                    src={contact.icon}
                    alt={contact.label}
                    className="w-10 h-10 brightness-0 invert transition-opacity"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-400 text-sm mb-1 uppercase tracking-wide">
                  {contact.label}
                </h3>
                <p
                  className={`text-white font-semibold text-lg ${
                    contact.type === 'email'
                      ? 'group-hover:text-neon-cyan'
                      : 'group-hover:text-neon-purple'
                  } transition-colors`}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-card p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="text-center p-4 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                  <p className="text-neon-cyan font-semibold">
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-lg">Let's build something amazing together!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
