export interface LayoutProps {
  children: React.ReactNode
}

export interface PostData {
  data: {
    title: string
    description: string
    coverImage: string
    date: string
  }
  content: string
  slug: string
}
