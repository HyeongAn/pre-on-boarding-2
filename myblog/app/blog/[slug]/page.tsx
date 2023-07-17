import { GetStaticProps, Metadata } from 'next'
import path from 'path'
import fs from 'fs'
import { getPostBySlug, getPosts } from '../../../lib/ssg.module'
import { PostData } from '../../../types/props'

interface PostProps {
  params: { slug: PostData['slug'] }
}

const Post = async ({ params }: PostProps) => {
  const { data, content } = await getPost(params.slug)
  return (
    <>
      <div className="postHeader">
        <h1>{data.title}</h1>
        <span>{data.date}</span>
      </div>
      <div className="postBody">
        <h4>{data.description}</h4>
        <div className="postContent" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getPost = async (params: string) => {
  const post = getPostBySlug(params)
  return post
}

export default Post
