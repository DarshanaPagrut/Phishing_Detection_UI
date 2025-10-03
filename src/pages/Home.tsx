import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RiskModal from '../components/RiskModal';
import { MagnifyingGlassIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { dummyURLChecks } from '../data/dummyData';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentResult, setCurrentResult] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRiskWarning, setShowRiskWarning] = useState(false);

  const checkURL = async () => {
    if (!url.trim()) return;

    setIsChecking(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if URL exists in dummy data
    const existingCheck = dummyURLChecks.find(check => 
      check.url.toLowerCase().includes(url.toLowerCase().replace(/https?:\/\//, ''))
    );

    let result;
    if (existingCheck) {
      result = {
        url: url,
        riskScore: existingCheck.riskScore,
        riskReasons: existingCheck.riskReasons
      };
    } else {
      // Generate random result for new URLs
      const riskScore = Math.floor(Math.random() * 100);
      const reasons = riskScore > 70 ? [
        'Domain analysis required',
        'SSL certificate check needed',
        'Reputation verification pending'
      ] : riskScore > 30 ? [
        'Minor security concerns detected'
      ] : [];

      result = {
        url: url,
        riskScore: riskScore,
        riskReasons: reasons
      };
    }

    setCurrentResult(result);
    setIsChecking(false);
    setShowModal(true);
  };

  const handleBlock = () => {
    setShowModal(false);
    setUrl('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleContinue = () => {
    setShowModal(false);
    if (currentResult?.riskScore >= 30) {
      setShowRiskWarning(true);
      setTimeout(() => setShowRiskWarning(false), 3000);
    } else {
      // Open URL in new tab for safe sites
      window.open(url, '_blank');
    }
    setUrl('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto pt-16 pb-12 px-4">
        <div className="text-center mb-12">
          <ShieldCheckIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Phishing Detection System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Enter a website URL to check for potential phishing threats and security risks
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter a website URL (e.g., https://example.com)..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                onKeyPress={(e) => e.key === 'Enter' && checkURL()}
                disabled={isChecking}
              />
            </div>
            
            <button
              onClick={checkURL}
              disabled={!url.trim() || isChecking}
              className="bg-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              {isChecking ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Analyzing URL...
                </>
              ) : (
                'Check Now'
              )}
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Try these sample URLs:
            </h3>
            <div className="grid gap-2">
              <button
                onClick={() => setUrl('http://paypal-login.tk')}
                className="text-left text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              >
                http://paypal-login.tk (High Risk)
              </button>
              <button
                onClick={() => setUrl('https://github.com')}
                className="text-left text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              >
                https://github.com (Safe)
              </button>
              <button
                onClick={() => setUrl('http://secure-login-portal.net')}
                className="text-left text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              >
                http://secure-login-portal.net (Suspicious)
              </button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50">
            <div className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              Site successfully blocked!
            </div>
          </div>
        )}

        {/* Risk Warning */}
        {showRiskWarning && (
          <div className="fixed top-4 right-4 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50">
            <div className="flex items-center">
              <span className="mr-2">⚠️</span>
              Proceeding with caution - Site marked as risky
            </div>
          </div>
        )}

        {/* Risk Modal */}
        {showModal && currentResult && (
          <RiskModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            url={currentResult.url}
            riskScore={currentResult.riskScore}
            riskReasons={currentResult.riskReasons}
            onBlock={handleBlock}
            onContinue={handleContinue}
          />
        )}
      </div>
    </div>
  );
}