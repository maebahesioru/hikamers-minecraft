export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ヒカマーズマイクラ',
    description: '統合版&Java版どちらも参加可能なマインクラフトサーバー',
    url: 'https://hikamerscraft.f5.si',
    inLanguage: 'ja',
    publisher: {
      '@type': 'Organization',
      name: 'ヒカマーズマイクラ',
      url: 'https://hikamerscraft.f5.si',
    },
  };

  const gameServerData = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'ヒカマーズマイクラサーバー',
    description: '統合版&Java版どちらも参加可能なマインクラフトサーバー。便利なプラグイン13種類以上、クロスプレイ対応。',
    gamePlatform: ['PC', 'Xbox', 'PlayStation', 'Nintendo Switch', 'iOS', 'Android'],
    genre: 'Sandbox',
    applicationCategory: 'Game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'トラップ等の装置は統合版とJava版どちらの仕様のを作ればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '基本サーバーはJava版仕様なのでJava版の仕様のトラップを作ってください。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのバージョンで接続できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Java版は1.7.10から1.21.10まで対応しています。最新バージョン（1.21.10）での接続を推奨します。',
        },
      },
      {
        '@type': 'Question',
        name: '統合版とJava版のプレイヤーは一緒に遊べますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、クロスプレイに対応しているため、統合版とJava版のプレイヤーが同じサーバーで一緒に遊ぶことができます。',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameServerData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
