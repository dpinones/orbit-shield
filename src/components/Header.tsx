'use client';

import { useState } from 'react';
import Link from "next/link";
import { useWalletContext } from './WalletContext';
import { useWallet } from '../app/hooks/useWallet';

export default function Header() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { connected, address, name } = useWalletContext();
  const { disconnectWallet } = useWallet();

  const handleDisconnect = async () => {
    await disconnectWallet();
  };

  return (
    <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Tabs */}
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('markets')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'markets'
                  ? 'glow-blue bg-black/30 text-white'
                  : 'text-gray-400 hover:text-white hover:glow-blue'
              }`}
            >
              MARKETS
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'dashboard'
                  ? 'glow-blue bg-black/30 text-white'
                  : 'text-gray-400 hover:text-white hover:glow-blue'
              }`}
            >
              DASHBOARD
            </button>
          </div>

          {/* Wallet Connection */}
          {connected ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 glow-purple bg-black/30 px-4 py-2 border-0">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {name?.charAt(0).toUpperCase() || 'W'}
                  </span>
                </div>
                <span className="text-white text-sm font-medium">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
                </span>
              </div>
              <button
                onClick={handleDisconnect}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <Link 
              href="/wallet"
              className="bg-[#15949C] hover:bg-[#15949C]/90 text-white font-medium px-6 py-2.5 rounded-full transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
                />
              </svg>
              Connect Wallet
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
