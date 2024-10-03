import type { InstagramMedia } from './instagram-media'
import dotenv from 'dotenv'

dotenv.config()
export const fetchFeedInstagram = async (): Promise<InstagramMedia[]> => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${token}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data.data // Supondo que 'data' tenha uma propriedade 'data' com as mídias
  } catch (error) {
    console.error('Failed to fetch Instagram feed:', error)
    throw error
  }
}
