import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PlasmicLoader from "@plasmicapp/loader";
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (<PlasmicLoader 
    component="Post"
    componentProps={{
      postHeader: {
        postTitle: post.title,
        date: post.date
      },
      container: {
        render: () => (
          <PostBody content={post.content} />
        )
      },
      previousPost: {
        style: {
          visibility: "hidden",
        },
      },
      nextPost: {
        style: {
          visibility: "hidden",
        },
      }}
    }
  />);
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
