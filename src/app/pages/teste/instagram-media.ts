export interface InstagramMedia {
  id: string
  media_type: string
  media_url: string
  thumbnail_url?: string // Adiciona a thumbnail dos vídeos, se disponível
  permalink: string
  caption?: string
}
