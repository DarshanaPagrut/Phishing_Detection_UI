import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheckIcon, MagnifyingGlassIcon, ChartBarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar variant="landing" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <ShieldCheckIcon className="h-24 w-24 text-blue-600 mx-auto mb-6" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AEGIS
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Advanced Engine for Guarded Internet Surfing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Protecting you from phishing, scams, and malicious websites with real-time URL analysis and intelligent threat detection.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Protection Features
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              AEGIS uses advanced algorithms and machine learning to analyze URLs in real-time, providing you with instant threat assessments and protection recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <MagnifyingGlassIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🔍 Real-time URL Checking
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Instant analysis of website URLs with comprehensive risk assessment and threat detection algorithms.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
              <ExclamationTriangleIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🚫 Block Malicious Sites
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Automatically block dangerous websites and provide warnings for suspicious content with detailed risk explanations.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <ChartBarIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                📊 Analytics Dashboard
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive analytics with charts, statistics, and detailed reporting on your browsing protection history.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300">
              <ShieldCheckIcon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🛡️ Guarded Safe Browsing
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced protection algorithms that learn from global threat patterns to keep you safe from emerging threats.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to browse safely?</h4>
              <p className="text-blue-100 mb-6">Join thousands of users who trust AEGIS to protect their online experience.</p>
              <Link
                to="/register"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Your Protection Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}