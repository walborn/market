import Link from 'next/link'
import cn from 'classnames'

import { Layout } from 'components/Layout'
import { Item } from 'components/Item'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

function Goods({ goods }) {
  const router = useRouter()

  const handleClick = ({ id }) => router.push(`/goods/${id}`)

  return (
    <Layout>
      <div className={styles.list}>
        {goods.map(good => (
          <Item
            key={good.id}
            className={styles.item}
            value={good}
            onClick={handleClick}
          />
        ))}
        
        <Link
          key="create"
          href="goods/create"
        >
          <a className={cn(styles.item, styles.create)}></a>
        </Link>
      </div>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://aroma-vest.prj.yandex-academy.ru/api/v1/goods')
  const goods = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      goods,
    },
  }
}

export default Goods
