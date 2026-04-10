'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Server, BookOpen, HelpCircle, Camera } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black/30 backdrop-blur-sm border-b border-green-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center font-bold">
              H
            </div>
            <span className="font-bold text-lg hidden sm:inline">ヒカマーズマイクラ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/"
              className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <Home size={18} />
              ホーム
            </Link>
            <Link 
              href="/server-info"
              className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <Server size={18} />
              サーバー情報
            </Link>
            <Link 
              href="/features"
              className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <BookOpen size={18} />
              機能一覧
            </Link>
            <Link 
              href="/gallery"
              className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <Camera size={18} />
              ギャラリー
            </Link>
            <Link 
              href="/faq"
              className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <HelpCircle size={18} />
              Q&A
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-700/50">
            <div className="flex flex-col gap-4">
              <Link 
                href="/"
                className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2 py-2"
                onClick={closeMenu}
              >
                <Home size={18} />
                ホーム
              </Link>
              <Link 
                href="/server-info"
                className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2 py-2"
                onClick={closeMenu}
              >
                <Server size={18} />
                サーバー情報
              </Link>
              <Link 
                href="/features"
                className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2 py-2"
                onClick={closeMenu}
              >
                <BookOpen size={18} />
                機能一覧
              </Link>
              <Link 
                href="/gallery"
                className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2 py-2"
                onClick={closeMenu}
              >
                <Camera size={18} />
                ギャラリー
              </Link>
              <Link 
                href="/faq"
                className="text-green-200 hover:text-green-400 transition-colors flex items-center gap-2 py-2"
                onClick={closeMenu}
              >
                <HelpCircle size={18} />
                Q&A
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
