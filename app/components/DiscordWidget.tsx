'use client';

import { useEffect, useState } from 'react';
import { Users, MessageCircle } from 'lucide-react';

interface DiscordMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  status: string;
  avatar_url: string;
}

interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite: string | null;
  channels: Array<{
    id: string;
    name: string;
    position: number;
  }>;
  members: DiscordMember[];
  presence_count: number;
}

export function DiscordWidget() {
  const [widgetData, setWidgetData] = useState<DiscordWidgetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const GUILD_ID = '1438479348083720252';
  const WIDGET_URL = `https://discord.com/widget?id=${GUILD_ID}&theme=dark`;

  useEffect(() => {
    fetch(`https://discord.com/api/guilds/${GUILD_ID}/widget.json`)
      .then(res => res.json())
      .then(data => {
        setWidgetData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-700/50">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="text-green-400" size={32} />
          <h2 className="text-2xl font-bold text-green-400">Discordコミュニティ</h2>
        </div>
        <div className="text-white text-center py-8">読み込み中...</div>
      </div>
    );
  }

  if (error || !widgetData) {
    return (
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-700/50 h-full">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="text-green-400" size={32} />
          <h2 className="text-2xl font-bold text-green-400">Discordコミュニティ</h2>
        </div>
        <div className="aspect-[7/10] w-full max-w-[350px] mx-auto">
          <iframe
            src={WIDGET_URL}
            width="100%"
            height="100%"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg bg-transparent"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-700/50">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="text-green-400" size={32} />
        <h2 className="text-2xl font-bold text-green-400">Discordコミュニティ</h2>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{widgetData.name}</h3>
        <div className="flex items-center gap-2 text-green-300">
          <Users size={20} />
          <span>{widgetData.presence_count} 人がオンライン</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* メンバーリスト */}
        <div className="flex flex-col md:h-[450px]">
          {widgetData.members && widgetData.members.length > 0 && (
            <div className="flex-1 flex flex-col min-h-0 mb-4">
              <h4 className="text-sm font-semibold text-green-400 mb-2">オンラインメンバー</h4>
              <div className="space-y-2 overflow-y-auto flex-1 pr-2">
                {widgetData.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-sm flex-shrink-0">
                      {member.avatar_url ? (
                        <img 
                          src={member.avatar_url} 
                          alt={member.username}
                          className="w-full h-full rounded-full"
                        />
                      ) : (
                        member.username[0].toUpperCase()
                      )}
                    </div>
                    <span className="text-white text-sm truncate">{member.username}</span>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      member.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {widgetData.instant_invite && (
            <a
              href={widgetData.instant_invite}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Discordに参加
            </a>
          )}
        </div>

        {/* ウィジェット */}
        <div className="w-full h-[450px]">
          <iframe
            src={WIDGET_URL}
            width="100%"
            height="100%"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg bg-transparent"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
