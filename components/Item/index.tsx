import cn from 'classnames'
import styles from './index.module.scss'

export const Item = ({ className, value, onClick }) => (
  <div className={cn(className, styles.root)} onClick={() => onClick(value)}>
    <img className={styles.image} src={value.image} alt="" height={100} />
    <div className={styles.name}>{value.name}</div>
    <div className={styles.price}>{value.price} ₽</div>
  </div>
)
