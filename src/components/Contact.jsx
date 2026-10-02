import React, { useState } from 'react';
import { profile, social } from '../data/config.js';
import { Send, Mail, Phone, MessageCircle, Instagram, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      showToast('Semua field harus diisi', 'error');
      return;
    }
    
    if (!validateEmail(email)) {
      showToast('Format email tidak valid', 'error');
      return;
    }
    
    // Fallback: open mailto
    window.location.href = `mailto:${profile.email}?subject=Pesan dari ${name}&body=${encodeURIComponent(message)}%0A%0AEmail pengirim: ${email}`;
    showToast('Pesan berhasil dikirim melalui email!', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="kontak" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Hubungi Saya</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto animate-on-scroll">
        <div className="flex flex-col gap-6">
          <a href={`mailto:${profile.email}`} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center gap-4 card-hover">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-semibold dark:text-white">{profile.email}</p>
            </div>
          </a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center gap-4 card-hover">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
              <p className="font-semibold dark:text-white">{profile.whatsapp}</p>
            </div>
          </a>
          <a href={`tel:${profile.phone}`} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center gap-4 card-hover">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Telepon</p>
              <p className="font-semibold dark:text-white">{profile.phone}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 mt-4">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
            <textarea 
              name="message" 
              rows="4"
              value={formData.message} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white resize-none"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Send className="w-5 h-5" /> Kirim Pesan
          </button>
        </form>
      </div>

      {toast.show && (
        <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg toast ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
          {toast.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
