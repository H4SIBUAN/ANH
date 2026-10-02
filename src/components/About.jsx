import React from 'react';
import { profile } from '../data/config.js';
import { MapPin, Calendar, Mail, Phone, User, Heart } from 'lucide-react';

const About = () => {
  // Extract initials for fallback avatar
  const getInitials = (name) => {
    if (!name) return 'ME';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section id="tentang" className="py-20 px-4">
      <div className="max-w-6xl mx-auto animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block relative">
            Tentang Saya
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Avatar */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Decorative outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              
              {/* Main Avatar Circle */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden z-10">
                {profile?.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-500">
                    {getInitials(profile?.name)}
                  </span>
                )}
              </div>
              
              {/* Decorative Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20">
                <User className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Details */}
          <div>
            <div className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center lg:text-left">
              {profile?.shortBio}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Nama</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.name}</p>
                </div>
              </div>

              {/* Birth Place/Date */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Tempat/Tanggal Lahir</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.birthPlace}, {profile?.birthDate}</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Alamat</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.address}</p>
                </div>
              </div>

              {/* Email */}
              <a href={`mailto:${profile?.email}`} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.email}</p>
                </div>
              </a>

              {/* Phone */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Telepon</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.phone}</p>
                </div>
              </div>

              {/* Status */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex items-center space-x-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Status</p>
                  <p className="font-bold text-gray-900 dark:text-white truncate">{profile?.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
