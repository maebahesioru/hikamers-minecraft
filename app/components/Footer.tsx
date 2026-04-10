import Link from 'next/link';
import { Home, Server, BookOpen, HelpCircle, ExternalLink, Twitter, Camera } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-green-700/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-sm font-bold">
                H
              </div>
              ヒカマーズマイクラ
            </h3>
            <p className="text-green-200 text-sm">
              統合版&Java版どちらも参加可能なマインクラフトサーバー
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Home size={16} />
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  href="/server-info"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Server size={16} />
                  サーバー情報
                </Link>
              </li>
              <li>
                <Link 
                  href="/features"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  機能一覧
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Camera size={16} />
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <HelpCircle size={16} />
                  Q&A
                </Link>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">サーバー情報</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-green-200">
                <span className="text-green-400">IP:</span> hikamerscraft.f5.si
              </li>
              <li className="text-green-200">
                <span className="text-green-400">Java版:</span> 25565
              </li>
              <li className="text-green-200">
                <span className="text-green-400">統合版:</span> 19132
              </li>
              <li className="text-green-200">
                <span className="text-green-400">定員:</span> 20人
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="http://hikamerscraft.f5.si"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Webマップ
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/search?q=ヒカマーズマイクラ&f=live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Twitter size={16} />
                  #ヒカマーズマイクラ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © 2024 ヒカマーズマイクラ. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link 
                href="/terms"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                利用規約
              </Link>
              <span className="text-green-700">|</span>
              <Link 
                href="/server-info"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                接続方法
              </Link>
              <span className="text-green-700">|</span>
              <Link 
                href="/server-specs"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                サーバースペック
              </Link>
              <span className="text-green-700">|</span>
              <Link 
                href="/faq"
                className="text-green-200 hover:text-green-400 transition-colors"
              >
                よくある質問
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
