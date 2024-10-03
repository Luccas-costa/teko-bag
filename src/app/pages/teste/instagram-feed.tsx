// 'use client'
// import React from 'react'
// import type { InstagramMedia } from 'types/instagram-media'

// import Image from 'next/image'

// interface InstagramFeedProps {
//   feed: InstagramMedia[]
// }

// export default function InstagramFeed({ feed }: InstagramFeedProps) {
//   return (
//     <div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//         {feed.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               width: '200px',
//               height: '200px',
//               overflow: 'hidden',
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//             }}
//           >
//             <a
//               href={item.permalink}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ display: 'block', width: '100%', height: '100%' }}
//             >
//               {item.media_type === 'IMAGE' && (
//                 <Image
//                   src={item.media_url}
//                   alt={item.caption || 'Instagram image'}
//                   width={200}
//                   height={200}
//                   style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                 />
//               )}
//               {item.media_type === 'VIDEO' && (
//                 <Image
//                   src={item.thumbnail_url || item.media_url}
//                   alt={item.caption || 'Instagram video thumbnail'}
//                   width={200}
//                   height={200}
//                   style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                 />
//               )}
//               {item.media_type === 'CAROUSEL_ALBUM' && (
//                 <Image
//                   src={item.media_url}
//                   alt={item.caption || 'Instagram carousel thumbnail'}
//                   width={200}
//                   height={200}
//                   style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                 />
//               )}
//             </a>
//             <p
//               style={{ fontSize: '12px', textAlign: 'center', padding: '5px' }}
//             >
//               {item.caption || 'No caption'}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'
import React from 'react'
import type { InstagramMedia } from './instagram-media'
import Image from 'next/image'
interface InstagramFeedProps {
  feed: InstagramMedia[]
}
export default function InstagramFeed({ feed }: InstagramFeedProps) {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {feed.map((item, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              height: '200px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              borderRadius: '10px',
            }}
          >
            <a
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              {item.media_type === 'IMAGE' && (
                <Image
                  src={item.media_url}
                  alt={item.caption || 'Instagram image'}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              )}
              {item.media_type === 'VIDEO' && (
                <Image
                  src={item.thumbnail_url || item.media_url}
                  alt={item.caption || 'Instagram video thumbnail'}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              )}
              {item.media_type === 'CAROUSEL_ALBUM' && (
                <Image
                  src={item.media_url}
                  alt={item.caption || 'Instagram carousel thumbnail'}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              )}
            </a>
            <p
              style={{ fontSize: '12px', textAlign: 'center', padding: '5px' }}
            >
              {item.caption || 'No caption'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
