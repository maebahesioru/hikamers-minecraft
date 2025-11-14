'use client';

import { Camera } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageModal } from '../components/ImageModal';
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ギャラリー</h1>
          <p className="text-green-200 text-lg">ヒカマーズマイクラのスクリーンショット集</p>
        </div>

        {/* Social Reminder */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-green-400" size={32} />
            <h2 className="text-2xl font-bold text-green-400">スクショを投稿しよう！</h2>
          </div>
          <p className="text-white mb-4">
            あなたの建築物や冒険の様子を{' '}
            <a 
              href="https://x.com/search?q=ヒカマーズマイクラ&f=live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline font-semibold"
            >
              #ヒカマーズマイクラ
            </a>
            {' '}のハッシュタグをつけて投稿してください！
          </p>
          <p className="text-green-200 text-sm">
            素敵なスクリーンショットはこのギャラリーに掲載されるかもしれません。
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 mb-8 border border-green-700/50">
          <h2 className="text-3xl font-bold text-green-400 mb-6">スクリーンショット</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Screenshot 1 */}
            <button
              onClick={() => setSelectedImage({ src: '/gallery/screenshot-1.jpg', alt: 'ヒカマーズマイクラのスクリーンショット' })}
              className="group relative overflow-hidden rounded-lg border border-green-700/50 hover:border-green-500/50 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="relative aspect-video bg-green-900/30">
                <Image
                  src="/gallery/screenshot-1.jpg"
                  alt="ヒカマーズマイクラのスクリーンショット"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">ヒカマーズマイクラの世界</p>
                  <p className="text-green-400 text-xs mt-1">クリックで拡大</p>
                </div>
              </div>
            </button>

            {/* Placeholder for more screenshots */}
            <div className="relative overflow-hidden rounded-lg border border-green-700/50 bg-green-900/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Camera className="mx-auto mb-3 text-green-400/50" size={48} />
                <p className="text-green-400/50 text-sm">もっと見る</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-green-700/50 bg-green-900/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Camera className="mx-auto mb-3 text-green-400/50" size={48} />
                <p className="text-green-400/50 text-sm">もっと見る</p>
              </div>
            </div>
          </div>
        </section>

        {/* Twitter Feed Section */}
        <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8 border border-green-700/50">
          <h2 className="text-3xl font-bold text-green-400 mb-6">コミュニティの投稿</h2>
          <p className="text-white mb-6">
            Twitterで{' '}
            <a 
              href="https://x.com/search?q=ヒカマーズマイクラ&f=live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline font-semibold"
            >
              #ヒカマーズマイクラ
            </a>
            {' '}をチェックして、他のプレイヤーの投稿を見てみましょう！
          </p>
          <a 
            href="https://x.com/search?q=ヒカマーズマイクラ&f=live" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Camera size={20} />
            Twitterで見る
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      <ImageModal
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
