// components/TesteFeed.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { fetchFeedInstagram } from './teste-insta'
import type { InstagramMedia } from './instagram-media'
import Image from 'next/image';

// Componente principal
export default function TesteFeed() {
  const [mediaItems, setMediaItems] = useState<InstagramMedia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para buscar e definir os itens da mídia
  const fetchMedia = async () => {
    try {
      const items = await fetchFeedInstagram();
      setMediaItems(items);
    } catch (err) {
      setError('Failed to fetch media.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  // Renderização condicional
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Instagram Feed</h1>
      {mediaItems.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow mb-4 w-full max-w-md">
          {item.media_type === 'IMAGE' && (
            <Image src={item.media_url} alt={item.caption || 'Instagram image'} width={200} height={200} className="mb-2 rounded" />
          )}
          {item.media_type === 'VIDEO' && (
            <video controls className="mb-2 rounded">
              <source src={item.media_url} />
              Your browser does not support the video tag.
            </video>
          )}
          {item.caption && <p className="mt-2 text-gray-600">{item.caption}</p>}
          <a href={item.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
}
