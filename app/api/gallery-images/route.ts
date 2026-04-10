import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    
    // ディレクトリが存在するか確認
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json([]);
    }

    // ディレクトリ内のファイルを読み取る
    const files = fs.readdirSync(galleryDir);
    
    // 画像ファイルのみをフィルタリング
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
      })
      .sort() // ファイル名でソート
      .map(file => `/gallery/${encodeURIComponent(file)}`);

    return NextResponse.json(imageFiles);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json([]);
  }
}
