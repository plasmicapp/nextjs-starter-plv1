import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PlasmicLoader from '@plasmicapp/loader'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const containerContents = allPosts.length === 0 ? (
    <p>
      No blog posts found. Add markdown posts to "_posts".
    </p>
  ) : allPosts.map(post => (
    <PlasmicLoader
      component={"ListItem"}
      componentProps={{
        title: post.title,
        date: post.date,
        description: post.excerpt,
        href: "/posts/" + post.slug,
      }}
    />
  ));

  return <PlasmicLoader
    component={"Home"}
    componentProps={{
      container: {
        children: containerContents,
      },
    }}
  />;

}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
