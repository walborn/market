import Image from 'next/image'
import styles from './index.module.scss'

export const Avatar = ({ src }) => {
  return (
    <Image
      className={styles.root}
      src={src}
      alt="avatar"
      width={40}
      height={40}
    />
  )
}
