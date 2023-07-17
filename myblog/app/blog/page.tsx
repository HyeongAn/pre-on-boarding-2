import Link from 'next/link'
import { getPosts } from '../../lib/ssg.module'

const PostList = async () => {
  const postData = await getPostData()
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {postData.map((post, index) => {
          return (
            <li key={`post-slug-${index}`}>
              <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const getPostData = () => {
  const posts = getPosts()
  return posts
}

export default PostList
