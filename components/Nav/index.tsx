import { useRouter } from 'next/router'
import Link from 'next/link'
import Headroom from 'react-headroom'
import cn from 'classnames'

import { Avatar } from 'components/Avatar'
import avatar from 'public/avatar.png'

import styles from './index.module.scss'

const Name = ({ children }) => <div>{children}</div>

export const Nav = () => {
  const { pathname } = useRouter()

  return (
    <Headroom>
      <nav className={styles.root}>
        <div className={styles.header}>
          <Link href="/goods">
            <a
              className={cn(styles.link, {
                [styles.selected]: pathname === '/goods',
              })}
            >
              Goods
            </a>
          </Link>
          <Name>Vasya Pupkin</Name>
          <Avatar src={avatar} />
        </div>
      </nav>
    </Headroom>
  )
}
