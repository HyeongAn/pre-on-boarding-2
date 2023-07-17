import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

export const getPosts = async () => {
  const filePath = path.join(process.cwd(), '__posts')
  const files = fs.readdirSync(filePath)
  const posts = files
    .map((file) => {
      const post = fs.readFileSync(path.join(filePath, file), 'utf8')
      const { data, content } = matter(post)
      const slug = file.replace('.md', '')
      return {
        slug,
        data,
        content,
      }
    })
    .sort((a, b) => (a.data.date > b.data.date ? -1 : 1))

  return posts
}

export const getPostBySlug = async (params: string) => {
  const postPath = path.join(process.cwd(), '__posts', `${params}.md`)
  const post = fs.readFileSync(postPath)
  const { data, content } = matter(post)
  const parseContent = unified().use(markdown).use(remark2rehype).use(html).processSync(content)
  return { data, content: parseContent.value }
}
