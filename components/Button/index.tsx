import cn from 'classnames'

import styles from './index.module.scss'

export const Button = (props) => {
  return (
    <button
      {...props}
      className={cn(styles.root, {
        [styles.red]: props.red,
        [styles.green]: props.green,
        [styles.blue]: props.blue,
        [styles.disabled]: props.disabled,
      })}
    />
  )
}
