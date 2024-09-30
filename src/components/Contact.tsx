import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
  
    emailjs
      .send(
        'service_gmail',
        'template_Gmail',
        templateParams,
        'user_IHRGGhVTd23bgxGFJ'
      )
      .then(
        (_result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
        <motion.form
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
