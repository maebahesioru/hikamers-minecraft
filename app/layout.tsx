import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://hikamerscraft.f5.si'),
  title: {
    default: "ヒカマーズマイクラ - 統合版&Java版対応マインクラフトサーバー",
    template: "%s | ヒカマーズマイクラ",
  },
  description: "ヒカマーズマイクラは統合版&Java版どちらも参加可能なマインクラフトサーバー。便利なプラグイン13種類以上、クロスプレイ対応、24時間稼働。IPアドレス: hikamerscraft.f5.si",
  keywords: [
    "マインクラフト",
    "Minecraft",
    "マイクラサーバー",
    "統合版",
    "Java版",
    "Bedrock",
    "クロスプレイ",
    "ヒカマーズマイクラ",
    "hikamerscraft",
    "マルチプレイ",
    "サーバー",
    "無料",
    "24時間",
    "プラグイン",
    "データパック",
  ],
  authors: [{ name: "ヒカマーズマイクラ" }],
  creator: "ヒカマーズマイクラ",
  publisher: "ヒカマーズマイクラ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hikamerscraft.f5.si",
    title: "ヒカマーズマイクラ - 統合版&Java版対応マインクラフトサーバー",
    description: "統合版&Java版どちらも参加可能なマインクラフトサーバー。便利なプラグイン13種類以上、クロスプレイ対応、24時間稼働。",
    siteName: "ヒカマーズマイクラ",
  },
  twitter: {
    card: "summary_large_image",
    title: "ヒカマーズマイクラ",
    description: "統合版&Java版どちらも参加可能なマインクラフトサーバー",
    creator: "@hikamers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hikamerscraft.f5.si',
  },
  category: 'gaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
