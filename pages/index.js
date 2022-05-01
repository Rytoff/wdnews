import Meta from '../components/Meta'
import { server } from '../config'
import { ArticleList } from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <>
      <Meta title='Home' />
      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
